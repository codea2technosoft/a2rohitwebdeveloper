import React from 'react';
import livestream from '../../assets/images/livestream.png'
import handpower from '../../assets/images/handpower.png'
import booking from '../../assets/images/booking.png'
import Eco from '../../assets/images/Eco.png'
import TrainedProfessionals from '../../assets/images/TrainedProfessionals.png'
import TimeSaving from '../../assets/images/TimeSaving.png'
const features = [
    {
        title: "Live Stream Transparency",
        description: "Monitor your car wash in real-time for complete peace of mind.",
        image:livestream
    },
    {
        title: "Self-Powered Service!",
        description: "No need for electricity—we bring our own power for a smooth service.",
        image: handpower
    },
    {
        title: "Hassle-Free Booking",
        description: "Book a premium car wash easily with the Safairo app for your convenience.",
        image: booking
    },

    // {
    //     title: "We Bring Our Own Power-Source",
    //     description: "We use eco-friendly, water-saving methods to conserve water and protect the environment.",
    //     image: Eco
    // },

    {
        title: "We Use Only Two Bucket of Water",
        description: "We use eco-friendly, water-saving methods to conserve water and protect the environment.",
        image: Eco
    },

    {
        title: "Trained Professionals",
        description: "Our skilled, background-verified professionals ensure top-quality service with expertise and reliability.",
        image: TrainedProfessionals
    },
    {
        title: "Save Time & Money",
        description: "We bring the car wash to you, saving time and offering premium service affordably.",
        image:TimeSaving
    }
];

function Livestream() {
    return (
        <section className='livestream'>
            <div className="container_custum">
            <div class="heading_design"><h3 class="text-white">Ultimate Convenience</h3></div>
                <div className="row">
                    {features.map((feature, index) => (
                        <div className="col-md-4 col-6  col-lg-4 col-xl-2" key={index}>
                            <div className="carwash_local">
                                <div className="image_design">
                                    <img src={feature.image} alt={feature.title} />
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Livestream;
