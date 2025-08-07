import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaMoneyBillWave, FaHeadphonesAlt, FaCertificate } from "react-icons/fa";
const ValueProps = () => {
  const data = [
    {
      icon: <FaMoneyBillWave size={40} className="text-danger mb-3" />,
      title: "Value for Money",
      desc: "Doorstep mobile repair by certified experts - genuine parts, transparent pricing, and premium service.",
    },
    {
      icon: <FaHeadphonesAlt size={40} className="text-danger mb-3" />,
      title: "12x7 support",
      desc: "Get 12x7 support from Ongofix - call us or WhatsApp us anytime for quick and professional assistance.",
    },
    {
      icon: <FaCertificate size={40} className="text-danger mb-3" />,
      title: "90 Days warranty",
      desc: "Ongofix offers a 90-day warranty on mobile repairs, covering both parts and service, for your peace of mind.",
    },
  ];

  return (
    <section style={{ backgroundColor: "#f9f9f9", padding: "60px 0" }}>
      <Container>
        <Row className="justify-content-center gap-0">
          {data.map((item, index) => (
            <Col md={4} sm={12} className="text-center mb-4" key={index}>
              <Card className="border-0 bg-transparent">
                <Card.Body>
                  {item.icon}
                  <Card.Title className="fw-semibold">{item.title}</Card.Title>
                  <Card.Text className="text-muted">{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ValueProps;
