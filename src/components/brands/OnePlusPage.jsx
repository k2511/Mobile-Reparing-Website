import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import OnePlus phone images
import onePlus1 from "../../assets/onePlus/onePlus (1).png";
import onePlus2 from "../../assets/onePlus/onePlus (2).png";
import onePlus3 from "../../assets/onePlus/onePlus (3).png";
import onePlus4 from "../../assets/onePlus/onePlus (4).png";
import onePlus5 from "../../assets/onePlus/onePlus (5).png";
import onePlus6 from "../../assets/onePlus/onePlus (6).png";
import onePlus7 from "../../assets/onePlus/onePlus (7).png";
import onePlus8 from "../../assets/onePlus/onePlus (8).png";
import onePlus9 from "../../assets/onePlus/onePlus (9).png";
import onePlus10 from "../../assets/onePlus/onePlus (10).png";
import onePlus11 from "../../assets/onePlus/onePlus (11).png";
import onePlus12 from "../../assets/onePlus/onePlus (12).png";
import onePlus13 from "../../assets/onePlus/onePlus (13).png";
import onePlus14 from "../../assets/onePlus/onePlus (14).png";
import onePlus15 from "../../assets/onePlus/onePlus (15).png";
import onePlus16 from "../../assets/onePlus/onePlus (16).png";
import onePlus17 from "../../assets/onePlus/onePlus (17).png";
// import onePlus18 from "../../assets/onePlus/onePlus (18).png";
import onePlus19 from "../../assets/onePlus/onePlus (19).png";
import onePlus20 from "../../assets/onePlus/onePlus (20).png";
import onePlus21 from "../../assets/onePlus/onePlus (21).png";
import onePlus22 from "../../assets/onePlus/onePlus (22).png";
import onePlus23 from "../../assets/onePlus/onePlus (23).png";
import onePlus24 from "../../assets/onePlus/onePlus (24).png";
import onePlus25 from "../../assets/onePlus/onePlus (25).png";
import onePlus26 from "../../assets/onePlus/onePlus (26).png";
import onePlus27 from "../../assets/onePlus/onePlus (27).png";
import onePlus28 from "../../assets/onePlus/onePlus (28).png";
import onePlus29 from "../../assets/onePlus/onePlus (29).png";
import onePlus30 from "../../assets/onePlus/onePlus (30).png";
import onePlus31 from "../../assets/onePlus/onePlus (31).png";
import onePlus32 from "../../assets/onePlus/onePlus (32).png";

const OnePlusPage = () => {
 const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onePlusModels = [
    { name: "OnePlus 10 Pro 5G", image: onePlus1 },
    { name: "OnePlus Nord CE 3 5G", image: onePlus2 },
    { name: "OnePlus 11R 5G", image: onePlus3 },
    { name: "OnePlus Node 2", image: onePlus4 },
    { name: "OnePlus Node ", image: onePlus5 },
    { name: "OnePlus Nord CE2 lite", image: onePlus6 },
    { name: "OnePlus 9R 5G", image: onePlus7 },
    { name: "OnePlus 9 Pro", image: onePlus8 },
    { name: "OnePlus 9", image: onePlus9 },
    { name: "OnePlus 8t 5G", image: onePlus10 },
    { name: "OnePlus 8 Pro", image: onePlus11 },
    { name: "OnePlus 7 Pro/ 7T Pro", image: onePlus12 },
    { name: "OnePlus 7 ", image: onePlus13 },
    { name: "OnePlus 6T", image: onePlus14 },
    { name: "OnePlus 6", image: onePlus15 },
    { name: "OnePlus 5T", image: onePlus16 },
    { name: "OnePlus 5", image: onePlus17 },
    // { name: "OnePlus 6sdsT", image: onePlus18 },
    { name: "OnePlus Nord 13", image: onePlus19 },
    { name: "OnePlus Nord 4 ", image: onePlus20 },
    { name: "OnePlus Nord CE4 lite 5G", image: onePlus21 },
    { name: "OnePlus Nord CE4 5G", image: onePlus22 },
    { name: "OnePlus 12R", image: onePlus23 },
    { name: "OnePlus 12", image: onePlus24 },
    { name: "OnePlus Nord CE3 lite 5g", image: onePlus25 },
    { name: "OnePlus Nord CE3 5G", image: onePlus26 },
    { name: "OnePlus Nord 3 5G", image: onePlus27 },
    { name: "OnePlus 10R 5G", image: onePlus28 },
    { name: "OnePlus 10T 5G", image: onePlus29 },
    { name: "OnePlus Open", image: onePlus30 },
    { name: "OnePlus 7t", image: onePlus31 },
    { name: "OnePlus 13R", image: onePlus32 },
  ];

  const filteredModels = onePlusModels.filter((model) =>
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
            Home / Repair / OnePlus
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            OnePlus Repair & Replacement
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
            placeholder="Search OnePlus models..."
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
             onClick={() => {
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
            ONEPLUS REPAIR & REPLACEMENT SERVICES
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            We provide expert repair and replacement services for OnePlus devices,
            including screen repair, battery replacement, camera fixes, and
            software troubleshooting. Reach out for reliable service you can
            trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnePlusPage;





