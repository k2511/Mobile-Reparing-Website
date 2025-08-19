import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tablet.css";
// Import Poco tablet images
// import poco1 from "../../assets/pocoTablet/poco1.jpg";
// import poco2 from "../../assets/pocoTablet/poco2.jpg";
// import poco3 from "../../assets/pocoTablet/poco3.jpg";
// import poco4 from "../../assets/pocoTablet/poco4.jpg";
import poco5 from "../../assets/pocoTablet/poco5.jpg";
// import poco6 from "../../assets/pocoTablet/poco6.jpg";
import poco7 from "../../assets/pocoTablet/poco7.jpg";
// import poco8 from "../../assets/pocoTablet/poco8.jpg";
// import poco9 from "../../assets/pocoTablet/poco9.jpg";
// import poco10 from "../../assets/pocoTablet/poco10.jpg";
// import poco11 from "../../assets/pocoTablet/poco11.jpg";
// import poco12 from "../../assets/pocoTablet/poco12.jpg";
// import poco13 from "../../assets/pocoTablet/poco13.jpg";
// import poco14 from "../../assets/pocoTablet/poco14.jpg";
// import poco15 from "../../assets/pocoTablet/poco15.jpg";
// import poco16 from "../../assets/pocoTablet/poco16.jpg";
// import poco17 from "../../assets/pocoTablet/poco17.jpg";
// import poco18 from "../../assets/pocoTablet/poco18.jpg";
// import poco19 from "../../assets/pocoTablet/poco19.jpg";
// import poco20 from "../../assets/pocoTablet/poco20.jpg";

const PocoTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const pocoModels = [
    // { id: 1, name: "Poco Pad 1", image: poco1 },
    // { id: 2, name: "Poco Pad 2", image: poco2 },
    // { id: 3, name: "Poco Pad 3", image: poco3 },
    // { id: 4, name: "Poco Pad 4", image: poco4 },
    { id: 5, name: "Poco Pad 5", image: poco5 },
    // { id: 6, name: "Poco Pad 6", image: poco6 },
    { id: 7, name: "Poco Pad 7", image: poco7 },
    // { id: 8, name: "Poco Pad 8", image: poco8 },
    // { id: 9, name: "Poco Pad 9", image: poco9 },
    // { id: 10, name: "Poco Pad 10", image: poco10 },
    // { id: 11, name: "Poco Pad 11", image: poco11 },
    // { id: 12, name: "Poco Pad 12", image: poco12 },
    // { id: 13, name: "Poco Pad 13", image: poco13 },
    // { id: 14, name: "Poco Pad 14", image: poco14 },
    // { id: 15, name: "Poco Pad 15", image: poco15 },
    // { id: 16, name: "Poco Pad 16", image: poco16 },
    // { id: 17, name: "Poco Pad 17", image: poco17 },
    // { id: 18, name: "Poco Pad 18", image: poco18 },
    // { id: 19, name: "Poco Pad 19", image: poco19 },
    // { id: 20, name: "Poco Pad 20", image: poco20 },
  ];

  const filteredModels = pocoModels.filter((model) =>
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
            Home / Repair / Tablets / Poco
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Poco Tablet Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        {/* Search Box */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search Poco tablet models..."
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
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
            POCO TABLET REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Poco tablets are known for their performance and affordability. Our expert technicians
            handle screen repairs, battery replacements, and software issues with genuine Poco
            parts for a reliable service experience.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
            WE CAN FIX YOUR POCO TABLET
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PocoTab;

