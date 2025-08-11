import React, { useState } from "react";

const TabletRepairPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const tabletModels = [
    { name: "Apple iPad Pro 12.9", year: "(2023)" },
    { name: "Apple iPad Air", year: "(2022)" },
    { name: "Samsung Galaxy Tab S9", year: "(2023)" },
    { name: "Samsung Galaxy Tab A8", year: "(2021)" },
    { name: "Microsoft Surface Pro 9", year: "(2023)" },
    { name: "Microsoft Surface Go 3", year: "(2021)" },
    { name: "Lenovo Tab P12 Pro", year: "(2022)" },
    { name: "Huawei MatePad Pro", year: "(2022)" },
    { name: "Amazon Fire HD 10", year: "(2021)" },
    { name: "Xiaomi Pad 6", year: "(2023)" },
  ];

  const filteredModels = tabletModels.filter(
    (model) =>
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.year.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleModelClick = (model) => {
    alert(`Selected ${model.name} ${model.year} for repair/replacement`);
  };

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
            Home / Repair / Tablets
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Tablet Repair & Replacement
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
            placeholder="Search Tablet models..."
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

        {/* Tablet Models Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {filteredModels.map((model, index) => (
            <div
              key={index}
              onClick={() => handleModelClick(model)}
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
              <div
                style={{
                  width: "80px",
                  height: "50px",
                  backgroundColor: "#343a40",
                  borderRadius: "5px",
                  margin: "0 auto 15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "35px",
                    backgroundColor: "#495057",
                    borderRadius: "3px",
                  }}
                ></div>
              </div>
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  margin: "10px 0 5px",
                }}
              >
                {model.name}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#6c757d",
                  margin: 0,
                }}
              >
                {model.year}
              </p>
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
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            TABLET REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Your tablet is an essential part of your digital life — whether you
            use it for work, entertainment, or staying connected. Our expert
            repair services ensure fast turnaround times, genuine parts, and
            lasting quality so you can get back to what matters most.
          </p>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginTop: "30px",
            }}
          >
            WE CAN FIX YOUR TABLET
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TabletRepairPage;
