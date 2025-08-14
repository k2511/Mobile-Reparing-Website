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

// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom"; // Import Link for navigation
// import logo from "../assets/image/logo.png";
// import "bootstrap-icons/font/bootstrap-icons.css";

// const TopBar = () => {
//   const [isMounted, setIsMounted] = useState(false);
//   const [showServicesDropdown, setShowServicesDropdown] = useState(false);
//   const [showBrandDropdown, setShowBrandDropdown] = useState(false);
//   const servicesDropdownRef = useRef();
//   const brandDropdownRef = useRef();

//   const brands = [
//     "Samsung",
//     "Asus",
//     "Nothing",
//     "Vivo",
//     "Oppo",
//     "Realme",
//     "Google",
//     "Mi",
//     "OnePlus",
//     "Motorola",
//     "IQOO",
//     "Poco",
//     "Tecno",
//     "Nokia",
//     "Honor",
//   ];

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         servicesDropdownRef.current &&
//         !servicesDropdownRef.current.contains(event.target)
//       ) {
//         setShowServicesDropdown(false);
//       }
//       if (
//         brandDropdownRef.current &&
//         !brandDropdownRef.current.contains(event.target)
//       ) {
//         setShowBrandDropdown(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleServicesToggle = () => {
//     setShowServicesDropdown(!showServicesDropdown);
//   };

//   const handleBrandToggle = () => {
//     setShowBrandDropdown(!showBrandDropdown);
//   };

//   return (
//     <div
//       className={`top-bar py-2 bg-white shadow-sm ${
//         isMounted ? "animate-slide-down" : ""
//       }`}
//     >
//       <div className="container d-flex justify-content-between align-items-center w-100 p-2">
//         {/* Logo */}
//         <div className="logo">
//           <Link to="/">
//             <img src={logo} alt="Logo" height="40" />
//           </Link>
//         </div>

//         {/* Navigation Bar */}
//         <nav className="navbar navbar-expand-lg">
//           <div className="collapse navbar-collapse">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/about-us">
//                   About Us
//                 </Link>
//               </li>
//               <li
//                 className="nav-item position-relative"
//                 ref={servicesDropdownRef}
//               >
//                 <div
//                   className="nav-link cursor-pointer"
//                   onClick={handleServicesToggle}
//                   style={{ cursor: "pointer" }}
//                 >
//                   Services <i className="bi bi-caret-down-fill ms-1"></i>
//                 </div>
//                 {showServicesDropdown && (
//                   <ul
//                     className="dropdown-menu show mt-2"
//                     style={{ display: "block", position: "absolute", left: 0 }}
//                   >
//                     <li>

//                       {/* <Link className="dropdown-item" to="/" onClick={() => setShowServicesDropdown(false)} > Mobile</Link> */}
//                       <Link
//                         className="dropdown-item"
//                         to="/#brand-section"
//                         onClick={() => setShowServicesDropdown(false)}
//                       >
//                         Mobile
//                       </Link>
//                     </li>

//                     <li>
//                       <Link
//                         className="dropdown-item"
//                         to="/tablet-repair"
//                         onClick={() => setShowServicesDropdown(false)}
//                       >
//                         Tablet
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         className="dropdown-item"
//                         to="/macbook-repair"
//                         onClick={() => setShowServicesDropdown(false)}
//                       >
//                         Laptop
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         className="dropdown-item"
//                         to="/cctv-repair"
//                         onClick={() => setShowServicesDropdown(false)}
//                       >
//                         CCTV
//                       </Link>
//                     </li>
//                   </ul>
//                 )}
//               </li>
//               <li className="nav-item position-relative" ref={brandDropdownRef}>
//                 <div
//                   className="nav-link cursor-pointer"
//                   onClick={handleBrandToggle}
//                   style={{ cursor: "pointer" }}
//                 >
//                   Brand <i className="bi bi-caret-down-fill ms-1"></i>
//                 </div>
//                 {showBrandDropdown && (
//                   <ul
//                     className="dropdown-menu show mt-2"
//                     style={{ display: "block", position: "absolute", left: 0 }}
//                   >
//                     {brands.map((brand) => (
//                       <li key={brand}>
//                         <Link
//                           className="dropdown-item"
//                           to={`/brand/${brand.toLowerCase()}`}
//                           onClick={() => setShowBrandDropdown(false)}
//                         >
//                           {brand}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/contact-us">
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default TopBar;



// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import logo from "../assets/image/logo.png";
// import 'bootstrap-icons/font/bootstrap-icons.css';

// const TopBar = () => {
//   const [isMounted, setIsMounted] = useState(false);
//   const [showServicesDropdown, setShowServicesDropdown] = useState(false);
//   const [showBrandDropdown, setShowBrandDropdown] = useState(false);
//   const [isNavCollapsed, setIsNavCollapsed] = useState(true);
//   const servicesDropdownRef = useRef(null);
//   const brandDropdownRef = useRef(null);
//   const navbarRef = useRef(null);

//   const brands = [
//     'Samsung', 'Asus', 'Nothing', 'Vivo', 'Oppo', 'Realme', 'Google', 'Mi',
//     'OnePlus', 'Motorola', 'IQOO', 'Poco', 'Tecno', 'Nokia', 'Honor'
//   ];

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
//         setShowServicesDropdown(false);
//       }
//       if (brandDropdownRef.current && !brandDropdownRef.current.contains(event.target)) {
//         setShowBrandDropdown(false);
//       }
//       if (navbarRef.current && !navbarRef.current.contains(event.target) && !isNavCollapsed) {
//         setIsNavCollapsed(true);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isNavCollapsed]);

//   const handleServicesToggle = () => {
//     setShowServicesDropdown(!showServicesDropdown);
//     setShowBrandDropdown(false);
//   };

//   const handleBrandToggle = () => {
//     setShowBrandDropdown(!showBrandDropdown);
//     setShowServicesDropdown(false);
//   };

//   const handleNavToggle = () => {
//     setIsNavCollapsed(!isNavCollapsed);
//   };

//   return (
//     <div className={`top-bar py-2 bg-white shadow-sm ${isMounted ? 'animate-slide-down' : ''}`}>
//       <div className="container-fluid d-flex justify-content-between align-items-center w-100 px-3 py-2 position-relative">
//         {/* Logo */}
//         <div className="logo flex-shrink-0">
//           <Link to="/">
//             <img src={logo} alt="Logo" height="40" style={{ maxWidth: '150px' }} />
//           </Link>
//         </div>

