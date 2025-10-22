// import React, { useState } from "react";
// import "./Laptop.css";
// import { useNavigate } from "react-router-dom";
// import dell1 from  "../../assets/dellLaptops/dellLaptop1.jpg"
// import dell2 from "../../assets/dellLaptops/dellLaptop2.jpg"
// import dell3 from "../../assets/dellLaptops/dellLaptop3.jpg";
// import dell4 from "../../assets/dellLaptops/dellLaptop4.jpg";
// import dell5 from "../../assets/dellLaptops/dellLaptop5.jpg";
// import dell6 from "../../assets/dellLaptops/dellLaptop6.jpg";
// import dell7 from "../../assets/dellLaptops/dellLaptop7.jpg";
// import dell8 from "../../assets/dellLaptops/dellLaptop8.jpg";
// import dell9 from "../../assets/dellLaptops/dellLaptop9.jpg";
// import dell10 from "../../assets/dellLaptops/dellLaptop10.jpg";
// import dell11 from "../../assets/dellLaptops/dellLaptop11.jpg";
// import dell12 from "../../assets/dellLaptops/dellLaptop12.jpg";
// import dell13 from "../../assets/dellLaptops/dellLaptop13.jpg";
// import dell14 from "../../assets/dellLaptops/dellLaptop14.jpg";
// import dell15 from "../../assets/dellLaptops/dellLaptop15.jpg";
// import dell16 from "../../assets/dellLaptops/dellLaptop16.jpg";
// import dell17 from "../../assets/dellLaptops/dellLaptop17.jpg";
// import dell18 from "../../assets/dellLaptops/dellLaptop18.jpg";
// import dell19 from "../../assets/dellLaptops/dellLaptop19.jpg";
// import dell20 from "../../assets/dellLaptops/dellLaptop20.jpg";


// const DellLap = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   // ✅ Added image property for each model
//   const dellModels = [
//     { id: 1, name: "Dell XPS 13", image: dell1 },
//   { id: 2, name: "Dell Inspiron 15", image: dell2 },
//   { id: 3, name: "Dell Latitude 5410", image: dell3 },
//   { id: 4, name: "Dell Precision 7550", image: dell4 },
//   { id: 5, name: "Dell Vostro 3500", image: dell5 },
//   { id: 6, name: "Dell Alienware m15", image: dell6 },
//   { id: 7, name: "Dell G5 15 Gaming", image: dell7 },
//   { id: 8, name: "Dell XPS 15", image: dell8 },
//   { id: 9, name: "Dell Latitude 7410", image: dell9 },
//   { id: 10, name: "Dell Inspiron 14", image: dell10 },
//   { id: 11, name: "Dell Precision 5550", image: dell11 },
//   { id: 12, name: "Dell Alienware Area-51m", image: dell12 },
//   { id: 13, name: "Dell G3 15 Gaming", image: dell13 },
//   { id: 14, name: "Dell XPS 17", image: dell14 },
//   { id: 15, name: "Dell Latitude 3510", image: dell15 },
//   { id: 16, name: "Dell Inspiron 16 Plus", image: dell16 },
//   { id: 17, name: "Dell Precision 7760", image: dell17 },
//   { id: 18, name: "Dell Alienware x15", image: dell18 },
//   { id: 19, name: "Dell G7 17 Gaming", image: dell19 },
//   { id: 20, name: "Dell XPS 9310", image: dell20 },

//   ];

//   const filteredModels = dellModels.filter((model) =>
//     model.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
//       {/* Header */}
//       <div
//         style={{
//           backgroundColor: "white",
//           borderBottom: "1px solid #dee2e6",
//           padding: "20px 0",
//         }}
//       >
//         <div
//           style={{
//             maxWidth: "1200px",
//             margin: "0 auto",
//             padding: "0 20px",
//           }}
//         >
//           <div
//             style={{
//               marginBottom: "10px",
//               color: "#6c757d",
//               fontSize: "14px",
//             }}
//           >
//             Home / Repair / Laptops / Dell
//           </div>
//           <h1
//             style={{
//               fontSize: "32px",
//               fontWeight: "bold",
//               color: "#212529",
//               margin: 0,
//             }}
//           >
//             Dell Laptop Repair & Replacement
//           </h1>
//         </div>
//       </div>

//       {/* Content */}
//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           padding: "40px 20px",
//         }}
//       >
//         {/* Search Box */}
//         <div style={{ textAlign: "center", marginBottom: "40px" }}>
//           <input
//             type="text"
//             placeholder="Search Dell models..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             style={{
//               width: "300px",
//               padding: "12px 20px",
//               border: "1px solid #ced4da",
//               borderRadius: "25px",
//               fontSize: "16px",
//               outline: "none",
//             }}
//           />
//         </div>

