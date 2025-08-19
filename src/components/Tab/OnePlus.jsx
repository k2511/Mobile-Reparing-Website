import React, { useState } from "react";
import "./Tablet.css";
import { useNavigate } from "react-router-dom";
import tab1 from "../../assets/onePlusTab/tab1.jpg";
import tab2 from "../../assets/onePlusTab/tab2.jpg";
import tab3 from "../../assets/onePlusTab/tab3.jpg";
import tab4 from "../../assets/onePlusTab/tab4.jpg";
import tab5 from "../../assets/onePlusTab/tab5.jpg";
import tab6 from "../../assets/onePlusTab/tab6.jpg";
import tab7 from "../../assets/onePlusTab/tab7.jpg";
// import tab8 from "../../assets/onePlusTab/tab8.jpg";
// import tab9 from "../../assets/onePlusTab/tab9.jpg";
// import tab10 from "../../assets/onePlusTab/tab10.jpg";
// import tab11 from "../../assets/onePlusTab/tab11.jpg";
import tab12 from "../../assets/onePlusTab/tab12.jpg";
// import tab13 from "../../assets/onePlusTab/tab13.jpg";
// import tab14 from "../../assets/onePlusTab/tab14.jpg";
import tab15 from "../../assets/onePlusTab/tab15.jpg";
import tab16 from "../../assets/onePlusTab/tab16.jpg";
// import tab17 from "../../assets/onePlusTab/tab17.jpg";
// import tab18 from "../../assets/onePlusTab/tab18.jpg";
// import tab19 from "../../assets/onePlusTab/tab19.jpg";
import tab20 from "../../assets/onePlusTab/tab20.jpg";

const OnePlusTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onePlusTablets = [
    { id: 1, name: "OnePlus Pad 1", image: tab1 },
    { id: 2, name: "OnePlus Pad 2", image: tab2 },
    { id: 3, name: "OnePlus Pad Pro", image: tab3 },
    { id: 4, name: "OnePlus Pad Pro 5G", image: tab4 },
    { id: 5, name: "OnePlus Pad Lite", image: tab5 },
    { id: 6, name: "OnePlus Pad Mini", image: tab6 },
    { id: 7, name: "OnePlus Pad Ultra", image: tab7 },
    // { id: 8, name: "OnePlus Pad X", image: tab8 },
    // { id: 9, name: "OnePlus Pad Z", image: tab9 },
    // { id: 10, name: "OnePlus Pad Max", image: tab10 },
    // { id: 11, name: "OnePlus Pad SE", image: tab11 },
    { id: 12, name: "OnePlus Pad Neo", image: tab12 },
    // { id: 13, name: "OnePlus Pad S", image: tab13 },
    // { id: 14, name: "OnePlus Pad T", image: tab14 },
    { id: 15, name: "OnePlus Pad 3", image: tab15 },
    { id: 16, name: "OnePlus Pad 4", image: tab16 },
    // { id: 17, name: "OnePlus Pad Z Pro", image: tab17 },
    // { id: 18, name: "OnePlus Pad Alpha", image: tab18 },
    // { id: 19, name: "OnePlus Pad Beta", image: tab19 },
    { id: 20, name: "OnePlus Pad Omega", image: tab20 },
  ];

  const filteredTablets = onePlusTablets.filter((tablet) =>
    tablet.name.toLowerCase().includes(searchQuery.toLowerCase())
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
            Home / Repair / Tablets / OnePlus
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#212529", margin: 0 }}>
            OnePlus Tablet Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        {/* Search Box */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search OnePlus tablets..."
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

        {/* Tablets Grid */}
        <div className="tablet-grid"
          // style={{
          //   display: "grid",
          //   gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))",
          //   gap: "20px",
          // }}
        >
          {filteredTablets.map((tablet) => (
            <div
              key={tablet.id}
              onClick={() =>
                navigate(`/brand-issues/${encodeURIComponent(tablet.name)}`, {
                  state: { image: tablet.image, tablet },
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
                e.currentTarget.style.borderColor = "#ff6700";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#dee2e6";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <img
                src={tablet.image}
                alt={tablet.name}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                  marginBottom: "15px",
                }}
              />
              <h3 style={{ fontSize: "16px", fontWeight: "600", margin: "10px 0 5px" }}>
                {tablet.name}
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
            ONEPLUS TABLET REPAIR & REPLACEMENT
          </h2>
          <p style={{ color: "#6c757d", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto" }}>
            OnePlus tablets combine high performance and sleek design. Whether it’s screen
            repair, battery replacement, or software issues, our certified technicians provide
            fast and reliable service with genuine parts.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
            WE CAN FIX YOUR ONEPLUS DEVICE
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OnePlusTab;
