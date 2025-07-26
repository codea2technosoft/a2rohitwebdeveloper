import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import axios from "axios";
import enquifyform from '../../assets/images/enquifyform.png'
function Enquiry() {
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
        <section>
            <div className="inner-banner-area">
                <div className="container_custum">
                    <div className="row align-items-center">
                        <div className="col-lg-12 p-0">
                            <div className="inner-banner-contrnt">
                                <h2>Enquiry</h2>
                                <ul>
                                    <li>
                                        <a href="/">Home</a> <BiChevronRight />
                                    </li>
                                    <li>Enquiry</li>
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
                            
                            <div className="col-lg-8 order-2 order-lg-1">
                                <div className="formimage">
                                <img src={enquifyform} alt="" />

                                </div>
                            </div>
                            <div className="col-lg-4 order-1 order-lg-2">
                                <div className="leave-coment leave-coment2">
                                    <h3>Enquify Form <span className="d-block havequestion"> (Have Questions? We’re Here to Help!)</span></h3>
                                    <p>Fill out the form, and the Safairo team will provide the best car wash solutions—hassle-free, eco-friendly, and professional!</p>
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
        </section>
    )
}

export default Enquiry
