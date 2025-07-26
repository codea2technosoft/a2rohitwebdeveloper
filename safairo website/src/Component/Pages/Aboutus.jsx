import carwash from '../../assets/images/carwash_person.png'
// import { FiPhoneCall } from "react-icons/fi";
import android from '../../assets/images/playstore.png'
import appstore from '../../assets/images/appstore.png'
import { Link } from "react-router";
import React, { useState, useEffect } from "react";

function Aboutus() {

     const [testimonials, setTestimonials] = useState([]);
      console.warn("ramraj", testimonials);
    
      useEffect(() => {
        const fetchTestimonials = async () => {
          try {
            const response = await fetch(
              "https://backendapi.safairo.com/api/v1/website",
              {
                method: "GET",
              }
            );
    
            if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
            }
    
            const result = await response.json();
            const updatedTestimonials = result.data
            setTestimonials(updatedTestimonials); 

          } catch (err) {
            // setError(err.message);
          } finally {
            // setLoading(false);
          }
        };
    
        fetchTestimonials();
      }, []);



  return (
    <section className='aboutus' id="aboutus">
      <div className="container_custum">
        <div className="align-items-center row">
          <div className="col-md-5">
            <div className="about_usdesign">
              {/* <h5> {testimonials?.aboutUs}
              </h5> */}
              <h1 className="text-center">Safairo</h1>
              <h4 className="text-center"> Your Car’s care—anytime, anywhere!</h4>
              {/* <p>Skip the wait—book a wash, relax, and watch it live on our app! We deliver eco-friendly, professional car cleaning with flexible scheduling and affordable pricing. Download the Safairo app today!</p> */}
              <p> {testimonials?.aboutUsLong}</p>
              {/* <div className='callphone'>
                        <a href="#" className='d-flex'><FiPhoneCall/><p><span className='d-block'>Call for book:</span> +91 7734000031</p></a>
                        </div> */}
              <div className="button_apk d-flex gap-2">
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
            </div>
          </div>
          <div className="col-md-7">
            <div className="image_new">
              <img src={carwash} alt="carwash" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus
