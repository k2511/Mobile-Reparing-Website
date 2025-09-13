import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaClock, FaCogs, FaSearch, FaShieldAlt } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaClock size={28} className="text-danger" />,
      title: "Same-Day Repairs",
      desc: "Get your device back on the same day for most issues. We work efficiently to minimize downtime, ensuring you’re back to normal quickly."
    },
    {
      icon: <FaCogs size={28} className="text-danger" />,
      title: "Quality Parts",
      desc: "We use only high-grade replacement components. Every part is tested for durability and performance to match or exceed original quality."
    },
    {
      icon: <FaSearch size={28} className="text-danger" />,
      title: "Free Diagnostics",
      desc: "Find out the exact issue without any charges. Our detailed checks help you make informed decisions without financial pressure."
    },
    {
      icon: <FaShieldAlt size={28} className="text-danger" />,
      title: "Warranty on Repairs",
      desc: "Enjoy peace of mind with our repair guarantees. If the problem recurs, we’ll fix it without additional cost within the warranty period."
    }
  ];

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "60px 0" }}>
      <Container>
        <h2 className="text-center fw-bold mb-3">OUR FEATURES</h2>
        <hr
          style={{
            width: "80px",
            border: "2px solid red",
            margin: "0 auto 40px"
          }}
        />

        <Row>
          {features.map((item, idx) => (
            <Col md={6} key={idx} className="mb-4">
              <Card className="shadow-sm border-0 h-100">
                <Card.Body className="d-flex align-items-start">
                  <div className="me-3 mt-1">{item.icon}</div>
                  <div>
                    <Card.Title className="fw-semibold">{item.title}</Card.Title>
                    <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>
                      {item.desc}
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
