// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom'; // Import Link for navigation
// import logo from "../assets/image/logo.png";
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const TopBar = () => {
//   const [selectedCity, setSelectedCity] = useState('Mumbai');
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);
//   const dropdownRef = useRef();

//   const cities = ['Mumbai', 'Pune', 'Hyderabad', 'Bangalore', 'Tamil Nadu', 'Andhra Pradesh'];

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const handleCitySelect = (city) => {
//     setSelectedCity(city);
//     setShowDropdown(false);
//   };

//   return (
//     <div className={`top-bar py-2 bg-white shadow-sm ${isMounted ? 'animate-slide-down' : ''}`}>
//       <div className="container d-flex justify-content-between align-items-center w-100 p-2">
//         {/* Logo */}
//         <div className="logo">
//           <Link to="/">
//             <img src={logo} alt="Logo" height="40" />
//           </Link>
//         </div>

//         {/* Location and User */}
//         <div className="d-flex align-items-center gap-5">
//           {/* Location Dropdown */}
//           <div className="position-relative" ref={dropdownRef}>
//             <div
//               className="location d-flex align-items-center cursor-pointer"
//               onClick={() => setShowDropdown(!showDropdown)}
//               style={{ cursor: 'pointer' }}
//             >
//               <i className="bi bi-geo-alt-fill text-danger me-1"></i>
//               <span>{selectedCity}</span>
//               <i className="bi bi-caret-down-fill ms-1"></i>
//             </div>

//             {showDropdown && (
//               <ul className="dropdown-menu show mt-2" style={{ display: 'block' }}>
//                 {cities.map((city) => (
//                   <li key={city}>
//                     <button className="dropdown-item" onClick={() => handleCitySelect(city)}>
//                       {city}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* User Icon */}
//           <div className="user-icon">
//             <i className="bi bi-person" style={{ fontSize: '1.5rem', color: 'black' }}></i>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopBar;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import logo from "../assets/image/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const TopBar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const servicesDropdownRef = useRef();
  const brandDropdownRef = useRef();

  const brands = [
    "Samsung",
    "Asus",
    "Nothing",
    "Vivo",
    "Oppo",
    "Realme",
    "Google",
    "Mi",
    "OnePlus",
    "Motorola",
    "IQOO",
    "Poco",
    "Tecno",
    "Nokia",
    "Honor",
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setShowServicesDropdown(false);
      }
      if (
        brandDropdownRef.current &&
        !brandDropdownRef.current.contains(event.target)
      ) {
        setShowBrandDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleServicesToggle = () => {
    setShowServicesDropdown(!showServicesDropdown);
  };

  const handleBrandToggle = () => {
    setShowBrandDropdown(!showBrandDropdown);
  };

  return (
    <div
      className={`top-bar py-2 bg-white shadow-sm ${
        isMounted ? "animate-slide-down" : ""
      }`}
    >
      <div className="container d-flex justify-content-between align-items-center w-100 p-2">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" height="40" />
          </Link>
        </div>

        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li
                className="nav-item position-relative"
                ref={servicesDropdownRef}
              >
                <div
                  className="nav-link cursor-pointer"
                  onClick={handleServicesToggle}
                  style={{ cursor: "pointer" }}
                >
                  Services <i className="bi bi-caret-down-fill ms-1"></i>
                </div>
                {showServicesDropdown && (
                  <ul
                    className="dropdown-menu show mt-2"
                    style={{ display: "block", position: "absolute", left: 0 }}
                  >
                    <li>







                      {/* <Link className="dropdown-item" to="/" onClick={() => setShowServicesDropdown(false)} > Mobile</Link> */}
                      <Link
                        className="dropdown-item"
                        to="/#brand-section"
                        onClick={() => setShowServicesDropdown(false)}
                      >
                        Mobile
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/tablet-repair"
                        onClick={() => setShowServicesDropdown(false)}
                      >
                        Tablet
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/macbook-repair"
                        onClick={() => setShowServicesDropdown(false)}
                      >
                        Laptop
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/cctv-repair"
                        onClick={() => setShowServicesDropdown(false)}
                      >
                        CCTV
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="nav-item position-relative" ref={brandDropdownRef}>
                <div
                  className="nav-link cursor-pointer"
                  onClick={handleBrandToggle}
                  style={{ cursor: "pointer" }}
                >
                  Brand <i className="bi bi-caret-down-fill ms-1"></i>
                </div>
                {showBrandDropdown && (
                  <ul
                    className="dropdown-menu show mt-2"
                    style={{ display: "block", position: "absolute", left: 0 }}
                  >
                    {brands.map((brand) => (
                      <li key={brand}>
                        <Link
                          className="dropdown-item"
                          to={`/brand/${brand.toLowerCase()}`}
                          onClick={() => setShowBrandDropdown(false)}
                        >
                          {brand}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default TopBar;
