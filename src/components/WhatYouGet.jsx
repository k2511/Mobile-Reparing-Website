import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStopwatch, FaLaptop, FaMapMarkerAlt, FaEye, FaUserCheck, FaThumbsUp } from "react-icons/fa";

export default function WhatYouGet() {
  const features = [
    {
      icon: <FaStopwatch size={28} className="text-danger" />,
      title: "30-Minute Doorstep Mobile Service",
      desc: "Repairs done in front of you, right at your location."
    },
    {
      icon: <FaLaptop size={28} className="text-danger" />,
      title: "Multi-Device Expertise",
      desc: "From mobiles to Tablet , we handle it all with precision."
    },
    {
      icon: <FaMapMarkerAlt size={28} className="text-danger" />,
      title: "Local & Trusted",
      desc: "Part of your community, delivering honest and reliable service."
    },
    {
      icon: <FaEye size={28} className="text-danger" />,
      title: "Transparent Process",
      desc: "Watch the repair live and know exactly what’s being fixed."
    },
    {
      icon: <FaUserCheck size={28} className="text-danger" />,
      title: "Customer-Centric Approach",
      desc: "Your convenience and satisfaction come first."
    },
    {
      icon: <FaThumbsUp size={28} className="text-danger" />,
      title: "Proven Track Record",
      desc: "Hundreds of happy customers rely on us for quick, quality fixes."
    }
  ];

  return (
    <section style={{ backgroundColor: "#f9f9f9", padding: "60px 0" }}>
      <Container>
        <h2 className="text-center fw-bold mb-3">WHAT YOU GET FROM SCREEN GURU</h2>
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
