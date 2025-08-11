import React, { useState } from "react";

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
// Only include webp files that exist (adjust the number based on what files you actually have)
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

// List of models - only including models that have corresponding image files
const samsungModels = [
  { name: "Samsung Galaxy S25 Ultra 5G", image: samsung1 },
  { name: "Samsung Galaxy S25 Plus 5G", image: samsung2 },
  { name: "Samsung Galaxy S25 5G", image: samsung3 },
  { name: "Samsung Galaxy S24 FE 5G", image: samsung4 },
  { name: "Samsung Galaxy S24 Ultra 5G", image: samsung5 },
  { name: "Samsung Galaxy S24 Plus 5G", image: samsung6 },
  { name: "Samsung Galaxy Z Fold5 5G", image: samsung7 },
  { name: "Samsung Galaxy Z Fold4", image: samsung8 },
  { name: "Samsung Galaxy Z Fold3 5G", image: samsung9 },
  { name: "Samsung Galaxy Z Fold2 5G", image: samsung10 },
  { name: "Samsung Galaxy Fold", image: samsung11 },
  { name: "Samsung Galaxy Z Flip5 5G", image: samsung12 },
  { name: "Samsung Galaxy Z Flip4", image: samsung13 },
  { name: "Samsung Galaxy Z Flip3 5G", image: samsung14 },
  { name: "Samsung Galaxy Z Flip", image: samsung15 },
  { name: "Samsung M55 5G", image: samsung16 },
  { name: "Samsung M55e 5G", image: samsung17 },
  { name: "Samsung A35 5G", image: samsung18 },
  { name: "Samsung A55 5G", image: samsung19 },
  { name: "Samsung F55 5G", image: samsung20 },
  { name: "Samsung F14", image: samsung21 },
  { name: "Samsung F15 5G", image: samsung22 },
  { name: "Samsung A54 5G", image: samsung23 },
  { name: "Samsung S22 Ultra 5G", image: samsung24 },
  { name: "Samsung S22 FE 5G", image: samsung25 },
  { name: "Samsung S22 Plus 5G", image: samsung26 },
  { name: "Samsung S23 5G", image: samsung27 },
  { name: "Samsung S21 Plus 5G", image: samsung28 },
  { name: "Samsung S20 Ultra", image: samsung29 },
  { name: "Samsung S20 FE", image: samsung30 },
  { name: "Samsung S20", image: samsung31 },
  { name: "Samsung M04", image: samsung32 },
  { name: "Samsung M14 5G", image: samsung33 },
  { name: "Samsung M13", image: samsung34 },
  { name: "Samsung M14 5G", image: samsung35 },
  { name: "Samsung F14 4G", image: samsung36 },
  { name: "Samsung F14 5G", image: samsung37 },
  { name: "Samsung F13", image: samsung38 },
  { name: "Samsung A34 5G", image: samsung39 },
  { name: "Samsung A26 5G", image: samsung40 },
  { name: "Samsung A15 5G", image: samsung41 },
  { name: "Samsung A04", image: samsung42 },
  { name: "Samsung A06 5G", image: samsung43 },
  { name: "Samsung A05", image: samsung44 },
  { name: "Samsung A04s", image: samsung45 },
  { name: "Samsung A04e", image: samsung46 },
  { name: "Samsung S24 Ultra 5G", image: samsung47 },
  { name: "Samsung S23 5G", image: samsung48 },
  { name: "Samsung S20 Plus", image: samsung49 },
  { name: "Samsung Galaxy Note 20 Ultra 5G", image: samsung50 },
  { name: "Samsung S10e", image: samsung51 },
  { name: "Samsung S10", image: samsung52 },
  { name: "Samsung S10 Plus", image: samsung53 },
  { name: "Samsung S10 Lite", image: samsung54 },
  { name: "Samsung S9 Plus", image: samsung55 },
  { name: "Samsung S9", image: samsung56 },
  { name: "Samsung S8 Plus", image: samsung57 },
  { name: "Samsung S8", image: samsung58 },
  { name: "Samsung Note10 Plus", image: samsung59 },
  { name: "Samsung Note10 Lite", image: samsung60 },
  { name: "Samsung Note10", image: samsung61 },
  { name: "Samsung Note9", image: samsung62 },
  { name: "Samsung Note8", image: samsung63 },
  { name: "Samsung M53 5G", image: samsung64 },
  { name: "Samsung M52 5G", image: samsung65 },
  { name: "Samsung M51", image: samsung66 },
  { name: "Samsung M42", image: samsung67 },
  { name: "Samsung M40", image: samsung68 },
  { name: "Samsung M33 5G", image: samsung69 },
  { name: "Samsung M32 5G", image: samsung70 },
  { name: "Samsung M32", image: samsung71 },
  { name: "Samsung M31s", image: samsung72 },
  { name: "Samsung M31", image: samsung73 },
  { name: "Samsung M30s", image: samsung74 },
  { name: "Samsung M30", image: samsung75 },
  { name: "Samsung M21 2021 Edition", image: samsung76 },
  { name: "Samsung M21", image: samsung77 },
  { name: "Samsung M12", image: samsung78 },
  { name: "Samsung M11", image: samsung79 },
  { name: "Samsung M10s", image: samsung80 },
  { name: "Samsung M10", image: samsung81 },
  { name: "Samsung M01 Core", image: samsung82 },
  { name: "Samsung M01s", image: samsung83 },
  { name: "Samsung M01", image: samsung84 },
  { name: "Samsung J8/On 8", image: samsung85 },
  { name: "Samsung J7 Duo", image: samsung86 },
  { name: "Samsung J7 Max/ On Max", image: samsung87 },
  { name: "Samsung J7 Prime/ Prime2/ On NXT", image: samsung88 },
  { name: "Samsung J7 Pro", image: samsung89 },
  { name: "Samsung J6 Plus", image: samsung90 },
  { name: "Samsung J6", image: samsung91 },
  { name: "Samsung J5 Prime", image: samsung92 },
  { name: "Samsung J4 Plus", image: samsung93 },
  { name: "Samsung F62 5G", image: samsung94 },
  { name: "Samsung F41", image: samsung95 },
  { name: "Samsung A23 5G", image: samsung96 },
  { name: "Samsung A23", image: samsung97 },
  { name: "Samsung A22", image: samsung98 },
  { name: "Samsung A21s", image: samsung99 },
  { name: "Samsung A21", image: samsung100 },
  { name: "Samsung A20s", image: samsung101 },
  { name: "Samsung A20", image: samsung102 },
  { name: "Samsung A13", image: samsung103 },
  { name: "Samsung A12", image: samsung104 },
  { name: "Samsung A11", image: samsung105 },
  { name: "Samsung A10s", image: samsung106 },
  { name: "Samsung A10", image: samsung107 },
  { name: "Samsung A08", image: samsung108 },
  { name: "Samsung A07s", image: samsung109 },
  { name: "Samsung A07", image: samsung110 },
  { name: "Samsung A03s", image: samsung111 },
  { name: "Samsung A03 Core", image: samsung112 },
  { name: "Samsung A03", image: samsung113 },
  { name: "Samsung A02s", image: samsung114 },
  { name: "Samsung A02", image: samsung115 },
  { name: "Samsung A01 Core", image: samsung116 },
  { name: "Samsung A01", image: samsung117 },
  { name: "Samsung Galaxy Tab A7", image: samsung118 },
  { name: "Samsung Galaxy Tab S6", image: samsung119 },
  { name: "Samsung Galaxy Tab S5e", image: samsung120 },
  { name: "Samsung Galaxy Tab A8", image: samsung121 },
  { name: "Samsung Galaxy Tab A", image: samsung122 },
  { name: "Samsung Galaxy Watch", image: samsung123 },
  { name: "Samsung Galaxy Buds", image: samsung124 },
  { name: "Samsung Galaxy Buds Pro", image: samsung125 },
];

const SamsungPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredModels = samsungModels.filter((model) =>
    model.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Header */}
      <div style={{ backgroundColor: "white", borderBottom: "1px solid #dee2e6", padding: "20px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: "10px", color: "#6c757d", fontSize: "14px" }}>
            Home / Repair / Samsung
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#212529", margin: 0 }}>
            Samsung Repair & Replacement
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

        {/* Samsung Models Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredModels.map((model, index) => (
            <div
              key={index}
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
                  height: "80px",
                  objectFit: "contain",
                  marginBottom: "15px",
                }}
              />
              <h3 style={{ fontSize: "14px", fontWeight: "600", margin: "10px 0 5px" }}>
                {model.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SamsungPage;



