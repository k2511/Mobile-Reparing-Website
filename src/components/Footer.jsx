import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Container>
          <Row>
            <Col md={2} sm={6}>
              <h5 className="footer-heading">Services</h5>
              <ul className="footer-list">
                <li>
                  <Link to="/mobile-repair" style={{ textDecoration: "none", color:"black" }}>
                    Mobile
                  </Link>
                </li>
                <li>
                  <Link to="/tablet-repair" style={{ textDecoration: "none", color:"black"  }}>
                    Tablets
                  </Link>
                </li>
                <li>
                  <Link to="/laptop-repair" style={{ textDecoration: "none", color:"black"  }}>
                    Laptop
                  </Link>
                </li>
                <li>
                  <Link to="/cctv-repair" style={{ textDecoration: "none", color:"black"  }}>
                    CCTV
                  </Link>
                </li>
              </ul>
            </Col>

            <Col md={2} sm={6}>
              <h5 className="footer-heading">Cities</h5>
              <ul className="footer-list">
                <li>Bangalore</li>
                <li>Shimaoga</li>
                <li>Chennai</li>
                <li>Kolkata</li>
                <li>Pune</li>
              </ul>
            </Col>

            <Col md={2} sm={6}>
              <h5 className="footer-heading">Company</h5>
              <ul className="footer-list">
                <li>
                  <Link to="/about-us" style={{ textDecoration: "none", color:"black"  }}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/articles" style={{ textDecoration: "none", color:"black"  }}>
                    Articles
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" style={{ textDecoration: "none", color:"black"  }}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/e-waste-policy" style={{ textDecoration: "none" , color:"black" }}>
                    E-waste Policy
                  </Link>
                </li>
                <li>
                  <Link to="/cookie-policy" style={{ textDecoration: "none", color:"black"  }}>
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </Col>

            <Col md={2} sm={6}>
              <h5 className="footer-heading">Help & Support</h5>
              <ul className="footer-list">
                <li>
                  <Link to="/faqs" style={{ textDecoration: "none", color:"black"  }}>
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions" style={{ textDecoration: "none", color:"black"  }}>
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/warranty-policy" style={{ textDecoration: "none", color:"black"  }}>
                    Warranty Policy
                  </Link>
                </li>
                <li>
                  <Link to="/partner-with-us" style={{ textDecoration: "none", color:"black"  }}>
                    Partner With Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" style={{ textDecoration: "none", color:"black"  }}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Col>

            <Col md={2}>
              <h5 className="footer-heading">Contact Us</h5>
              <ul className="footer-list contact-info">
                <li style={{ fontSize: "12px" }}>
                  <i className="fas fa-map-marker-alt"></i>Address: Konark Business Hub, 2nd Floor 3S-14, Kondhwa Main Road, Pune, Maharashtra 411048
                </li>
                <li>
                  <i className="fas fa-envelope"></i> support@redsetgo.com
                </li>
                <li>
                  <i className="fas fa-phone"></i> +91 9916313616
                </li>
                <li>🌐 Website: www.redsetgo.in</li>
                <li className="social-icons">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-linkedin-in"></i>
                </li>
              </ul>
            </Col>
          </Row>

          <div className="footer-disclaimer">
            <p style={{ marginTop: "25px" }}>
            Broken screen? Battery dying? Don’t sweat it – we’ll fix it right where you are! Redset Go sends expert technicians to your home or office in Pune, armed with genuine parts and the skills to get your phone back in action fast. No queues. No hidden costs. Just quick, transparent, and reliable repairs you can trust. 📱 Book now and get your device revived in a flash!
            </p>
            <p style={{ fontWeight: "700", fontSize: "14px" }}>
              © 2025 RedSet Go . All rights reserved.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;