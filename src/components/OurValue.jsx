import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import iphone from "../assets/image/iphone17.png"
import glass from "../assets/image/glass.png"
import "./OurValue.css";

const OurValue = () => {
  return (
    <section className="our-value-section py-5">
      <Container>
        {/* Heading */}
        <div className="text-center mb-5">
          <p className="value-top-text">OUR VALUE</p>
          <h2 className="value-subheading">
            Driven By Quality, Focused On <br /> Customer Satisfaction
          </h2>
        </div>

        {/* Two Cards */}
        <Row className="g-4">
          {/* Card 1 */}
          <Col lg={6} md={12}>
            <div className="value-card h-100 text-center">
              <h4 className="value-title">
                Our experienced technicians are ready to repair your device right now
              </h4>
              <p className="value-description">
                Inceptos fringilla justo sociosqu semper est pharetra phasellus
                dapibus orci malesuada etiam
              </p>
              <div className="value-image">
                <img
                  src={iphone}
                  alt="Phone Repair"
                  className="img-fluid"
                />
              </div>
            </div>
          </Col>

          {/* Card 2 */}
          <Col lg={6} md={12}>
            <div className="value-card h-100 text-center">
              <h4 className="value-title">
                Our technicians can fix any issue you're facing with your smartphone or computer
              </h4>
       
              <div className="value-image">
                <img
                  src={glass}
                  alt="Server Repair"
                  className="img-fluid"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurValue;
