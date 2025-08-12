import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import nothing1 from "../../assets/nothing/nothing-8.png"; // CMF by Nothing Phone 2 Pro
import nothing2 from "../../assets/nothing/nothing-7.png"; // Nothing Phone 3a Pro
import nothing3 from "../../assets/nothing/nothing-6.png"; // Nothing Phone 3a
import nothing4 from "../../assets/nothing/nothing-5.png"; // CMF by Nothing Phone 1
import nothing5 from "../../assets/nothing/nothing-4.png"; // Nothing Phone 2a Plus
import nothing7 from "../../assets/nothing/nothing-2.png"; // Nothing Phone 2
import nothing8 from "../../assets/nothing/nothing-1.png"; // Nothing Phone 1

const NothingPage = () => {
 const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const nothingModels = [
    { id: 1, name: "CMF by Nothing Phone 2 Pro", image: nothing1 },
    { id: 2, name: "Nothing Phone 3a Pro", image: nothing2 },
    { id: 3, name: "Nothing Phone 2a 5G", image: nothing3 },
    { id: 4, name: "Nothing Phone 1", image: nothing4 },
    { id: 5, name: "Nothing 2a Plus", image: nothing5 },
    { id: 6, name: "CMF by Nothing Phone 1", image: nothing7 },
    { id: 7, name: "Nothing Phone 3a", image: nothing8 },
  ];

  const filteredModels = nothingModels.filter((model) =>
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
            Home / Repair / Nothing
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Nothing Repair & Replacement
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
            placeholder="Search Nothing models..."
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
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {filteredModels.map((model) => (
            <div 
              onClick={() => {
                navigate(`/brand-issues/${encodeURIComponent(model.name)}`, {
                  state: { image: model.image },
                });
              }}
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
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            NOTHING REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Your Nothing device is more than just technology; it’s an essential
            part of your everyday work and entertainment. Our expert Nothing
            repair and replacement services ensure quick turnaround times,
            genuine parts, and dependable performance.
          </p>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginTop: "30px",
            }}
          >
            WE CAN FIX YOUR NOTHING
          </h3>
        </div>
      </div>
    </div>
  );
};

export default NothingPage;
