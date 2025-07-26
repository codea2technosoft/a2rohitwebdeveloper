import React, { useState } from "react";
import axios from "axios";
import { BiPhoneCall, BiEnvelope, BiMap, BiChevronRight } from "react-icons/bi";

function Contactus() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });


    const [responseMessage, setResponseMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://backendapi.safairo.com/api/v1/enquiry", formData);
            if (response.data.status) {
                setIsSuccess(true);
                setResponseMessage("Your message has been sent successfully!");
                setFormData({ name: "", email: "", phone: "", message: "" });
            }
        } catch (error) {
            setIsSuccess(false);
            setResponseMessage(error.response?.data?.message || "Something went wrong!");
        }
    };

    return (
        <div className="contactusdesin">
            <div className="inner-banner-area">
                <div className="container_custum">
                    <div className="row align-items-center">
                        <div className="col-lg-12 p-0">
                            <div className="inner-banner-contrnt">
                                <h2>Contact Us</h2>
                                <ul>
                                    <li>
                                        <a href="/">Home</a> <BiChevronRight />
                                    </li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <section className="Contactus">
                <div className="question-area ptb-100">
                    <div className="container_custum">
                        <div className="row align-items-center">
                            <div className="col-lg-5 order-2 order-lg-1">
                                <div className="qn-content">
                                    <div className="single-section">
                                        <span>CONTACT US</span>
                                        <h3>Let's Talk</h3>
                                    </div>
                                    <p>
                                        We’d love to hear from you! Whether you have questions about our services, need assistance with a booking, or just want to learn more about Safairo, we’re here to help.
                                    </p>
                                    <ul className="q-contact">
                                        <li className="d-flex gap-2">
                                            <div className="icon_contact"><BiPhoneCall size={20} /></div>
                                            <a href="tel:91 7734800031
                                                      ">+91 7734800031
                                            </a>
                                        </li>
                                        <li className="d-flex gap-2">
                                            <div className="icon_contact"> <BiEnvelope size={20} /></div>
                                            <a href="mailto:safairotechnologiespvtltd@gmail.com">safairotechnologiespvtltd@gmail.com</a>
                                        </li>
                                        <li className="d-flex gap-2">
                                            <div className="icon_contact"> <BiMap size={20} /></div>
                                            <a href="#"> Bhamashah Techno Hub Sansthan Path, Jhalana Gram, Malviya Nagar, Jaipur, Rajasthan 302017 ,India</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7 order-1 order-lg-2">
                                <div className="leave-coment leave-coment2">
                                    <h3>Get in Touch</h3>
                                    <p>Our team is dedicated to providing top-notch car wash solutions with complete transparency and convenience.</p>
                                    <form id="contactForm" className="contact-from" noValidate="true" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="Your Name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Your Email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input
                                                        type="number"
                                                        name="phone"
                                                        className="form-control"
                                                        placeholder="Your Phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea
                                                        name="message"
                                                        className="form-control"
                                                        cols={30}
                                                        rows={8}
                                                        placeholder="Your Message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button type="submit" className="deafult-btn1">Send Message</button>
                                            </div>


                                            {responseMessage && (
                                                <div className={`col-lg-12 alert ${isSuccess ? "alert-success" : "alert-danger"}`} style={{ marginTop: "15px" }}>
                                                    {responseMessage}
                                                </div>
                                            )}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contactus