//         {/* Desktop Navigation - Hidden on mobile */}
//         <nav className="navbar navbar-expand-lg d-none d-lg-flex">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link px-3" to="/about-us">About Us</Link>
//             </li>
//             <li className="nav-item position-relative" ref={servicesDropdownRef}>
//               <div
//                 className="nav-link cursor-pointer px-3"
//                 onClick={handleServicesToggle}
//                 style={{ cursor: 'pointer' }}
//               >
//                 Services <i className="bi bi-caret-down-fill ms-1"></i>
//               </div>
//               {showServicesDropdown && (
//                 <ul className="dropdown-menu show position-absolute mt-2" style={{ zIndex: 1050 }}>
//                   <li>
//                     <Link className="dropdown-item" to="/" onClick={() => setShowServicesDropdown(false)}>
//                       Mobile
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/tablet-repair" onClick={() => setShowServicesDropdown(false)}>
//                       Tablet
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/macbook-repair" onClick={() => setShowServicesDropdown(false)}>
//                       Laptop
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/cctv-repair" onClick={() => setShowServicesDropdown(false)}>
//                       CCTV
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li className="nav-item position-relative" ref={brandDropdownRef}>
//               <div
//                 className="nav-link cursor-pointer px-3"
//                 onClick={handleBrandToggle}
//                 style={{ cursor: 'pointer' }}
//               >
//                 Brand <i className="bi bi-caret-down-fill ms-1"></i>
//               </div>
//               {showBrandDropdown && (
//                 <ul className="dropdown-menu show position-absolute mt-2" style={{ zIndex: 1050, maxHeight: '300px', overflowY: 'auto' }}>
//                   {brands.map((brand) => (
//                     <li key={brand}>
//                       <Link 
//                         className="dropdown-item" 
//                         to={`/brand/${brand.toLowerCase()}`} 
//                         onClick={() => setShowBrandDropdown(false)}
//                       >
//                         {brand}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link px-3" to="/contact-us">Contact Us</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Mobile Hamburger Button */}
//         <button 
//           className="navbar-toggler d-lg-none border-0 bg-transparent flex-shrink-0" 
//           type="button" 
//           onClick={handleNavToggle}
//           aria-label="Toggle navigation"
//           aria-expanded={!isNavCollapsed}
//           aria-controls="navbarNav"
//           style={{ fontSize: '1.8rem', padding: '8px 12px', minWidth: '50px' }}
//         >
//           <i className={`bi ${isNavCollapsed ? 'bi-list' : 'bi-x-lg'}`}></i>
//         </button>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {!isNavCollapsed && (
//         <div 
//           className="mobile-nav d-lg-none"
//           id="navbarNav"
//           ref={navbarRef}
//           style={{
//             backgroundColor: 'white',
//             boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//             zIndex: 1040,
//             borderTop: '1px solid #eee'
//           }}
//         >
//           <div className="container-fluid">
//             <ul className="navbar-nav py-2">
//               <li className="nav-item border-bottom">
//                 <Link 
//                   className="nav-link py-3 px-3" 
//                   to="/about-us" 
//                   onClick={() => setIsNavCollapsed(true)}
//                   style={{ display: 'block' }}
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li className="nav-item border-bottom">
//                 <div
//                   className="nav-link py-3 px-3 d-flex justify-content-between align-items-center"
//                   onClick={handleServicesToggle}
//                   style={{ cursor: 'pointer' }}
//                 >
//                   Services 
//                   <i className={`bi ${showServicesDropdown ? 'bi-caret-up-fill' : 'bi-caret-down-fill'}`}></i>
//                 </div>
//                 {showServicesDropdown && (
//                   <ul className="list-unstyled ps-4 pb-2">
//                     <li>
//                       <Link 
//                         className="nav-link py-2 px-3 text-muted" 
//                         to="/" 
//                         onClick={() => {
//                           setShowServicesDropdown(false);
//                           setIsNavCollapsed(true);
//                         }}
//                       >
//                         Mobile
//                       </Link>
//                     </li>
//                     <li>
//                       <Link 
//                         className="nav-link py-2 px-3 text-muted" 
//                         to="/tablet-repair" 
//                         onClick={() => {
//                           setShowServicesDropdown(false);
//                           setIsNavCollapsed(true);
//                         }}
//                       >
//                         Tablet
//                       </Link>
//                     </li>
//                     <li>
//                       <Link 
//                         className="nav-link py-2 px-3 text-muted" 
//                         to="/macbook-repair" 
//                         onClick={() => {
//                           setShowServicesDropdown(false);
//                           setIsNavCollapsed(true);
//                         }}
//                       >
//                         Laptop
//                       </Link>
//                     </li>
//                     <li>
//                       <Link 
//                         className="nav-link py-2 px-3 text-muted" 
//                         to="/cctv-repair" 
//                         onClick={() => {
//                           setShowServicesDropdown(false);
//                           setIsNavCollapsed(true);
//                         }}
//                       >
//                         CCTV
//                       </Link>
//                     </li>
//                   </ul>
//                 )}
//               </li>
//               <li className="nav-item border-bottom">
//                 <div
//                   className="nav-link py-3 px-3 d-flex justify-content-between align-items-center"
//                   onClick={handleBrandToggle}
//                   style={{ cursor: 'pointer' }}
//                 >
//                   Brand 
//                   <i className={`bi ${showBrandDropdown ? 'bi-caret-up-fill' : 'bi-caret-down-fill'}`}></i>
//                 </div>
//                 {showBrandDropdown && (
//                   <ul className="list-unstyled ps-4 pb-2" style={{ maxHeight: '200px', overflowY: 'auto' }}>
//                     {brands.map((brand) => (
//                       <li key={brand}>
//                         <Link 
//                           className="nav-link py-2 px-3 text-muted" 
//                           to={`/brand/${brand.toLowerCase()}`} 
//                           onClick={() => {
//                             setShowBrandDropdown(false);
//                             setIsNavCollapsed(true);
//                           }}
//                         >
//                           {brand}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//               <li className="nav-item">
//                 <Link 
//                   className="nav-link py-3 px-3" 
//                   to="/contact-us" 
//                   onClick={() => setIsNavCollapsed(true)}
//                 >
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}

