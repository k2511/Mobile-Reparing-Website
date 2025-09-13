import React, { useState } from "react";
import "./Laptop.css";
import { useNavigate } from "react-router-dom";
import acer1 from "../../assets/acerLaptop/acerLaptop1.jpg";
import acer2 from "../../assets/acerLaptop/acerLaptop2.jpg";
import acer3 from "../../assets/acerLaptop/acerLaptop3.jpg";
import acer4 from "../../assets/acerLaptop/acerLaptop4.jpg";
import acer5 from "../../assets/acerLaptop/acerLaptop5.jpg";
import acer6 from "../../assets/acerLaptop/acerLaptop6.jpg";
import acer7 from "../../assets/acerLaptop/acerLaptop7.jpg";
import acer8 from "../../assets/acerLaptop/acerLaptop8.jpg";
import acer9 from "../../assets/acerLaptop/acerLaptop9.jpg";
import acer10 from "../../assets/acerLaptop/acerLaptop10.jpg";
import acer11 from "../../assets/acerLaptop/acerLaptop11.jpg";
import acer12 from "../../assets/acerLaptop/acerLaptop12.jpg";
import acer13 from "../../assets/acerLaptop/acerLaptop13.jpg";
import acer14 from "../../assets/acerLaptop/acerLaptop14.jpg";
import acer15 from "../../assets/acerLaptop/acerLaptop15.jpg";
import acer16 from "../../assets/acerLaptop/acerLaptop16.jpg";
import acer17 from "../../assets/acerLaptop/acerLaptop17.jpg";
import acer18 from "../../assets/acerLaptop/acerLaptop18.jpg";
import acer19 from "../../assets/acerLaptop/acerLaptop19.jpg";
import acer20 from "../../assets/acerLaptop/acerLaptop20.jpg";
// Add more imports as needed

const AcerLap = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Acer models with images
  const acerModels = [
   { id: 1, name: "Acer Swift 3", image: acer1 },
    { id: 2, name: "Acer Aspire 5", image: acer2 },
    { id: 3, name: "Acer Predator Helios 300", image: acer3 },
    { id: 4, name: "Acer Nitro 5", image: acer4 },
    { id: 5, name: "Acer Chromebook Spin 713", image: acer5 },
    { id: 6, name: "Acer Spin 5", image: acer6 },
    { id: 7, name: "Acer Predator Triton 500", image: acer7 },
    { id: 8, name: "Acer Swift X", image: acer8 },
    { id: 9, name: "Acer ConceptD 7", image: acer9 },
    { id: 10, name: "Acer Aspire 7", image: acer10 },
    { id: 11, name: "Acer Chromebook 514", image: acer11 },
    { id: 12, name: "Acer TravelMate P2", image: acer12 },
    { id: 13, name: "Acer Predator Helios 500", image: acer13 },
    { id: 14, name: "Acer Swift 5", image: acer14 },
    { id: 15, name: "Acer Nitro 7", image: acer15 },
    { id: 16, name: "Acer Chromebook 315", image: acer16 },
    { id: 17, name: "Acer Aspire 3", image: acer17 },
    { id: 18, name: "Acer ConceptD 3", image: acer18 },
    { id: 19, name: "Acer Predator Triton 300", image: acer19 },
    { id: 20, name: "Acer Spin 3", image: acer20 },
    // Add more models as needed
  ];

  const filteredModels = acerModels.filter((model) =>
    model.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              marginBottom: "10px",
              color: "#6c757d",
              fontSize: "14px",
            }}
          >
            Home / Repair / Laptops / Acer
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Acer Laptop Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Content */}
      <div 
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        {/* Search Box */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search Acer models..."
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

        {/* Models Grid */}
        <div className="tablet-grid"
          // style={{
          //   display: "grid",
          //   gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))",
          //   gap: "20px",
          // }}
        >
          {filteredModels.map((model) => (
            <div
              onClick={() =>
                navigate(`/brand-issues/${encodeURIComponent(model.name)}`, {
                  state: { image: model.image, model },
                })
              }
              key={model.id}
              style={{
                backgroundColor: "white",
                border: "1px solid #dee2e6",
                borderRadius: "10px",
                padding: "20px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#007bff";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#dee2e6";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <img
                src={model.image}
                alt={model.name}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                  marginBottom: "15px",
                }}
              />
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  margin: "10px 0 5px",
                }}
              >
                {model.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #dee2e6",
            borderRadius: "10px",
            padding: "40px",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            ACER REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Acer laptops are known for innovation and performance. Whether it’s screen
            replacement, battery repair, or performance upgrades, our certified technicians
            provide reliable repair services with genuine Acer parts.
          </p>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginTop: "30px",
            }}
          >
            WE CAN FIX YOUR ACER
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AcerLap;
