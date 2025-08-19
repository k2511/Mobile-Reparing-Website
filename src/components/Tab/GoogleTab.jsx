import React, { useState } from "react";
import "./Tablet.css";
import { useNavigate } from "react-router-dom";
// import tab1 from "../../assets/googleTab/tab1.jpg";
// import tab2 from "../../assets/googleTab/tab2.jpg";
// import tab3 from "../../assets/googleTab/tab3.jpg";
import tab4 from "../../assets/googleTab/tab4.jpg";
import tab5 from "../../assets/googleTab/tab5.jpg";
import tab6 from "../../assets/googleTab/tab6.jpg";
// import tab7 from "../../assets/googleTab/tab7.jpg";
// import tab8 from "../../assets/googleTab/tab8.jpg";
// import tab9 from "../../assets/googleTab/tab9.jpg";
// import tab10 from "../../assets/googleTab/tab10.jpg";
// import tab11 from "../../assets/googleTab/tab11.jpg";
// import tab12 from "../../assets/googleTab/tab12.jpg";
// import tab13 from "../../assets/googleTab/tab13.jpg";
// import tab14 from "../../assets/googleTab/tab14.jpg";
// import tab15 from "../../assets/googleTab/tab15.jpg";
// import tab16 from "../../assets/googleTab/tab16.jpg";
// import tab17 from "../../assets/googleTab/tab17.jpg";
// import tab18 from "../../assets/googleTab/tab18.jpg";
// import tab19 from "../../assets/googleTab/tab19.jpg";
// import tab20 from "../../assets/googleTab/tab20.jpg";

const GoogleTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const googleTablets = [
    // { id: 1, name: "Pixel Slate 1", image: tab1 },
    // { id: 2, name: "Pixel Slate 2", image: tab2 },
    // { id: 3, name: "Pixel Slate Pro", image: tab3 },
    { id: 4, name: "Pixel Nexus 9", image: tab4 },
    { id: 5, name: "Pixel Tablet 11", image: tab5 },
    { id: 6, name: "Pixel Tablet 2", image: tab6 },
    // { id: 7, name: "Pixel Tablet Pro", image: tab7 },
    // { id: 8, name: "Pixel Tablet XL", image: tab8 },
    // { id: 9, name: "Pixel Tablet Mini", image: tab9 },
    // { id: 10, name: "Pixel Tablet Max", image: tab10 },
    // { id: 11, name: "Pixel Tab SE", image: tab11 },
    // { id: 12, name: "Pixel Tab Neo", image: tab12 },
    // { id: 13, name: "Pixel Tab S", image: tab13 },
    // { id: 14, name: "Pixel Tab T", image: tab14 },
    // { id: 15, name: "Pixel Tab 3", image: tab15 },
    // { id: 16, name: "Pixel Tab 4", image: tab16 },
    // { id: 17, name: "Pixel Tab 2", image: tab17 },
    // { id: 18, name: "Pixel Tab Alpha", image: tab18 },
    // { id: 19, name: "Pixel Tab Beta", image: tab19 },
    // { id: 20, name: "Pixel Tab Omega", image: tab20 },
  ];

  const filteredTablets = googleTablets.filter((tablet) =>
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
            Home / Repair / Tablets / Google
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#212529", margin: 0 }}>
            Google Tablet Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        {/* Search Box */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search Google tablets..."
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
                e.currentTarget.style.borderColor = "#4285F4";
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
            GOOGLE TABLET REPAIR & REPLACEMENT
          </h2>
          <p style={{ color: "#6c757d", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto" }}>
            Google tablets offer innovative performance and sleek design. From screen repair
            to battery replacement or software issues, our certified technicians ensure fast
            and reliable service using genuine parts.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
            WE CAN FIX YOUR GOOGLE DEVICE
          </h3>
        </div>
      </div>
    </div>
  );
};

export default GoogleTab;