//       {/* Custom Styles */}
//       <style jsx>{`
//         .top-bar {
//           position: relative;
//           z-index: 1000;
//         }
//         .navbar-toggler:focus {
//           box-shadow: none !important;
//           outline: none;
//         }
//         .nav-link {
//           color: #333 !important;
//           font-weight: 500;
//         }
//         .nav-link:hover {
//           color: #007bff !important;
//           background-color: #f8f9fa;
//         }
//         .dropdown-item:hover {
//           background-color: #f8f9fa;
//           color: #007bff;
//         }
//         @media (max-width: 991.98px) {
//           .navbar-collapse.show {
//             animation: slideDown 0.3s ease-in-out;
//           }
//           @keyframes slideDown {
//             from {
//               opacity: 0;
//               transform: translateY(-10px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
//         }
//         @media (max-width: 575.98px) {
//           .logo img {
//             height: 35px !important;
//           }
//           .container {
//             padding-left: 15px !important;
//             padding-right: 15px !important;
//           }
//         }
//         @media (max-width: 375px) {
//           .logo img {
//             height: 30px !important;
//           }
//           .navbar-toggler {
//             padding: 6px !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TopBar;



import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/image/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TopBar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const servicesDropdownRef = useRef(null);
  const brandDropdownRef = useRef(null);
  const navbarRef = useRef(null);

  const brands = [
    'Samsung', 'Asus', 'Nothing', 'Vivo', 'Oppo', 'Realme', 'Google', 'Mi',
    'OnePlus', 'Motorola', 'IQOO', 'Poco', 'Tecno', 'Nokia', 'Honor'
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setShowServicesDropdown(false);
      }
      if (brandDropdownRef.current && !brandDropdownRef.current.contains(event.target)) {
        setShowBrandDropdown(false);
      }
      if (navbarRef.current && !navbarRef.current.contains(event.target) && !isNavCollapsed) {
        setIsNavCollapsed(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isNavCollapsed]);

  const handleServicesToggle = () => {
    setShowServicesDropdown(!showServicesDropdown);
    setShowBrandDropdown(false);
  };

  const handleBrandToggle = () => {
    setShowBrandDropdown(!showBrandDropdown);
    setShowServicesDropdown(false);
  };

  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <header className={`sticky-top bg-white shadow-sm ${isMounted ? 'animate-slide-down' : ''}`}>
      {/* Top Bar with Logo and Hamburger */}
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-2 px-3">
          {/* Logo */}
          <div className="logo">
            <Link to="/" className="d-block">
              <img src={logo} alt="Logo" height="40" className="img-fluid" style={{ maxWidth: '150px' }} />
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="d-none d-lg-block">
            <ul className="nav">
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/about-us">About Us</Link>
              </li>
              <li className="nav-item dropdown mx-2" ref={servicesDropdownRef}>
                <button 
                  className="nav-link dropdown-toggle bg-transparent border-0" 
                  onClick={handleServicesToggle}
                >
                  Services
                </button>
                {showServicesDropdown && (
                  <div className="dropdown-menu show">
                    <Link className="dropdown-item" to="/" onClick={() => setShowServicesDropdown(false)}>Mobile</Link>
                    <Link className="dropdown-item" to="/tablet-repair" onClick={() => setShowServicesDropdown(false)}>Tablet</Link>
                    <Link className="dropdown-item" to="/macbook-repair" onClick={() => setShowServicesDropdown(false)}>Laptop</Link>
                    <Link className="dropdown-item" to="/cctv-repair" onClick={() => setShowServicesDropdown(false)}>CCTV</Link>
                  </div>
                )}
              </li>
              <li className="nav-item dropdown mx-2" ref={brandDropdownRef}>
                <button 
                  className="nav-link dropdown-toggle bg-transparent border-0" 
                  onClick={handleBrandToggle}
                >
                  Brand
                </button>
                {showBrandDropdown && (
                  <div className="dropdown-menu show" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    {brands.map((brand) => (
                      <Link 
                        key={brand} 
                        className="dropdown-item" 
                        to={`/brand/${brand.toLowerCase()}`} 
                        onClick={() => setShowBrandDropdown(false)}
                      >
                        {brand}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            className="navbar-toggler d-lg-none border-0" 
            type="button" 
            onClick={handleNavToggle}
            aria-label="Toggle navigation"
          >
            <i className={`bi ${isNavCollapsed ? 'bi-list' : 'bi-x'}`} style={{ fontSize: '1.75rem' }}></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`mobile-menu d-lg-none bg-white ${!isNavCollapsed ? 'open' : ''}`}
        ref={navbarRef}
      >
        <div className="container-fluid">
          <ul className="nav flex-column">
            <li className="nav-item border-bottom">
              <Link 
                className="nav-link py-3" 
                to="/about-us" 
                onClick={() => setIsNavCollapsed(true)}
              >
                About Us
              </Link>
            </li>
            
            <li className="nav-item border-bottom">
              <div 
                className="nav-link py-3 d-flex justify-content-between align-items-center" 
                onClick={handleServicesToggle}
                style={{ cursor: 'pointer' }}
              >
                <span>Services</span>
                <i className={`bi ${showServicesDropdown ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
              </div>
              {showServicesDropdown && (
                <div className="ps-3 pb-2">
                  <Link 
                    className="dropdown-item d-block py-2" 
                    to="/" 
                    onClick={() => {
                      setShowServicesDropdown(false);
                      setIsNavCollapsed(true);
                    }}
                  >
                    Mobile
                  </Link>
                  <Link 
                    className="dropdown-item d-block py-2" 
                    to="/tablet-repair" 
                    onClick={() => {
                      setShowServicesDropdown(false);
                      setIsNavCollapsed(true);
                    }}
                  >
                    Tablet
                  </Link>
                  <Link 
                    className="dropdown-item d-block py-2" 
                    to="/macbook-repair" 
                    onClick={() => {
                      setShowServicesDropdown(false);
                      setIsNavCollapsed(true);
                    }}
                  >
                    Laptop
                  </Link>
                  <Link 
                    className="dropdown-item d-block py-2" 
                    to="/cctv-repair" 
                    onClick={() => {
                      setShowServicesDropdown(false);
                      setIsNavCollapsed(true);
                    }}
                  >
                    CCTV
                  </Link>
                </div>
              )}
            </li>
            
            <li className="nav-item border-bottom">
              <div 
                className="nav-link py-3 d-flex justify-content-between align-items-center" 
                onClick={handleBrandToggle}
                style={{ cursor: 'pointer' }}
              >
                <span>Brand</span>
                <i className={`bi ${showBrandDropdown ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
              </div>
              {showBrandDropdown && (
                <div className="ps-3 pb-2" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  {brands.map((brand) => (
                    <Link 
                      key={brand}
                      className="dropdown-item d-block py-2" 
                      to={`/brand/${brand.toLowerCase()}`} 
                      onClick={() => {
                        setShowBrandDropdown(false);
                        setIsNavCollapsed(true);
                      }}
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              )}
            </li>
            
            <li className="nav-item">
              <Link 
                className="nav-link py-3" 
                to="/contact-us" 
                onClick={() => setIsNavCollapsed(true)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        .mobile-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .mobile-menu.open {
          max-height: 100vh;
        }
        .dropdown-item {
          color: #333;
          text-decoration: none;
        }
        .dropdown-item:hover {
          color: #0d6efd;
          background-color: #f8f9fa;
        }
        .nav-link {
          color: #333 !important;
        }
        .nav-link:hover {
          color: #0d6efd !important;
        }
      `}</style>
    </header>
  );
};

export default TopBar;
