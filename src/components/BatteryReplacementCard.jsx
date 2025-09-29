import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

function BatteryReplacementCard() {
  return (
    <Card
      className="mb-4 rounded-4 mx-auto"
      style={{
        background: "#2d2c35",
        color: "#fff",
        maxWidth: "900px", // reduced width
      }}
    >
      <Row className="align-items-center g-0 flex-column flex-md-row">
        {/* Image column - appears on top for mobile, left for desktop */}
        <Col xs={12} md={5} className="text-center">
          <Card.Img
            src="https://avatars.mds.yandex.net/i?id=2e7fe411365689912bba4ef707c5885bacc8cafb-10160311-images-thumbs&n=13"
            alt="Battery"
            className="img-fluid"
            style={{
              borderRadius: "16px",
              objectFit: "cover",
              maxHeight: "260px",
              width: "100%",
            }}
          />
        </Col>

        {/* Text column */}
        <Col xs={12} md={7}>
          <Card.Body className="p-4 text-center text-md-start">
            <Card.Title
              as="h2"
              className="fw-bold mb-3"
              style={{ color: "#ff6f6f" }}
            >
             
            </Card.Title>
            <Card.Text className="mb-3">
           
            </Card.Text>
            <Button
              variant="light"
              className="fw-bold px-4 py-2"
              style={{ color: "#ff6f6f", borderRadius: "8px" }}
            >
              START A REPAIR
            </Button>

            {/* Decorative icons only on desktop */}
            <div
              className="d-none d-md-flex gap-3 mt-4 justify-content-end"
              style={{ fontSize: "2rem" }}
            >
              <span style={{color:"white"}}>&times;</span>
              <span style={{color:"white"}}>+</span>
              <span style={{color:"white"}}>&times;</span>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default BatteryReplacementCard;
