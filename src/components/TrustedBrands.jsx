import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const TrustedBrands = () => {
  const logos = [
    { src: "data:image/png;base64,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", alt: "Samsung" },
    { src: "data:image/png;base64,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", alt: "Iphone" },
    { src: "https://1000logos.net/wp-content/uploads/2022/11/OnePlus-Logo.png", alt: "Oneplus" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", alt: "Oppo" },

  ];

  return (
    <section
      style={{
        backgroundColor: "#f6f6fb",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <Container>
        {/* Heading */}
        <h3 style={{ fontWeight: "700", marginBottom: "10px", fontSize: "1.5rem" }}>
          Trusted by 15,000+ world-class brands <br /> and organizations of all sizes
        </h3>

     

        {/* Logos Grid */}
        <Row className="justify-content-center g-4">
          {logos.map((logo, index) => (
            <Col
              key={index}
              xs={6}
              md={4}
              lg={3}
              className="d-flex align-items-center justify-content-center"
              style={{
                borderRight:
                  index === 1 || index === 2 || index === 5 || index === 6
                    ? "1px solid #ddd"
                    : "none",
                padding: "20px 10px",
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ maxHeight: "40px", objectFit: "contain" }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TrustedBrands;
