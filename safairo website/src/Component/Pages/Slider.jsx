import React, { useState, useEffect } from "react";
import Carwash from '../../assets/images/carwash.mp4'
import android from '../../assets/images/playstore.png'
import appstore from '../../assets/images/appstore.png'
import { Link } from "react-router";
function Slider() {

  const [testimonials, setTestimonials] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("https://backendapi.safairo.com/api/v1/websiteslider");
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
    setVisibleCount(3); 
  };
  return (
    <section className="overservices ptb-60" id="Slider">

      <div className='slidersection'>
        <div className="video_slider showcase">
          <video muted loop autoPlay playsInline className="bg-vid">
            <source src={Carwash} type="video/mp4" />
          </video>

          <div className="homeslidercontent">
            <div className="text_slider">
              <h4>Safairo Present</h4>
              
              <h1>{testimonials.title}</h1>
              <h4>{testimonials.subtitle}</h4>
              
            </div>
            <div className="button_apk d-flex gap-2 justify-content-center">
              <div className="imgandroid">
                <Link to="https://play.google.com/store/apps/details?id=com.safairo.safairo&pli=1">
                    <img src={android} alt="android" />
                  </Link>
              </div>
              <div className="imgapple">
                <Link to="https://apps.apple.com/in/app/safairo/id6746812664">
                    <img src={appstore} alt="appstore" />
                  </Link>
              </div>
            </div>
            
            {/* <div className="d-flex justify-content-center w-100">
                <div className="buttonenquiry">
                     <a href="/enquiry" className="deafult-btn1">For Enquiry</a>
                </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider
