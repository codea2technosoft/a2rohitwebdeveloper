import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Logo from '../../assets/images/footer-logo.svg';
import android from '../../assets/images/playstore.png';
import appstore from '../../assets/images/appstore.png';
import React, { useState, useEffect } from "react";
import { FaYoutube } from "react-icons/fa6";

// import Ourservice from "../Component/Pages/Ourservice";

      
function Footer() {
    
  const [website, setTestimonials] = useState([]);
      console.warn("ramraj", website);
    
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
        <footer className="footerHome">
            <div className="container">
                <div className="footer-inner">
                    <div className="row">
                        {/* Left Section - About & Social Links */}
                        <div className="col-lg-5">
                            <div className="footer-right footer-content">
                                <div className="footer-logo-outer d-flex align-items-center">
                                    <img src={Logo} alt="Safairo Logo" />
                                    <h4>Safairo</h4>
                                </div>
                                <p className="descriptioneb">{website.description}</p>
                                <ul className="social-icons list-unstyled d-flex  socialmediaicon">
                                    <li><a href={website.faceBook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
                                    <li><a href={website.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                                    <li><a href={website.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                                    <li><a href={website.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
                                    <li><a href={website.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
                                </ul>
                                <div className="d-flex gap-2 mt-3">
                                    <div className='appdownload'>
                                      <Link to="https://play.google.com/store/apps/details?id=com.safairo.safairo&pli=1">
                    <img src={android} alt="android" />
                  </Link>
                                    </div>
                                    <div className='appdownload'>
                                      <Link to="https://apps.apple.com/in/app/safairo/id6746812664">
                    <img src={appstore} alt="appstore" />
                  </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Middle Section - Navigation Links */}
                        <div className="col-lg-3 col-md-3">
                            <div className="footer-middle footer-content">
                                <h4>Links</h4>
                                <div className="cs_footer_widget_seperator">
                                    <span className="cs_accent_bg"></span>
                                    <span className="cs_white_bg"></span>
                                    <span className="cs_white_bg"></span>
                                </div>
                                <ul className="list-unstyled">
                                    {/* <li><Link to="/">Home</Link></li> */}
                                    <li><a  href="#Slider">Home</a></li>
                                    <li><a  href="#services">Service</a></li>
                                    <li><a  href="#aboutus">About us</a></li>
                                    <li><a  href="/Contacus">For Enquiry</a></li>
                                    <li><Link to="/privacy">Privacy Policy</Link></li>
                                    <li><Link to="/termsandcondition">Terms & Conditions</Link></li>
                                    <li><Link to="/Cancel">Cancellation Policy</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Section - Contact Details */}
                        <div className="col-lg-4 col-md-9">
                            <div className="footer-left footer-content">
                                <h4>Get In Touch!</h4>
                                <div className="cs_footer_widget_seperator">
                                    <span className="cs_accent_bg"></span>
                                    <span className="cs_white_bg"></span>
                                    <span className="cs_white_bg"></span>
                                </div>
                                <ul className="list-unstyled">
                                    <li>
                                        <FaPhoneAlt className="contact-icon" />
                                        <a href={`tel:+91${website.phone}`}>+91 {website.phone}</a>
                                    </li>
                                    <li>
                                        <FaEnvelope className="contact-icon" />
                                        <a href={`mailto:${website.email}`}>{website.email}</a>
                                    </li>
                                    <li>
                                        <FaMapMarkerAlt className="contact-icon" />
                                        <p>{website.address}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
            </div>
            <div className="copyright text-center mt-3">
                <p>© {new Date().getFullYear()} Safairo. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
