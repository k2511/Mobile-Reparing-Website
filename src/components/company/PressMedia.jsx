import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const mediaMentions = [
  { name: "Tech Times", logo: "https://via.placeholder.com/150x50?text=Tech+Times", link: "#" },
  { name: "Gadget World", logo: "https://via.placeholder.com/150x50?text=Gadget+World", link: "#" },
  { name: "Daily Tech News", logo: "https://via.placeholder.com/150x50?text=Daily+Tech+News", link: "#" },
  { name: "Smart Devices Mag", logo: "https://via.placeholder.com/150x50?text=Smart+Devices+Mag", link: "#" },
];

const PressMedia = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center mb-4">
        <Col lg={8}>
          <h2 className="fw-bold mb-3">Press & Media</h2>
          <p className="text-muted">
            We’re proud to be featured by leading tech publications and media outlets. Check out some of our recent mentions and collaborations.
          </p>
        </Col>
      </Row>

      <Row className="g-4 justify-content-center">
        {mediaMentions.map((media, idx) => (
          <Col xs={6} sm={4} md={3} key={idx} className="text-center">
            <a href={media.link} target="_blank" rel="noopener noreferrer">
              <Card className="border-0 shadow-sm p-3 h-100 d-flex align-items-center justify-content-center">
                <Card.Img 
                  variant="top" 
                  src={media.logo} 
                  alt={media.name} 
                  style={{ maxHeight: "60px", objectFit: "contain" }} 
                />
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PressMedia;
