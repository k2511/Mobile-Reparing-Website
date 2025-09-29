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
            1. Why is my phone battery draining fast, and how do you fix it?
          </Accordion.Header>
          <Accordion.Body>
            Fast battery drain comes from wear, faulty cells, or heavy apps. We
            test the issue, replace it with a genuine battery, and fine-tune
            settings for longer backup—covered by warranty in Bangalore.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            2. What should I do if my phone screen cracks or becomes
            unresponsive?
          </Accordion.Header>
          <Accordion.Body>
            A cracked or frozen screen makes your phone unsafe and hard to use.
            We replace it with original displays for smooth touch, clear
            visuals, and strong durability. Every screen repair comes with a
            warranty in Bangalore.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            3. Why does my phone overheat, and can it be repaired?
          </Accordion.Header>
          <Accordion.Body>
            Overheating happens due to hardware faults, blocked vents, or heavy
            apps. We check your phone, fix damaged parts, and clean inside. This
            keeps it safe to use and improves performance.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            4. Can I recover data if my device doesn’t turn on?
          </Accordion.Header>
          <Accordion.Body>
            Yes. Our experts use advanced tools to recover your contacts,
            photos, and files. After recovery, we repair the device while
            keeping your privacy and data fully safe.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            5. Why is my charging port loose or not working properly?
          </Accordion.Header>
          <Accordion.Body>
            A faulty charging port may be dirty, worn, or broken. We clean,
            repair, or replace it with genuine parts. After service, your phone
            charges smoothly and safely again in Bangalore.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>
            6. How can I fix a slow phone or laptop performance issue?
          </Accordion.Header>
          <Accordion.Body>
            A slow device is often caused by malware or low storage. We clean
            the system, remove bugs, and upgrade parts if needed. After service,
            your device runs faster and smoother.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>
            7. What if my phone’s speaker or mic stops working during calls?
          </Accordion.Header>
          <Accordion.Body>
            Dust, water, or damaged circuits cause sound issues. We clean ports,
            repair audio chips, or replace broken parts. After repair, you enjoy
            clear calls, music, and video again.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>
            8. Can water-damaged devices be repaired successfully?
          </Accordion.Header>
          <Accordion.Body>
            Yes, many can. We use drying chambers and anti-corrosion methods to
            repair water damage. Quick service improves success rates and
            protects your device from long-term problems.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header>
            9. Why is my phone camera blurry or not focusing correctly?
          </Accordion.Header>
          <Accordion.Body>
            Blurry photos come from dust, scratches, or hardware faults. We
            clean lenses, realign the camera, or replace broken parts. Our
            service restores sharp focus and high-quality images.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
          <Accordion.Header>
            10. What can I do if my apps crash or software keeps freezing?
          </Accordion.Header>
          <Accordion.Body>
            Apps often crash from malware or outdated software. We update your
            system, remove errors, and install fixes. After service, your phone
            or laptop runs smoothly without constant issues.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Row className="mt-5">
        <Col>
          <h4 className="fw-bold">
            Why Choose Screen Guru Go for Mobile Repair?
          </h4>
          <p className="text-muted">
            We are committed to delivering top-notch service that exceeds
            expectations every time. Our approach combines expertise, dedication,
            and customer-centric values to ensure your complete satisfaction.
            Whether it’s speed, skill, or affordability, we stand out as your
            trusted partner for reliable solutions.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4 className="fw-bold">Fast & Reliable Service</h4>
          <p className="text-muted">
            We value your time, providing quick turnarounds without compromising
            on quality. Our streamlined processes and responsive team ensure
            that your issues are addressed promptly. We also maintain strict
            timelines, so you can get back to your routine without unnecessary
            delays.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4 className="fw-bold">Mobile Screen Repair</h4>
          <p className="text-muted">
            Revitalize your device with Screen Guru premier mobile screen repair
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
            Our skilled team uses advanced tools to deliver precision repairs
            every time. Each technician is trained to handle complex tasks with
            accuracy and professionalism. We also stay updated with the latest
            industry techniques to ensure lasting results for every project.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h4 className="fw-bold">Affordable Pricing</h4>
          <p className="text-muted">
            We offer fair, upfront prices with no hidden charges – only honest
            service. Our pricing model is transparent and designed to suit
            different budgets. By combining quality with cost-effectiveness, we
            make sure you get maximum value for your investment.
          </p>
        </Col>
      </Row>

      {/* Custom Styles */}
      <style>
        {`
        .accordion-button:not(.collapsed) {
          color: unset !important;
          background-color: unset !important;
          box-shadow: unset !important;
        }
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
        }
        `}
      </style>
    </Container>
  );
};

export default FAQ;
