import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tablet.css";
// Import images
import realme1 from "../../assets/realmeTablet/realme1.jpg";
import realme2 from "../../assets/realmeTablet/realme2.jpg";
import realme3 from "../../assets/realmeTablet/realme3.jpg";
import realme4 from "../../assets/realmeTablet/realme4.jpg";
// import realme5 from "../../assets/realmeTablet/realme5.jpg";
import realme6 from "../../assets/realmeTablet/realme6.jpg";
import realme7 from "../../assets/realmeTablet/realme7.jpg";
import realme8 from "../../assets/realmeTablet/realme8.jpg";
// import realme9 from "../../assets/realmeTablet/realme9.jpg";
// import realme10 from "../../assets/realmeTablet/realme10.jpg";
// import realme11 from "../../assets/realmeTablet/realme11.jpg";
// import realme12 from "../../assets/realmeTablet/realme12.jpg";
// import realme13 from "../../assets/realmeTablet/realme13.jpg";
// import realme14 from "../../assets/realmeTablet/realme14.jpg";
// import realme15 from "../../assets/realmeTablet/realme15.jpg";
// import realme16 from "../../assets/realmeTablet/realme16.jpg";
// import realme17 from "../../assets/realmeTablet/realme17.jpg";
import realme18 from "../../assets/realmeTablet/realme18.jpg";
// import realme19 from "../../assets/realmeTablet/realme19.jpg";
// import realme20 from "../../assets/realmeTablet/realme20.jpg";

const RealmeTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Realme tablet models
  const realmeModels = [
    { id: 1, name: "Realme Pad Mini", image: realme1 },
    { id: 2, name: "Realme Pad X", image: realme2 },
    { id: 3, name: "Realme Pad", image: realme3 },
    { id: 4, name: "Realme Pad LTE ", image: realme4 },
    // { id: 5, name: "Realme Pad Max", image: realme5 },
    { id: 6, name: "Realme Pad Wi-Fi", image: realme6 },
    { id: 7, name: "Realme Pad ", image: realme7 },
    { id: 8, name: "Realme Pad 2", image: realme8 },
    // { id: 9, name: "Realme Pad 5G", image: realme9 },
    // { id: 10, name: "Realme Pad 10.4", image: realme10 },
    // { id: 11, name: "Realme Pad 11.0", image: realme11 },
    // { id: 12, name: "Realme Pad HD", image: realme12 },
    // { id: 13, name: "Realme Pad FHD", image: realme13 },
    // { id: 14, name: "Realme Pad Slim", image: realme14 },
    // { id: 15, name: "Realme Pad 4G", image: realme15 },
    // { id: 16, name: "Realme Pad Neo", image: realme16 },
    // { id: 17, name: "Realme Pad Air", image: realme17 },
    { id: 18, name: "Realme Pad 2 Lite", image: realme18 },
    // { id: 19, name: "Realme Pad Ultra", image: realme19 },
    // { id: 20, name: "Realme Pad Infinity", image: realme20 },
  ];

  const filteredModels = realmeModels.filter((model) =>
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
            Home / Repair / Tablets / Realme
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Realme Tablet Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        {/* Search Box */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search Realme tablet models..."
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
            REALME TABLET REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Realme tablets are designed for high performance and reliability. Whether it’s screen
            replacement, battery repair, or software troubleshooting, our certified technicians
            provide trusted repair services with genuine Realme parts.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
            WE CAN FIX YOUR REALME TABLET
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RealmeTab;
