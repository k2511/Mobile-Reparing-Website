import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FAQ = () => {
  return (
    <Container className="my-5 faq-section">
      <Row className="mb-4">
        <Col>
          <h3 className="fw-bold">FAQ'S</h3>
          <div className="red-underline my-2"></div>
        </Col>
        <Col className="text-end d-flex align-items-center justify-content-end">
          <a href="/faq" className="text-danger fw-bold">
            View All
          </a>
        </Col>
      </Row>

      <Accordion flush alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            1. What kind of mobile repair services does Ongofix.com offer?
          </Accordion.Header>
          <Accordion.Body>
            Ongofix provides a wide range of mobile repair services including
            screen replacement, battery replacement, charging port fixes, and
            more.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            2. How long does it take to repair a smartphone?
          </Accordion.Header>
          <Accordion.Body>
            Most smartphone repairs are completed within 1–2 hours depending on
            the issue and availability of parts.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            3. Does Ongofix provide warranty on mobile repair services?
          </Accordion.Header>
          <Accordion.Body>
            Yes, Ongofix provides a warranty on selected repairs and parts.
            Terms and conditions apply.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            4. What is the cost of mobile repair online?
          </Accordion.Header>
          <Accordion.Body>
            The cost varies based on the brand and issue. You can get an
            estimate online or by contacting support.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            5. Where can I get my mobile repair online?
          </Accordion.Header>
          <Accordion.Body>
            You can schedule a doorstep pickup or visit a nearby Ongofix center
            through our website.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>
            6. Is online mobile repair service safe and secure?
          </Accordion.Header>
          <Accordion.Body>
            Absolutely. We use encrypted systems, genuine parts, and certified
            technicians to ensure secure and quality repairs.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Row className="mt-5">
        <Col>
          <h4 className="fw-bold">Why Choose Ongofix for Mobile Repair?</h4>
          <p className="text-muted">
            Discover unparalleled expertise at Ongofix, your trusted Mobile
            Repair Service in Mumbai. Our certified technicians ensure top-notch
            repairs, using genuine parts and innovative solutions. Be it a
            broken screen, display, back glass replacement, battery, charging
            port, earpiece issue, or anything else, we fix everything. Choose us
            for reliable, efficient, and customer-centric mobile repair
            services, prioritizing your satisfaction.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4 className="fw-bold">How Does Ongofix Work?</h4>
          <p className="text-muted">
            Ongofix simplifies mobile repair. Schedule a service online, and our
            skilled technicians come to your location. Enjoy hassle-free
            diagnostics, transparent pricing, and swift repairs, ensuring your
            device's seamless performance.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4 className="fw-bold">Mobile Screen Repair</h4>
          <p className="text-muted">
            Revitalize your device with Ongofix's premier mobile screen repair
            service. Our experts deliver precise, efficient, and affordable
            solutions, restoring your screen to its optimal condition. Trust us
            for quality repairs that exceed expectations.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4 className="fw-bold">Mobile Battery Repair</h4>
          <p className="text-muted">
            Experience Ongofix's expertise in mobile battery repair. We employ
            cutting-edge techniques to diagnose and fix battery issues swiftly.
            Count on us for reliable solutions that extend your device's battery
            life, ensuring uninterrupted performance.
          </p>
        </Col>
      </Row>

      {/* Custom Styles */}
      <style >{`
        /* Keep default accordion colors clean */
        .accordion-button:not(.collapsed) {
          color: unset !important;
          background-color: unset !important;
          box-shadow: unset !important;
        }

        /* Base font styles */
        .accordion-button {
          font-weight: 700;
          font-size: 1rem;
        }
        .accordion-body {
          color: rgb(128, 111, 115);
          font-size: 0.85rem;
        }
        .faq-section h4 {
          font-size: 1.25rem;
        }
        .faq-section p {
          font-size: 1rem;
        }

        /* Mobile adjustments */
        @media (max-width: 576px) {
          .accordion-button {
            font-size: 0.9rem;
          }
          .accordion-body {
            font-size: 0.8rem;
          }
          .faq-section h4 {
            font-size: 1.1rem;
          }
          .faq-section p {
            font-size: 0.9rem;
          }
        `}
      </style>
    </Container>
  );
};

export default FAQ;
