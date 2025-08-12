import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import vivo1 from "../../assets/vivo/vivo (1).png";
import vivo2 from "../../assets/vivo/vivo (2).png";
import vivo3 from "../../assets/vivo/vivo (3).png";
import vivo4 from "../../assets/vivo/vivo (4).png";
import vivo5 from "../../assets/vivo/vivo (5).png";
import vivo6 from "../../assets/vivo/vivo (6).png";
import vivo7 from "../../assets/vivo/vivo (7).png";
import vivo8 from "../../assets/vivo/vivo (8).png";
import vivo9 from "../../assets/vivo/vivo (9).png";
import vivo10 from "../../assets/vivo/vivo (10).png";
import vivo11 from "../../assets/vivo/vivo (11).png";
import vivo12 from "../../assets/vivo/vivo (12).png";
import vivo13 from "../../assets/vivo/vivo (13).png";
import vivo14 from "../../assets/vivo/vivo (14).png";
import vivo15 from "../../assets/vivo/vivo (15).png";
import vivo16 from "../../assets/vivo/vivo (16).png";
import vivo17 from "../../assets/vivo/vivo (17).png";
import vivo18 from "../../assets/vivo/vivo (18).png";
import vivo19 from "../../assets/vivo/vivo (19).png";
import vivo20 from "../../assets/vivo/vivo (20).png";
import vivo21 from "../../assets/vivo/vivo (21).png";
import vivo22 from "../../assets/vivo/vivo (22).png";
import vivo23 from "../../assets/vivo/vivo (23).png";
import vivo24 from "../../assets/vivo/vivo (24).png";
import vivo25 from "../../assets/vivo/vivo (25).png";
import vivo26 from "../../assets/vivo/vivo (26).png";
import vivo27 from "../../assets/vivo/vivo (27).png";
import vivo28 from "../../assets/vivo/vivo (28).png";
import vivo29 from "../../assets/vivo/vivo (29).png";
import vivo30 from "../../assets/vivo/vivo (30).png";
import vivo31 from "../../assets/vivo/vivo (31).png";
import vivo32 from "../../assets/vivo/vivo (32).png";
import vivo33 from "../../assets/vivo/vivo (33).png";
import vivo34 from "../../assets/vivo/vivo (34).png";
import vivo35 from "../../assets/vivo/vivo (35).png";
import vivo36 from "../../assets/vivo/vivo (36).png";
import vivo37 from "../../assets/vivo/vivo (37).png";
import vivo38 from "../../assets/vivo/vivo (38).png";
import vivo39 from "../../assets/vivo/vivo (39).png";
import vivo40 from "../../assets/vivo/vivo (40).png";
import vivo41 from "../../assets/vivo/vivo (41).png";
import vivo42 from "../../assets/vivo/vivo (42).png";
import vivo43 from "../../assets/vivo/vivo (43).png";
import vivo44 from "../../assets/vivo/vivo (44).png";
import vivo45 from "../../assets/vivo/vivo (45).png";
import vivo46 from "../../assets/vivo/vivo (46).png";
import vivo47 from "../../assets/vivo/vivo (47).png";
import vivo48 from "../../assets/vivo/vivo (48).png";
import vivo49 from "../../assets/vivo/vivo (49).png";
import vivo50 from "../../assets/vivo/vivo (50).png";
import vivo51 from "../../assets/vivo/vivo (51).png";
import vivo52 from "../../assets/vivo/vivo (52).png";
import vivo53 from "../../assets/vivo/vivo (53).png";
import vivo54 from "../../assets/vivo/vivo (54).png";
import vivo55 from "../../assets/vivo/vivo(55).png";
import vivo56 from "../../assets/vivo/vivo(56).png";

import vivoWebp1 from "../../assets/vivo/vivo (1).webp";
import vivoWebp2 from "../../assets/vivo/vivo (2).webp";
import vivoWebp3 from "../../assets/vivo/vivo (3).webp";
import vivoWebp4 from "../../assets/vivo/vivo (4).webp";
import vivoWebp5 from "../../assets/vivo/vivo (5).webp";
import vivoWebp6 from "../../assets/vivo/vivo (6).webp";
import vivoWebp7 from "../../assets/vivo/vivo (7).webp";
import vivoWebp8 from "../../assets/vivo/vivo (8).webp";
import vivoWebp9 from "../../assets/vivo/vivo (9).webp";
import vivoWebp10 from "../../assets/vivo/vivo (10).webp";
import vivoWebp11 from "../../assets/vivo/vivo (11).webp";
import vivoWebp12 from "../../assets/vivo/vivo (12).webp";
import vivoWebp13 from "../../assets/vivo/vivo (13).webp";
import vivoWebp14 from "../../assets/vivo/vivo (14).webp";
import vivoWebp15 from "../../assets/vivo/vivo (15).webp";
import vivoWebp16 from "../../assets/vivo/vivo (16).webp";
import vivoWebp17 from "../../assets/vivo/vivo (17).webp";
import vivoWebp18 from "../../assets/vivo/vivo (18).webp";
import vivoWebp19 from "../../assets/vivo/vivo (19).webp";
import vivoWebp20 from "../../assets/vivo/vivo (20).webp";
import vivoWebp21 from "../../assets/vivo/vivo (21).webp";
import vivoWebp22 from "../../assets/vivo/vivo (22).webp";
import vivoWebp23 from "../../assets/vivo/vivo (23).webp";
import vivoWebp24 from "../../assets/vivo/vivo (24).webp";
import vivoWebp25 from "../../assets/vivo/vivo (25).webp";
import vivoWebp26 from "../../assets/vivo/vivo (26).webp";
import vivoWebp27 from "../../assets/vivo/vivo (27).webp";
import vivoWebp28 from "../../assets/vivo/vivo (28).webp";
import vivoWebp29 from "../../assets/vivo/vivo (29).webp";
import vivoWebp30 from "../../assets/vivo/vivo (30).webp";
import vivoWebp31 from "../../assets/vivo/vivo (31).webp";
import vivoWebp32 from "../../assets/vivo/vivo (32).webp";
import vivoWebp33 from "../../assets/vivo/vivo (33).webp";
import vivoWebp34 from "../../assets/vivo/vivo (34).webp";
import vivoWebp35 from "../../assets/vivo/vivo (35).webp";
import vivoWebp36 from "../../assets/vivo/vivo (36).webp";
import vivoWebp37 from "../../assets/vivo/vivo (37).webp";
import vivoWebp38 from "../../assets/vivo/vivo (38).webp";
import vivoWebp39 from "../../assets/vivo/vivo (39).webp";
import vivoWebp40 from "../../assets/vivo/vivo (40).webp";
import vivoWebp41 from "../../assets/vivo/vivo (41).webp";
import vivoWebp42 from "../../assets/vivo/vivo (42).webp";
import vivoWebp43 from "../../assets/vivo/vivo (43).webp";
import vivoWebp44 from "../../assets/vivo/vivo (44).webp";
import vivoWebp45 from "../../assets/vivo/vivo (45).webp";
import vivoWebp46 from "../../assets/vivo/vivo (46).webp";
import vivoWebp47 from "../../assets/vivo/vivo (47).webp";
import vivoWebp48 from "../../assets/vivo/vivo (48).webp";
import vivoWebp49 from "../../assets/vivo/vivo (49).webp";
import vivoWebp50 from "../../assets/vivo/vivo (50).webp";
import vivoWebp51 from "../../assets/vivo/vivo (51).webp";
import vivoWebp52 from "../../assets/vivo/vivo (52).webp";
import vivoWebp53 from "../../assets/vivo/vivo (53).webp";
import vivoWebp54 from "../../assets/vivo/vivo (54).webp";
import vivoWebp55 from "../../assets/vivo/vivo(55).webp";

const VivoPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const vivoModels = [
    { id: 1, name: "Vivo Y21G/Y12S", image: vivo1 },
    { id: 2, name: "Vivo U20", image: vivo2 },
    { id: 3, name: "Vivo U10", image: vivo3 },
    { id: 4, name: "Vivo Z1 Pro", image: vivo4 },
    { id: 5, name: "Vivo Y75", image: vivo5 },
    { id: 6, name: "Vivo Y73", image: vivo6 },
    { id: 7, name: "Vivo Y72 5G", image: vivo7 },
    { id: 8, name: "Vivo Y53s", image: vivo8 },
    { id: 9, name: "Vivo Y51 A", image: vivo9 },
    { id: 10, name: "Vivo Y33s ", image: vivo10 },
    { id: 11, name: "Vivo Y31", image: vivo11 },
    { id: 12, name: "Vivo Y30 / Y50", image: vivo12 },
    { id: 13, name: "Vivo Y21/ Y21a/ Y21e / y21s / Y21T", image: vivo13 },
    { id: 14, name: "Vivo Y20", image: vivo14 },
    { id: 15, name: "Vivo Y19", image: vivo15 },
    { id: 16, name: "Vivo Y15s", image: vivo16 },
    { id: 17, name: "Vivo Y12/ Y15/ Y17", image: vivo17 },
    { id: 18, name: "Vivo Y91/ Y93/ Y95", image: vivo18 },
    { id: 19, name: "Vivo Y55s", image: vivo19 },
    { id: 20, name: "Vivo Y01", image: vivo20 },
    { id: 21, name: "Vivo Y90/ Y90i", image: vivo21 },
    { id: 22, name: "Vivo Y83 Pro", image: vivo22 },
    { id: 23, name: "Vivo Y69", image: vivo23 },
    { id: 24, name: "Vivo Y81/Y83", image: vivo24 },
    { id: 25, name: "Vivo Y81i", image: vivo25 },
    { id: 26, name: "Vivo Y71", image: vivo26 },
    { id: 27, name: "Vivo Y66", image: vivo27 },
    { id: 28, name: "Vivo Y3s", image: vivo28 },
    { id: 29, name: "Vivo S51s", image: vivo29 },
    { id: 30, name: "Vivo X60 Pro", image: vivo30 },
    { id: 31, name: "Vivo X60", image: vivo31 },
    { id: 32, name: "Vivo x50 Pro", image: vivo32 },
    { id: 33, name: "Vivo X50", image: vivo33 },
    { id: 34, name: "Vivo S1 Pro", image: vivo34 },
    { id: 35, name: "Vivo S1", image: vivo35 },
    { id: 36, name: "Vivo V23e 5G", image: vivo36 },
    { id: 37, name: "Vivo V23 pro 5G", image: vivo37 },
    { id: 38, name: "Vivo V23", image: vivo38 },
    { id: 39, name: "Vivo V21e 5G", image: vivo39 },
    { id: 40, name: "Vivo V21 ", image: vivo40 },
    { id: 41, name: "Vivo v20 SE 5G", image: vivo41 },
    { id: 42, name: "Vivo S21 5G", image: vivo42 },
    { id: 43, name: "Vivo V20", image: vivo43 },
    { id: 44, name: "Vivo V19", image: vivo44 },
    { id: 45, name: "Vivo V17 Pro", image: vivo45 },
    { id: 46, name: "Vivo V17", image: vivo46 },
    { id: 47, name: "Vivo V15 Pro 5G", image: vivo47 },
    { id: 48, name: "Vivo V15", image: vivo48 },
    { id: 49, name: "Vivo V11 Pro", image: vivo49 },
    { id: 50, name: "Vivo V11", image: vivo50 },
    { id: 51, name: "Vivo V9/ V9 Pro", image: vivo51 },
    { id: 52, name: "Vivo V7 Plus", image: vivo52 },
    { id: 53, name: "Vivo V7", image: vivo53 },
    { id: 54, name: "Vivo V5 / V5s", image: vivo54 },
    { id: 55, name: "Vivo T3 Lite 5G", image: vivo55 },
    { id: 56, name: "Vivo V50e", image: vivo56 },
    { id: 57, name: "Vivo V50", image: vivoWebp1 },
    { id: 58, name: "Vivo X200 Pro", image: vivoWebp2 },
    { id: 59, name: "Vivo X200", image: vivoWebp3 },
    { id: 60, name: "Vivo T4 X 5G", image: vivoWebp4 },
    { id: 61, name: "Vivo T3 Ultra", image: vivoWebp5 },
    { id: 62, name: "Vivo T3 Pro", image: vivoWebp6 },
    { id: 63, name: "Vivo Y300 Plus", image: vivoWebp7 },
    { id: 64, name: "Vivo Y 300", image: vivoWebp8 },
    { id: 65, name: "Vivo Y 29", image: vivoWebp9 },
    { id: 66, name: "Vivo Y 18 series", image: vivoWebp10 },
    { id: 67, name: "Vivo Y 18i", image: vivoWebp11 },
    { id: 68, name: "Vivo V40 e", image: vivoWebp12 },
    { id: 69, name: "Vivo V40 series", image: vivoWebp13 },
    { id: 70, name: "Vivo V30 Pro", image: vivoWebp14 },
    { id: 71, name: "Vivo V17 s", image: vivoWebp15 },
    { id: 72, name: "Vivo Y200 Pro", image: vivoWebp16 },
    { id: 73, name: "Vivo Y 58", image: vivoWebp17 },
    { id: 74, name: "Vivo Y 18e ", image: vivoWebp18 },
    { id: 75, name: "Vivo Y 18 series", image: vivoWebp19 },
    { id: 76, name: "Vivo T3X ", image: vivoWebp20 },
    { id: 77, name: "Vivo T3 ", image: vivoWebp21 },
    { id: 78, name: "Vivo T2 Pro", image: vivoWebp22 },
    { id: 79, name: "Vivo T3x 5G", image: vivoWebp23 },
    { id: 80, name: "Vivo T2 5G", image: vivoWebp24 },
    { id: 81, name: "Vivo T1 X", image: vivoWebp25 },
    { id: 82, name: "Vivo T1 Pro", image: vivoWebp26 },
    { id: 83, name: "Vivo T1", image: vivoWebp27 },
    { id: 84, name: "Vivo Y200e", image: vivoWebp28 },
    { id: 85, name: "Vivo Y28 ", image: vivoWebp29 },
    { id: 86, name: "Vivo Y200", image: vivoWebp30 },
    { id: 87, name: "Vivo Y27", image: vivoWebp31 },
    { id: 88, name: "Vivo Y36", image: vivoWebp32 },
    { id: 89, name: "Vivo Y202t", image: vivoWebp33 },
    { id: 90, name: "Vivo Y20", image: vivoWebp34 },
    { id: 91, name: "Vivo Y17", image: vivoWebp35 },
    { id: 92, name: "Vivo Y15", image: vivoWebp36 },
    { id: 93, name: "Vivo Y100A", image: vivoWebp37 },
    { id: 94, name: "Vivo Y102", image: vivoWebp38 },
    { id: 95, name: "Vivo Y35", image: vivoWebp39 },
    { id: 96, name: "Vivo Y16", image: vivoWebp40 },
    { id: 97, name: "Vivo Y22", image: vivoWebp41 },
    { id: 98, name: "Vivo X100 Pro", image: vivoWebp42 },
    { id: 99, name: "Vivo X100", image: vivoWebp43 },
    { id: 100, name: "Vivo X90 Pro", image: vivoWebp44 },
    { id: 101, name: "Vivo X90", image: vivoWebp45 },
    { id: 102, name: "Vivo X80 Pro", image: vivoWebp46 },
    { id: 103, name: "Vivo X80", image: vivoWebp47 },
    { id: 104, name: "Vivo X70 Pro +", image: vivoWebp48 },
    { id: 105, name: "Vivo X60 Pro +", image: vivoWebp49 },
    { id: 106, name: "Vivo V29 Pro", image: vivoWebp50 },
    { id: 107, name: "Vivo V29e", image: vivoWebp51 },
    { id: 108, name: "Vivo V17 Pro", image: vivoWebp52 },
    { id: 109, name: "Vivo V25 5G", image: vivoWebp53 },
    { id: 110, name: "Vivo V25 Pro 5G", image: vivoWebp54 },
    { id: 111, name: "Vivo X 70 Pro", image: vivoWebp55 },
  ];

  const filteredModels = vivoModels.filter((model) =>
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
            Home / Repair / Vivo
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Vivo Repair & Replacement
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
            placeholder="Search Vivo models..."
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

        {/* Vivo Models Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
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
            VIVO REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Your Vivo device is more than just technology; it's an essential
            part of your everyday work and entertainment. Our expert Vivo
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
            WE CAN FIX YOUR VIVO
          </h3>
        </div>
      </div>
    </div>
  );
};

export default VivoPage;



