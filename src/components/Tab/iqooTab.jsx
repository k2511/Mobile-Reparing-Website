import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tablet.css";
// Import IQOO tablet images
import iqoo1 from "../../assets/iqooTablet/iqoo1.jpg";
import iqoo2 from "../../assets/iqooTablet/iqoo2.jpg";
// import iqoo3 from "../../assets/iqooTablet/iqoo3.jpg";
// import iqoo4 from "../../assets/iqooTablet/iqoo4.jpg";
import iqoo5 from "../../assets/iqooTablet/iqoo5.jpg";
import iqoo6 from "../../assets/iqooTablet/iqoo6.jpg";
import iqoo7 from "../../assets/iqooTablet/iqoo7.jpg";
// import iqoo8 from "../../assets/iqooTablet/iqoo8.jpg";
// import iqoo9 from "../../assets/iqooTablet/iqoo9.jpg";
// import iqoo10 from "../../assets/iqooTablet/iqoo10.jpg";
// import iqoo11 from "../../assets/iqooTablet/iqoo11.jpg";
// import iqoo12 from "../../assets/iqooTablet/iqoo12.jpg";
// import iqoo13 from "../../assets/iqooTablet/iqoo13.jpg";
// import iqoo14 from "../../assets/iqooTablet/iqoo14.jpg";
// import iqoo15 from "../../assets/iqooTablet/iqoo15.jpg";
// import iqoo16 from "../../assets/iqooTablet/iqoo16.jpg";
// import iqoo17 from "../../assets/iqooTablet/iqoo17.jpg";
// import iqoo18 from "../../assets/iqooTablet/iqoo18.jpg";
// import iqoo19 from "../../assets/iqooTablet/iqoo19.jpg";
// import iqoo20 from "../../assets/iqooTablet/iqoo20.jpg";

const IQOOTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const iqooModels = [
    { id: 1, name: "iQOO Pad 5", image: iqoo1 },
    { id: 2, name: "iQOO Pad 5 Pro", image: iqoo2 },
    // { id: 3, name: "iQOO Pad Mini", image: iqoo3 },
    // { id: 4, name: "iQOO Tab X", image: iqoo4 },
    { id: 5, name: "iQOO Pad Air", image: iqoo5 },
    { id: 6, name: "iQOO Pad 2 Pro", image: iqoo6 },
    { id: 7, name: "iQOO Tab 5 pro", image: iqoo7 },
    // { id: 8, name: "iQOO Tab Lite", image: iqoo8 },
    // { id: 9, name: "iQOO Tab Max", image: iqoo9 },
    // { id: 10, name: "iQOO Tab Ultra", image: iqoo10 },
    // { id: 11, name: "iQOO Pad 6", image: iqoo11 },
    // { id: 12, name: "iQOO Pad 6 Pro", image: iqoo12 },
    // { id: 13, name: "iQOO Tab Neo", image: iqoo13 },
    // { id: 14, name: "iQOO Tab Air", image: iqoo14 },
    // { id: 15, name: "iQOO Tab Note", image: iqoo15 },
    // { id: 16, name: "iQOO Tab X Pro", image: iqoo16 },
    // { id: 17, name: "iQOO Tab Edge", image: iqoo17 },
    // { id: 18, name: "iQOO Tab G", image: iqoo18 },
    // { id: 19, name: "iQOO Tab Neo Pro", image: iqoo19 },
    // { id: 20, name: "iQOO Tab Plus", image: iqoo20 },
  ];

  const filteredModels = iqooModels.filter((model) =>
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
            Home / Repair / Tablets / iQOO
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            iQOO Tablet Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        {/* Search Box */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search iQOO tablet models..."
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
            IQOO TABLET REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            iQOO tablets combine high performance and sleek design. From screen replacement to
            battery repair and software issues, our certified technicians ensure reliable service
            with genuine iQOO parts.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
            WE CAN FIX YOUR IQOO TABLET
          </h3>
        </div>
      </div>
    </div>
  );
};

export default IQOOTab;

