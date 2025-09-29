import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const PartnerWithUs = () => {
  return (
    <Container className="py-5 bg-light">
      <Row className="justify-content-center text-center mb-4">
        <Col lg={8}>
          <h2 className="fw-bold mb-3">Partner With Us</h2>
          <p className="text-muted">
            Join hands with us to provide exceptional repair services. Whether you are a business, retailer, or tech professional, we offer collaboration opportunities that drive growth and customer satisfaction.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center text-center">
        <Col lg={6}>
          <Card className="border-0 shadow-sm p-4">
            <Card.Body>
              <h3 className="fw-bold mb-3">Why Partner With Us?</h3>
              <ul className="text-muted text-start">
                <li>Access to expert repair services for your customers.</li>
                <li>Exclusive partnership benefits and support.</li>
                <li>Reliable service with warranty and quality assurance.</li>
                <li>Collaborative growth opportunities for businesses and professionals.</li>
              </ul>
              <Button 
                variant="danger" 
                size="lg" 
                className="mt-3 fw-semibold"
              >
                Become a Partner
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PartnerWithUs;
