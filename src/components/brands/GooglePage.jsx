import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Resposive.css';
// Import your Google phone images here
import google1 from "../../assets/google/google-1.png";
import google2 from "../../assets/google/google-2.png";
import google3 from "../../assets/google/google-3.png";
import google4 from "../../assets/google/google-4.png";
import google5 from "../../assets/google/google-5.png";
import google6 from "../../assets/google/google-6.png";
import google7 from "../../assets/google/google-7.png";
import google8 from "../../assets/google/google-8.png";
import google9 from "../../assets/google/google-9.png";
import google10 from "../../assets/google/google-10.png";
import google11 from "../../assets/google/google-11.png";
import google12 from "../../assets/google/google-12.png";
import google13 from "../../assets/google/google-13.png";



const GooglePage = () => {
 const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const googleModels = [
    { name: "Google Pixel 5", image: google1 },
    { name: "Google Pixel  7", image: google2 },
    { name: "Google Pixel 9 Pro", image: google3 },
    { name: "Google Pixel 6A", image: google4 },
    { name: "Google Pixel 9 Pro", image: google5 },
    { name: "Google Pixel 3A", image: google6 },
    { name: "Google Pixel 9 Pro XL", image: google7 },
    { name: "Google Pixel 3", image: google8 },
    { name: "Google Pixel 9", image: google9 },
    { name: "Google Pixel 3/XL", image: google10 },
    { name: "Google Pixel 8A", image: google11 },
    { name: "Google Pixel 2 XL", image: google12 },
    { name: "Google Pixel 8 Pro", image: google13 },

  ];

  const filteredModels = googleModels.filter((model) =>
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
            Home / Repair / Google
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Google Repair & Replacement
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
            placeholder="Search Google models..."
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
                  fontSize: "13px",
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
            GOOGLE REPAIR & REPLACEMENT SERVICES
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            We provide expert repair and replacement services for Google devices,
            including screen repair, battery replacement, camera fixes, and
            software troubleshooting. Reach out for reliable service you can
            trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GooglePage;
