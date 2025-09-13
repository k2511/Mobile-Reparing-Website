/****----------New Code Start Here------------------------------------------ */
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Dell from "../../assets/image/dell.png";
import HP from "../../assets/image/hp.png";
import Lenovo from "../../assets/image/lenovo.png";
import Asus from "../../assets/image/Asus.png";
import Acer from "../../assets/image/acer.png";
import MSI from "../../assets/image/msi.png";
import Microsoft from "../../assets/image/microsoft.png";
import Samsung from "../../assets/image/Samsung.png";


const brands = [
  { name: "Dell", image: Dell },
  { name: "HP", image: HP },
  { name: "Lenovo", image: Lenovo },
  { name: "Asus", image: Asus },
  { name: "MSI", image: MSI },
  { name: "Acer", image: Acer },
  { name: "Microsoft", image: Microsoft },
  { name: "Samsung", image:Samsung }

];

const LaptopRepairPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBrandClick = (brand) => {
    navigate(`/laptops/${brand.name.toLowerCase()}`, {
      state: { brandName: brand.name, brandImage: brand.image },
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
            Home / Repair / Laptops
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#212529", margin: 0 }}>
            Laptop Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Content */}
      <Container className="py-5 text-center">
        {/* Search Box */}
        <div style={{ marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search Laptop Brands..."
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
              <div className="brand-card" onClick={() => handleBrandClick(brand)}>
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
            LAPTOP REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Your laptop is an essential part of your daily life. Our expert repair and
            replacement services ensure fast turnaround, genuine parts, and reliable
            performance, so you can get back to work without delays.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
            WE CAN FIX YOUR LAPTOP
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
          border-color: #007bff;
          box-shadow: 0 6px 20px rgba(0, 123, 255, 0.1);
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

export default LaptopRepairPage;







