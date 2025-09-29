import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaEnvelope, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email } = formData;

    if (!name || !email) {
      alert("Please enter both Name and Email.");
      return;
    }

    // Encode for mailto URL
    const subject = encodeURIComponent("Newsletter Subscription");
    const body = encodeURIComponent(`Hello ScreenGuru Team,

Please subscribe me to your newsletter.

Name: ${name}
Email: ${email}`);

    // Open email client
    window.location.href = `mailto:info@screenguru.in?subject=${subject}&body=${body}`;

    // Reset form
    setFormData({ name: "", email: "" });
  };

  return (
    <footer className="footer" style={{ backgroundColor: "#263238", color: "#fff" }}>
      <Container fluid="lg" className="pt-4 pt-lg-5">
        {/* Top Section */}
        <Row className="gy-3 gy-md-5 mb-3 mb-lg-5 align-items-start justify-content-between">
          {/* Brand */}
          <Col xs={12} lg={3} className="text-center text-lg-start footer-brand mb-3 mb-lg-0">
            <h4 className="fw-bold mb-2 mb-lg-3" style={{ color: "#ff4d4d" }}>Screen Guru</h4>
            <p className="small" style={{ color: "#b0bec5" }}>
              Screen Guru is your trusted partner for fast, reliable, and
              affordable device repair services. Backed by expert technicians
              and a satisfaction guarantee.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start gap-3 mt-3 social-wrap">
              <a
                href="https://www.facebook.com/screengurumobileservice"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/screenguru.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="instagram"
              >
                <FaInstagram />
              </a>
           <a href="https://www.google.com/maps/place/Screenguru:+Affordable+Phone,+Watch+%26+Tab+Repairs+at+Your+Doorstep!+(6+Months+Warranty)/@12.9644934,77.5840211,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae15835458b8e3:0x864090ff055cec15!8m2!3d12.9644934!4d77.5840211!16s%2Fg%2F11vwpqrv5q?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
           target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="google"
           >
     
  
  <FaGoogle />
</a>

            </div>
          </Col>

          {/* Services */}
          <Col xs={12} sm={6} md={3} lg={2} className="text-center text-md-start mb-3 mb-lg-0">
            <h5 className="fw-bold mb-2 mb-lg-3">Services</h5>
            <ul className="list-unstyled small list-links">
            <li className="mb-2"><Link to="/mobile-repair" className="footer-link">Phones</Link></li>
              <li className="mb-2">
    <Link to="/tablet-repair" className="footer-link">Tablet</Link>
  </li>
  <li className="mb-2">
    <Link to="/watch-repair" className="footer-link">Smart Watches</Link>
  </li>
  <li className="mb-2">
    <Link to="/mobile-accessories" className="footer-link">Mobile Accessories</Link>
  </li>
            </ul>
          </Col>

          {/* Support */}
          <Col xs={12} sm={6} md={3} lg={2} className="text-center text-md-start mb-3 mb-lg-0">
            <h5 className="fw-bold mb-2 mb-lg-3">Support</h5>
            <ul className="list-unstyled small list-links">
              <li className="mb-2"><Link to="/help" className="footer-link">Help Center</Link></li>
      <li className="mb-2">
  <Link to="/warranty-policy" className="footer-link">Warranty Policy</Link>
</li>
<li className="mb-2">
  <Link to="/return" className="footer-link">Return &amp; Refunds</Link>
</li>
<li className="mb-2">
  <Link to="/contact-us" className="footer-link">Contact Support</Link>
</li>
            </ul>
          </Col>

          {/* Company */}
          <Col xs={12} sm={6} md={3} lg={2} className="text-center text-md-start mb-3 mb-lg-0">
            <h5 className="fw-bold mb-2 mb-lg-3">Company</h5>
            <ul className="list-unstyled small list-links">
              <li className="mb-2"><Link to="/about-us" className="footer-link">About Us</Link></li>
          <li className="mb-2">
  <Link to="/terms" className="footer-link">Terms and Condition</Link>
</li>
<li className="mb-2">
  <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
</li>
<li className="mb-2">
  <Link to="/cookie-policy" className="footer-link">Cookie Policy</Link>
</li>

            </ul>
          </Col>
        </Row>

        {/* Newsletter */}
        <Row
          className="p-3 p-md-4 rounded mb-4 mb-lg-5 newsletter mx-0 text-center text-md-start"
          style={{ backgroundColor: "rgba(255, 77, 77, 0.95)" }}
        >
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <h5 className="fw-bold text-white mb-2">
              Stay Updated With Repair Tips & Deals
            </h5>
            <p className="text-white mb-0 small">
              Get helpful device care advice and exclusive offers straight to
              your inbox every month.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <Form onSubmit={handleSubmit}>
              <Row className="g-2 align-items-center">
                <Col xs={12} sm={6}>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="small w-100"
                    required
                  />
                </Col>
                <Col xs={12} sm={6}>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="small w-100"
                    required
                  />
                </Col>
                <Col xs={12} className="mt-2">
                  <Button
                    type="submit"
                    className="w-100"
                    style={{
                      backgroundColor: "#263238",
                      border: "none",
                      fontSize: "14px",
                      padding: "10px 16px",
                    }}
                  >
                    <FaEnvelope className="me-2" /> Subscribe Newsletter
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        {/* Bottom */}
        <Row
          className="py-3 border-top text-center text-md-start align-items-center mx-0"
          style={{ borderColor: "#455a64" }}
        >
          <Col xs={12} md={6} className="mb-2 mb-md-0">
            <p className="small mb-0" style={{ color: "#b0bec5" }}>
              © 2025 Screen Guru. All rights reserved. Designed by{" "}
              <a
                href="https://whizfortune.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ff4d4d", textDecoration: "none" }}
              >
                whizfortune.com
              </a>
            </p>
          </Col>
          <Col xs={12} md={6}>
            <div className="d-flex justify-content-center justify-content-md-end align-items-center gap-3 flex-wrap payment-icons">
              {[{
                  src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
                  alt: "Visa",
                },{
                  src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg",
                  alt: "Amex",
                },{
                  src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png",
                  alt: "Mastercard",
                },{
                  src: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Stripe_Logo%2C_revised_2016.svg",
                  alt: "Stripe",
                }].map((card, idx) => (
                <img
                  key={idx}
                  src={card.src}
                  alt={card.alt}
                  style={{ height: "20px", objectFit: "contain", display: "inline-block" }}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer CSS */}
      <style>{`
        .footer { font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
        .footer .footer-link { color: #b0bec5; text-decoration: none; transition: color 0.25s ease; display: inline-block; }
        .footer .footer-link:hover { color: #ff4d4d; }
        .footer .social-icon { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background-color: rgba(255,255,255,0.06); transition: all 0.25s ease; color: #fff; }
        .footer .social-icon svg { width: 16px; height: 16px; }
        .footer .social-icon:hover { background-color: #ff4d4d !important; color: #fff; }
        .footer .newsletter input, .footer .newsletter .form-control { border: none; font-size: 14px; padding: 10px; }
        .footer .newsletter input:focus, .footer .newsletter .form-control:focus { outline: none; box-shadow: none; }
        .footer .list-links li { line-height: 1.45; }
        .footer .payment-icons img { max-height: 22px; }

        @media (max-width: 767.98px) {
          .footer { padding-bottom: 18px; }
          .footer .footer-brand { margin-bottom: 8px; }
          .footer .footer-brand h4 { font-size: 20px; }
          .footer .footer-brand p { color: rgb(176, 190, 197); font-size: 13px; }
          .footer .list-links { padding-left: 0; }
          .footer .list-links li { margin-bottom: 6px; }
          .footer .newsletter { text-align: center; padding: 12px; }
          .footer .newsletter .form-control { width: 100%; }
          .footer .social-wrap { justify-content: center !important; }
          .footer .payment-icons { justify-content: center !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;







