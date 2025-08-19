import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tablet.css";
// Import Honor tablet images
import honor1 from "../../assets/honorTablet/honor1.jpg";
import honor2 from "../../assets/honorTablet/honor2.jpg";
import honor3 from "../../assets/honorTablet/honor3.jpg";
import honor4 from "../../assets/honorTablet/honor4.jpg";
// import honor5 from "../../assets/honorTablet/honor5.jpg";
import honor6 from "../../assets/honorTablet/honor6.jpg";
// import honor7 from "../../assets/honorTablet/honor7.jpg";
// import honor8 from "../../assets/honorTablet/honor8.jpg";
// import honor9 from "../../assets/honorTablet/honor9.jpg";
// import honor10 from "../../assets/honorTablet/honor10.jpg";
// import honor11 from "../../assets/honorTablet/honor11.jpg";


const HonorTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const honorModels = [
    { id: 1, name: "honor Pad X8a", image: honor1 },
    { id: 2, name: "Honor Magic Pad 2", image: honor2 },
    { id: 3, name: "Honor Pad 9", image: honor3 },
    { id: 4, name: "Honor Pad X9", image: honor4 },
    // { id: 5, name: "Honor Pad 9", image: honor5 },
    { id: 6, name: "Honor Pad 8", image: honor6 },
    // { id: 3, name: "Honor Pad 9", image: honor3 },
    // { id: 3, name: "Honor Pad 9", image: honor3 },
    // { id: 3, name: "Honor Pad 9", image: honor3 },
    
  ];

  const filteredModels = honorModels.filter((model) =>
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
            Home / Repair / Tablets / Honor
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#212529", margin: 0 }}>
            Honor Tablet Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Search */}
      <div style={{ textAlign: "center", margin: "40px 0" }}>
        <input
          type="text"
          placeholder="Search Honor tablet models..."
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

      {/* Tablet Models Grid */}
      <div className="tablet-grid"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          // display: "grid",
          // gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))",
          gap: "20px",
          padding: "0 20px",
        }}
      >
        {filteredModels.map((model) => (
          <div
            key={model.id}
            onClick={() =>
              navigate(`/brand-issues/${encodeURIComponent(model.name)}`, {
                state: { image: model.image, model },
              })
            }
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
              style={{ width: "100px", height: "100px", objectFit: "contain", marginBottom: "15px" }}
            />
            <h3 style={{ fontSize: "16px", fontWeight: "600", margin: "10px 0 5px" }}>
              {model.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Bottom Info Section */}
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #dee2e6",
          borderRadius: "10px",
          padding: "40px",
          textAlign: "center",
          margin: "40px 20px 0",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
          HONOR TABLET REPAIR & REPLACEMENT
        </h2>
        <p style={{ color: "#6c757d", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto" }}>
          Honor tablets are designed for sleek performance and vibrant displays. Our certified
          technicians provide fast screen repairs, battery replacements, and software fixes using
          genuine Honor parts.
        </p>
        <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
          WE CAN FIX YOUR HONOR TABLET
        </h3>
      </div>
    </div>
  );
};

export default HonorTab;
