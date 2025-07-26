import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import client from '../../assets/images/clientimage.jpg'
import one from '../../assets/images/one.png'
import clientimage2 from '../../assets/images/clientimage2.jpg'
function Testimonials() {
    const review = [
        {      index: 0,

          image:clientimage2,
        },
        {      index: 1,

          image:client,
        },
        {      index: 2,

          image:one,
        },
        {      index: 3,

          image:clientimage2,
        },
        {      index: 4,

          image:client,
        },
        {      index: 5,

          image:clientimage2,
        },
        {      index: 6,

          image:one,
        },
        {      index: 7,

          image:client,
        },
        {      index: 8,

          image:clientimage2,
        },
        {      index: 9,

          image:one,
        },
        {      index: 10,

          image:client,
        },
        {      index: 11,

          image:clientimage2,
        },
       
      ];
      
  const responsive = {
    0: { items: 1 }, // 1 item on small screens
    600: { items: 1 }, // 2 items on tablets
    1024: { items: 1 }, // 3 items on desktops
  };


  const [testimonials, setTestimonials] = useState([]);
  console.warn("ramraj", testimonials);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://backendapi.safairo.com/api/v1/happycustomer",
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        const updatedTestimonials = result.data.map((testimonial, index) => {
          const image = review.find(
            (item) => item.index === index
          )?.image;
          return {
            ...testimonial,
            image,
          };
        });
        setTestimonials(updatedTestimonials); 
      } catch (err) {
        // setError(err.message);
      } finally {
        // setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Properly closing the map function
  const items = testimonials.map((testimonial, index) => (
    <div className="testimonial_item" key={index}>
      <p>{testimonial.description}</p>
      <div className="user_name">
      {/* <img src={testimonial.image}  className="testimonial_img" /> */}
      <h3>{testimonial.name}</h3>
      <span>Customers</span>
      </div>

    </div>
  ));

  return (
    <section className='car_testimonial' id="Testimonials">
        <div className="container_custum">
        <div className="heading_design">
        <h3 className='text-white'>Real Stories, Real Shine</h3>
      </div>
      <div className="testimonial_slider">
        <AliceCarousel
          items={items}
          autoPlay
          autoPlayInterval={3000}
          infinite
          responsive={responsive}
          disableDotsControls
          renderPrevButton={() => <button className="custom_prev"><FaArrowLeft /></button>}
          renderNextButton={() => <button className="custom_next"><FaArrowRight /></button>}
        />
      </div>
        </div>
    </section>
  );
}

export default Testimonials;
