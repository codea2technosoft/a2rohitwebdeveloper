import React from "react";
import washbooking from "../../assets/images/booking.png";
import gpsphone from "../../assets/images/gps-phone.png";
import ecofriendly from "../../assets/images/eco-friendly.png";
import cleancar from "../../assets/images/clean-car.png";
import quality from "../../assets/images/quality.png";
import feedback from "../../assets/images/feedback.png";

const HowItWorks = () => {
  const steps = [
    { img: washbooking, title: "Choose Your Location", desc: "Book an appointment via website, app, or call." },
    { img: gpsphone, title: "Arrival at Your Location", desc: "Our team arrives at your preferred location." },
    { img: ecofriendly, title: "Eco-Friendly Cleaning", desc: "We use water-efficient, high-quality products." },
    { img: cleancar, title: "Complete Car Cleaning", desc: "Get a full exterior wash, wax, and polish." },
    { img: quality, title: "Final Quality Check", desc: "We ensure a spotless and perfect finish." },
    { img: feedback, title: "Your Feedback Matters", desc: "Share your experience to help us improve." }
  ];

  return (
    // <div>
      <section className="howitwork" id="HowItWorks">
        <div className="container_custum">
          <div className="heading_design">
            <h3>How IT Work</h3>
            <p>Car washes using natural cleaners help maintain your vehicle’s finish while being environmentally responsible.</p>
          </div>
          <div className="row">
            {steps.map((step, index) => (
              <div className="workbox" key={index} data-step={`Step ${index + 1}`}>
                <div className="image_work">
                  <img src={step.img} alt="step-img" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    // </div>
  );
};

export default HowItWorks;
