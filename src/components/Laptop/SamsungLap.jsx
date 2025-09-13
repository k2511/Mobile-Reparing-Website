import React, { useState } from "react";
import "./Laptop.css";
import { useNavigate } from "react-router-dom";
import samsung1 from "../../assets/samsungLaptop/samsung1.jpg";
import samsung2 from "../../assets/samsungLaptop/samsung2.jpg";
import samsung3 from "../../assets/samsungLaptop/samsung3.jpg";
import samsung4 from "../../assets/samsungLaptop/samsung4.jpg";
import samsung5 from "../../assets/samsungLaptop/samsung5.jpg";
import samsung6 from "../../assets/samsungLaptop/samsung6.jpg";
import samsung7 from "../../assets/samsungLaptop/samsung7.jpg";
import samsung8 from "../../assets/samsungLaptop/samsung8.jpg";
import samsung9 from "../../assets/samsungLaptop/samsung9.jpg";
import samsung10 from "../../assets/samsungLaptop/samsung10.jpg";
import samsung11 from "../../assets/samsungLaptop/samsung11.jpg";
import samsung12 from "../../assets/samsungLaptop/samsung12.jpg";
import samsung13 from "../../assets/samsungLaptop/samsung13.jpg";
import samsung14 from "../../assets/samsungLaptop/samsung14.jpg";
import samsung15 from "../../assets/samsungLaptop/samsung15.jpg";
import samsung16 from "../../assets/samsungLaptop/samsung16.jpg";
import samsung17 from "../../assets/samsungLaptop/samsung17.jpg";
import samsung18 from "../../assets/samsungLaptop/samsung18.jpg";
import samsung19 from "../../assets/samsungLaptop/samsung19.jpg";
import samsung20 from "../../assets/samsungLaptop/samsung20.jpg";

const SamsungLap = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const samsungModels = [
    { id: 1, name: "Samsung Galaxy Book 2", image: samsung1 },
    { id: 2, name: "Samsung Galaxy Book 2 Pro", image: samsung2 },
    { id: 3, name: "Samsung Galaxy Book 2 Pro 360", image: samsung3 },
    { id: 4, name: "Samsung Galaxy Book Flex", image: samsung4 },
    { id: 5, name: "Samsung Galaxy Book Flex α", image: samsung5 },
    { id: 6, name: "Samsung Galaxy Book Ion", image: samsung6 },
    { id: 7, name: "Samsung Notebook 9", image: samsung7 },
    { id: 8, name: "Samsung Notebook 9 Pen", image: samsung8 },
    { id: 9, name: "Samsung Notebook 7 Spin", image: samsung9 },
    { id: 10, name: "Samsung Chromebook 4", image: samsung10 },
    { id: 11, name: "Samsung Chromebook 4+", image: samsung11 },
    { id: 12, name: "Samsung Notebook 5", image: samsung12 },
    { id: 13, name: "Samsung Notebook Flash", image: samsung13 },
    { id: 14, name: "Samsung ATIV Book 9", image: samsung14 },
    { id: 15, name: "Samsung ATIV Book 8", image: samsung15 },
    { id: 16, name: "Samsung Notebook Odyssey", image: samsung16 },
    { id: 17, name: "Samsung Galaxy Book Go", image: samsung17 },
    { id: 18, name: "Samsung Galaxy Chromebook", image: samsung18 },
    { id: 19, name: "Samsung Galaxy Chromebook 2", image: samsung19 },
    { id: 20, name: "Samsung Notebook 7", image: samsung20 },
  ];

  const filteredModels = samsungModels.filter((model) =>
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
            Home / Repair / Laptops / Samsung
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#212529", margin: 0 }}>
            Samsung Laptop Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        {/* Search Box */}
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
              <h3 style={{ fontSize: "16px", fontWeight: "600", margin: "10px 0 5px" }}>
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
            SAMSUNG REPAIR & REPLACEMENT
          </h2>
          <p style={{ color: "#6c757d", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto" }}>
            Samsung laptops offer sleek design and high performance. From battery replacement
            to screen repairs and hardware upgrades, our certified technicians provide
            fast and reliable service using genuine Samsung parts.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
            WE CAN FIX YOUR SAMSUNG DEVICE
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SamsungLap;
