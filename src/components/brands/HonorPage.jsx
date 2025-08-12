import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Resposive.css';
// Import Honor phone images
import honor1 from "../../assets/honor/honor (1).png";
import honor2 from "../../assets/honor/honor (2).png";
import honor3 from "../../assets/honor/honor (3).png";
import honor4 from "../../assets/honor/honor (4).png";
import honor5 from "../../assets/honor/honor (5).png";
import honor6 from "../../assets/honor/honor (6).png";
import honor7 from "../../assets/honor/honor (7).png";
import honor8 from "../../assets/honor/honor (8).png";
import honor9 from "../../assets/honor/honor (9).png";
import honor10 from "../../assets/honor/honor (10).png";
import honor11 from "../../assets/honor/honor (11).png";
import honor12 from "../../assets/honor/honor (12).png";
import honor13 from "../../assets/honor/honor (13).png";
// import honor14 from "../../assets/honor/honor (14).png";
import honor15 from "../../assets/honor/honor (15).png";

const HonorPage = () => {
 const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const honorModels = [
    { name: "Honor 20", image: honor1 },
    { name: "Honor 10 lite", image: honor2 },
    { name: "Honor 10 9S", image: honor3 },
    { name: "Honor 9A", image: honor4 },
    { name: "Honor 9lite", image: honor5 },
    { name: "Honor 9i", image: honor6 },
    { name: "Honor 10", image: honor7 },
    { name: "Honor 8x", image: honor8 },
    { name: "Honor 8", image: honor9 },
    { name: "Honor 7x", image: honor10 },
    { name: "Honor 7s", image: honor11 },
    { name: "Honor 7c", image: honor12 },
    { name: "Honor 7A", image: honor13 },
    // { name: "Honor ", image: honor14 },
    { name: "Honor 20i", image: honor15 },
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
            Home / Repair / Honor
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Honor Repair & Replacement
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
            placeholder="Search Honor models..."
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
            onFocus={(e) => (e.target.style.borderColor = "#4285f4")}
            onBlur={(e) => (e.target.style.borderColor = "#ced4da")}
          />
        </div>
        
        {/* Models Grid */}
        <div className="main"
          // style={{
          //   display: "grid",
          //   gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          //   gap: "20px",
          //   marginBottom: "40px",

            
          // }}
        >
          {filteredModels.map((model, index) => (
            <div     onClick={() => {
                navigate(`/brand-issues/${encodeURIComponent(model.name)}`, {
                  state: { image: model.image },
                });
              }}
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
                e.currentTarget.style.borderColor = "#4285f4";
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
                  borderRadius: "8px",
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
            HONOR REPAIR & REPLACEMENT SERVICES
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            We provide expert repair and replacement services for Honor devices,
            including screen repair, battery replacement, camera fixes, and
            software troubleshooting. Reach out for reliable service you can
            trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HonorPage;