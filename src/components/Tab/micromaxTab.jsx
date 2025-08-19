import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import images
import micromax1 from "../../assets/micromaxTablet/micromax1.jpg";
import micromax2 from "../../assets/micromaxTablet/micromax2.jpg";
import micromax3 from "../../assets/micromaxTablet/micromax3.jpg";
import micromax4 from "../../assets/micromaxTablet/micromax4.jpg";
import micromax5 from "../../assets/micromaxTablet/micromax5.jpg";
import micromax6 from "../../assets/micromaxTablet/micromax6.jpg";
// import micromax7 from "../../assets/micromaxTablet/micromax7.jpg";
// import micromax8 from "../../assets/micromaxTablet/micromax8.jpg";
// import micromax9 from "../../assets/micromaxTablet/micromax9.jpg";
// import micromax10 from "../../assets/micromaxTablet/micromax10.jpg";

const MicromaxTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Micromax tablet models
  const micromaxModels = [
    { id: 1, name: "Micromax Canvas Tab P480", image: micromax1 },
    { id: 2, name: "Micromax Canvas Tab P681", image: micromax2 },
    { id: 3, name: "Micromax Canvas Plex Tab", image: micromax3 },
    { id: 4, name: "Micromax Funbook P365", image: micromax4 },
    { id: 5, name: "Micromax Canvas Tab P650", image: micromax5 },
    { id: 6, name: "Micromax Canvas Tab P666", image: micromax6 },
    // { id: 7, name: "Micromax Canvas Tab P701", image: micromax7 },
    // { id: 8, name: "Micromax Funbook Infinity", image: micromax8 },
    // { id: 9, name: "Micromax Canvas Tab P702", image: micromax9 },
    // { id: 10, name: "Micromax Funbook Ultra", image: micromax10 },
  ];

  const filteredModels = micromaxModels.filter((model) =>
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
            Home / Repair / Tablets / Micromax
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Micromax Tablet Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        {/* Search Box */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search Micromax tablet models..."
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))",
            gap: "20px",
          }}
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
            MICROMAX TABLET REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Micromax tablets are budget-friendly and reliable, making them a popular choice. 
            Whether it’s a cracked screen, battery issue, or software malfunction, 
            our expert technicians provide quick and affordable repair services using quality Micromax parts.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
            WE CAN FIX YOUR MICROMAX TABLET
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MicromaxTab;

