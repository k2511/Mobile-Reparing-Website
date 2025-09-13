import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/image/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const TopBar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showServicesDropdownDesktop, setShowServicesDropdownDesktop] =
    useState(false);
  const [showBrandDropdownDesktop, setShowBrandDropdownDesktop] =
    useState(false);
  const [showServicesDropdownMobile, setShowServicesDropdownMobile] =
    useState(false);
  const [showBrandDropdownMobile, setShowBrandDropdownMobile] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const servicesDropdownRef = useRef(null);
  const brandDropdownRef = useRef(null);
  const navbarRef = useRef(null);
  const hamburgerRef = useRef(null);

  const navigate = useNavigate();

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
        setShowServicesDropdownDesktop(false);
      }
      if (
        brandDropdownRef.current &&
        !brandDropdownRef.current.contains(event.target)
      ) {
        setShowBrandDropdownDesktop(false);
      }
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target) &&
        !isNavCollapsed
      ) {
        setIsNavCollapsed(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isNavCollapsed]);

  const handleServicesToggleDesktop = (e) => {
    e.stopPropagation();
    setShowServicesDropdownDesktop(!showServicesDropdownDesktop);
    setShowBrandDropdownDesktop(false);
  };

  const handleBrandToggleDesktop = (e) => {
    e.stopPropagation();
    setShowBrandDropdownDesktop(!showBrandDropdownDesktop);
    setShowServicesDropdownDesktop(false);
  };

  const handleServicesToggleMobile = () => {
    setShowServicesDropdownMobile(!showServicesDropdownMobile);
    setShowBrandDropdownMobile(false);
  };

  const handleBrandToggleMobile = () => {
    setShowBrandDropdownMobile(!showBrandDropdownMobile);
    setShowServicesDropdownMobile(false);
  };

  const handleNavToggle = (e) => {
    e.stopPropagation();
    setIsNavCollapsed(!isNavCollapsed);
    setShowServicesDropdownMobile(false);
    setShowBrandDropdownMobile(false);
  };

  const handleLinkClick = () => {
    requestAnimationFrame(() => {
      setShowServicesDropdownDesktop(false);
      setShowBrandDropdownDesktop(false);
      setShowServicesDropdownMobile(false);
      setShowBrandDropdownMobile(false);
      setIsNavCollapsed(true);
    });
  };

  const handleHashLinkClick = (hash) => {
    navigate(`/${hash}`);
    requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      setShowServicesDropdownDesktop(false);
      setShowBrandDropdownDesktop(false);
      setShowServicesDropdownMobile(false);
      setShowBrandDropdownMobile(false);
      setIsNavCollapsed(true);
    });
  };

  return (
    <header
      className={`sticky-top bg-white shadow-sm ${
        isMounted ? "animate-slide-down" : ""
      }`}
    >
      {/* Top Bar */}
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-2 px-3 ">
          {/* Logo */}
          <div className="logo">
            <Link to="/" className="d-block" onClick={handleLinkClick}>
              <img
                src={logo}
                alt="Logo"
                height="60"
                className="img-fluid"
                style={{ maxWidth: "150px" }}
              />
            </Link>

          
          </div>

          {/* Desktop Navigation */}
          <nav className="d-none d-lg-block">
            <ul className="nav">
              <li className="nav-item mx-2">
                <Link
                  className="nav-link"
                  to="/about-us"
                  onClick={handleLinkClick}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown mx-2" ref={servicesDropdownRef}>
                <button
                  className="nav-link dropdown-toggle bg-transparent border-0"
                  onClick={handleServicesToggleDesktop}
                >
{/* <<<<<<< HEAD
                  Services <i className="bi bi-caret-down-fill ms-1"></i>
                </div>
                {showServicesDropdown && (
                  <ul
                    className="dropdown-menu show mt-2"
                    style={{ display: "block", position: "absolute", left: 0 }}
                  >
                    <li>
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
======= */}
                  Services
                </button>
                {showServicesDropdownDesktop && (
                  <div className="dropdown-menu show">
                    <Link
                      className="dropdown-item"
                      to="/#brand-section"
                      onClick={() => handleHashLinkClick("#brand-section")}
                    >
                      Mobile
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/tablet-repair"
                      onClick={handleLinkClick}
                    >
                      Tablet
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/macbook-repair"
                      onClick={handleLinkClick}
                    >
                      Laptop
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/cctv-repair"
                      onClick={handleLinkClick}
                    >
                      CCTV
                    </Link>
                  </div>

                )}
              </li>
              <li className="nav-item dropdown mx-2" ref={brandDropdownRef}>
                <button
                  className="nav-link dropdown-toggle bg-transparent border-0"
                  onClick={handleBrandToggleDesktop}
                >
                  Brand
                </button>
                {showBrandDropdownDesktop && (
                  <div
                    className="dropdown-menu show"
                    style={{ maxHeight: "300px", overflowY: "auto" }}
                  >
                    {brands.map((brand) => (
                      <Link
                        key={brand}
                        className="dropdown-item"
                        to={`/brand/${brand.toLowerCase()}`}
                        onClick={handleLinkClick}
                      >
                        {brand}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link"
                  to="/contact-us"
                  onClick={handleLinkClick}
                >
                  Contact Us
                </Link>

               
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button
            ref={hamburgerRef}
            className="navbar-toggler d-lg-none border-0 p-3"
            type="button"
            onClick={handleNavToggle}
            aria-label="Toggle navigation"
            style={{ touchAction: "manipulation" }}
          >
            <i
              className={`bi ${isNavCollapsed ? "bi-list" : "bi-x"}`}
              style={{ fontSize: "1.75rem" }}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`mobile-menu d-lg-none bg-white ${
          !isNavCollapsed ? "open" : ""
        }`}
        ref={navbarRef}
      >
        <div className="container-fluid">
          <ul className="nav flex-column">
            <li className="nav-item border-bottom">
              <Link
                className="nav-link py-3"
                to="/about-us"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
            </li>

            {/* Services - Mobile */}
            <li className="nav-item border-bottom">
              <button
                type="button"
                className="nav-link py-3 w-100 text-start bg-transparent border-0 d-flex justify-content-between align-items-center"
                onClick={handleServicesToggleMobile}
              >
                Services
                <i
                  className={`bi ${
                    showServicesDropdownMobile
                      ? "bi-chevron-up"
                      : "bi-chevron-down"
                  }`}
                ></i>
              </button>
              {showServicesDropdownMobile && (
                <div className="ps-3 pb-2">
                  <Link
                    className="dropdown-item d-block py-2"
                    to="/#brand-section"
                    onClick={() => handleHashLinkClick("#brand-section")}
                  >
                    Mobile
                  </Link>
                  <Link
                    className="dropdown-item d-block py-2"
                    to="/tablet-repair"
                    onClick={handleLinkClick}
                  >
                    Tablet
                  </Link>
                  <Link
                    className="dropdown-item d-block py-2"
                    to="/macbook-repair"
                    onClick={handleLinkClick}
                  >
                    Laptop
                  </Link>
                  <Link
                    className="dropdown-item d-block py-2"
                    to="/cctv-repair"
                    onClick={handleLinkClick}
                  >
                    CCTV
                  </Link>
                </div>
              )}
            </li>

            {/* Brand - Mobile */}
            <li className="nav-item border-bottom">
              <button
                type="button"
                className="nav-link py-3 w-100 text-start bg-transparent border-0 d-flex justify-content-between align-items-center"
                onClick={handleBrandToggleMobile}
              >
                Brand
                <i
                  className={`bi ${
                    showBrandDropdownMobile
                      ? "bi-chevron-up"
                      : "bi-chevron-down"
                  }`}
                ></i>
              </button>
              {showBrandDropdownMobile && (
                <div
                  className="ps-3 pb-2"
                  style={{ maxHeight: "200px", overflowY: "auto" }}
                >
                  {brands.map((brand) => (
                    <Link
                      key={brand}
                      className="dropdown-item d-block py-2"
                      to={`/brand/${brand.toLowerCase()}`}
                      onClick={handleLinkClick}
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
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .mobile-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .mobile-menu.open {
          max-height: 100vh;
        }
        .dropdown-item {
          color: #333;
          text-decoration: none;
        }
        .dropdown-item:hover,
        .dropdown-item:active {
          color: red;
          background-color: #f8f9fa;
        }
        .nav-link {
          color: #333 !important;
        }
        .nav-link:hover,
        .nav-link:active {
          color: red !important;
        }
        .navbar-toggler:hover,
        .navbar-toggler:focus {
          border-radius: 5px;
        }

        /* ✅ Large devices (≥992px) */
        @media (min-width: 992px) {
          .d-flex {
            min-height: 80px;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          .logo img {
            height: 100px;
            max-width: 200px;
            object-fit: contain;
            position: absolute;
            top: -13px !important;
            left: 100px !important;
            right:0;
          }
        }

        /* ✅ Medium & small devices (<992px) */
        @media (max-width: 991px) {
          // .d-flex {
          //   min-height: 65px;
          //   padding-top: 0 !important;
          //   padding-bottom: 0 !important;
          // }
          .logo img {
            height: 75px;
            max-width: 130px;
            object-fit: contain;
          }
        }

        /* ✅ Extra small devices (<480px) */
        @media (max-width: 480px) {
          .logo img {
            height: 98px !important;
            width: 122px !important;
            object-fit: contain;

            position:absolute;
            top:-16px;
            left:0;
          }
        }
      `}</style>
    </header>
  );
};

export default TopBar;
