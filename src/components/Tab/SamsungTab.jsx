import React, { useState } from "react";
import "./Tablet.css";
import { useNavigate } from "react-router-dom";
import tab1 from "../../assets/samsungTablet/tab1.jpg";
import tab2 from "../../assets/samsungTablet/tab2.jpg";
import tab3 from "../../assets/samsungTablet/tab3.jpg";
import tab4 from "../../assets/samsungTablet/tab4.jpg";
import tab5 from "../../assets/samsungTablet/tab5.jpg";
import tab6 from "../../assets/samsungTablet/tab6.jpg";
import tab7 from "../../assets/samsungTablet/tab7.jpg";
import tab8 from "../../assets/samsungTablet/tab8.jpg";
import tab9 from "../../assets/samsungTablet/tab9.jpg";
import tab10 from "../../assets/samsungTablet/tab10.jpg";
import tab11 from "../../assets/samsungTablet/tab11.jpg";
import tab12 from "../../assets/samsungTablet/tab12.jpg";
import tab13 from "../../assets/samsungTablet/tab13.jpg";
import tab14 from "../../assets/samsungTablet/tab14.jpg";
import tab15 from "../../assets/samsungTablet/tab15.jpg";
import tab16 from "../../assets/samsungTablet/tab16.jpg";
import tab17 from "../../assets/samsungTablet/tab17.jpg";
import tab18 from "../../assets/samsungTablet/tab18.jpg";
import tab19 from "../../assets/samsungTablet/tab19.jpg";
import tab20 from "../../assets/samsungTablet/tab20.jpg";

const SamsungTablet = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const samsungTablets = [
    { id: 1, name: "Galaxy Tab S9", image: tab1 },
    { id: 2, name: "Galaxy Tab S9+", image: tab2 },
    { id: 3, name: "Galaxy Tab S9 Ultra", image: tab3 },
    { id: 4, name: "Galaxy Tab S8", image: tab4 },
    { id: 5, name: "Galaxy Tab S8+", image: tab5 },
    { id: 6, name: "Galaxy Tab S8 Ultra", image: tab6 },
    { id: 7, name: "Galaxy Tab S7", image: tab7 },
    { id: 8, name: "Galaxy Tab S7+", image: tab8 },
    { id: 9, name: "Galaxy Tab S7 FE", image: tab9 },
    { id: 10, name: "Galaxy Tab S6", image: tab10 },
    { id: 11, name: "Galaxy Tab S6 Lite", image: tab11 },
    { id: 12, name: "Galaxy Tab S6 5G", image: tab12 },
    { id: 13, name: "Galaxy Tab A8", image: tab13 },
    { id: 14, name: "Galaxy Tab A7", image: tab14 },
    { id: 15, name: "Galaxy Tab A 10.1", image: tab15 },
    { id: 16, name: "Galaxy Tab Active4 Pro", image: tab16 },
    { id: 17, name: "Galaxy Tab Active3", image: tab17 },
    { id: 18, name: "Galaxy Tab Active Pro", image: tab18 },
    { id: 19, name: "Galaxy Tab E", image: tab19 },
    { id: 20, name: "Galaxy Tab 4", image: tab20 },
  ];

  const filteredTablets = samsungTablets.filter((tablet) =>
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
            Home / Repair / Tablets / Samsung
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#212529", margin: 0 }}>
            Samsung Tablet Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        {/* Search Box */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search Samsung tablets..."
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
                e.currentTarget.style.borderColor = "#007bff";
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
            SAMSUNG TABLET REPAIR & REPLACEMENT
          </h2>
          <p style={{ color: "#6c757d", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto" }}>
            Samsung tablets are known for their high performance and portability. Whether it’s
            screen damage, battery replacement, or software issues, our certified technicians
            provide fast and reliable repairs using genuine Samsung parts.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
            WE CAN FIX YOUR SAMSUNG DEVICE
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SamsungTablet;
