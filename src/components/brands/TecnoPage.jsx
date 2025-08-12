import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Resposive.css';
// Import Tecno phone images
import tecno1 from "../../assets/techno/techno (1).png";
import tecno2 from "../../assets/techno/techno (2).png";
import tecno3 from "../../assets/techno/techno (3).png";
import tecno4 from "../../assets/techno/techno (4).png";
import tecno5 from "../../assets/techno/techno (5).png";
import tecno6 from "../../assets/techno/techno (6).png";
import tecno7 from "../../assets/techno/techno (7).png";
import tecno8 from "../../assets/techno/techno (8).png";
import tecno9 from "../../assets/techno/techno (9).png";
import tecno10 from "../../assets/techno/techno (10).png";
import tecno11 from "../../assets/techno/techno (11).png";
import tecno12 from "../../assets/techno/techno (12).png";
import tecno13 from "../../assets/techno/techno (13).png";
import tecno14 from "../../assets/techno/techno (14).png";
import tecno15 from "../../assets/techno/techno (15).png";
import tecno16 from "../../assets/techno/techno (16).png";
// import tecno17 from "../../assets/techno/techno (17).png";
import tecno18 from "../../assets/techno/techno (18).png";

const TecnoPage = () => {
 const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const tecnoModels = [
    { name: "Tecno spark Go 2021", image: tecno1 },
    { name: "Tecno spark Go 2020", image: tecno2 },
    { name: "Tecno spark GO", image: tecno3 },
    { name: "Tecno 8T", image: tecno4 },
    { name: "Tecno 8C", image: tecno5 },
    { name: "Tecno 8 ", image: tecno6 },
    { name: "Tecno spark 7T", image: tecno7 },
    { name: "Tecno Spark 7 pro", image: tecno8 },
    { name: "Tecno Spark 7", image: tecno9 },
    { name: "Tecno Spark 6 go", image: tecno10 },
    { name: "Tecno Spark 6 Air", image: tecno11 },
    { name: "Tecno Spark 5 pro", image: tecno12 },
    { name: "Tecno Spark 5", image: tecno13 },
    { name: "Tecno Phantom Spark 4", image: tecno14 },
    { name: "Tecno Camon 16", image: tecno15 },
    { name: "Tecno Camon 12AR", image: tecno16 },
    // { name: "Tecno Spark 20 Pro 2025", image: tecno17 },
    { name: "Tecno Spark Power", image: tecno18 },
  ];

  const filteredModels = tecnoModels.filter((model) =>
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
            Home / Repair / Tecno
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Tecno Repair & Replacement
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
            placeholder="Search Tecno models..."
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
        <div className="main"
          // style={{
          //   display: "grid",
          //   gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          //   gap: "20px",
          //   marginBottom: "40px",


           
          // }}
        >
          {filteredModels.map((model, index) => (
            <div  onClick={() => {
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
            Tecno REPAIR & REPLACEMENT SERVICES
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            We provide expert repair and replacement services for Tecno devices,
            including screen repair, battery replacement, camera fixes, and
            software troubleshooting. Reach out for reliable service you can
            trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TecnoPage;