import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import realme1 from "../../assets/realme/realme (1).png";
import realme2 from "../../assets/realme/realme (2).png";
import realme3 from "../../assets/realme/realme (3).png";
import realme4 from "../../assets/realme/realme (4).png";
import realme5 from "../../assets/realme/realme (5).png";
import realme6 from "../../assets/realme/realme (6).png";
import realme7 from "../../assets/realme/realme (7).png";
import realme8 from "../../assets/realme/realme (8).png";
import realme9 from "../../assets/realme/realme (9).png";
import realme10 from "../../assets/realme/realme (10).png";
import realme11 from "../../assets/realme/realme (11).png";
import realme12 from "../../assets/realme/realme (12).png";
import realme13 from "../../assets/realme/realme (13).png";
import realme14 from "../../assets/realme/realme (14).png";
import realme15 from "../../assets/realme/realme (15).png";
import realme16 from "../../assets/realme/realme (16).png";
import realme17 from "../../assets/realme/realme (17).png";
import realme18 from "../../assets/realme/realme (18).png";
import realme19 from "../../assets/realme/realme (19).png";
import realme20 from "../../assets/realme/realme (20).png";
import realme21 from "../../assets/realme/realme (21).png";
import realme22 from "../../assets/realme/realme (22).png";
import realme23 from "../../assets/realme/realme (23).png";
import realme24 from "../../assets/realme/realme (24).png";
import realme25 from "../../assets/realme/realme (25).png";
import realme26 from "../../assets/realme/realme (26).png";
import realme27 from "../../assets/realme/realme (27).png";
import realme28 from "../../assets/realme/realme (28).png";
import realme29 from "../../assets/realme/realme (29).png";
import realme30 from "../../assets/realme/realme (30).png";
import realme31 from "../../assets/realme/realme (31).png";
import realme32 from "../../assets/realme/realme (32).png";
import realme33 from "../../assets/realme/realme (33).png";
import realme34 from "../../assets/realme/realme (34).png";
import realme35 from "../../assets/realme/realme (35).png";
import realme36 from "../../assets/realme/realme (36).png";
import realme37 from "../../assets/realme/realme (37).png";
import realme38 from "../../assets/realme/realme (38).png";
import realme39 from "../../assets/realme/realme (39).png";
import realme40 from "../../assets/realme/realme (40).png";
import realme41 from "../../assets/realme/realme (41).png";
import realme42 from "../../assets/realme/realme (42).png";
import realme43 from "../../assets/realme/realme (43).png";
import realme44 from "../../assets/realme/realme (44).png";
import realme45 from "../../assets/realme/realme (45).png";
import realme46 from "../../assets/realme/realme (46).png";
import realme47 from "../../assets/realme/realme (47).png";
import realme48 from "../../assets/realme/realme (48).png";
import realme49 from "../../assets/realme/realme (49).png";
import realme50 from "../../assets/realme/realme (50).png";
import realme51 from "../../assets/realme/realme (51).png";
import realme52 from "../../assets/realme/realme (52).png";
import realme53 from "../../assets/realme/realme (53).png";
import realme54 from "../../assets/realme/realme (54).png";
import realme55 from "../../assets/realme/realme (55).png";
import realme56 from "../../assets/realme/realme (56).png";
import realme57 from "../../assets/realme/realme (57).png";
import realme58 from "../../assets/realme/realme (58).png";
import realme59 from "../../assets/realme/realme(59).png";
import realmeWebp1 from "../../assets/realme/realme (1).webp";
import realmeWebp2 from "../../assets/realme/realme (2).webp";
import realmeWebp3 from "../../assets/realme/realme (3).webp";
import realmeWebp4 from "../../assets/realme/realme (4).webp";
import realmeWebp5 from "../../assets/realme/realme (5).webp";
import realmeWebp6 from "../../assets/realme/realme (6).webp";
import realmeWebp7 from "../../assets/realme/realme (7).webp";
import realmeWebp8 from "../../assets/realme/realme (8).webp";
import realmeWebp9 from "../../assets/realme/realme (9).webp";
import realmeWebp10 from "../../assets/realme/realme (10).webp";
import realmeWebp11 from "../../assets/realme/realme (11).webp";
import realmeWebp12 from "../../assets/realme/realme (12).webp";
import realmeWebp13 from "../../assets/realme/realme (13).webp";
import realmeWebp14 from "../../assets/realme/realme (14).webp";
import realmeWebp15 from "../../assets/realme/realme (15).webp";
import realmeWebp16 from "../../assets/realme/realme (16).webp";
import realmeWebp17 from "../../assets/realme/realme (17).webp";
import realmeWebp18 from "../../assets/realme/realme (18).webp";
import realmeWebp19 from "../../assets/realme/realme (19).webp";
import realmeWebp20 from "../../assets/realme/realme (20).webp";
import realmeWebp21 from "../../assets/realme/realme (21).webp";
import realmeWebp22 from "../../assets/realme/realme (22).webp";
import realmeWebp23 from "../../assets/realme/realme (23).webp";
import realmeWebp24 from "../../assets/realme/realme (24).webp";
import realmeWebp25 from "../../assets/realme/realme (25).webp";
import realmeWebp26 from "../../assets/realme/realme (26).webp";
import realmeWebp27 from "../../assets/realme/realme (27).webp";
import realmeWebp28 from "../../assets/realme/realme (28).webp";
import realmeWebp29 from "../../assets/realme/realme (29).webp";
import realmeWebp30 from "../../assets/realme/realme (30).webp";
import realmeWebp31 from "../../assets/realme/realme (31).webp";
import realmeWebp32 from "../../assets/realme/realme (32).webp";
import realmeWebp33 from "../../assets/realme/realme (33).webp";
import realmeWebp34 from "../../assets/realme/realme (34).webp";
import realmeWebp35 from "../../assets/realme/realme (35).webp";
import realmeWebp36 from "../../assets/realme/realme (36).webp";
import realmeWebp37 from "../../assets/realme/realme (37).webp";
import realmeWebp38 from "../../assets/realme/realme (38).webp";
import realmeWebp39 from "../../assets/realme/realme (39).webp";
import realmeWebp40 from "../../assets/realme/realme (40).webp";
import realmeWebp41 from "../../assets/realme/realme (41).webp";
import realmeWebp42 from "../../assets/realme/realme (42).webp";
import realmeWebp43 from "../../assets/realme/realme (43).webp";
import realmeWebp44 from "../../assets/realme/realme (44).webp";
import realmeWebp45 from "../../assets/realme/realme (45).webp";
import realmeWebp46 from "../../assets/realme/realme (46).webp";
// import realmeWebp47 from "../../assets/realme/realme (47).webp";

