import React, { useState } from "react";

// Import Motorola phone images
import motorola1 from "../../assets/motorola/motorola (1).png";
import motorola2 from "../../assets/motorola/motorola (2).png";
import motorola3 from "../../assets/motorola/motorola (3).png";
import motorola4 from "../../assets/motorola/motorola (4).png";
import motorola5 from "../../assets/motorola/motorola (5).png";
import motorola6 from "../../assets/motorola/motorola (6).png";
import motorola7 from "../../assets/motorola/motorola (7).png";
import motorola8 from "../../assets/motorola/motorola (8).png";
import motorola9 from "../../assets/motorola/motorola (9).png";
import motorola10 from "../../assets/motorola/motorola (10).png";
import motorola11 from "../../assets/motorola/motorola (11).png";
import motorola12 from "../../assets/motorola/motorola (12).png";
import motorola13 from "../../assets/motorola/motorola (13).png";
import motorola14 from "../../assets/motorola/motorola (14).png";
import motorola15 from "../../assets/motorola/motorola (15).png";
import motorola16 from "../../assets/motorola/motorola (16).png";
import motorola17 from "../../assets/motorola/motorola (17).png";
import motorola18 from "../../assets/motorola/motorola (18).png";
import motorola19 from "../../assets/motorola/motorola (19).png";
import motorola20 from "../../assets/motorola/motorola (20).png";
import motorola21 from "../../assets/motorola/motorola (21).png";
import motorola22 from "../../assets/motorola/motorola (22).png";
import motorola23 from "../../assets/motorola/motorola (23).png";
import motorola24 from "../../assets/motorola/motorola (24).png";
import motorola25 from "../../assets/motorola/motorola (25).png";
import motorola26 from "../../assets/motorola/motorola (26).png";
import motorola27 from "../../assets/motorola/motorola (27).png";
import motorola28 from "../../assets/motorola/motorola (28).png";
import motorola29 from "../../assets/motorola/motorola (29).png";
import motorola30 from "../../assets/motorola/motorola (30).png";
import motorola31 from "../../assets/motorola/motorola (31).png";
import motorola32 from "../../assets/motorola/motorola (32).png";
import motorola33 from "../../assets/motorola/motorola (33).png";
import motorola34 from "../../assets/motorola/motorola (34).png";
import motorola35 from "../../assets/motorola/motorola (35).png";
import motorola36 from "../../assets/motorola/motorola (36).png";
import motorola37 from "../../assets/motorola/motorola (37).png";
import motorola38 from "../../assets/motorola/motorola (38).png";
import motorola39 from "../../assets/motorola/motorola (39).png";
import motorola40 from "../../assets/motorola/motorola (40).png";
import motorola41 from "../../assets/motorola/motorola (41).png";
import motorola42 from "../../assets/motorola/motorola (42).png";
import motorola43 from "../../assets/motorola/motorola (43).png";
import motorola44 from "../../assets/motorola/motorola (44).png";

const MotorolaPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const motorolaModels = [
    { name: "Motorola edge 60 Pro", image: motorola1 },
    { name: "Motorola edge 60 Fusion", image: motorola2 },
    { name: "Motorola Edge 60 stylus", image: motorola3 },
    { name: "Motorola Edge 60", image: motorola4 },
    { name: "Motorola Razer 50 Ultra", image: motorola5 },
    { name: "Motorola Razer 50", image: motorola6 },
    { name: "Motorola Razer 40 Ultra 5G", image: motorola7 },
    { name: "Motorola Razer 40 5G", image: motorola8 },
    { name: "Motorola Moto G04s", image: motorola9 },
    { name: "Motorola Moto G04", image: motorola10 },
    { name: "Motorola Moto G85 5G", image: motorola11 },
    { name: "Motorola Moto G64 5G", image: motorola12 },
    { name: "Motorola Moto G34 5G", image: motorola13 },
    { name: "Motorola Moto G62 5G", image: motorola14 },
    { name: "Motorola Moto Edge 50", image: motorola15 },
    { name: "Motorola Moto Edge 50 Ultra", image: motorola16 },
    { name: "Motorola Moto Edeg50 Fusion", image: motorola17 },
    { name: "Motorola Moto Edeg 50 Pro 5G", image: motorola18 },
    { name: "Motorola Moto Edge 40 Neo", image: motorola19 },
    { name: "Motorola Moto Edge 40", image: motorola20 },
    { name: "Motorola Moto Edge 30 Ultra", image: motorola21 },
    { name: "Motorola Moto Edge 30 fusion", image: motorola22 },
    { name: "Motorola Moto Edge20 fusion", image: motorola23 },
    { name: "Motorola Moto Edge 20", image: motorola24 },
    { name: "Motorola Moto One", image: motorola25 },
    { name: "Motorola Moto G84 5G", image: motorola26 },
    { name: "Motorola Moto G54 5G", image: motorola27 },
    { name: "Motorola Moto G73 5G", image: motorola28 },
    { name: "Motorola Moto G72", image: motorola29 },
    { name: "Motorola Moto G42", image: motorola30 },
    { name: "Motorola Moto G82 5G", image: motorola31 },
    { name: "Motorola Moto G71 5G", image: motorola32 },
    { name: "Motorola Moto G52 ", image: motorola33 },
    { name: "Motorola Moto Edge 30", image: motorola34 },
    { name: "Motorola Moto Edge 30 Pro", image: motorola35 },
    { name: "Motorola Moto G31 ", image: motorola36 },
    { name: "Motorola Moto Edge 20 Pro", image: motorola37 },
    { name: "Motorola Moto G30", image: motorola38 },
    { name: "Motorola Moto G60", image: motorola39 },
    { name: "Motorola One Fusion Pro", image: motorola40 },
    { name: "Motorola One action", image: motorola41 },
    { name: "Motorola One Vison", image: motorola42 },
    { name: "Motorola One Pro", image: motorola43 },
    { name: "Motorola Moto G40 fusion ", image: motorola44 },
  ];

  const filteredModels = motorolaModels.filter((model) =>
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
            Home / Repair / Motorola
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Motorola Repair & Replacement
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
            placeholder="Search Motorola models..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "300px",
              padding: "12px 20px",
              border: "1px solid #ced4da",
              borderRadius: "25px",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "black")}
            onBlur={(e) => (e.target.style.borderColor = "#ced4da")}
          />
        </div>
        {/* Models Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {filteredModels.map((model, index) => (
            <div
              key={index}
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
                e.currentTarget.style.borderColor = "red";
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(66,133,244,0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#dee2e6";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={model.image}
                alt={model.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                  marginBottom: "15px",
                }}
              />
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  margin: "10px 0 5px",
                  color: "#212529",
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
            color: "#495057",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
              color: "black",
            }}
          >
            MOTOROLA REPAIR & REPLACEMENT SERVICES
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            We provide expert repair and replacement services for Motorola devices,
            including screen repair, battery replacement, camera fixes, and
            software troubleshooting. Reach out for reliable service you can
            trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MotorolaPage;