import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import oppo1 from "../../assets/oppo/oppo (1).png";
import oppo2 from "../../assets/oppo/oppo (2).png";
import oppo3 from "../../assets/oppo/oppo (3).png";
import oppo4 from "../../assets/oppo/oppo (4).png";
import oppo5 from "../../assets/oppo/oppo (5).png";
import oppo6 from "../../assets/oppo/oppo (6).png";
import oppo7 from "../../assets/oppo/oppo (7).png";
import oppo8 from "../../assets/oppo/oppo (8).png";
import oppo9 from "../../assets/oppo/oppo (9).png";
import oppo10 from "../../assets/oppo/oppo (10).png";
import oppo11 from "../../assets/oppo/oppo (11).png";
import oppo12 from "../../assets/oppo/oppo (12).png";
import oppo13 from "../../assets/oppo/oppo (13).png";
import oppo14 from "../../assets/oppo/oppo (14).png";
import oppo15 from "../../assets/oppo/oppo (15).png";
// import oppo16 from "../../assets/oppo/oppo (16).png";
import oppo17 from "../../assets/oppo/oppo (17).png";
import oppo18 from "../../assets/oppo/oppo (18).png";
import oppo19 from "../../assets/oppo/oppo (19).png";
import oppo20 from "../../assets/oppo/oppo (20).png";
import oppo21 from "../../assets/oppo/oppo (21).png";
import oppo22 from "../../assets/oppo/oppo (22).png";
// import oppo23 from "../../assets/oppo/oppo (23).png";
import oppo24 from "../../assets/oppo/oppo (24).png";
import oppo25 from "../../assets/oppo/oppo (25).png";
import oppo26 from "../../assets/oppo/oppo (26).png";
import oppo27 from "../../assets/oppo/oppo (27).png";
import oppo28 from "../../assets/oppo/oppo (28).png";
import oppo29 from "../../assets/oppo/oppo (29).png";
import oppo30 from "../../assets/oppo/oppo (30).png";
import oppo31 from "../../assets/oppo/oppo (31).png";
import oppo32 from "../../assets/oppo/oppo (32).png";
import oppo33 from "../../assets/oppo/oppo (33).png";
import oppo34 from "../../assets/oppo/oppo (34).png";
import oppo35 from "../../assets/oppo/oppo (35).png";
import oppo36 from "../../assets/oppo/oppo (36).png";
import oppo37 from "../../assets/oppo/oppo (37).png";
import oppo38 from "../../assets/oppo/oppo (38).png";
import oppo39 from "../../assets/oppo/oppo (39).png";
import oppo40 from "../../assets/oppo/oppo (40).png";
import oppo41 from "../../assets/oppo/oppo (41).png";
import oppo42 from "../../assets/oppo/oppo (42).png";
import oppo43 from "../../assets/oppo/oppo (43).png";
import oppo44 from "../../assets/oppo/oppo (44).png";
import oppo45 from "../../assets/oppo/oppo (45).png";
// import oppo46 from "../../assets/oppo/oppo (46).png";
import oppo47 from "../../assets/oppo/oppo (47).png";
import oppo48 from "../../assets/oppo/oppo (48).png";
import oppo49 from "../../assets/oppo/oppo (49).png";
import oppo50 from "../../assets/oppo/oppo (50).png";
import oppo51 from "../../assets/oppo/oppo (51).png";
import oppo52 from "../../assets/oppo/oppo (52).png";
import oppo53 from "../../assets/oppo/oppo (53).png";
import oppo54 from "../../assets/oppo/oppo (54).png";
// import oppo55 from "../../assets/oppo/oppo(55).png";
// import oppo56 from "../../assets/oppo/oppo(56).png";

