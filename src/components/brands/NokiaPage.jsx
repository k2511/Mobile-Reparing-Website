import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Resposive.css';
// Import Nokia phone images
import nokia1 from "../../assets/nokia/nokia (1).png";
import nokia2 from "../../assets/nokia/nokia (2).png";
import nokia3 from "../../assets/nokia/nokia (3).png";
import nokia4 from "../../assets/nokia/nokia (4).png";
import nokia5 from "../../assets/nokia/nokia (5).png";
import nokia6 from "../../assets/nokia/nokia (6).png";
import nokia7 from "../../assets/nokia/nokia (7).png";
import nokia8 from "../../assets/nokia/nokia (8).png";
import nokia9 from "../../assets/nokia/nokia (9).png";
import nokia10 from "../../assets/nokia/nokia (10).png";
import nokia11 from "../../assets/nokia/nokia (11).png";
import nokia12 from "../../assets/nokia/nokia (12).png";
import nokia13 from "../../assets/nokia/nokia (13).png";
import nokia14 from "../../assets/nokia/nokia (14).png";
import nokia15 from "../../assets/nokia/nokia (15).png";
import nokia16 from "../../assets/nokia/nokia (16).png";
import nokia17 from "../../assets/nokia/nokia (17).png";
import nokia18 from "../../assets/nokia/nokia (18).png";
import nokia19 from "../../assets/nokia/nokia (19).png";
import nokia20 from "../../assets/nokia/nokia (20).png";

const NokiaPage = () => {
 const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const nokiaModels = [
    { name: "Nokia 8.1", image: nokia1 },
    { name: "Nokia 8", image: nokia2 },
    { name: "Nokia 7.1", image: nokia3 },
    { name: "Nokia 7", image: nokia4 },
    { name: "Nokia 6.1 plus", image: nokia5 },
    { name: "Nokia 6.1", image: nokia6 },
    { name: "Nokia 6", image: nokia7 },
    { name: "Nokia 5.1 Plus", image: nokia8 },
    { name: "Nokia 5.1", image: nokia9 },
    { name: "Nokia 5", image: nokia10 },
    { name: "Nokia C3.2", image: nokia11 },
    { name: "Nokia C21", image: nokia12 },
    { name: "Nokia 3.1 ", image: nokia13 },
    { name: "Nokia 3", image: nokia14 },
    { name: "Nokia 2.4", image: nokia15 },
    { name: "Nokia 2.3", image: nokia16 },
    { name: "Nokia 2.2", image: nokia17 },
    { name: "Nokia 2.1", image: nokia18 },
    { name: "Nokia 2", image: nokia19 },
    { name: "Nokia C30 2020", image: nokia20 },
  ];

  const filteredModels = nokiaModels.filter((model) =>
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
            Home / Repair / Nokia
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Nokia Repair & Replacement
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
            placeholder="Search Nokia models..."
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
            <div onClick={() => {
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
            Nokia REPAIR & REPLACEMENT SERVICES
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            We provide expert repair and replacement services for Nokia devices,
            including screen repair, battery replacement, camera fixes, and
            software troubleshooting. Reach out for reliable service you can
            trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NokiaPage;