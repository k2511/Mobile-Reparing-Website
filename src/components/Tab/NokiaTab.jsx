import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tablet.css";
// Import images
import nokia1 from "../../assets/nokiaTablet/nokia1.jpg";
import nokia2 from "../../assets/nokiaTablet/nokia2.jpg";
import nokia3 from "../../assets/nokiaTablet/nokia3.jpg";
import nokia4 from "../../assets/nokiaTablet/nokia4.jpg";
// import nokia5 from "../../assets/nokiaTablet/nokia5.jpg";
// import nokia6 from "../../assets/nokiaTablet/nokia6.jpg";
// import nokia7 from "../../assets/nokiaTablet/nokia7.jpg";
// import nokia8 from "../../assets/nokiaTablet/nokia8.jpg";
// import nokia9 from "../../assets/nokiaTablet/nokia9.jpg";
// import nokia10 from "../../assets/nokiaTablet/nokia10.jpg";

const NokiaTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Nokia tablet models
  const nokiaModels = [
    { id: 1, name: "Nokia T20", image: nokia1 },
    { id: 2, name: "Nokia T21", image: nokia2 },
    { id: 3, name: "Nokia T10", image: nokia3 },
    { id: 4, name: "Nokia N1", image: nokia4 },
    // { id: 5, name: "Nokia Tab X1", image: nokia5 },
    // { id: 6, name: "Nokia Tab M1", image: nokia6 },
    // { id: 7, name: "Nokia Tab S1", image: nokia7 },
    // { id: 8, name: "Nokia Tab Pro", image: nokia8 },
    // { id: 9, name: "Nokia Tab Air", image: nokia9 },
    // { id: 10, name: "Nokia Tab Ultra", image: nokia10 },
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
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: "10px", color: "#6c757d", fontSize: "14px" }}>
            Home / Repair / Tablets / Nokia
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Nokia Tablet Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        {/* Search Box */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search Nokia tablet models..."
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
            NOKIA TABLET REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Nokia tablets are known for their reliability and sleek design. From screen repair to
            battery replacement and performance optimization, our expert technicians deliver trusted
            repair services using high‑quality Nokia parts.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
            WE CAN FIX YOUR NOKIA TABLET
          </h3>
        </div>
      </div>
    </div>
  );
};

export default NokiaTab;
