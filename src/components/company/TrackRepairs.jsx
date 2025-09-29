import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const trackSteps = [
  {
    title: "Tracking Access",
    description:
      "Customers can track the real-time status of their repair using a Job ID, registered mobile number, or email ID provided at the time of booking.",
  },
  {
    title: "Updates Provided",
    description:
      "The repair tracker will display each stage of the service, including:\n- Device check-in and initial diagnosis\n- Parts availability and ordering (if applicable)\n- Repair in progress\n- Quality assurance testing\n- Ready for delivery or collection",
  },
  {
    title: "Transparency",
    description:
      "We make every effort to keep tracking information accurate and regularly updated. Estimated turnaround times are provided for each stage; however, delays due to part availability, courier logistics, or other unforeseen factors may occur.",
  },
  {
    title: "Customer Responsibility",
    description:
      "It is the customer’s responsibility to provide correct contact details at booking. We are not responsible for missed updates caused by incorrect or outdated information.",
  },
];

const TrackRepairs = () => {
  return (
    <Container className="py-5">
      <h2
        className="text-center mb-4"
        style={{ color: "#c62828", fontWeight: "700" }}
      >
        Track Your Repair
      </h2>
      <Row className="g-4">
        {trackSteps.map((step, idx) => (
          <Col xs={12} md={6} key={idx}>
            <Card
              className="h-100 shadow-sm border-0"
              style={{
                borderTop: "4px solid #c62828",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
              }}
            >
              <Card.Body className="d-flex flex-column">
                <Card.Title
                  className="fw-bold mb-3"
                  style={{ color: "#b71c1c", fontSize: "1.25rem" }}
                >
                  {step.title}
                </Card.Title>
                <Card.Text style={{ color: "#555", whiteSpace: "pre-line" }}>
                  {step.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TrackRepairs;
