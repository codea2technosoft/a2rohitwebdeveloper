import React, { useState, useEffect } from "react";
import videosection from "../../assets/images/video_service.mp4";
import ondemandcarwash from "../../assets/images/ondemandcarwash.jpg";

function Ourservice() {
  const [testimonials, setTestimonials] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("https://backendapi.safairo.com/api/v1/service/landing");
        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const result = await response.json();
        setTestimonials(result.data || []);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTestimonials();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const handleShowLess = () => {
    setVisibleCount(3); // Reset to initial 6 items
  };

  return (
    <section className="overservices ptb-60"  id="services">
      <video muted loop autoPlay playsInline className="bg-vid">
        <source src={videosection} type="video/mp4" />
      </video>

      <div className="container_custum">
        <div className="d-flex justify-content-center">
          <div className="heading_design">
            <h3>Premium Washing Services</h3>
            <p>
              Car washes using natural cleaners help maintain your vehicle’s finish while being
              environmentally responsible.
            </p>
          </div>
        </div>

        {error && <p className="error-message text-danger">{error}</p>}

        <div className="row">
          {testimonials.length > 0 ? (
            testimonials.slice(0, visibleCount).map((service, index) => (
              <div className="col-md-4" key={index}>
                <div className="servicebg">
                  <div className="service-content-inner">
                    <div className="service-content-icon">
                      {service.images && service.images[0] ? (
                        <img
                          src={`https://backendapi.safairo.com/${service.images[0]}`}
                          alt="Service"
                          className="iconall"
                        />
                      ) : (
                        <img src={ondemandcarwash} alt="Default Service" className="iconall" />
                      )}
                    </div>
                    <div className="border_left">
                      <h3 className="service-content-inner-title">{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No services available.</p>
          )}
        </div>

        <div className="text-center mt-4 d-flex justify-content-center align-items-center">
          {visibleCount < testimonials.length && (
            <button className="custum_load mx-2" onClick={handleLoadMore}>
              See More
            </button>
          )}
          {visibleCount > 3 && (
            <button className="custum_load mx-2" onClick={handleShowLess}>
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Ourservice;
