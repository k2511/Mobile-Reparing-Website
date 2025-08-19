import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import images
import huawei1 from "../../assets/huaweiTablet/huawei1.jpg";
import huawei2 from "../../assets/huaweiTablet/huawei2.jpg";
import huawei3 from "../../assets/huaweiTablet/huawei3.jpg";
import huawei4 from "../../assets/huaweiTablet/huawei4.jpg";
import huawei5 from "../../assets/huaweiTablet/huawei5.jpg";
import huawei6 from "../../assets/huaweiTablet/huawei6.jpg";
// import huawei7 from "../../assets/huaweiTablet/huawei7.jpg";
// import huawei8 from "../../assets/huaweiTablet/huawei8.jpg";
// import huawei9 from "../../assets/huaweiTablet/huawei9.jpg";
// import huawei10 from "../../assets/huaweiTablet/huawei10.jpg";

const HuaweiTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Huawei tablet models
  const huaweiModels = [
    { id: 1, name: "Huawei MatePad Pro", image: huawei1 },
    { id: 2, name: "Huawei MediaPad M5", image: huawei2 },
    { id: 3, name: "Huawei MatePad T10", image: huawei3 },
    { id: 4, name: "Huawei MatePad 11", image: huawei4 },
    { id: 5, name: "Huawei MediaPad T3", image: huawei5 },
    { id: 6, name: "Huawei MatePad SE", image: huawei6 },
    // { id: 7, name: "Huawei MediaPad M6", image: huawei7 },
    // { id: 8, name: "Huawei MatePad Air", image: huawei8 },
    // { id: 9, name: "Huawei MediaPad 10 Link", image: huawei9 },
    // { id: 10, name: "Huawei MatePad X", image: huawei10 },
  ];

  const filteredModels = huaweiModels.filter((model) =>
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
            Home / Repair / Tablets / Huawei
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Huawei Tablet Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        {/* Search Box */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search Huawei tablet models..."
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))",
            gap: "20px",
          }}
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
            HUAWEI TABLET REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Huawei tablets deliver powerful performance with innovative features and sleek designs. 
            From cracked screens to battery replacements and performance tuning, our skilled technicians 
            provide fast and reliable repair services using genuine Huawei parts.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
            WE CAN FIX YOUR HUAWEI TABLET
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HuaweiTab;
