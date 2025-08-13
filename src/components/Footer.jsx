import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="footer">
     <div className='footer-content'>
      <Container >
        <Row>
          <Col md={2} sm={6}>
            <h5 className="footer-heading">Services</h5>
            <ul className="footer-list">
              <li>Mobile</li>
              <li>Tablets</li>
              <li>MacBook</li>
              <li>Smart Watch</li>
              <li>iPhone</li>
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
              <li>About Us</li>
              <li>Articles</li>
              <li>Privacy Policy</li>
              <li>E-waste Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </Col>

          <Col md={2} sm={6}>
            <h5 className="footer-heading">Help & Support</h5>
            <ul className="footer-list">
              <li>FAQs</li>
              <li>Terms & Conditions</li>
              <li>Warranty Policy</li>
              <li>Partner With Us</li>
              <li>Contact Us</li>
            </ul>
          </Col>

        

          <Col md={2}>
            <h5 className="footer-heading">Contact Us</h5>
            <ul className="footer-list contact-info">
              <li style={{fontSize:"12px"}}>
                <i className="fas fa-map-marker-alt"></i> Konark Business Hub, 2nd Floor 3S-14, Kondhwa Main Road 411048, Pune 
              </li>
              <li>
                <i className="fas fa-envelope"></i> support@ongoffix.com
              </li>
              <li>
                <i className="fas fa-phone"></i> +91 7676784785
              </li>
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
          <p style={{marginTop:"25px"}}>
            All product names, logos, and brands are property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, logos, and brands does not imply, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque a aliquid necessitatibus?
          </p>
          <p style={{fontWeight:"700", fontSize:"14px"}}>© 2025 RedSetGo . All rights reserved.</p>
        </div>
      </Container>
      </div>
    </footer>
  );
};

export default Footer;


