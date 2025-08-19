import React, { useState } from "react";
import "./Laptop.css";
import { useNavigate } from "react-router-dom";
import asus1 from "../../assets/asusLaptop/asusLaptop1.jpg";
import asus2 from "../../assets/asusLaptop/asusLaptop2.jpg";
import asus3 from "../../assets/asusLaptop/asusLaptop3.jpg";
import asus4 from "../../assets/asusLaptop/asusLaptop4.jpg";
import asus5 from "../../assets/asusLaptop/asusLaptop5.jpg";
import asus6 from "../../assets/asusLaptop/asusLaptop6.jpg";
import asus7 from "../../assets/asusLaptop/asusLaptop7.jpg";
import asus8 from "../../assets/asusLaptop/asusLaptop8.jpg";
import asus9 from "../../assets/asusLaptop/asusLaptop9.jpg";
import asus10 from "../../assets/asusLaptop/asusLaptop10.jpg";
import asus11 from "../../assets/asusLaptop/asusLaptop11.jpg";
import asus12 from "../../assets/asusLaptop/asusLaptop12.jpg";
import asus13 from "../../assets/asusLaptop/asusLaptop13.jpg";
import asus14 from "../../assets/asusLaptop/asusLaptop14.jpg";
import asus15 from "../../assets/asusLaptop/asusLaptop15.jpg";
import asus16 from "../../assets/asusLaptop/asusLaptop16.jpg";
import asus17 from "../../assets/asusLaptop/asusLaptop17.jpg";
import asus18 from "../../assets/asusLaptop/asusLaptop18.jpg";
import asus19 from "../../assets/asusLaptop/asusLaptop19.jpg";
import asus20 from "../../assets/asusLaptop/asusLaptop20.jpg";
import asus21 from "../../assets/asusLaptop/asusLaptop21.jpg";
import asus22 from "../../assets/asusLaptop/asusLaptop22.jpg";
import asus23 from "../../assets/asusLaptop/asusLaptop23.jpg";
import asus24 from "../../assets/asusLaptop/asusLaptop24.jpg";
import asus25 from "../../assets/asusLaptop/asusLaptop25.jpg";
// import asus26 from "../../assets/asusLaptop/asusLaptop26.jpg";
// import asus27 from "../../assets/asusLaptop/asusLaptop27.jpg";
// import asus28 from "../../assets/asusLaptop/asusLaptop28.jpg";
// import asus29 from "../../assets/asusLaptop/asusLaptop29.jpg";
// import asus30 from "../../assets/asusLaptop/asusLaptop30.jpg";
// import asus31 from "../../assets/asusLaptop/asusLaptop31.jpg";
// import asus32 from "../../assets/asusLaptop/asusLaptop32.jpg";
// import asus33 from "../../assets/asusLaptop/asusLaptop33.jpg";
// import asus34 from "../../assets/asusLaptop/asusLaptop34.jpg";
// import asus35 from "../../assets/asusLaptop/asusLaptop35.jpg";
// import asus36 from "../../assets/asusLaptop/asusLaptop36.jpg";
// import asus37 from "../../assets/asusLaptop/asusLaptop37.jpg";
// import asus38 from "../../assets/asusLaptop/asusLaptop38.jpg";
// import asus39 from "../../assets/asusLaptop/asusLaptop39.jpg";
// import asus40 from "../../assets/asusLaptop/asusLaptop40.jpg";
// import asus41 from "../../assets/asusLaptop/asusLaptop41.jpg";
// import asus42 from "../../assets/asusLaptop/asusLaptop42.jpg";
// import asus43 from "../../assets/asusLaptop/asusLaptop43.jpg";
// import asus44 from "../../assets/asusLaptop/asusLaptop44.jpg";
// import asus45 from "../../assets/asusLaptop/asusLaptop45.jpg";
// import asus46 from "../../assets/asusLaptop/asusLaptop46.jpg";
// import asus47 from "../../assets/asusLaptop/asusLaptop47.jpg";
// import asus48 from "../../assets/asusLaptop/asusLaptop48.jpg";
// import asus49 from "../../assets/asusLaptop/asusLaptop49.jpg";
// import asus50 from "../../assets/asusLaptop/asusLaptop50.jpg";

