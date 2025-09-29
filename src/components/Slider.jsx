// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Slider.css";
// import HeroImg from "../assets/image/hero-img.png";

// const HeroSection = () => {
//   return (
//     <section className="hero-section position-relative">
//       <Container>
//         <Row className="align-items-center min-vh-75">
//           {/* Text Content */}
//           <Col lg={6} className="hero-content py-5">
//             <h1 className="hero-title fw-bold mb-3">
//               Device Down? Let&apos;s Power It Back Up.
//             </h1>
//             <p className="hero-subtitle mb-4">
//               We repair phones, tablets, and more—restoring performance, data,
//               and peace of mind.
//             </p>
//             <div className="hero-buttons d-flex flex-wrap gap-3">
//               <Button variant="danger" size="lg" className="fw-bold">
//                 Book an Appointment
//               </Button>
//               <div className="d-flex align-items-center mt-2 mt-md-0">
//                 <span className="fw-bold text-white me-2">
//                   Customer Support
//                 </span>
    
//                 <span className="support-number"> +91 9900004528</span>
//               </div>
//             </div>
//           </Col>

//           {/* Hero Image */}
//           <Col lg={6} className="hero-image text-center">
//             <div className="img-container">
//               <img src={HeroImg} alt="Hero device" className="hero-main-img" />
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       {/* Wave Divider */}
//       <div class="custom-shape-divider-bottom-1758017769">
//         <svg
//           data-name="Layer 1"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
//             class="shape-fill"
//           ></path>
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Slider.css";
import HeroImg from "../assets/image/hero-img.png";

const HeroSection = () => {
  return (
    <section className="hero-section position-relative">
      <Container>
        <Row className="align-items-center min-vh-75">
          {/* Text Content */}
          <Col lg={6} className="hero-content py-5">
            <h1 className="hero-title fw-bold mb-3">
              Device Down? Let&apos;s Power It Back Up.
            </h1>
            <p className="hero-subtitle mb-4">
              We repair phones, tablets, and more—restoring performance, data,
              and peace of mind.
            </p>
            <div className="hero-buttons d-flex flex-wrap gap-3">
              <Button variant="danger" size="lg" className="fw-bold">
                Book an Appointment
              </Button>
              <div className="d-flex align-items-center mt-2 mt-md-0">
                <span className="fw-bold text-white me-2">
                  Customer Support
                </span>

                {/* Middle line separator */}
                <span
                  style={{
                    display: "inline-block",
                    width: "1px",
                    height: "20px",
                    backgroundColor: "#ccc",
                    margin: "0 10px",
                  }}
                ></span>

                <span className="support-number"> +91 9900004528</span>
              </div>
            </div>
          </Col>

          {/* Hero Image */}
          <Col lg={6} className="hero-image text-center">
            <div className="img-container">
              <img src={HeroImg} alt="Hero device" className="hero-main-img" />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Wave Divider */}
      <div className="custom-shape-divider-bottom-1758017769">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
