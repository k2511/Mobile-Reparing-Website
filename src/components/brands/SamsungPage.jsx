import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Resposive.css';
// Import Samsung images in order
import samsung1 from "../../assets/samsung/samsung (1).png";
import samsung2 from "../../assets/samsung/samsung (2).png";
import samsung3 from "../../assets/samsung/samsung (3).png";
import samsung4 from "../../assets/samsung/samsung (4).png";
import samsung5 from "../../assets/samsung/samsung (5).png";
import samsung6 from "../../assets/samsung/samsung (6).png";
import samsung7 from "../../assets/samsung/samsung (7).png";
import samsung8 from "../../assets/samsung/samsung (8).png";
import samsung9 from "../../assets/samsung/samsung (9).png";
import samsung10 from "../../assets/samsung/samsung (10).png";
import samsung11 from "../../assets/samsung/samsung (11).png";
import samsung12 from "../../assets/samsung/samsung (12).png";
import samsung13 from "../../assets/samsung/samsung (13).png";
import samsung14 from "../../assets/samsung/samsung (14).png";
import samsung15 from "../../assets/samsung/samsung (15).png";
import samsung16 from "../../assets/samsung/samsung (16).png";
import samsung17 from "../../assets/samsung/samsung (17).png";
import samsung18 from "../../assets/samsung/samsung (18).png";
import samsung19 from "../../assets/samsung/samsung (19).png";
import samsung20 from "../../assets/samsung/samsung (20).png";


import samsung21 from "../../assets/samsung/samsung (21).png";
import samsung22 from "../../assets/samsung/samsung (22).png";
import samsung23 from "../../assets/samsung/samsung (23).png";
import samsung24 from "../../assets/samsung/samsung (24).png";
import samsung25 from "../../assets/samsung/samsung (25).png";
import samsung26 from "../../assets/samsung/samsung (26).png";
import samsung27 from "../../assets/samsung/samsung (27).png";
import samsung28 from "../../assets/samsung/samsung (28).png";
import samsung29 from "../../assets/samsung/samsung (29).png";
import samsung30 from "../../assets/samsung/samsung (30).png";
import samsung31 from "../../assets/samsung/samsung (31).png";
import samsung32 from "../../assets/samsung/samsung (32).png";
import samsung33 from "../../assets/samsung/samsung (33).png";
import samsung34 from "../../assets/samsung/samsung (34).png";
import samsung35 from "../../assets/samsung/samsung (35).png";
import samsung36 from "../../assets/samsung/samsung (36).png";
import samsung37 from "../../assets/samsung/samsung (37).png";
import samsung38 from "../../assets/samsung/samsung (38).png";
import samsung39 from "../../assets/samsung/samsung (39).png";
import samsung40 from "../../assets/samsung/samsung (40).png";
import samsung41 from "../../assets/samsung/samsung (41).png";
import samsung42 from "../../assets/samsung/samsung (42).png";
import samsung43 from "../../assets/samsung/samsung (43).png";
import samsung44 from "../../assets/samsung/samsung (44).png";
import samsung45 from "../../assets/samsung/samsung (45).png";
import samsung46 from "../../assets/samsung/samsung (46).png";
import samsung47 from "../../assets/samsung/samsung (47).png";
import samsung48 from "../../assets/samsung/samsung (48).png";
import samsung49 from "../../assets/samsung/samsung (49).png";
import samsung50 from "../../assets/samsung/samsung (50).png";

import samsung51 from "../../assets/samsung/samsung (51).png";
import samsung52 from "../../assets/samsung/samsung (52).png";
import samsung53 from "../../assets/samsung/samsung (53).png";
import samsung54 from "../../assets/samsung/samsung (54).png";
import samsung55 from "../../assets/samsung/samsung (55).png";
import samsung56 from "../../assets/samsung/samsung (56).png";
import samsung57 from "../../assets/samsung/samsung (57).png";
import samsung58 from "../../assets/samsung/samsung (58).png";
import samsung59 from "../../assets/samsung/samsung (59).png";
import samsung60 from "../../assets/samsung/samsung (60).png";
import samsung61 from "../../assets/samsung/samsung (61).png";
import samsung62 from "../../assets/samsung/samsung (62).png";
import samsung63 from "../../assets/samsung/samsung (63).png";
import samsung64 from "../../assets/samsung/samsung (64).png";
import samsung65 from "../../assets/samsung/samsung (65).png";
import samsung66 from "../../assets/samsung/samsung (66).png";
import samsung67 from "../../assets/samsung/samsung (67).png";
import samsung68 from "../../assets/samsung/samsung (68).png";
import samsung69 from "../../assets/samsung/samsung (69).png";
import samsung70 from "../../assets/samsung/samsung (70).png";
import samsung71 from "../../assets/samsung/samsung (71).png";
import samsung72 from "../../assets/samsung/samsung (72).png";
import samsung73 from "../../assets/samsung/samsung (73).png";
import samsung74 from "../../assets/samsung/samsung (74).png";
import samsung75 from "../../assets/samsung/samsung (75).png";
import samsung76 from "../../assets/samsung/samsung (76).png";
import samsung77 from "../../assets/samsung/samsung (77).png";

