import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHeadset, FaPhoneAlt } from "react-icons/fa";

const DeviceCheck = ({ backgroundImage }) => {
  const wrapperStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <section className="device-check" style={wrapperStyle}>
      {/* Contact Bar: full background width */}
      <div className="contact-bar">
        <Container>
          <Row className="gx-3 gy-3 align-items-center text-center text-lg-start">
            <Col xs={12} lg={4} className="">
              <p className="mb-0 help-text">Have a question? Call us right now</p>
            </Col>

            <Col xs={12} lg={4} className="d-flex justify-content-center">
              <a href="tel:+919900004531" className="contact-link" aria-label="Call +91 99000 04531">
                <div className="d-flex align-items-center justify-content-center contact-item">
                  <span className="icon-circle bg-white">
                    <FaHeadset className="icon headset" />
                  </span>
                  <span className="ms-2 fw-semibold contact-text">+91 99000 04531</span>
                </div>
              </a>
            </Col>

            <Col xs={12} lg={4} className="d-flex justify-content-center justify-content-lg-end">
              <a href="tel:+9109900007849" className="contact-link" aria-label="Call 099000 07849">
                <div className="d-flex align-items-center justify-content-center contact-item">
                  <span className="icon-circle bg-danger">
                    <FaPhoneAlt className="icon phone" />
                  </span>
                  <span className="ms-2 fw-semibold contact-text">+91 099000 07849</span>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Scoped styles */}
      <style>{`
        .device-check { position: relative; color: #fff; }

        /* Contact bar: full-width background */
        .contact-bar { background-color: #2e3b40; padding: 14px 0; width: 100%; }

        .help-text { color: #ffffff; font-size: 15px; margin: 0; text-align: center; }
        .contact-item { gap: 10px; }
        .icon-circle { width: 40px; height: 40px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; }
        .icon { width: 18px; height: 18px; }
        .icon.headset { color: #e53935; }
        .icon.phone { color: #ffffff; }
        .bg-white { background-color: #ffffff; }
        .bg-danger { background-color: #e53935; }

        .contact-text { color: #fff; font-size: 15px; }
        .contact-link { text-decoration: none; display:flex; align-items:center; justify-content:center; }

        /* Small devices */
        @media (max-width: 575.98px) {
          .contact-bar { padding: 10px 0; flex-direction:column; text-align:center; }
          .icon-circle { width: 34px; height: 34px; }
          .icon { width: 16px; height: 16px; }
          .help-text { font-size: 14px; margin-bottom:8px; }
          .contact-text { font-size: 14px; }
        }

        /* Medium devices */
        @media (min-width: 576px) and (max-width: 991.98px) {
          .contact-bar { padding: 12px 0; }
          .icon-circle { width: 36px; height: 36px; }
          .icon { width: 16px; height: 16px; }
        }

        /* Large devices */
        @media (min-width: 992px) {
          .contact-bar { padding: 14px 0; }
          .help-text { font-size: 16px; text-align:left; }
          .contact-text { font-size: 15px; }
        }

      `}</style>
    </section>
  );
};

export default DeviceCheck;