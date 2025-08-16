import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import all Samsung images
import samsung1 from "../../assets/samsungTablet/SamsungTab-1.jpg";
import samsung2 from "../../assets/samsungTablet/SamsungTab-2.jpg";
import samsung3 from "../../assets/samsungTablet/SamsungTab-3.jpg";
// import samsung72 from "../../assets/samsung/SamsungTablet-72.jpg";

// Create samsungModels array dynamically
const samsungModels = [
  { id: 1, name: "Samsung Galaxy Tab S9 Ultra", image: samsung1 },
  { id: 2, name: "Samsung Galaxy Tab S9+", image: samsung2 },
  { id: 3, name: "Samsung Galaxy Tab S9", image: samsung3 },
//   { id: 4, name: "Samsung Galaxy Tab A9", image: samsung4 },
//   { id: 5, name: "Samsung Galaxy Tab A8", image: samsung5 },
  // ... continue adding all 72 models with proper names and image imports
];

const SamsungTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredModels = samsungModels.filter((model) =>
    model.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Header */}
      <div style={{ backgroundColor: "white", borderBottom: "1px solid #dee2e6", padding: "20px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: "10px", color: "#6c757d", fontSize: "14px" }}>Home / Repair / Samsung</div>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#212529", margin: 0 }}>
            Samsung Tablet Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Search and tablet list */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search Samsung models..."
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

        <div className="main" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: "20px" }}>
          {filteredModels.map((model) => (
            <div
              onClick={() =>
                navigate(`/brand-issues/${encodeURIComponent(model.name)}`, { state: { image: model.image } })
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
                e.currentTarget.style.borderColor = "red";
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
                style={{ width: "150px", height: "150px", objectFit: "contain", marginBottom: "15px" }}
              />
              <h3 style={{ fontSize: "16px", fontWeight: "600", margin: "10px 0 5px" }}>{model.name}</h3>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div style={{ backgroundColor: "white", border: "1px solid #dee2e6", borderRadius: "10px", padding: "40px", textAlign: "center", marginTop: "40px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>SAMSUNG TABLET REPAIR & REPLACEMENT</h2>
          <p style={{ color: "#6c757d", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto" }}>
            Your Samsung tablet is more than just technology; it’s an essential part of your work and entertainment. Our expert Samsung repair services ensure quick turnaround times, genuine parts, and dependable performance.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>WE CAN FIX YOUR SAMSUNG TABLET</h3>
        </div>
      </div>
    </div>
  );
};

export default SamsungTab;
