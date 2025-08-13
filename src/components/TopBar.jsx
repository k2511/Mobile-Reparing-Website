// import React, { useState, useEffect, useRef } from 'react';
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

//   // Set mounted state after component mounts
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
//           <img src={logo} alt="Logo" height="40" />
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

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import logo from "../assets/image/logo.png";
import 'bootstrap-icons/font/bootstrap-icons.css';

const TopBar = () => {
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef();

  const cities = ['Mumbai', 'Pune', 'Hyderabad', 'Bangalore', 'Tamil Nadu', 'Andhra Pradesh'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setShowDropdown(false);
  };

  return (
    <div className={`top-bar py-2 bg-white shadow-sm ${isMounted ? 'animate-slide-down' : ''}`}>
      <div className="container d-flex justify-content-between align-items-center w-100 p-2">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" height="40" />
          </Link>
        </div>

        {/* Location and User */}
        <div className="d-flex align-items-center gap-5">
          {/* Location Dropdown */}
          <div className="position-relative" ref={dropdownRef}>
            <div
              className="location d-flex align-items-center cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
              style={{ cursor: 'pointer' }}
            >
              <i className="bi bi-geo-alt-fill text-danger me-1"></i>
              <span>{selectedCity}</span>
              <i className="bi bi-caret-down-fill ms-1"></i>
            </div>

            {showDropdown && (
              <ul className="dropdown-menu show mt-2" style={{ display: 'block' }}>
                {cities.map((city) => (
                  <li key={city}>
                    <button className="dropdown-item" onClick={() => handleCitySelect(city)}>
                      {city}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* User Icon */}
          <div className="user-icon">
            <i className="bi bi-person" style={{ fontSize: '1.5rem', color: 'black' }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;


