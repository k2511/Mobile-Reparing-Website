import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HP from "../../assets/image/hp.png";

const hpModels = [
  { id: 1, name: "HP Pavilion 15", issue: "Battery Replacement, Keyboard Repair" },
  { id: 2, name: "HP Spectre x360", issue: "Screen Replacement, SSD Upgrade" },
  { id: 3, name: "HP Envy 13", issue: "Motherboard Repair, RAM Upgrade" },
];

const HPLap = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredModels = hpModels.filter((model) =>
    model.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Header */}
      <header style={{ backgroundColor: "white", borderBottom: "1px solid #dee2e6", padding: "20px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: "10px", color: "#6c757d", fontSize: "14px" }}>
            Home / Repair / Laptops / HP
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#212529", margin: 0 }}>
            HP Laptops
          </h1>
        </div>
      </header>

      {/* Brand Info */}
      <section style={{ textAlign: "center", padding: "40px" }}>
        <img src={HP} alt="HP" style={{ maxWidth: "150px", marginBottom: "20px" }} />
        <p style={{ maxWidth: "800px", margin: "0 auto", color: "#6c757d" }}>
          HP laptops are known for their design and performance. We provide professional repair
          services including screen replacement, battery repair, keyboard replacement, and more.
        </p>
      </section>

      {/* Search Box */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <input
          type="text"
          placeholder="Search HP models..."
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
      <section
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          padding: "0 20px 40px 20px",
        }}
      >
        {filteredModels.map((model) => (
          <div
            key={model.id}
            onClick={() => navigate(`/brand-issues/${encodeURIComponent(model.name)}`)}
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
            <h3 style={{ margin: 0 }}>{model.name}</h3>
            <p style={{ color: "#6c757d", marginTop: "5px" }}>Services: {model.issue}</p>
          </div>
        ))}
      </section>

      {/* Back Button */}
      <div style={{ textAlign: "center", margin: "40px 0" }}>
        <button
          onClick={() => navigate("/laptops")}
          style={{
            padding: "12px 30px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Back to Brands
        </button>
      </div>
    </div>
  );
};

export default HPLap;
