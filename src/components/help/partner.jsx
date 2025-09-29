import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Partner = () => {
  return (
    <Container className="py-5">
      {/* Title */}
      <h1 className="text-center fw-bold mb-4 text-danger display-6">
        Partner With Us
      </h1>

      {/* Subtitle */}
      <p className="text-center text-secondary fs-6 mb-5">
        We believe collaboration drives growth.{" "}
        <span className="text-danger fw-semibold">ScreenGuru</span> welcomes
        partnerships with organizations, resellers, corporates, and logistics
        providers who share our vision of delivering high-quality mobile repair
        services.
      </p>

      {/* Why Partner With Us */}
      <div className="mt-4 text-center">
        <h3 className="h5 fw-semibold text-dark mb-3">Why Partner With Us?</h3>
        <ul className="list-unstyled text-secondary fs-6 lh-lg">
          <li> Access to a trusted and established repair brand.</li>
          <li>
            End-to-end repair solutions customized for B2B and B2C needs.
          </li>
          <li>
             Service-level agreements (SLAs) ensuring reliability and
            accountability.
          </li>
          <li> Transparent contracts with no hidden terms.</li>
          <li> Dedicated partner support team.</li>
        </ul>
      </div>

      {/* Types of Partnerships */}
      <Row className="g-4 mt-4">
        <Col xs={12} md={4}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <Card.Title className="fw-semibold text-dark text-center">
                Corporate Tie-Ups
              </Card.Title>
              <Card.Text className="text-secondary">
                Device repair services for employees and clients under corporate
                plans. We provide reliable and scalable solutions tailored to
                business needs, ensuring devices are always up and running.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <Card.Title className="fw-semibold text-dark text-center">
                Retail & Franchise Partners
              </Card.Title>
              <Card.Text className="text-secondary">
                Set up authorized service kiosks or outlets with our brand
                support. Gain from our expertise, marketing materials, and
                nationwide recognition while serving your local market.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <Card.Title className="fw-semibold text-dark text-center">
                Technology & Logistics Partners
              </Card.Title>
              <Card.Text className="text-secondary">
                Collaborate with us to build smooth supply chain and delivery
                networks. Together, we can enhance efficiency and ensure timely
                service for all customers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Call to Action */}
      <div className="text-center mt-5">
        <p className="fw-medium text-dark fs-6">
          If you’re looking for a credible repair partner with proven expertise,
          reach out to us at{" "}
          <a href="mailto:info@screenguru.in" className="text-danger">
            info@screenguru.in
          </a>{" "}
       
          .
        </p>
        <Button
          href="tel:9900004531"
          variant="danger"
          className="px-4 py-2 rounded-pill shadow-sm"
        >
          📞 Call Us
        </Button>
      </div>
    </Container>
  );
};

export default Partner;
