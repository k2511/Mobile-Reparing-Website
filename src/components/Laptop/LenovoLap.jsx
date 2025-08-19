import React, { useState } from "react";
import "./Laptop.css";
import { useNavigate } from "react-router-dom";
import lenovo1 from "../../assets/lenovoLaptop/lenovoLaptop1.jpeg";
import lenovo2 from "../../assets/lenovoLaptop/lenovoLaptop2.jpeg";
import lenovo3 from "../../assets/lenovoLaptop/lenovoLaptop3.jpeg";
import lenovo4 from "../../assets/lenovoLaptop/lenovoLaptop4.jpeg";
import lenovo5 from "../../assets/lenovoLaptop/lenovoLaptop5.jpeg";
import lenovo6 from "../../assets/lenovoLaptop/lenovoLaptop6.jpeg";
import lenovo7 from "../../assets/lenovoLaptop/lenovoLaptop7.jpeg";
import lenovo8 from "../../assets/lenovoLaptop/lenovoLaptop8.jpeg";
import lenovo9 from "../../assets/lenovoLaptop/lenovoLaptop9.jpeg";
import lenovo10 from "../../assets/lenovoLaptop/lenovoLaptop10.jpeg";
import lenovo11 from "../../assets/lenovoLaptop/lenovoLaptop11.jpeg";
import lenovo12 from "../../assets/lenovoLaptop/lenovoLaptop12.jpeg";
import lenovo13 from "../../assets/lenovoLaptop/lenovoLaptop13.jpeg";
import lenovo14 from "../../assets/lenovoLaptop/lenovoLaptop14.jpeg";
import lenovo15 from "../../assets/lenovoLaptop/lenovoLaptop15.jpeg";
import lenovo16 from "../../assets/lenovoLaptop/lenovoLaptop16.jpeg";
import lenovo17 from "../../assets/lenovoLaptop/lenovoLaptop17.jpeg";
// import lenovo18 from "../../assets/lenovoLaptop/lenovoLaptop18.jpeg";
import lenovo19 from "../../assets/lenovoLaptop/lenovoLaptop19.jpeg";
import lenovo20 from "../../assets/lenovoLaptop/lenovoLaptop20.jpeg";
import lenovo21 from "../../assets/lenovoLaptop/lenovoLaptop21.jpeg";
import lenovo22 from "../../assets/lenovoLaptop/lenovoLaptop22.jpeg";
import lenovo23 from "../../assets/lenovoLaptop/lenovoLaptop23.jpeg";

const  LenovoLap = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Models with images
  const asusModels = [
    { id: 1, name: "Lenovo ThinkPad X1 Carbon Gen 11", image: lenovo1 },
    { id: 2, name: "Lenovo ThinkPad X1 Yoga", image: lenovo2 },
    { id: 3, name: "Lenovo ThinkPad T14s", image: lenovo3 },
    { id: 4, name: "Lenovo ThinkPad P1 Gen 6", image: lenovo4 },
    { id: 5, name: "Lenovo ThinkPad E14", image: lenovo5 },
    { id: 6, name: "Lenovo ThinkBook 14 Gen 4", image: lenovo6 },
    { id: 7, name: "Lenovo ThinkBook 16 Gen 6", image: lenovo7 },
    { id: 8, name: "Lenovo Yoga 7i 14", image: lenovo8 },
    { id: 9, name: "Lenovo Yoga Slim 7 Pro", image: lenovo9 },
    { id: 10, name: "Lenovo Yoga 9i", image: lenovo10 },
    { id: 11, name: "Lenovo IdeaPad 3 15", image: lenovo11 },
    { id: 12, name: "Lenovo IdeaPad Slim 5i", image: lenovo12 },
    { id: 13, name: "Lenovo IdeaPad Gaming 3", image: lenovo13 },
    { id: 14, name: "Lenovo Legion 5 Pro", image: lenovo14 },
    { id: 15, name: "Lenovo Legion 7i", image: lenovo15 },
    { id: 16, name: "Lenovo Legion Slim 7", image: lenovo16 },
    { id: 17, name: "Lenovo Legion Y540", image: lenovo17 },
    // { id: 18, name: "Lenovo Legion Y540", image: lenovo18 },
    { id: 19, name: "Lenovo ThinkPad L15", image: lenovo19 },
    { id: 20, name: "Lenovo ThinkPad P15", image: lenovo20 },
    { id: 21, name: "Lenovo ThinkPad P17", image: lenovo21 },
    { id: 22, name: "Lenovo IdeaPad Flex 5", image: lenovo22 },
    { id: 23, name: "Lenovo Chromebook Duet", image: lenovo23 },
   
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
            Home / Repair / Laptops / Lenovo
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Lenovo Laptop Repair & Replacement
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
          LENOVO REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
           Lenovo laptops are known for innovation and performance. Whether it’s screen
            replacement, battery repair, or performance upgrades, our certified technicians
            provide reliable repair services with genuine Lenovo parts.
          </p>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginTop: "30px",
            }}
          >
            WE CAN FIX YOUR  LenovoLap
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LenovoLap;