const RealmePage = () => {
 const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const realmeModels = [
    { name: "Realme C21", image: realme1 },
    { name: "Realme 12+ 5G", image: realme2 },
    { name: "Realme 12 5G", image: realme3 },
    { name: "Realme 9i 5G", image: realme4 },
    { name: "Realme X7 Pro", image: realme5 },
    { name: "Realme X32", image: realme6 },
    { name: "Realme GT Neo 4", image: realme7 },
    { name: "Realme XT", image: realme8 },
    { name: "Realme X", image: realme9 },
    { name: "Realme UI", image: realme10 },
    { name: "Realme GT Neo 2", image: realme11 },
    { name: "Realme Narzo 50A", image: realme12 },
    { name: "Realme Narzo 30 Pro", image: realme13 },
    { name: "Realme Narzo 30 5G", image: realme14 },
    { name: "Realme Narzo 30", image: realme15 },
    { name: "Realme Narzo 20A", image: realme16 },
    { name: "Realme X50 5G", image: realme17 },
    { name: "Realme Nazo 20A ", image: realme18 },
    { name: "Realme Narzo 20", image: realme19 },
    { name: "Realme Narzo 10A", image: realme20 },
    { name: "Realme GT NEO 2", image: realme21 },
    { name: "Realme GT MASTER EDITION", image: realme22 },
    { name: "Realme Narzo GT 5G", image: realme23 },
    { name: "Realme C25Y ", image: realme24 },
    { name: "Realme C25 ", image: realme25 },
    { name: "Realme C21 Y", image: realme26 },
    { name: "Realme C21Y Pro", image: realme27 },
    { name: "Realme Narzo C20", image: realme28 },
    { name: "Realme Narzo C15", image: realme29 },
    { name: "Realme Narzo C11", image: realme30 },
    { name: "Realme Narzo C3", image: realme31 },
    { name: "Realme Narzo C2", image: realme32 },
    { name: "Realme Narzo C1", image: realme33 },
    { name: "Realme 9 Pro+", image: realme34 },
    { name: "Realme 9 Pro", image: realme35 },
    { name: "Realme 9i", image: realme36 },
    { name: "Realme 9", image: realme37 },
    { name: "Realme 8s 5G", image: realme38 },
    { name: "Realme 8", image: realme39 },
    { name: "Realme 8i", image: realme40 },
    { name: "Realme 8 Pro", image: realme41 },
    { name: "Realme 8", image: realme42 },
    { name: "Realme 7 Pro+", image: realme43 },
    { name: "Realme 7i", image: realme44 },
    { name: "Realme 7", image: realme45 },
    { name: "Realme 6 Pro", image: realme46 },
    { name: "Realme 6i", image: realme47 },
    { name: "Realme 5i", image: realme48 },
    { name: "Realme 7", image: realme49 },
    { name: "Realme 6 Pro", image: realme50 },
    { name: "Realme 6", image: realme51 },
    { name: "Realme 5 ", image: realme52 },
    { name: "Realme 3 pro", image: realme53 },
    { name: "Realme 3i", image: realme54 },
    { name: "Realme 3 ", image: realme55 },
    { name: "Realme 2 Pro", image: realme56 },
    { name: "Realme 2", image: realme57 },
    { name: "Realme 1", image: realme58 },
    { name: "Realme C65", image: realme59 },
    { name: "Realme 13 Plus 5G", image: realmeWebp1 },
    { name: "Realme 13 5G", image: realmeWebp2 },
    { name: "Realme P2 Pro 5G", image: realmeWebp3 },
    { name: "Realme C63 5G", image: realmeWebp4 },
    { name: "Realme C12x 5G", image: realmeWebp5 },
    { name: "Realme Narzo M65 5G", image: realmeWebp6 },
    { name: "Realme CT 6T", image: realmeWebp7 },
    { name: "Realme GT 6 ", image: realmeWebp8 },
    { name: "Realme NARZO 70 PRO", image: realmeWebp9 },
    { name: "Realme P1 Pro 5G", image: realmeWebp10 },
    { name: "Realme P1 5G", image: realmeWebp11 },
    { name: "Realme 12 Pro", image: realmeWebp12 },
    { name: "Realme 10", image: realmeWebp13 },
    { name: "Realme 11 5G", image: realmeWebp14 },
    { name: "Realme 10 Pro Plus 5G ", image: realmeWebp15 },
    { name: "Realme C12", image: realmeWebp16 },
    { name: "Realme X50 Pro", image: realmeWebp17 },
    { name: "Realme X3 Super Zoom", image: realmeWebp18 },
    { name: "Realme X7 Max 5G", image: realmeWebp19 },
    { name: "Realme Narzo X7 5G", image: realmeWebp20 },
    { name: "Realme Narzo N55", image: realmeWebp21 },
    { name: "Realme Narzo N53", image: realmeWebp22 },
    { name: "Realme Narzo 60x 5G", image: realmeWebp23 },
    { name: "Realme Narzo 60", image: realmeWebp24 },
    { name: "Realme Narzo 50i prime", image: realmeWebp25 },
    { name: "Realme Buds 50 prime", image: realmeWebp26 },
    { name: "Realme narzo 50 Pro", image: realmeWebp27 },
    { name: "Realme Narzo 5G", image: realmeWebp28 },
    { name: "Realme narzo 50", image: realmeWebp29 },
    { name: "Realme GT 2 PRO", image: realmeWebp30 },
    { name: "Realme GT2", image: realmeWebp31 },
    { name: "Realme GT NEO 3T", image: realmeWebp32 },
    { name: "Realme GT NEO 3", image: realmeWebp33 },
    { name: "Realme C55", image: realmeWebp34 },
    { name: "Realme C53", image: realmeWebp35 },
    { name: "Realme Narzo C51", image: realmeWebp36 },
    { name: "Realme C35", image: realmeWebp37 },
    { name: "Realme ", image: realmeWebp38 },
    { name: "Realme 8i", image: realmeWebp39 },
    { name: "Realme C31", image: realmeWebp40 },
    { name: "Realme C30s", image: realmeWebp41 },
    { name: "Realme 5i", image: realmeWebp42 },
    { name: "Realme 3i", image: realmeWebp43 },
    { name: "Realme C67", image: realmeWebp44 },
    { name: "Realme 9 5G", image: realmeWebp45 },
    { name: "Realme C54", image: realmeWebp46 },
    // { name: "Realme C52", image: realmeWebp47 },
  ];

  const filteredModels = realmeModels.filter((model) =>
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
            Home / Repair / Realme
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Realme Repair & Replacement
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
            placeholder="Search Realme models..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "300px",
              padding: "12px 20px",
              border: "1px solid #ced4da",
              borderRadius: "25px",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#ff4d4f")}
            onBlur={(e) => (e.target.style.borderColor = "#ced4da")}
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
            <div     onClick={() => {
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
                e.currentTarget.style.borderColor = "black";
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(255,77,79,0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#dee2e6";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={model.image}
                alt={model.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                  marginBottom: "15px",
                }}
              />
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  margin: "10px 0 5px",
                  color: "#212529",
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
            color: "#495057",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
              color: "black",
            }}
          >
            REALME REPAIR & REPLACEMENT SERVICES
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            We offer professional Realme phone repair and replacement services
            including screen replacement, battery replacement, camera repair,
            and software troubleshooting. Contact us for a quick and reliable
            solution to your Realme smartphone issues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealmePage;