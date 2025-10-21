// import React, { useState } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";

// const FreeConsultationBanner = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <section
//       style={{
//         backgroundColor: "#1e2b27",
//         borderRadius: "12px",
//         padding: "30px 25px",
//         margin: "20px auto",
//         maxWidth: "1100px",
//         position: "relative",
//         overflow: "hidden",
//         color: "#fff",
//       }}
//     >
//       <Container fluid>
//         <Row className="align-items-center">
//           {/* Left Text Section */}
//           <Col xs={12} md={8} className="mb-3 mb-md-0">
//             <h3
//               style={{
//                 color: "red",
//                 fontWeight: "700",
//                 marginBottom: "10px",
//                 fontSize: "1.4rem",
//               }}
//             >
//               Get Free Consultation From Our Repair Experts
//             </h3>
//             <p
//               style={{
//                 margin: 0,
//                 fontSize: "15px",
//                 color: "#fff",
//                 lineHeight: "1.5",
//               }}
//             >
//               Speak with a technician and understand your device issue before
//               committing to service.
//             </p>
//           </Col>

//           {/* Right Buttons */}
//           <Col
//             xs={12}
//             md={4}
//             className="d-flex flex-column justify-content-md-end gap-2"
//           >
//             <Button
//               variant="light"
//               style={{
//                 borderRadius: "6px",
//                 fontWeight: "600",
//                 color: "red",
//                 border: "none",
//                 padding: "10px 20px",
//                 fontSize: "14px",
//                 width: "100%",
//               }}
//             >
//               Get Started ↗
//             </Button>

//             {/* Free Consultation Button with hover effect */}
//             <Button
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//               style={{
//                 borderRadius: "6px",
//                 fontWeight: "500",
//                 color: isHovered ? "#fff" : "#fff",
//                 backgroundColor: isHovered ? "#000" : "transparent",
//                 border: "1px solid",
//                 borderColor: isHovered ? "#000" : "#fff",
//                 padding: "10px 20px",
//                 fontSize: "14px",
//                 width: "100%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "6px",
//                 transition: "all 0.3s ease", // smooth hover transition
//               }}
//             >
//               🎧 Free Consultations
//             </Button>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default FreeConsultationBanner;





/*********************************************/
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Consultation.css"; // import CSS file

const FreeConsultationBanner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="free-consultation-banner">
      <Container fluid>
        <Row className="align-items-center gx-3 gy-3">
          {/* Left Text Section */}
          <Col xs={12} md={8} className="mb-3 mb-md-0">
            <h3 className="banner-title">
              Get Free Consultation From Our Repair Experts
            </h3>
            <p className="banner-text">
              Speak with a technician and understand your device issue before
              committing to service.
            </p>
          </Col>

          {/* Right Buttons */}
          <Col
            xs={12}
            md={4}
            className="d-flex flex-column gap-2 justify-content-md-end"
          >
            <Button className="cta-button">Get Started ↗</Button>

            <Button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`consult-button ${isHovered ? "hovered" : ""}`}
            >
              🎧 Free Consultations
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FreeConsultationBanner;
