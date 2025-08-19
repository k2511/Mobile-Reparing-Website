import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tablet.css";
// Import images
import moto1 from "../../assets/motorolaTablet/moto1.jpg";
import moto2 from "../../assets/motorolaTablet/moto2.jpg";
import moto3 from "../../assets/motorolaTablet/moto3.jpg";
import moto4 from "../../assets/motorolaTablet/moto4.jpg";
import moto5 from "../../assets/motorolaTablet/moto5.jpg";
import moto6 from "../../assets/motorolaTablet/moto6.jpg";
import moto7 from "../../assets/motorolaTablet/moto7.jpg";
import moto8 from "../../assets/motorolaTablet/moto8.jpg";
import moto9 from "../../assets/motorolaTablet/moto9.jpg";
import moto10 from "../../assets/motorolaTablet/moto10.jpg";
import moto11 from "../../assets/motorolaTablet/moto11.jpg";
// import moto12 from "../../assets/motorolaTablet/moto12.jpg";
// import moto13 from "../../assets/motorolaTablet/moto13.jpg";
// import moto14 from "../../assets/motorolaTablet/moto14.jpg";
// import moto15 from "../../assets/motorolaTablet/moto15.jpg";
// import moto16 from "../../assets/motorolaTablet/moto16.jpg";
// import moto17 from "../../assets/motorolaTablet/moto17.jpg";
// import moto18 from "../../assets/motorolaTablet/moto18.jpg";
// import moto19 from "../../assets/motorolaTablet/moto19.jpg";
// import moto20 from "../../assets/motorolaTablet/moto20.jpg";

const MotorolaTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Motorola tablet models
  const motoModels = [
    { id: 1, name: "Moto Tab G20", image: moto1 },
    { id: 2, name: "Moto Tab G70", image: moto2 },
    { id: 3, name: "Moto Tab P10", image: moto3 },
    { id: 4, name: "Moto Tab M8", image: moto4 },
    { id: 5, name: "Moto Tab M7", image: moto5 },
    { id: 6, name: "Moto Tab M10", image: moto6 },
    { id: 7, name: "Moto Tab E7", image: moto7 },
    { id: 8, name: "Moto Tab E10", image: moto8 },
    { id: 9, name: "Moto Tab S7", image: moto9 },
    { id: 10, name: "Moto Tab S7 Plus", image: moto10 },
    { id: 11, name: "Moto Tab G30", image: moto11 },
    // { id: 12, name: "Moto Tab G50", image: moto12 },
    // { id: 13, name: "Moto Tab M6", image: moto13 },
    // { id: 14, name: "Moto Tab L7", image: moto14 },
    // { id: 15, name: "Moto Tab L10", image: moto15 },
    // { id: 16, name: "Moto Tab X7", image: moto16 },
    // { id: 17, name: "Moto Tab Z10", image: moto17 },
    // { id: 18, name: "Moto Tab One", image: moto18 },
    // { id: 19, name: "Moto Tab Air", image: moto19 },
    // { id: 20, name: "Moto Tab Pro", image: moto20 },
  ];

  const filteredModels = motoModels.filter((model) =>
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
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: "10px", color: "#6c757d", fontSize: "14px" }}>
            Home / Repair / Tablets / Motorola
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Motorola Tablet Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        {/* Search Box */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search Motorola tablet models..."
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
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
            MOTOROLA TABLET REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Motorola tablets are designed for performance and durability. Whether it’s screen
            replacement, battery repair, or software troubleshooting, our certified technicians
            provide reliable repair services with genuine Motorola parts.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
            WE CAN FIX YOUR MOTOROLA TABLET
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MotorolaTab;
