import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AmazonTab = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { brandName = "Amazon", brandImage, models = [] } = location.state || {};
  const [searchQuery, setSearchQuery] = useState("");

  // Predefined Amazon tablet models
  const defaultModels = [
    { id: 1, name: "Amazon Fire HD 10", image: "https://via.placeholder.com/150x150?text=Fire+HD+10" },
    { id: 2, name: "Amazon Fire HD 8", image: "https://via.placeholder.com/150x150?text=Fire+HD+8" },
    { id: 3, name: "Amazon Fire 7", image: "https://via.placeholder.com/150x150?text=Fire+7" },
    { id: 4, name: "Amazon Fire HD 10 Plus", image: "https://via.placeholder.com/150x150?text=Fire+HD+10+Plus" },
    { id: 5, name: "Amazon Fire HD 8 Plus", image: "https://via.placeholder.com/150x150?text=Fire+HD+8+Plus" },
    { id: 6, name: "Amazon Fire HD 10 Kids", image: "https://via.placeholder.com/150x150?text=Fire+HD+10+Kids" },
    { id: 7, name: "Amazon Fire HD 8 Kids", image: "https://via.placeholder.com/150x150?text=Fire+HD+8+Kids" },
    { id: 8, name: "Amazon Fire 7 Kids", image: "https://via.placeholder.com/150x150?text=Fire+7+Kids" },
  ];

  // Add extra models (if provided in location.state)
  const amazonModels = [
    ...defaultModels,
    ...models
      .filter((model) => !defaultModels.some((m) => m.name === model)) // avoid duplicates
      .map((model, index) => ({
        id: defaultModels.length + index + 1,
        name: model,
        image: brandImage || "https://via.placeholder.com/150x150?text=Amazon+Tablet",
      })),
  ];

  // Search filter
  const filteredModels = amazonModels.filter((m) =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle model selection
  const handleModelClick = (model) => {
    navigate(`/brand-issues/${encodeURIComponent(model.name)}`, {
      state: { model, image: model.image },
    });
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
            Home / Repair / Tablets / {brandName}
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            {brandName} Tablet Repair & Replacement
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
        {/* Brand Logo + Search */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          {brandImage && (
            <img
              src={brandImage}
              alt={brandName}
              style={{
                height: "80px",
                objectFit: "contain",
                marginBottom: "20px",
                borderRadius: "8px",
              }}
            />
          )}
          <input
            type="text"
            placeholder={`Search ${brandName} models...`}
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
        {filteredModels.length > 0 ? (
          <div className="tablet-grid"
            // className="main"
            // style={{
            //   display: "grid",
            //   gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
            //   gap: "20px",
            // }}
          >
            {filteredModels.map((model) => (
              <div
                key={model.id}
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
                  e.currentTarget.style.borderColor = "#ff9900";
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
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "40px",
              backgroundColor: "white",
              borderRadius: "10px",
              border: "1px solid #dee2e6",
            }}
          >
            <p style={{ fontSize: "16px", color: "#6c757d" }}>
              No models found matching your search.
            </p>
          </div>
        )}

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
            {brandName.toUpperCase()} REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Your {brandName} device is more than just technology; it's an essential
            part of your everyday work and entertainment. Our expert {brandName} repair
            and replacement services ensure quick turnaround times, genuine parts,
            and dependable performance.
          </p>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginTop: "30px",
            }}
          >
            WE CAN FIX YOUR {brandName.toUpperCase()}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AmazonTab;
