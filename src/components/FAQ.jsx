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
            1.How long will my mobile repair take?
          </Accordion.Header>
          <Accordion.Body>
           Most repairs are completed within the same day, depending on the issue.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            2. Do you offer on-site repairs?
          </Accordion.Header>
          <Accordion.Body>
           Yes, we provide on-site services for selected repairs and CCTV installations.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            3.What brands do you repair?
          </Accordion.Header>
          <Accordion.Body>
          We work with all major brands of mobiles, tablets, and laptops.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            4.Is there a warranty on repairs?
          </Accordion.Header>
          <Accordion.Body>
           Yes, we offer a warranty on all parts and services.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            5. Do I need to book an appointment?
          </Accordion.Header>
          <Accordion.Body>
            Walk-ins are welcome, but booking ensures faster service.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>
            6. Can you install CCTV at my home or office?
          </Accordion.Header>
          <Accordion.Body>
          Absolutely – we offer full installation, setup, and maintenance.
          </Accordion.Body>
        </Accordion.Item>


           <Accordion.Item eventKey="5">
          <Accordion.Header>
            7.Do you use original parts?
          </Accordion.Header>
          <Accordion.Body>
    We use high-quality parts that meet or exceed OEM standards.
          </Accordion.Body>
        </Accordion.Item>

        
           <Accordion.Item eventKey="5">
          <Accordion.Header>
            8.How much will my repair cost?
          </Accordion.Header>
          <Accordion.Body>
Prices depend on the repair type, but we offer free diagnostics and quotes.
          </Accordion.Body>
        </Accordion.Item>


        
      </Accordion>

      <Row className="mt-5">
        <Col>
          <h4 className="fw-bold">Why Choose RedSet Go for Mobile Repair?</h4>
          <p className="text-muted">
           We are committed to delivering top-notch service that exceeds expectations every time. Our approach combines expertise, dedication, and customer-centric values to ensure your complete satisfaction. Whether it’s speed, skill, or affordability, we stand out as your trusted partner for reliable solutions.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4 className="fw-bold">Fast & Reliable Service</h4>
          <p className="text-muted">
          We value your time, providing quick turnarounds without compromising on quality. Our streamlined processes and responsive team ensure that your issues are addressed promptly. We also maintain strict timelines, so you can get back to your routine without unnecessary delays.
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
          <h4 className="fw-bold">Expert Technicians</h4>
          <p className="text-muted">
           Our skilled team uses advanced tools to deliver precision repairs every time. Each technician is trained to handle complex tasks with accuracy and professionalism. We also stay updated with the latest industry techniques to ensure lasting results for every project.
          </p>
        </Col>
      </Row>


       <Row className="mt-4">
        <Col>
          <h4 className="fw-bold">Affordable Pricing</h4>
          <p className="text-muted">
           We offer fair, upfront prices with no hidden charges – only honest service. Our pricing model is transparent and designed to suit different budgets. By combining quality with cost-effectiveness, we make sure you get maximum value for your investment.
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
