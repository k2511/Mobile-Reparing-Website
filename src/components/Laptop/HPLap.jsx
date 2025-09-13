import React, { useState } from "react";
import "./Laptop.css";
import { useNavigate } from "react-router-dom";
import hp1 from "../../assets/HpLaptop/HpLaptop1.jpeg";
import hp2 from "../../assets/HpLaptop/HpLaptop2.jpeg";
import hp3 from "../../assets/HpLaptop/HpLaptop3.jpeg";
import hp4 from "../../assets/HpLaptop/HpLaptop4.jpeg";
import hp5 from "../../assets/HpLaptop/HpLaptop5.jpeg";
import hp6 from "../../assets/HpLaptop/HpLaptop6.jpeg";
import hp7 from "../../assets/HpLaptop/HpLaptop7.jpeg";
import hp8 from "../../assets/HpLaptop/HpLaptop8.jpeg";
import hp9 from "../../assets/HpLaptop/HpLaptop9.jpeg";
import hp10 from "../../assets/HpLaptop/HpLaptop10.jpeg";
import hp11 from "../../assets/HpLaptop/HpLaptop11.jpeg";
import hp12 from "../../assets/HpLaptop/HpLaptop12.jpeg";
import hp13 from "../../assets/HpLaptop/HpLaptop13.jpeg";
import hp14 from "../../assets/HpLaptop/HpLaptop14.jpeg";
import hp15 from "../../assets/HpLaptop/HpLaptop15.jpeg";
import hp16 from "../../assets/HpLaptop/HpLaptop16.jpeg";
import hp17 from "../../assets/HpLaptop/HpLaptop17.jpeg";
import hp18 from "../../assets/HpLaptop/HpLaptop18.jpeg";
import hp19 from "../../assets/HpLaptop/HpLaptop19.jpeg";
import hp20 from "../../assets/HpLaptop/HpLaptop20.jpeg";
import hp21 from "../../assets/HpLaptop/HpLaptop21.jpeg";
import hp22 from "../../assets/HpLaptop/HpLaptop22.jpeg";
import hp23 from "../../assets/HpLaptop/HpLaptop23.jpeg";
import hp24 from "../../assets/HpLaptop/HpLaptop24.jpeg";
import hp25 from "../../assets/HpLaptop/HpLaptop25.jpeg";
import hp26 from "../../assets/HpLaptop/HpLaptop26.jpeg";
import hp27 from "../../assets/HpLaptop/HpLaptop27.jpeg";
import hp28 from "../../assets/HpLaptop/HpLaptop28.jpeg";
import hp29 from "../../assets/HpLaptop/HpLaptop29.jpeg";
import hp30 from "../../assets/HpLaptop/HpLaptop30.jpeg";



const HPLap = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Models with images
  const asusModels = [
  { id: 1, name: "HP Victus 16 (RTX 4060, 13th Gen)", image: hp1 },
  { id: 2, name: "HP Omen 17 (i9-14900HX, RTX 4080)", image: hp2 },
  { id: 3, name: "HP Omen Transcend 14 (OLED, 2025)", image: hp3 },
  { id: 4, name: "HP Victus Gaming (Ryzen 7 8845HS)", image: hp4 },
  { id: 5, name: "HP Omen AI Gaming (2025 Edition)", image: hp5 },
  { id: 6, name: "HP Victus 15 (144Hz, i5-13420H)", image: hp6 },
  { id: 7, name: "HP Spectre x360 14 (Core Ultra 7)", image: hp7 },
  { id: 8, name: "HP Envy x360 15 (Ryzen 7 8840HS)", image: hp8 },
  { id: 9, name: "HP Dragonfly Pro (AI-Enhanced)", image: hp9 },
  { id: 10, name: "HP Pavilion Plus 14 (2.8K OLED)", image: hp10 },
  { id: 11, name: "HP Spectre Foldable (2025)", image: hp11 },
  { id: 12, name: "HP Envy 16 (Mini-LED, 120Hz)", image: hp12 },
  { id: 13, name: "HP Elite Folio (2025 Refresh)", image: hp13 },
  { id: 14, name: "HP Pavilion x360 13 (2025)", image: hp14 },
  { id: 15, name: "HP EliteBook 840 G10 (2025)", image: hp15 },
  { id: 16, name: "HP ZBook Firefly 14 G10", image: hp16 },
  { id: 17, name: "HP ProBook 450 G10 (13th Gen)", image: hp17 },
  { id: 18, name: "HP Elite Dragonfly G4", image: hp18 },
  { id: 19, name: "HP ZBook Studio 16 (RTX 5000)", image: hp19 },
  { id: 20, name: "HP ProBook 640 G10", image: hp20 },
  { id: 21, name: "HP EliteBook 1040 G10", image: hp21 },
  { id: 22, name: "HP Pavilion 15 (Core Ultra 5)", image: hp22 },
  { id: 23, name: "HP 15s (Ryzen 5 7535U, 2025)", image: hp23 },
  { id: 24, name: "HP Laptop 17 (Intel N-series)", image: hp24 },
  { id: 25, name: "HP 14 (Budget 2025)", image: hp25 },
  { id: 26, name: "HP 250 G10 (Education Edition)", image: hp26 },
  { id: 27, name: "HP 15-fd0466TU (2025 Refresh)", image: hp27 },
  { id: 28, name: "HP Spectre AI (NPU-Enhanced)", image: hp28 },
  { id: 29, name: "HP Envy AI Creator Edition", image: hp29 },
  { id: 30, name: "HP Omen  (Quantum Edition)", image: hp30 },
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
            Home / Repair / Laptops / Hp
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Hp Laptop Repair & Replacement
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
            HP REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Hp laptops are known for innovation and performance. Whether it’s screen
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
            WE CAN FIX YOUR HP
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HPLap;

