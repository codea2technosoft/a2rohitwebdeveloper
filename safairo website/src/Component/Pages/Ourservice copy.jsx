import React, { useState } from "react";
import videosection from "../../assets/images/video_service.mp4";
import automatic from "../../assets/images/automatic-car-wash.png";
import sparkle from "../../assets/images/sparkle.png";
import carcleaning from "../../assets/images/car-cleaning.png";
import carwash from "../../assets/images/carwash.png";
import handwash from "../../assets/images/hand-wash.png"
import deepcarclean from "../../assets/images/deepcarclean.png"

function Ourservice() {
  const services = [
    {
      title: "Premium Car Wash & Detailing",
      icon: automatic,
      description:
        "Thorough exterior cleaning to remove dirt and grime. High-quality wax application for a glossy finish and enhanced protection.",
    },
    {
      title: "Shine & Sparkle Auto Care",
      icon:sparkle,
      description:
        "Professional car cleaning with a special focus on shine and sparkle. Ensuring a long-lasting, showroom-like appearance.",
    },
    {
      title: "Eco-Friendly Car Cleaning",
      icon: carcleaning,
      description:
        "Water-efficient and biodegradable cleaning solutions for an environmentally friendly car wash experience.",
    },
    {
      title: "Express Car Wash Solutions",
      icon:carwash,
      description:
        "Fast and efficient car wash services to keep your vehicle clean without wasting time.",
    },
    {
      title: "Luxury Hand Wash & Polish",
      icon: handwash,
      description:
        "Delicate hand wash with premium products and expert polishing for a flawless, high-end finish.",
    },
    {
      title: "Deep Clean Car Spa",
      icon: deepcarclean,
      description:
        "A full interior and exterior deep clean, including steam cleaning and odor removal for a fresh car feel.",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <section className="overservices">
      <video muted loop autoPlay playsInline className="bg-vid">
        <source src={videosection} type="video/mp4" />
      </video>
      <div className="container_custum">
        <div className="row">
          {services.slice(0, visibleCount).map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="servicebg">
                <div className="service-content-inner">
                  <div className="service-content-icon">
                    <img src={service.icon} className="iconall"/>
                  </div>
                  <h3 className="service-content-inner-title">{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="services-details.html" className="round-hulf-btn">
                    <img src="assets/images/icons/arrow-right-up.png" alt="icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < services.length && (
          <div className="text-center mt-4">
            <button className="btn btn-primary" onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Ourservice;
