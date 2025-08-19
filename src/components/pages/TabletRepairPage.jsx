
//****************************************************************************************************/

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Samsung from "../../assets/image/Samsung.png";
import Mi from "../../assets/image/mi.png";
import OnePlus from "../../assets/image/oneplus.png";
import Oppo from "../../assets/image/oppo.png";
import Google from "../../assets/image/google.png";
import Realme from "../../assets/image/realme.png";
import Motorola from "../../assets/image/motorala.png";
import iQOO from "../../assets/image/iqoo.png";
import Poco from "../../assets/image/poco.png";

// import Nothing from "../../assets/image/nothing.png";
import Nokia from "../../assets/image/nokia.png";
import Honor from "../../assets/image/honor.png";
import Asus from "../../assets/image/Asus.png";
// import Huawei from "../../assets/image/huawei.png";
import Lava from "../../assets/image/lava.png";
// import Amazon from "../../assets/image/amazon.png";
import Micromax from "../../assets/image/micromax.png";

const brands = [
  { name: "Samsung", image: Samsung },
  { name: "Mi", image: Mi },
  { name: "OnePlus", image: OnePlus },
  { name: "Oppo", image: Oppo },
  { name: "Google", image: Google },
  { name: "Realme", image: Realme },
  { name: "Motorola", image: Motorola },
  { name: "iQOO", image: iQOO },
  { name: "Poco", image: Poco },
  // { name: "Nothing", image: Nothing },
  { name: "Nokia", image: Nokia },
  { name: "Honor", image: Honor },
  { name: "Asus", image: Asus },
  // { name: "Huawei", image: Huawei },
  { name: "Lava", image: Lava },
  // { name: "Amazon", image: Amazon },
  { name: "Micromax", image: Micromax },
];

const TabletRepairPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBrandClick = (brand) => {
    // Navigate to specific brand tablet page
    navigate(`/tablets/${brand.name.toLowerCase()}`, {
      state: { 
        brandName: brand.name,
        brandImage: brand.image 
      }
    });
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #dee2e6",
          padding: "20px 0",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: "10px", color: "#6c757d", fontSize: "14px" }}>
            Home / Repair / Tablets
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#212529", margin: 0 }}>
            Tablet Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Content */}
      <Container className="py-5 text-center">
        {/* Search Box */}
        <div style={{ marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search Tablet Brands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "300px",
              padding: "12px 20px",
              border: "1px solid #ced4da",
              borderRadius: "25px",
              fontSize: "16px",
              outline: "none",
            }}
          />
        </div>

        {/* Brands Grid */}
        <Row xs={3} sm={4} md={5} lg={6} className="g-4">
          {filteredBrands.map((brand, idx) => (
            <Col key={idx} className="d-flex justify-content-center">
              <div
                className="brand-card"
                onClick={() => handleBrandClick(brand)}
              >
                <img src={brand.image} alt={brand.name} className="brand-logo" />
              </div>
            </Col>
          ))}
        </Row>

        {/* Info Section */}
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #dee2e6",
            borderRadius: "10px",
            padding: "40px",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
            TABLET REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Your tablet is an essential part of your digital life — whether you use it for
            work, entertainment, or staying connected. Our expert repair services ensure
            fast turnaround times, genuine parts, and lasting quality so you can get back
            to what matters most.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
            WE CAN FIX YOUR TABLET
          </h3>
        </div>
      </Container>

      {/* Scoped CSS */}
      <style>{`
        .brand-card {
          width: 150px;
          height: 150px;
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
          max-height: 60px;
          max-width: 80%;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
};

export default TabletRepairPage;