//         {/* Models Grid */}
//         <div
//         className="tablet-grid"
//           // style={{
//           //   display: "grid",
//           //   gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))",
//           //   gap: "20px",
//           // }}
//         >
//           {filteredModels.map((model) => (
//             <div
//               onClick={() =>
//                 navigate(`/brand-issues/${encodeURIComponent(model.name)}`, {
//                   state: { image: model.image, model },
//                 })
//               }
//               key={model.id}
//               style={{
//                 backgroundColor: "white",
//                 border: "1px solid #dee2e6",
//                 borderRadius: "10px",
//                 padding: "20px",
//                 textAlign: "center",
//                 cursor: "pointer",
//                 transition: "all 0.3s ease",
//                 boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.borderColor = "#007bff";
//                 e.currentTarget.style.transform = "translateY(-2px)";
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.borderColor = "#dee2e6";
//                 e.currentTarget.style.transform = "translateY(0)";
//               }}
//             >
//               <img
//                 src={model.image}
//                 alt={model.name}
//                 style={{
//                   width: "100px",
//                   height: "100px",
//                   objectFit: "contain",
//                   marginBottom: "15px",
//                 }}
//               />
//               <h3
//                 style={{
//                   fontSize: "16px",
//                   fontWeight: "600",
//                   margin: "10px 0 5px",
//                 }}
//               >
//                 {model.name}
//               </h3>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Section */}
//         <div
//           style={{
//             backgroundColor: "white",
//             border: "1px solid #dee2e6",
//             borderRadius: "10px",
//             padding: "40px",
//             textAlign: "center",
//             marginTop: "40px",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "24px",
//               fontWeight: "bold",
//               marginBottom: "20px",
//             }}
//           >
//             DELL REPAIR & REPLACEMENT
//           </h2>
//           <p
//             style={{
//               color: "#6c757d",
//               lineHeight: "1.6",
//               maxWidth: "800px",
//               margin: "0 auto",
//             }}
//           >
//             Your Dell laptop is not just a machine—it’s your daily work partner.
//             Whether it’s performance upgrades, hardware issues, or replacements,
//             our expert technicians provide quick service, genuine Dell parts,
//             and reliable repairs.
//           </p>
//           <h3
//             style={{
//               fontSize: "18px",
//               fontWeight: "600",
//               marginTop: "30px",
//             }}
//           >
//             WE CAN FIX YOUR DELL
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DellLap;


import React, { useState } from "react";
import "./Laptop.css";
import { useNavigate } from "react-router-dom";
import dell1 from "../../assets/dellLaptops/dellLaptop1.jpg";
import dell2 from "../../assets/dellLaptops/dellLaptop2.jpg";
import dell3 from "../../assets/dellLaptops/dellLaptop3.jpg";
import dell4 from "../../assets/dellLaptops/dellLaptop4.jpg";
import dell5 from "../../assets/dellLaptops/dellLaptop5.jpg";
import dell6 from "../../assets/dellLaptops/dellLaptop6.jpg";
import dell7 from "../../assets/dellLaptops/dellLaptop7.jpg";
import dell8 from "../../assets/dellLaptops/dellLaptop8.jpg";
import dell9 from "../../assets/dellLaptops/dellLaptop9.jpg";
import dell10 from "../../assets/dellLaptops/dellLaptop10.jpg";
import dell11 from "../../assets/dellLaptops/dellLaptop11.jpg";
import dell12 from "../../assets/dellLaptops/dellLaptop12.jpg";
import dell13 from "../../assets/dellLaptops/dellLaptop13.jpg";
import dell14 from "../../assets/dellLaptops/dellLaptop14.jpg";
import dell15 from "../../assets/dellLaptops/dellLaptop15.jpg";
import dell16 from "../../assets/dellLaptops/dellLaptop16.jpg";
import dell17 from "../../assets/dellLaptops/dellLaptop17.jpg";
import dell18 from "../../assets/dellLaptops/dellLaptop18.jpg";
import dell19 from "../../assets/dellLaptops/dellLaptop19.jpg";
import dell20 from "../../assets/dellLaptops/dellLaptop20.jpg";

const DellLap = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const dellModels = [
    { id: 1, name: "Dell XPS 13", image: dell1 },
    { id: 2, name: "Dell Inspiron 15", image: dell2 },
    { id: 3, name: "Dell Latitude 5410", image: dell3 },
    { id: 4, name: "Dell Precision 7550", image: dell4 },
    { id: 5, name: "Dell Vostro 3500", image: dell5 },
    { id: 6, name: "Dell Alienware m15", image: dell6 },
    { id: 7, name: "Dell G5 15 Gaming", image: dell7 },
    { id: 8, name: "Dell XPS 15", image: dell8 },
    { id: 9, name: "Dell Latitude 7410", image: dell9 },
    { id: 10, name: "Dell Inspiron 14", image: dell10 },
    { id: 11, name: "Dell Precision 5550", image: dell11 },
    { id: 12, name: "Dell Alienware Area-51m", image: dell12 },
    { id: 13, name: "Dell G3 15 Gaming", image: dell13 },
    { id: 14, name: "Dell XPS 17", image: dell14 },
    { id: 15, name: "Dell Latitude 3510", image: dell15 },
    { id: 16, name: "Dell Inspiron 16 Plus", image: dell16 },
    { id: 17, name: "Dell Precision 7760", image: dell17 },
    { id: 18, name: "Dell Alienware x15", image: dell18 },
    { id: 19, name: "Dell G7 17 Gaming", image: dell19 },
    { id: 20, name: "Dell XPS 9310", image: dell20 },
  ];

  const filteredModels = dellModels.filter((model) =>
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
            Home / Repair / Laptops / Dell
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Dell Laptop Repair & Replacement
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
            placeholder="Search Dell models..."
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
        <div className="tablet-grid">
          {filteredModels.map((model) => (
            <div
              onClick={() =>
                navigate(`/laptops/dell/${encodeURIComponent(model.name)}`, {
                  state: {
                    brandImage: model.image,
                    brandName: "Dell",
                    modelName: model.name,
                  },
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
            DELL REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Your Dell laptop is not just a machine—it’s your daily work partner.
            Whether it’s performance upgrades, hardware issues, or replacements,
            our expert technicians provide quick service, genuine Dell parts,
            and reliable repairs.
          </p>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginTop: "30px",
            }}
          >
            WE CAN FIX YOUR DELL
          </h3>
        </div>
      </div>
    </div>
  );
};

export default DellLap;