import React, { useState } from "react";
import "./Tablet.css";
import { useNavigate } from "react-router-dom";
import lava1 from "../../assets/lavaTablet/lavaTab1.jpg";
import lava2 from "../../assets/lavaTablet/lavaTab2.jpg";
import lava3 from "../../assets/lavaTablet/lavaTab3.jpg";
import lava4 from "../../assets/lavaTablet/lavaTab4.jpg";
import lava5 from "../../assets/lavaTablet/lavaTab5.jpg";
import lava6 from "../../assets/lavaTablet/lavaTab6.jpg";
import lava7 from "../../assets/lavaTablet/lavaTab7.jpg";
// import lava8 from "../../assets/lavaTablet/lavaTab8.jpg";
// import lava9 from "../../assets/lavaTablet/lavaTab9.jpg";
// import lava10 from "../../assets/lavaTablet/lavaTab10.jpg";

const LavaTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const lavaModels = [
    { id: 1, name: "Lava Tab Z1", image: lava1 },
    { id: 2, name: "Lava Tab Z2", image: lava2 },
    { id: 3, name: "Lava Tab Z4", image: lava3 },
    { id: 4, name: "Lava Tab X1", image: lava4 },
    { id: 5, name: "Lava Tab X2", image: lava5 },
    { id: 6, name: "Lava Tab X3", image: lava6 },
    { id: 7, name: "Lava Tab X5", image: lava7 },
    // { id: 8, name: "Lava Tab M1", image: lava8 },
    // { id: 9, name: "Lava Tab M2", image: lava9 },
    // { id: 10, name: "Lava Tab M3", image: lava10 },
  ];

  const filteredModels = lavaModels.filter((model) =>
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
            Home / Repair / Tablets / Lava
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#212529", margin: 0 }}>
            Lava Tablet Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        {/* Search Box */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search Lava tablet models..."
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
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                  marginBottom: "15px",
                }}
              />
              <h3 style={{ fontSize: "16px", fontWeight: "600", margin: "10px 0 5px" }}>
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
            LAVA REPAIR & REPLACEMENT
          </h2>
          <p style={{ color: "#6c757d", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto" }}>
            Lava tablets are known for affordability and performance. Whether it’s screen
            replacement, battery repair, or software issues, our certified technicians provide
            reliable repair services with genuine Lava parts.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
            WE CAN FIX YOUR LAVA TABLET
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LavaTab;
