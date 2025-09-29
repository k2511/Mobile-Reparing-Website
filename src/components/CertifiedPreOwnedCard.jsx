import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import back from "../assets/iphone/IphoneBack.png";

function CertifiedPreOwnedCard() {
  return (
    <Card
      className="mb-4 rounded-4 mx-auto"
      style={{
        background: "#67cbf7",
        maxWidth: "900px", // narrower width, centered
      }}
    >
      <Row className="align-items-center g-0 flex-column flex-md-row">
        {/* Image - appears on top in mobile, right on desktop */}
        <Col xs={12} md={4} className="text-center">
          <Card.Img
            // src="https://avatars.mds.yandex.net/i?id=2a82526000ac05d328e13aedbb77a586d4dd9460-4531164-images-thumbs&n=13"
            src={back}
            alt="Certified Device"
            className="p-3 img-fluid"
            style={{
              maxHeight: "220px",
              objectFit: "contain",
              borderRadius: "12px",
            }}
          />
        </Col>

        {/* Text section */}
        <Col xs={12} md={8}>
          <Card.Body className="p-4 text-center text-md-start">
            <Card.Title
              as="h2"
              className="fw-bold mb-3"
              style={{ color: "#fff" }}
            >
           
            </Card.Title>
            <Card.Text className="mb-3" style={{ color: "#fff" }}>
              
            </Card.Text>
            <Button
              variant="light"
              className="fw-bold px-4 py-2"
              style={{ color: "#67cbf7", borderRadius: "8px" }}
            >
              EXPLORE DEVICES
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default CertifiedPreOwnedCard;