const OppoPage = () => {
 const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const oppoModels = [
    { name: "Oppo Reno 4 Pro", image: oppo1 },
    { name: "Oppo K3", image: oppo2 },
    { name: "Oppo K1", image: oppo3 },
    { name: "Oppo Reno 7 Pro 5G", image: oppo4 },
    { name: "Oppo Reno 7", image: oppo5 },
    { name: "Oppo Reno 6", image: oppo6 },
    { name: "Oppo Reno3 Pro", image: oppo7 },
    { name: "Oppo Reno5 pro", image: oppo8 },
    { name: "Oppo Reno 11 Pro 5G", image: oppo9 },
    { name: "Oppo F19 Pro", image: oppo10 },
    { name: "Oppo F19 S", image: oppo11 },
    { name: "Oppo F19", image: oppo12 },
    { name: "Oppo Reno F17 Pro", image: oppo13 },
    { name: "Oppo Reno 9 Pro+ 5G", image: oppo14 },
    { name: "Oppo Reno 9 Pro 5G", image: oppo15 },
    // { name: "Oppo Reno 9 5G", image: oppo16 },
    { name: "Oppo F11", image: oppo17 },
    { name: "Oppo F9 Pro ", image: oppo18 },
    { name: "Oppo F7", image: oppo19 },
    { name: "Oppo Reno 7 5G", image: oppo20 },
    { name: "Oppo Reno 6 Pro 5G", image: oppo21 },
    { name: "Oppo A 96", image: oppo22 },
    // { name: "Oppo Reno 5 Pro 5G", image: oppo23 },
    { name: "Oppo A75 5G", image: oppo24 },
    { name: "Oppo A55", image: oppo25 },
    { name: "Oppo A54", image: oppo26 },
    { name: "Oppo A53s", image: oppo27 },
    { name: "Oppo A53", image: oppo28 },
    { name: "Oppo A52", image: oppo29 },
    { name: "Oppo A9", image: oppo30 },
    { name: "Oppo A5", image: oppo31 },
    { name: "Oppo A16e", image: oppo32 },
    { name: "Oppo A74 5G", image: oppo33 },
    { name: "Oppo A16K", image: oppo34 },
    { name: "Oppo A16", image: oppo35 },
    { name: "Oppo A58 5G", image: oppo36 },
    { name: "Oppo A57 5G", image: oppo37 },
    { name: "Oppo AK", image: oppo38 },
    { name: "Oppo A12", image: oppo39 },
    { name: "Oppo A9 2020", image: oppo40 },
    { name: "Oppo A53 5G", image: oppo41 },
    { name: "Oppo A39", image: oppo42 },
    { name: "Oppo A5s", image: oppo43 },
    { name: "Oppo A3s", image: oppo44 },
    { name: "Oppo A31", image: oppo45 },
    // { name: "Oppo A29", image: oppo46 },
    { name: "Oppo A15s", image: oppo47 },
    { name: "Oppo A15", image: oppo48 },
    { name: "Oppo A30 Pro", image: oppo49 },
    { name: "Oppo F27/F27 Pro Plus", image: oppo50 },
    { name: "Oppo Reno 12 Pro 5G", image: oppo51 },
    { name: "Oppo Reno 12", image: oppo52 },
    { name: "Oppo Reno11 Pro 5G", image: oppo53 },
    { name: "Oppo Reno11 5G", image: oppo54 },
    // { name: "Oppo F23 5G", image: oppo55 },
    // { name: "Oppo F21 Pro 5G", image: oppo56 },
  ];

  const filteredModels = oppoModels.filter((model) =>
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
            Home / Repair / Oppo
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Oppo Repair & Replacement
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
            placeholder="Search Oppo models..."
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
            <div 
             onClick={() => {
                navigate(`/brand-issues/${encodeURIComponent(model.name)}`, {
                  state: { image: model.image },
                });
              }}
              key={model.name}
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
            OPPO REPAIR & REPLACEMENT SERVICES
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            We offer professional Oppo phone repair and replacement services
            including screen replacement, battery replacement, camera repair,
            and software troubleshooting. Contact us for a quick and reliable
            solution to your Oppo smartphone issues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OppoPage;