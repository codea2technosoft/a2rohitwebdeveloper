import React, { useState, useEffect } from "react";
import { MdOutlineMenu, MdSearch, MdClose } from "react-icons/md";
import Logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import delhi from '../../assets/images/city/Delhi.png';
import mumbai from '../../assets/images/city/Mumbai.png';
import bangalore from '../../assets/images/city/Bangalore.png';
import hyderabad from '../../assets/images/city/Hyderabad.png';
import chennai from '../../assets/images/city/Chennai.png';
import kolkata from '../../assets/images/city/Kolkata.png';
import pune from '../../assets/images/city/Pune.png';
import ahmedabad from '../../assets/images/city/Ahmedabad.png';
import jaipur from '../../assets/images/city/Jaipur.png';
import lucknow from '../../assets/images/city/Lucknow.png';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const locations = [
    { name: "Delhi", img: delhi },
    { name: "Mumbai", img: mumbai },
    { name: "Bangalore", img: bangalore },
    { name: "Hyderabad", img: hyderabad },
    { name: "Chennai", img: chennai },
    { name: "Kolkata", img: kolkata },
    { name: "Pune", img: pune },
    { name: "Ahmedabad", img: ahmedabad },
    { name: "Jaipur", img: jaipur },
    { name: "Lucknow", img: lucknow }
  ];

 const [website, setTestimonials] = useState([]);
       console.warn("gurjar", website);
     
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
             setTestimonials(updatedTestimonials.findus); 
 
           } catch (err) {
             // setError(err.message);
           } finally {
             // setLoading(false);
           }
         };
     
         fetchTestimonials();
       }, []);
  
  return (
    <>
      <header className={`Header_design d-flex ${isScrolled ? "scrolled" : ""}`}>
        <div className="container_custum">
          <div className="d-flex justify-content-between menudesign">
            {/ Menu Button /}
            <div className="menubutton d-flex align-items-center" onClick={() => setMenuOpen(!menuOpen)}>
              <MdOutlineMenu className="icon_header" />
              <span>Menu</span>
            </div>

            {/ Logo /}
            <div className="Logo">
              <img src={Logo} alt="logo" />
            </div>

            {/ Search Button /}
            <div className="finder d-flex align-items-center" onClick={() => setSearchOpen(!searchOpen)}>
              <MdSearch className="icon_header" />
              <span>Find A Dealer</span>
            </div>
          </div>
        </div>
      </header>

      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-header">
          {/* <div className="Logo">
              <img src={Logo} alt="logo" />
            </div> */}

          <MdClose className="close-icon" onClick={() => setMenuOpen(false)} />
        </div>
        <ul>

          <li><a href="#Slider">Home</a></li>
          <li><a href="#aboutus">About us</a></li>

          <li><a href="#services">Service</a></li>
          <li><a href="#HowItWorks">How It Works</a></li>
          <li><a href="#Testimonials">Testimonials</a></li>
          <li><a href="#Contact">Contact Us</a></li>

        </ul>
      </div>

      <div className={`search-box ${searchOpen ? "show" : ""}`}>
        <div className="search-content">
          <input type="search" placeholder="Search for dealers..." />
          <div className="locationclose">
            <MdClose className="close-search" onClick={() => setSearchOpen(false)} />
          </div>

        </div>
        <div className="citylocation">
          <h4 className="locationbranch">Branch Locations</h4>
          <div className="Location_company">
            {locations.map((location, index) => (
              <div key={index} className="location-card">
                <div className="city_design">
                  <img src={location.img} alt={location.name} />
                </div>
              </div>
            ))}
                            <p>{website}</p>

           
          </div>
        </div>




      </div>

      {(menuOpen || searchOpen) && (
        <div className="menu-overlay" onClick={() => { setMenuOpen(false); setSearchOpen(false); }}></div>
      )}
    </>
  );
};

export default Header;