import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tablet.css";
// Import images
import asus1 from "../../assets/asusTablet/asus1.jpg";
import asus2 from "../../assets/asusTablet/asus2.jpg";
import asus3 from "../../assets/asusTablet/asus3.jpg";
import asus4 from "../../assets/asusTablet/asus4.jpg";
import asus5 from "../../assets/asusTablet/asus5.jpg";
import asus6 from "../../assets/asusTablet/asus6.jpg";
// import asus7 from "../../assets/asusTablet/asus7.jpg";
// import asus8 from "../../assets/asusTablet/asus8.jpg";
// import asus9 from "../../assets/asusTablet/asus9.jpg";
// import asus10 from "../../assets/asusTablet/asus10.jpg";

const AsusTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Asus tablet models
  const asusModels = [
    { id: 1, name: "Asus ZenPad 3S 10", image: asus1 },
    { id: 2, name: "Asus ZenPad Z10", image: asus2 },
    { id: 3, name: "Asus Transformer Mini", image: asus3 },
    { id: 4, name: "Asus ROG Flow Z13", image: asus4 },
    { id: 5, name: "Asus ZenPad 8.0", image: asus5 },
    { id: 6, name: "Asus VivoTab Note 8", image: asus6 },
    // { id: 7, name: "Asus MeMO Pad 7", image: asus7 },
    // { id: 8, name: "Asus Transformer Book T100", image: asus8 },
    // { id: 9, name: "Asus ZenPad C 7.0", image: asus9 },
    // { id: 10, name: "Asus Transformer Pad TF103C", image: asus10 },
  ];

  const filteredModels = asusModels.filter((model) =>
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
            Home / Repair / Tablets / Asus
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Asus Tablet Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        {/* Search Box */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search Asus tablet models..."
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
            ASUS TABLET REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Asus tablets combine sleek design with powerful performance. From cracked screens to
            battery replacements and hardware upgrades, our expert technicians deliver fast and
            reliable repair services using high-quality Asus parts.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
            WE CAN FIX YOUR ASUS TABLET
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AsusTab;
