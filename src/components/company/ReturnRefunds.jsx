import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ReturnRefunds = () => {
  return (
    <Container className="py-5 bg-light">
      {/* Header Section */}
      <Row className="justify-content-center text-center mb-5">
        <Col lg={8}>
          <h2 className="fw-bold mb-3" style={{ color: "#b71c1c" }}>
            Return & Refunds
          </h2>
          <p className="text-muted">
            Your satisfaction is our priority. If you are not happy with the repair service, we offer a clear return and refund policy. Contact us within the stipulated time frame, and we will ensure a fair and prompt resolution.
          </p>
        </Col>
      </Row>

      {/* Policy Card */}
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="border-0 shadow-sm p-4">
            <Card.Body>
              <h3 className="fw-bold mb-4" style={{ color: "#c62828" }}>
                Cancellations & Refund Policy
              </h3>

              {/* 1. Cancellation Policy */}
              <h5 className="fw-semibold mt-3">1. Cancellation Policy</h5>
              <ul className="text-muted">
                <li>Once a repair is approved and work has commenced, cancellations are not permitted.</li>
                <li>Diagnostic fees are non-refundable.</li>
              </ul>

              {/* 2. Refund Eligibility */}
              <h5 className="fw-semibold mt-3">2. Refund Eligibility</h5>
              <p className="text-muted">Refunds are only provided if:</p>
              <ul className="text-muted">
                <li>The requested repair cannot be completed due to non-availability of parts or technical limitations.</li>
                <li>An incorrect charge was applied during billing.</li>
                <li>A replacement part provided is found defective and no suitable replacement is available.</li>
              </ul>

              {/* 3. Refund Process */}
              <h5 className="fw-semibold mt-3">3. Refund Process</h5>
              <ul className="text-muted">
                <li>Refund requests must be submitted within 7 days of service.</li>
                <li>Refunds will be processed within 7–10 working days after approval.</li>
                <li>Refunds will be issued to the original payment method unless otherwise agreed in writing.</li>
              </ul>

              {/* 4. Exclusions */}
              <h5 className="fw-semibold mt-3">4. Exclusions</h5>
              <ul className="text-muted">
                <li>The customer changes their mind after the repair is complete.</li>
                <li>The device has been further damaged or tampered with after service.</li>
                <li>Services were declined after diagnostics had been performed.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ReturnRefunds;