import samsung78 from "../../assets/samsung/samsung (1).webp";
import samsung79 from "../../assets/samsung/samsung (2).webp";
import samsung80 from "../../assets/samsung/samsung (3).webp";
import samsung81 from "../../assets/samsung/samsung (4).webp";
import samsung82 from "../../assets/samsung/samsung (5).webp";
import samsung83 from "../../assets/samsung/samsung (6).webp";
import samsung84 from "../../assets/samsung/samsung (7).webp";
import samsung85 from "../../assets/samsung/samsung (8).webp";
import samsung86 from "../../assets/samsung/samsung (9).webp";
import samsung87 from "../../assets/samsung/samsung (10).webp";
import samsung88 from "../../assets/samsung/samsung (11).webp";
import samsung89 from "../../assets/samsung/samsung (12).webp";
import samsung90 from "../../assets/samsung/samsung (13).webp";
import samsung91 from "../../assets/samsung/samsung (14).webp";
import samsung92 from "../../assets/samsung/samsung (15).webp";
import samsung93 from "../../assets/samsung/samsung (16).webp";
import samsung94 from "../../assets/samsung/samsung (17).webp";
import samsung95 from "../../assets/samsung/samsung (18).webp";
import samsung96 from "../../assets/samsung/samsung (19).webp";
import samsung97 from "../../assets/samsung/samsung (20).webp";
import samsung98 from "../../assets/samsung/samsung (21).webp";
import samsung99 from "../../assets/samsung/samsung (22).webp";
import samsung100 from "../../assets/samsung/samsung (23).webp";
import samsung101 from "../../assets/samsung/samsung (24).webp";
import samsung102 from "../../assets/samsung/samsung (25).webp";
import samsung103 from "../../assets/samsung/samsung (26).webp";
import samsung104 from "../../assets/samsung/samsung (27).webp";
import samsung105 from "../../assets/samsung/samsung (28).webp";
import samsung106 from "../../assets/samsung/samsung (29).webp";
import samsung107 from "../../assets/samsung/samsung (30).webp";
import samsung108 from "../../assets/samsung/samsung (31).webp";
import samsung109 from "../../assets/samsung/samsung (32).webp";
import samsung110 from "../../assets/samsung/samsung (33).webp";
import samsung111 from "../../assets/samsung/samsung (34).webp";
import samsung112 from "../../assets/samsung/samsung (35).webp";
import samsung113 from "../../assets/samsung/samsung (36).webp";
import samsung114 from "../../assets/samsung/samsung (37).webp";
import samsung115 from "../../assets/samsung/samsung (38).webp";
import samsung116 from "../../assets/samsung/samsung (39).webp";
import samsung117 from "../../assets/samsung/samsung (40).webp";
import samsung118 from "../../assets/samsung/samsung (41).webp";
import samsung119 from "../../assets/samsung/samsung (42).webp";
import samsung120 from "../../assets/samsung/samsung (43).webp";
import samsung121 from "../../assets/samsung/samsung (44).webp";
import samsung122 from "../../assets/samsung/samsung (45).webp";
import samsung123 from "../../assets/samsung/samsung (46).webp";
import samsung124 from "../../assets/samsung/samsung (47).webp";
import samsung125 from "../../assets/samsung/samsung (48).webp";

const SamsungPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // List of models - only including models that have corresponding image files
  const samsungModels = [
    { id: 1, name: "Samsung S8", image: samsung1 },
    { id: 2, name: "Samsung Galaxy M52 5G", image: samsung2 },
    { id: 3, name: "Samsung Galaxy A22 5G", image: samsung3 },
    { id: 4, name: "Samsung Galaxy A31", image: samsung4 },
    { id: 5, name: "Samsung Galaxy M20", image: samsung5 },
    { id: 6, name: "Samsung Galaxy S20 Plus", image: samsung6 },
    { id: 7, name: "Samsung F12", image: samsung7 },
    { id: 8, name: "Samsung S10e", image: samsung8 },
    { id: 9, name: "Samsung Galaxy Z Fold3 5G", image: samsung9 },
    { id: 10, name: "Samsung Galaxy S10 Plus", image: samsung10 },
    { id: 11, name: "Samsung Galaxy S10", image: samsung11 },
    { id: 12, name: "Samsung Galaxy S9 Plus", image: samsung12 },
    { id: 13, name: "Samsung Galaxy S9", image: samsung13 },
    { id: 14, name: "Samsung Galaxy S8", image: samsung14 },
    { id: 15, name: "Samsung Galaxy Note 10", image: samsung15 },
    { id: 16, name: "Samsung Galaxy Note 10 lite", image: samsung16 },
    { id: 17, name: "Samsung Galaxy Note 9", image: samsung17 },
    { id: 18, name: "Samsung Galaxy Note 8", image: samsung18 },
    { id: 19, name: "Samsung M51 5G", image: samsung19 },
    { id: 20, name: "Samsung M40 5G", image: samsung20 },
    { id: 21, name: "Samsung M33 5G", image: samsung21 },
    { id: 22, name: "Samsung M32 5G", image: samsung22 },
    { id: 23, name: "Samsung M32", image: samsung23 },
    { id: 24, name: "Samsung M31", image: samsung24 },
    { id: 25, name: "Samsung M31s", image: samsung25 },
    { id: 26, name: "Samsung M30", image: samsung26 },
    { id: 27, name: "Samsung M20s", image: samsung27 },
    { id: 28, name: "Samsung M02", image: samsung28 },
    { id: 29, name: "Samsung M01 core", image: samsung29 },
    { id: 30, name: "Samsung M10", image: samsung30 },
    { id: 31, name: "Samsung M02s", image: samsung31 },
    { id: 32, name: "Samsung M02", image: samsung32 },
    { id: 33, name: "Samsung M01 core", image: samsung33 },
    { id: 34, name: "Samsung M13", image: samsung34 },
    { id: 35, name: "Samsung M01", image: samsung35 },
    { id: 36, name: "Samsung F14 4G", image: samsung36 },
    { id: 37, name: "Samsung J7 Duo", image: samsung37 },
    { id: 38, name: "Samsung J7 Max /On Max", image: samsung38 },
    { id: 39, name: "Samsung J7 Prime/ Prime 2/ On NXT", image: samsung39 },
    { id: 40, name: "Samsung J6", image: samsung40 },
    { id: 41, name: "Samsung F62", image: samsung41 },
    { id: 42, name: "Samsung A04", image: samsung42 },
    { id: 43, name: "Samsung F42 5G", image: samsung43 },
    { id: 44, name: "Samsung F41", image: samsung44 },
    { id: 45, name: "Samsung F23 5G", image: samsung45 },
    { id: 46, name: "Samsung F02s", image: samsung46 },
    { id: 47, name: "Samsung C9 Pro", image: samsung47 },
    { id: 48, name: "Samsung C7 Pro", image: samsung48 },
    { id: 49, name: "Samsung A80", image: samsung49 },
    { id: 50, name: "Samsung Galaxy A72", image: samsung50 },
    { id: 51, name: "Samsung Galaxy A71", image: samsung51 },
    { id: 52, name: "Samsung Galaxy A70", image: samsung52 },
    { id: 53, name: "Samsung A52 Plus s", image: samsung53 },
    { id: 54, name: "Samsung A52 s", image: samsung54 },
    { id: 55, name: "Samsung A51", image: samsung55 },
    { id: 56, name: "Samsung A50s", image: samsung56 },
    { id: 57, name: "Samsung A50", image: samsung57 },
    { id: 58, name: "Samsung A33 5G", image: samsung58 },
    { id: 59, name: "Samsung A32", image: samsung59 },
    { id: 60, name: "Samsung A30", image: samsung60 },
    { id: 61, name: "Samsung A30", image: samsung61 },
    { id: 62, name: "Samsung A23", image: samsung62 },
    { id: 63, name: "Samsung A21s", image: samsung63 },
    { id: 64, name: "Samsung A20s", image: samsung64 },
    { id: 65, name: "Samsung A20", image: samsung65 },
    { id: 66, name: "Samsung A13", image: samsung66 },
    { id: 67, name: "Samsung M42", image: samsung67 },
    { id: 68, name: "Samsung A10s", image: samsung68 },
    { id: 69, name: "Samsung A10 5G", image: samsung69 },
    { id: 70, name: "Samsung A9 (2018)5G", image: samsung70 },
    { id: 71, name: "Samsung A8 Star", image: samsung71 },
    { id: 72, name: "Samsung A7 (2018)", image: samsung72 },
    { id: 73, name: "Samsung A6 Plus", image: samsung73 },
    { id: 74, name: "Samsung M30s", image: samsung74 },
    { id: 75, name: "Samsung A03 S", image: samsung75 },
    { id: 76, name: "Samsung A03", image: samsung76 },
    { id: 77, name: "Samsung M2 Core", image: samsung77 },
    { id: 78, name: "Samsung Galaxy S25 Plus 5G", image: samsung78 },
    { id: 79, name: "Samsung Galaxy S25 5G", image: samsung79 },
    { id: 80, name: "Samsung Galaxy S24 FE 5G", image: samsung80 },
    { id: 81, name: "Samsung Galaxy S24 Ultra 5G", image: samsung81 },
    { id: 82, name: "Samsung Glalxy Z Flod6 5G", image: samsung82 },
    { id: 83, name: "Samsung Glalxy Z Flod5 5G", image: samsung83 },
    { id: 84, name: "Samsung Glalxy Z Flod4 5G", image: samsung84 },
    { id: 85, name: "Samsung Glalxy Z Flod3 5G", image: samsung85 },
    { id: 86, name: "Samsung Glalxy Z Flod2 5G", image: samsung86 },
    { id: 87, name: "Samsung Galaxy Fold", image: samsung87 },
    { id: 88, name: "Samsung Galaxy Z Flip6 5G", image: samsung88 },
    { id: 89, name: "Samsung Galaxy Z Flip5 5G", image: samsung89 },
    { id: 90, name: "Samsung Z Flip4", image: samsung90 },
    { id: 91, name: "Samsung Galaxy Z Flip3 Flip 5G", image: samsung91 },
    { id: 92, name: "Samsung Galaxy Z Flip 5G", image: samsung92 },
    { id: 93, name: "Samsung J4 Plus", image: samsung93 },
    { id: 94, name: "Samsung F62 5G", image: samsung94 },
    { id: 95, name: "Samsung F41", image: samsung95 },
    { id: 96, name: "Samsung A23 5G", image: samsung96 },
    { id: 97, name: "Samsung F14", image: samsung97 },
    { id: 98, name: "Samsung F15 5G", image: samsung98 },
    { id: 99, name: "Samsung Galaxy A54 5G", image: samsung99 },
    { id: 100, name: "Samsung Galaxy F23", image: samsung100 },
    { id: 101, name: "Samsung Galaxy S23 Ultra FE 5G", image: samsung101 },
    { id: 102, name: "Samsung Galaxy S23 Plus 5G", image: samsung102 },
    { id: 103, name: "Samsung Galaxy S23 FE 5G", image: samsung103 },
    { id: 104, name: "Samsung Galalaxy S22 Ultra 5G", image: samsung104 },
    { id: 105, name: "Samsung Galaxy S22 ", image: samsung105 },
    { id: 106, name: "Samsung Galaxy S22 Plus 5G", image: samsung106 },
    { id: 107, name: "Samsung S21 Ultra Plus", image: samsung107 },
    { id: 108, name: "Samsung S20 Ultra", image: samsung108 },
    { id: 109, name: "Samsung S20", image: samsung109 },
    { id: 110, name: "Samsung M04", image: samsung110 },
    { id: 111, name: "Samsung M13", image: samsung111 },
    { id: 112, name: "Samsung A03M34 5G", image: samsung112 },
    { id: 113, name: "Samsung F34 5G", image: samsung113 },
    { id: 114, name: "Samsung F34 5G", image: samsung114 },
    { id: 115, name: "Samsung F13", image: samsung115 },
    { id: 116, name: "Samsung A34 5G", image: samsung116 },
    { id: 117, name: "Samsung A25 5G", image: samsung117 },
    { id: 118, name: "Samsung A14", image: samsung118 },
    { id: 119, name: "Samsung A05s", image: samsung119 },
    { id: 120, name: "Samsung A05", image: samsung120 },
    { id: 121, name: "Samsung  A04 e", image: samsung121 },
    { id: 122, name: "Samsung A04", image: samsung122 },
    { id: 123, name: "Samsung A04", image: samsung123 },
    { id: 124, name: "Samsung S21 Ultra 5G", image: samsung124 },
    { id: 125, name: "Samsung S21 5G", image: samsung125 },
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
            Home / Repair / Samsung
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Samsung Repair & Replacement
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

        {/* Samsung Models Grid */}
        <div  className="main"
          // style={{

          //   display: "grid",
          //   gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          //   gap: "20px",
          //   marginBottom: "40px", 
          // }}
          
  
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
                  width: "80px",
                  height: "50px",
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
            SAMSUNG REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Your Samsung device is more than just technology; it's an essential
            part of your everyday work and entertainment. Our expert Samsung
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
            WE CAN FIX YOUR SAMSUNG
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SamsungPage;












