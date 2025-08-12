import React, { useState } from "react";

// Import Poco phone images
import poco1 from "../../assets/poco/poco (1).png";
import poco2 from "../../assets/poco/poco (2).png";
import poco3 from "../../assets/poco/poco (3).png";
import poco4 from "../../assets/poco/poco (4).png";
import poco5 from "../../assets/poco/poco (5).png";
import poco6 from "../../assets/poco/poco (6).png";
import poco7 from "../../assets/poco/poco (7).png";
import poco8 from "../../assets/poco/poco (8).png";
import poco9 from "../../assets/poco/poco (9).png";
// import poco10 from "../../assets/poco/poco (10).png";
import poco11 from "../../assets/poco/poco (11).png";
import poco12 from "../../assets/poco/poco (12).png";
import poco13 from "../../assets/poco/poco (13).png";
import poco14 from "../../assets/poco/poco (14).png";
import poco15 from "../../assets/poco/poco (15).png";
import poco16 from "../../assets/poco/poco (16).png";
import poco17 from "../../assets/poco/poco (17).png";
import poco18 from "../../assets/poco/poco (18).png";
import poco19 from "../../assets/poco/poco (19).png";
import poco20 from "../../assets/poco/poco (20).png";
import poco21 from "../../assets/poco/poco (21).png";
import poco22 from "../../assets/poco/poco (22).png";
import poco23 from "../../assets/poco/poco (23).png";
import poco24 from "../../assets/poco/poco (24).png";
import poco25 from "../../assets/poco/poco (25).png";
import poco26 from "../../assets/poco/poco (26).png";
import poco27 from "../../assets/poco/poco(27).png";
// import poco28 from "../../assets/poco/poco (28).png";
// import poco29 from "../../assets/poco/poco (29).png";

const PocoPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const pocoModels = [
    { name: "Poco M4 Pro ", image: poco1 },
    { name: "Poco M3 Pro 5G", image: poco2 },
    { name: "Poco M3 Pro", image: poco3 },
    { name: "Poco M2 Pro", image: poco4 },
    { name: "Poco M2", image: poco5 },
    { name: "Poco X3 Pro", image: poco6 },
    { name: "Poco X3 ", image: poco7 },
    { name: "Poco X2", image: poco8 },
    { name: "Poco F1", image: poco9 },
    // { name: "Poco M6", image: poco10 },
    { name: "Poco X6 ", image: poco11 },
    { name: "Poco C65 ", image: poco12 },
    { name: "Poco C3", image: poco13 },
    { name: "Poco C55", image: poco14 },
    { name: "Poco C51", image: poco15 },
    { name: "Poco C50", image: poco16 },
    { name: "Poco M6 Pro", image: poco17 },
    { name: "Poco M5", image: poco18 },
    { name: "Poco M4 pro 5G", image: poco19 },
    { name: "Poco M4 5G", image: poco20 },
    { name: "Poco X5 pro 5G", image: poco21 },
    { name: "Poco X5", image: poco22 },
    { name: "Poco X4 Pro", image: poco23 },
    { name: "Poco F5 5G", image: poco24 },
    { name: "Poco F4 Pro", image: poco25 },
    { name: "Poco F3 GT", image: poco26 },
    // { name: "Poco C61", image: poco27 },
    // { name: "Poco M7 Pro 2025", image: poco28 },
    // { name: "Poco X7 2025", image: poco29 },
  ];

  const filteredModels = pocoModels.filter((model) =>
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
            Home / Repair / Poco
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Poco Repair & Replacement
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
            placeholder="Search Poco models..."
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
            Poco REPAIR & REPLACEMENT SERVICES
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            We provide expert repair and replacement services for Poco devices,
            including screen repair, battery replacement, camera fixes, and
            software troubleshooting. Reach out for reliable service you can
            trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PocoPage;