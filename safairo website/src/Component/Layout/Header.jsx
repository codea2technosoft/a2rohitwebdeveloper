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
import axios from "axios";

import lucknow from '../../assets/images/city/Lucknow.png';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);


  useEffect(() => {
    axios.get("https://backendapi.safairo.com/api/v1/newlocation/states")
      .then(response => {

        console.log("state List", response.data.data);

        setStates(response.data.data);
      })
      .catch(error => console.error("Error fetching states:", error));
  }, []);


  const handleStateChange = (event) => {
    const stateId = event.target.value;
    setSelectedState(stateId);

    if (stateId) {
      axios.get(`https://backendapi.safairo.com/api/v1/newlocation/cities/${stateId}`)
        .then(response => {
          setCities(response.data.data);
        })
        .catch(error => console.error("Error fetching cities:", error));
    } else {
      setCities([]);
    }
  };



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
    // { name: "Jaipur", img: jaipur },
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
            {/* Menu Button */}
            <div className="menubutton d-flex align-items-center" onClick={() => setMenuOpen(!menuOpen)}>
              <MdOutlineMenu className="icon_header" />
              <span>Menu</span>
            </div>

            {/* Logo */}
            <div className="Logo">
              <a href="/">
                <img src={Logo} alt="logo" />
              </a>
            </div>

            {/* Search Button */}
            <div className="finder d-flex align-items-center" onClick={() => setSearchOpen(!searchOpen)}>
              <MdSearch className="icon_header" />
              <span>Find Us</span>
            </div>
          </div>
        </div>
      </header>

      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-header">
          <MdClose className="close-icon" onClick={() => setMenuOpen(false)} />
        </div>
        <ul>

          <li><a href="#Slider" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#aboutus" onClick={() => setMenuOpen(false)}>About us</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Service</a></li>
          <li><a href="#HowItWorks" onClick={() => setMenuOpen(false)}>How It Works</a></li>
          <li><a href="#Testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
          <li><a href="/Contacus" onClick={() => setMenuOpen(false)}>For Enquiry</a></li>

        </ul>
      </div>

      <div className={`search-box ${searchOpen ? "show" : ""}`}>
        <div className="search-content">
          <select onChange={handleStateChange} value={selectedState} className="form-select">
            <option value="">Select a State</option>
            {states
              .filter(state => state.status === "Active")
              .map(state => (
                <option key={state.id} value={state.id}>{state.name}</option>
              ))
            }
          </select>
        </div>
        <div>
          {selectedState && cities.filter(city => city.status === "Active").length > 0 && (
            <div className="selectcity">
              {cities
                .filter(city => city.status === "Active")
                .map((city, index) => (
                  <span key={city.id}>
                    {city.name}
                    {index < cities.length - 1 && ""}
                  </span>
                ))}
            </div>
          )}


        </div>
        <div className="locationclose">
          <MdClose className="close-search" onClick={() => setSearchOpen(false)} />
        </div>
      </div>

      {(searchOpen) && (
        <div className="menu-overlay" onClick={() => setSearchOpen(false)}></div>
      )
      }
    </>
  );
};

export default Header;