const AsusLap = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Models with images
  const asusModels = [
    { id: 1, name: "Asus ZenBook 14", image: asus1 },
    { id: 2, name: "Asus ROG Strix", image: asus2 },
    { id: 3, name: "Asus VivoBook 15", image: asus3 },
    { id: 4, name: "ASUS TUF Gaming F15", image: asus4 },
  { id: 5, name: "ASUS ExpertBook B9", image: asus5 },
  { id: 6, name: "ASUS Chromebook Flip C434", image: asus6 },
  { id: 7, name: "ASUS ZenBook Pro Duo", image: asus7 },
  { id: 8, name: "ASUS ROG Strix Scar 15", image: asus8 },
  { id: 9, name: "ASUS VivoBook S14", image: asus9 },
  { id: 10, name: "ASUS TUF Dash F15", image: asus10 },
  { id: 11, name: "ASUS ZenBook Flip 13", image: asus11 },
  { id: 12, name: "ASUS ROG Flow X13", image: asus12 },
  { id: 13, name: "ASUS ProArt StudioBook 15", image: asus13 },
  { id: 14, name: "ASUS VivoBook Pro 16X", image: asus14 },
  { id: 15, name: "ASUS ROG Zephyrus Duo 16", image: asus15 },
  { id: 16, name: "ASUS Chromebook CX9", image: asus16 },
  { id: 17, name: "ASUS ZenBook 13 OLED", image: asus17 },
  { id: 18, name: "ASUS VivoBook Flip 14", image: asus18 },
  { id: 19, name: "ASUS ROG Strix G15", image: asus19 },
  { id: 20, name: "ASUS ZenBook 17 Fold", image: asus20 },
  { id: 21, name: "ASUS TUF Gaming A15", image: asus21 },
  { id: 22, name: "ASUS VivoBook Go 14", image: asus22 },
  { id: 23, name: "ASUS ROG Zephyrus M16", image: asus23 },
  { id: 24, name: "ASUS ZenBook Duo 14", image: asus24 },
  { id: 25, name: "ASUS VivoBook Ultra K15", image: asus25 },
  // { id: 26, name: "ASUS Chromebook Flip CX5", image: asus26 },
  // { id: 27, name: "ASUS ROG Strix G17", image: asus27 },
  // { id: 28, name: "ASUS ProArt StudioBook Pro 17", image: asus28 },
  // { id: 29, name: "ASUS ZenBook Flip S", image: asus29 },
  // { id: 30, name: "ASUS VivoBook Pro 14X", image: asus30 },
  // { id: 31, name: "ASUS ROG Flow Z13", image: asus31 },
  // { id: 32, name: "ASUS Chromebook Flip C536", image: asus32 },
  // { id: 33, name: "ASUS ZenBook 15", image: asus33 },
  // { id: 34, name: "ASUS VivoBook 17", image: asus34 },
  // { id: 35, name: "ASUS ROG Zephyrus S15", image: asus35 },
  // { id: 36, name: "ASUS ExpertBook P2", image: asus36 },
  // { id: 37, name: "ASUS ZenBook Pro 16X", image: asus37 },
  // { id: 38, name: "ASUS VivoBook 14X", image: asus38 },
  // { id: 39, name: "ASUS ROG Strix Scar 17", image: asus39 },
  // { id: 40, name: "ASUS ZenBook Flip 15", image: asus40 },
  // { id: 41, name: "ASUS TUF Gaming A17", image: asus41 },
  // { id: 42, name: "ASUS Chromebook Flip C214", image: asus42 },
  // { id: 43, name: "ASUS ZenBook Pro Duo 15", image: asus43 },
  // { id: 44, name: "ASUS VivoBook K513", image: asus44 },
  // { id: 45, name: "ASUS ROG Zephyrus G15", image: asus45 },
  // { id: 46, name: "ASUS ZenBook Flip 14 OLED", image: asus46 },
  // { id: 47, name: "ASUS ProArt StudioBook One", image: asus47 },
  // { id: 48, name: "ASUS VivoBook Pro 15", image: asus48 },
  // { id: 49, name: "ASUS ROG Flow X16", image: asus49 },
  // { id: 50, name: "ASUS ZenBook S 13 OLED", image: asus50 },
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
            Home / Repair / Laptops / Asus
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Asus Laptop Repair & Replacement
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
            placeholder="Search Asus models..."
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
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            ASUS REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Asus laptops are known for innovation and performance. Whether it’s screen
            replacement, battery repair, or performance upgrades, our certified technicians
            provide reliable repair services with genuine Asus parts.
          </p>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginTop: "30px",
            }}
          >
            WE CAN FIX YOUR ASUS
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AsusLap;

