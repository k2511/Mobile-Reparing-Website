import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import iQOO phone images
import iqoo1 from "../../assets/iqoo/iqoo-1.png";
import iqoo2 from "../../assets/iqoo/iqoo-2.png";
// import iqoo3 from "../../assets/iqoo/iqoo-3.png";
import iqoo4 from "../../assets/iqoo/iqoo-4.png";
import iqoo5 from "../../assets/iqoo/iqoo-5.png";
import iqoo6 from "../../assets/iqoo/iqoo-6.png";
import iqoo7 from "../../assets/iqoo/iqoo-7.png";
import iqoo8 from "../../assets/iqoo/iqoo-8.png";
import iqoo9 from "../../assets/iqoo/iqoo-9.png";
import iqoo10 from "../../assets/iqoo/iqoo-10.png";
import iqoo11 from "../../assets/iqoo/iqoo-11.png";
import iqoo12 from "../../assets/iqoo/iqoo-12.png";
import iqoo13 from "../../assets/iqoo/iqoo-13.png";
import iqoo14 from "../../assets/iqoo/iqoo-14.png";
import iqoo15 from "../../assets/iqoo/iqoo-15.png";
import iqoo16 from "../../assets/iqoo/iqoo-16.png";
import iqoo17 from "../../assets/iqoo/iqoo-17.png";
import iqoo18 from "../../assets/iqoo/iqoo-18.png";
import iqoo19 from "../../assets/iqoo/iqoo-19.png";
import iqoo20 from "../../assets/iqoo/iqoo-20.png";
import iqoo21 from "../../assets/iqoo/iqoo-21.png";
import iqoo22 from "../../assets/iqoo/iqoo-22.png";
import iqoo23 from "../../assets/iqoo/iqoo-23.png";
import iqoo24 from "../../assets/iqoo/iqoo-24.png";
import iqoo25 from "../../assets/iqoo/iqoo-25.png";
import iqoo26 from "../../assets/iqoo/iqoo-26.png";
import iqoo27 from "../../assets/iqoo/iqoo-27.png";
import iqoo28 from "../../assets/iqoo/iqoo-28.png";
import iqoo29 from "../../assets/iqoo/iqoo-29.png";

const IqooPage = () => {
 const [searchQuery, setSearchQuery] = useState("");
   const navigate = useNavigate();

  const iqooModels = [
    { name: "iQOO 7 Legend 5G", image: iqoo1 },
    { name: "iQOO Z9 S 5G", image: iqoo2 },
    // { name: "iQOO 12", image: iqoo3 },
    { name: "iQOO Z9 lite 5G", image: iqoo4 },
    { name: "iQOO Z9X 5G", image: iqoo5 },
    { name: "iQOO Neo 9 Pro", image: iqoo6 },
    { name: "iQOO 12 5G", image: iqoo7 },
    { name: "iQOO z7 Pro", image: iqoo8 },
    { name: "iQOO Neo 7 Pro 5G", image: iqoo9 },
    { name: "iQOO Z7s ", image: iqoo10 },
    { name: "iQOO 9 pro", image: iqoo11 },
    { name: "iQOO Neo7", image: iqoo12 },
    { name: "iQOO 7 Legend", image: iqoo13 },
    { name: "iQOO 11", image: iqoo14 },
    { name: "iQOO Z6 lite 5G ", image: iqoo15 },
    { name: "iQOO 9T 5G", image: iqoo16 },
    { name: "iQOO Neo 6", image: iqoo17 },
    { name: "iQOO Z6 Pro 5G", image: iqoo18 },
    { name: "iQOO Z6 5G", image: iqoo19 },
    { name: "iQOO 9SE", image: iqoo20 },
    { name: "iQOO Z6 Pro", image: iqoo21 },
    { name: "iQOO 9 ", image: iqoo22 },
    { name: "iQOO Z5", image: iqoo23 },
    { name: "iQOO Z3", image: iqoo24 },
    { name: "iQOO 7 5G", image: iqoo25 },
    { name: "iQOO 3", image: iqoo26 },
    { name: "iQOO 3 5G", image: iqoo27 },
    { name: "iQOO Z9 5G", image: iqoo28 },
    { name: "iQOO Neo 6", image: iqoo29 },
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
            Home / Repair / iQOO
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            iQOO Repair & Replacement
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
            placeholder="Search iQOO models..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "300px",
              padding: "12px 20px",
              border: "1px solid #ced4da",
              borderRadius: "25px",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "black")}
            onBlur={(e) => (e.target.style.borderColor = "#ced4da")}
          />
        </div>
        {/* Models Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {filteredModels.map((model, index) => (
            <div  onClick={() => {
                navigate(`/brand-issues/${encodeURIComponent(model.name)}`, {
                  state: { image: model.image },
                });
              }}
              key={index}
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
                e.currentTarget.style.borderColor = "red";
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(66,133,244,0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#dee2e6";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={model.image}
                alt={model.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                  marginBottom: "15px",
                }}
              />
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  margin: "10px 0 5px",
                  color: "#212529",
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
            color: "#495057",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
              color: "black",
            }}
          >
            iQOO REPAIR & REPLACEMENT SERVICES
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            We provide expert repair and replacement services for iQOO devices,
            including screen repair, battery replacement, camera fixes, and
            software troubleshooting. Reach out for reliable service you can
            trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IqooPage;