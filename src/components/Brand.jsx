import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Iphone from "../assets/iphone/iphone.png";
import Samsung from "../assets/image/samsung.png";
import Mi from "../assets/image/mi.png";
import Vivo from "../assets/image/vivo.png";
import OnePlus from "../assets/image/oneplus.png";
import Oppo from "../assets/image/oppo.png";
import Google from "../assets/image/google.png";
import Realme from "../assets/image/realme.png";
import Motorola from "../assets/image/motorala.png";
import iQOO from "../assets/image/iqoo.png";
import Poco from "../assets/image/poco.png";
import Tecno from "../assets/image/techno.png";
import Nothing from "../assets/image/nothing.png";
import Nokia from "../assets/image/nokia.png";
import Honor from "../assets/image/honor.png";
import Asus from "../assets/image/asus.png";
import Huawei from "../assets/image/huawei.png";

const brands = [
  { name: "iPhone", image: Iphone },
  { name: "Samsung", image: Samsung },
  { name: "Mi", image: Mi },
  { name: "Vivo", image: Vivo },
  { name: "OnePlus", image: OnePlus },
  { name: "Oppo", image: Oppo },
  { name: "Google", image: Google },
  { name: "Realme", image: Realme },
  { name: "Motorola", image: Motorola },
  { name: "iQOO", image: iQOO },
  { name: "Poco", image: Poco },
  { name: "Tecno", image: Tecno },
  { name: "Nothing", image: Nothing },
  { name: "Nokia", image: Nokia },
  { name: "Honor", image: Honor },
  { name: "Asus", image: Asus },
  { name: "Huawei", image: Huawei },
];

const Brand = () => {
  const navigate = useNavigate();

  const handleBrandClick = (brandName) => {
    navigate(`/brand/${brandName.toLowerCase()}`);
  };

  return (
    <Container className="my-5 text-center" id="mobile-section">
      {/* Responsive marginTop handled via CSS */}
      <h3 className="brand-heading mb-2">
        CHOOSE YOUR BRANDS
      </h3>
      <div className="brand-underline mx-auto mb-4"></div>

      <style>{`
       .brand-heading {
    font-size: 25px;
    font-weight: 700;
    margin-top: 0; /* default for mobile */
  }

  @media (min-width: 992px) {
    .brand-heading {
      margin-top: 100px;
    }
  }

  /* Default mobile size */
  .brand-card {
    width: 120px;
    height: 100px;
    background: #fff;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    margin: auto;
    cursor: pointer;
  }

  .brand-card:hover {
    border-color: #e60000;
    box-shadow: 0 6px 20px rgba(230, 0, 0, 0.1);
  }

  .brand-logo {
    max-height: 50px; /* slightly smaller for mobile */
    max-width: 80%;
    object-fit: contain;
  }

  /* Tablet */
  @media (min-width: 576px) {
    .brand-card {
      width: 116px !important;
    height: 118px !important;
    }
    .brand-logo {
      max-height: 55px;
    }
  }

  /* Medium devices */
  @media (min-width: 768px) {
    .brand-card {
       width: 116px;
    height: 140px;
    }
    .brand-logo {
      max-height: 60px;
    }
  }

  /* Large devices */
  @media (min-width: 992px) {
    .brand-card {
      width: 150px;
      height: 150px;
    }
    .brand-logo {
      max-height: 60px;
    }
  }

  .brand-underline {
    width: 200px;
    height: 2px;
    background-color: #e60000;
  }
      `}</style>

      <Row xs={3} sm={4} md={5} lg={6} className="g-4">
        {brands.map((brand, idx) => (
          <Col key={idx} className="d-flex justify-content-center" style={{marginTop:"10px"}}>
            <div
              className="brand-card"
              onClick={() => handleBrandClick(brand.name)}
            >
              <img src={brand.image} alt={brand.name} className="brand-logo" />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Brand;
