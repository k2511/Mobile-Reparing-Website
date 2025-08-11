// import React, { useState } from "react";
// import mi1 from "../../assets/mi/mi-1.png";
// import mi2 from "../../assets/mi/mi-2.png";
// import mi3 from "../../assets/mi/mi-3.png";
// import mi4 from "../../assets/mi/mi-4.png";
// import mi5 from "../../assets/mi/mi-5.png";
// import mi6 from "../../assets/mi/mi-6.png";
// import mi7 from "../../assets/mi/mi-7.png";
// import mi8 from "../../assets/mi/mi-8.png";
// import mi9 from "../../assets/mi/mi-9.png";
// import mi10 from "../../assets/mi/mi-10.png";
// import mi11 from "../../assets/mi/mi-11.png";
// import mi12 from "../../assets/mi/mi-12.png";
// import mi13 from "../../assets/mi/mi-13.png";
// import mi14 from "../../assets/mi/mi-14.png";
// import mi15 from "../../assets/mi/mi-15.png";
// import mi16 from "../../assets/mi/mi-16.png";
// import mi17 from "../../assets/mi/mi-17.png";
// import mi18 from "../../assets/mi/mi-18.png";
// import mi19 from "../../assets/mi/mi-19.png";
// import mi20 from "../../assets/mi/mi-20.png";
// import mi21 from "../../assets/mi/mi-21.png";
// import mi22 from "../../assets/mi/mi-22.png";
// import mi23 from "../../assets/mi/mi-23.png";
// import mi24 from "../../assets/mi/mi-24.png";
// import mi25 from "../../assets/mi/mi-25.png";
// import mi26 from "../../assets/mi/mi-26.png";
// import mi27 from "../../assets/mi/mi-27.png";
// import mi28 from "../../assets/mi/mi-28.png";
// import mi29 from "../../assets/mi/mi-29.png";
// import mi30 from "../../assets/mi/mi-30.png";
// import mi31 from "../../assets/mi/mi-31.png";
// import mi32 from "../../assets/mi/mi-32.png";
// import mi33 from "../../assets/mi/mi-33.png";
// import mi34 from "../../assets/mi/mi-34.png";
// import mi35 from "../../assets/mi/mi-35.png";
// import mi36 from "../../assets/mi/mi-36.png";
// import mi37 from "../../assets/mi/mi-37.png";
// import mi38 from "../../assets/mi/mi-38.png";
// import mi39 from "../../assets/mi/mi-39.png";
// import mi40 from "../../assets/mi/mi-40.png";
// import mi41 from "../../assets/mi/mi-41.png";
// import mi42 from "../../assets/mi/mi-42.png";
// import mi43 from "../../assets/mi/mi-43.png";
// import mi44 from "../../assets/mi/mi-44.png";
// import mi45 from "../../assets/mi/mi-45.png";
// import mi46 from "../../assets/mi/mi-46.png";
// import mi47 from "../../assets/mi/mi-47.png";
// import mi48 from "../../assets/mi/mi-48.png";

// const MiPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const miModels = [
//     { name: "Redmi A5", image: mi1 },
//     { name: "Redmi A5 Plus", image: mi2 },
//     { name: "Redmi Note 14 Pro Plus", image: mi3 },
//     { name: "Redmi Note 14 Pro 5G", image: mi4 },
//     { name: "Redmi 14 5G", image: mi5 },
//     { name: "Redmi 13 5G", image: mi6 },
//     { name: "Redmi A3", image: mi7 },
//     { name: "Redmi A2", image: mi8 },
//     { name: "Redmi A1", image: mi9 },
//     { name: "Xiaomi 13 Pro 5G", image: mi10 },
//     { name: "Redmi Note 12 Pro 5G", image: mi11 },
//     { name: "Redmi Note 12 Plus 5G", image: mi12 },
//     { name: "Redmi Note 12 Pro", image: mi13 },
//     { name: "Redmi Note 12 5G", image: mi14 },
//     { name: "Redmi Note 11", image: mi15 },
//     { name: "Redmi Note 10 Lite", image: mi16 },
//     { name: "Redmi Note 10 5G", image: mi17 },
//     { name: "Redmi 10", image: mi18 },
//     { name: "Redmi 9A", image: mi19 },
//     { name: "Mi 11X Pro", image: mi20 },
//     { name: "Mi 11 Lite", image: mi21 },
//     { name: "Mi 10", image: mi22 },
//     { name: "Mi 10T Pro", image: mi23 },
//     { name: "Mi 9T", image: mi24 },
//     { name: "Redmi 12 5G", image: mi25 },
//     { name: "Redmi 12C", image: mi26 },
//     { name: "Xiaomi 12 Pro 5G", image: mi27 },
//     { name: "Redmi 12", image: mi28 },
//     { name: "Xiaomi 11 HyperCharge", image: mi29 },
//     { name: "Xiaomi 11 5G", image: mi30 },
//     { name: "Xiaomi 11 Lite 5G", image: mi31 },
//     { name: "Redmi 11 Prime", image: mi32 },
//     { name: "Redmi 11 Pro 5G", image: mi33 },
//     { name: "Redmi 10 Power", image: mi34 },
//     { name: "Redmi 10A", image: mi35 },
//     { name: "Redmi 10 2022", image: mi36 },
//     { name: "Redmi 12 5G", image: mi37 },
//     { name: "Xiaomi 12T Pro", image: mi38 },
//     { name: "Mi 10 5G", image: mi39 },
//     { name: "Redmi Note Plus", image: mi40 },
//     { name: "Redmi Note 11 Pro+ 5G", image: mi41 },
//     { name: "Redmi Note 11S", image: mi42 },
//     { name: "Redmi Note 10 Pro Max", image: mi43 },
//     { name: "Redmi Note 10 Pro", image: mi44 },
//     { name: "Redmi Note 10S 5G", image: mi45 },
//     { name: "Redmi Note 10S", image: mi46 },
//     { name: "Redmi Note 10", image: mi47 },
//     { name: "Redmi Note 9 Pro Max", image: mi48 },
//     { name: "Redmi Note 9 Pro", image: mi1 },
//     { name: "Redmi Note 9", image: mi2 },
//     { name: "Redmi Note 8 Pro", image: mi3 },
//     { name: "Redmi Note 8", image: mi4 },
//     { name: "Redmi Note 7/7 Pro", image: mi5 },
//     { name: "Redmi Note 6 Pro", image: mi6 },
//     { name: "Redmi Note 5 Pro", image: mi7 },
//     { name: "Redmi Note 5", image: mi8 },
//     { name: "Redmi Note 4", image: mi9 },
//     { name: "Mi Note 3", image: mi10 },
//     { name: "Redmi K20/K20 Pro", image: mi11 },
//     { name: "Redmi Y3", image: mi12 },
//     { name: "Redmi Y2", image: mi13 },
//     { name: "Redmi Y1 Lite", image: mi14 },
//     { name: "Redmi Y1", image: mi15 },
//     { name: "Redmi Go", image: mi16 },
//     { name: "Mi A3", image: mi17 },
//     { name: "Mi A2", image: mi18 },
//     { name: "Mi A1", image: mi19 },
//     { name: "Redmi 10 Prime", image: mi20 },
//     { name: "Redmi 9 Prime", image: mi21 },
//     { name: "Redmi 9i", image: mi22 },
//     { name: "Redmi 9i Sport", image: mi23 },
//     { name: "Redmi 9", image: mi24 },
//     { name: "Redmi 9A Sport", image: mi25 },
//     { name: "Redmi 8A Dual", image: mi26 },
//     { name: "Redmi 8A", image: mi27 },
//     { name: "Redmi 8", image: mi28 },
//     { name: "Redmi 7A", image: mi29 },
//     { name: "Redmi 7", image: mi30 },
//     { name: "Redmi 6A", image: mi31 },
//     { name: "Redmi 6 Pro", image: mi32 },
//     { name: "Redmi 6", image: mi33 },
//     { name: "Redmi 5", image: mi34 },
//     { name: "Redmi 4", image: mi35 },
//     { name: "Redmi 3S Prime", image: mi36 },
//     { name: "Redmi 3S", image: mi37 },
//     { name: "Redmi 2", image: mi38 },
//     { name: "Mi 5", image: mi39 },
//     { name: "Mi 4", image: mi40 },
//     { name: "Mi 3", image: mi41 },
//     { name: "Mi 2", image: mi42 },
//     { name: "Mi 1", image: mi43 },
//     { name: "Redmi 1S", image: mi44 },
//     { name: "Redmi Note Prime", image: mi45 },
//     { name: "Redmi Note", image: mi46 },
//     { name: "Redmi 1", image: mi47 },
//     { name: "Mi Pad", image: mi48 },
//   ];

//   const filteredModels = miModels.filter((model) =>
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
//             Home / Repair / Xiaomi/Redmi
//           </div>
//           <h1
//             style={{
//               fontSize: "32px",
//               fontWeight: "bold",
//               color: "#212529",
//               margin: 0,
//             }}
//           >
//             Xiaomi/Redmi Repair & Replacement
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
//             placeholder="Search Xiaomi/Redmi models..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             style={{
//               width: "300px",
//               padding: "12px 20px",
//               border: "1px solid #ced4da",
//               borderRadius: "25px",
//               fontSize: "16px",
//               outline: "none",
//               transition: "border-color 0.3s ease",
//             }}
//             onFocus={(e) => (e.target.style.borderColor = "#4285F4")}
//             onBlur={(e) => (e.target.style.borderColor = "#ced4da")}
//           />
//         </div>
//         {/* Models Grid */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//             gap: "20px",
//             marginBottom: "40px",
//           }}
//         >
//           {filteredModels.map((model, index) => (
//             <div
//               key={index}
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
//                 e.currentTarget.style.borderColor = "#4285F4";
//                 e.currentTarget.style.transform = "translateY(-5px)";
//                 e.currentTarget.style.boxShadow = "0 8px 16px rgba(66,133,244,0.3)";
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.borderColor = "#dee2e6";
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
//               }}
//             >
//               <img
//                 src={model.image}
//                 alt={model.name}
//                 style={{
//                   width: "120px",
//                   height: "120px",
//                   objectFit: "contain",
//                   marginBottom: "15px",
//                 }}
//               />
//               <h3
//                 style={{
//                   fontSize: "16px",
//                   fontWeight: "600",
//                   margin: "10px 0 5px",
//                   color: "#212529",
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
//             color: "#495057",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "24px",
//               fontWeight: "bold",
//               marginBottom: "20px",
//               color: "#4285F4",
//             }}
//           >
//             XIAOMI/REDMI REPAIR & REPLACEMENT SERVICES
//           </h2>
//           <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
//             We provide expert repair and replacement services for Xiaomi and
//             Redmi devices, including screen repair, battery replacement, camera
//             fixes, and software troubleshooting. Reach out for reliable service
//             you can trust.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default MiPage;



import React, { useState } from "react";

// Import Xiaomi/Redmi phone images
import mi1 from "../../assets/mi/mi-1.png";
import mi2 from "../../assets/mi/mi-2.png";
import mi3 from "../../assets/mi/mi-3.png";
import mi4 from "../../assets/mi/mi-4.png";
import mi5 from "../../assets/mi/mi-5.png";
import mi7 from "../../assets/mi/mi-7.png";
import mi9 from "../../assets/mi/mi-9.png";
import mi10 from "../../assets/mi/mi-10.png";
import mi11 from "../../assets/mi/mi-11.png";
import mi12 from "../../assets/mi/mi-12.png";
import mi13 from "../../assets/mi/mi-13.png";
import mi14 from "../../assets/mi/mi-14.png";
import mi15 from "../../assets/mi/mi-15.png";
import mi16 from "../../assets/mi/mi-16.png";
import mi17 from "../../assets/mi/mi-17.png";
import mi18 from "../../assets/mi/mi-18.png";
import mi19 from "../../assets/mi/mi-19.png";
import mi20 from "../../assets/mi/mi-20.png";
import mi21 from "../../assets/mi/mi-21.png";
import mi22 from "../../assets/mi/mi-22.png";
import mi23 from "../../assets/mi/mi-23.png";
import mi24 from "../../assets/mi/mi-24.png";
import mi25 from "../../assets/mi/mi-25.png";
import mi26 from "../../assets/mi/mi-26.png";
import mi27 from "../../assets/mi/mi-27.png";
import mi28 from "../../assets/mi/mi-28.png";
import mi29 from "../../assets/mi/mi-29.png";
import mi30 from "../../assets/mi/mi-30.png";
import mi31 from "../../assets/mi/mi-31.png";
import mi32 from "../../assets/mi/mi-32.png";
import mi33 from "../../assets/mi/mi-33.png";
import mi34 from "../../assets/mi/mi-34.png";
import mi35 from "../../assets/mi/mi-35.png";
import mi36 from "../../assets/mi/mi-36.png";
import mi37 from "../../assets/mi/mi-37.png";
import mi38 from "../../assets/mi/mi-38.png";
import mi39 from "../../assets/mi/mi-39.png";
import mi40 from "../../assets/mi/mi-40.png";
import mi41 from "../../assets/mi/mi-41.png";
import mi42 from "../../assets/mi/mi-42.png";
import mi43 from "../../assets/mi/mi-43.png";
import mi44 from "../../assets/mi/mi-44.png";
import mi45 from "../../assets/mi/mi-45.png";
import mi46 from "../../assets/mi/mi-46.png";
import mi47 from "../../assets/mi/mi-47.png";
import mi48 from "../../assets/mi/mi-48.png";

const MiPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const miModels = [
    { name: "Redmi A5", image: mi1 },
    { name: "Redmi A5 Plus", image: mi2 },
    { name: "Redmi Note 14 Pro Plus", image: mi3 },
    { name: "Redmi Note 14 Pro 5G", image: mi4 },
    { name: "Redmi 14 5G", image: mi5 },
    { name: "Redmi 13 5G", image: mi1 }, // Use mi1 as placeholder
    { name: "Redmi A3", image: mi7 },
    { name: "Redmi A2", image: mi1 }, // Use mi1 as placeholder
    { name: "Redmi A1", image: mi9 },
    { name: "Xiaomi 13 Pro 5G", image: mi10 },
    { name: "Redmi Note 12 Pro 5G", image: mi11 },
    { name: "Redmi Note 12 Plus 5G", image: mi12 },
    { name: "Redmi Note 12 Pro", image: mi13 },
    { name: "Redmi Note 12 5G", image: mi14 },
    { name: "Redmi Note 11", image: mi15 },
    { name: "Redmi Note 10 Lite", image: mi16 },
    { name: "Redmi Note 10 5G", image: mi17 },
    { name: "Redmi 10", image: mi18 },
    { name: "Redmi 9A", image: mi19 },
    { name: "Mi 11X Pro", image: mi20 },
    { name: "Mi 11 Lite", image: mi21 },
    { name: "Mi 10", image: mi22 },
    { name: "Mi 10T Pro", image: mi23 },
    { name: "Mi 9T", image: mi24 },
    { name: "Redmi 12 5G", image: mi25 },
    { name: "Redmi 12C", image: mi26 },
    { name: "Xiaomi 12 Pro 5G", image: mi27 },
    { name: "Redmi 12", image: mi28 },
    { name: "Xiaomi 11 HyperCharge", image: mi29 },
    { name: "Xiaomi 11 5G", image: mi30 },
    { name: "Xiaomi 11 Lite 5G", image: mi31 },
    { name: "Redmi 11 Prime", image: mi32 },
    { name: "Redmi 11 Pro 5G", image: mi33 },
    { name: "Redmi 10 Power", image: mi34 },
    { name: "Redmi 10A", image: mi35 },
    { name: "Redmi 10 2022", image: mi36 },
    { name: "Redmi 12 5G", image: mi37 },
    { name: "Xiaomi 12T Pro", image: mi38 },
    { name: "Mi 10 5G", image: mi39 },
    { name: "Redmi Note Plus", image: mi40 },
    { name: "Redmi Note 11 Pro+ 5G", image: mi41 },
    { name: "Redmi Note 11S", image: mi42 },
    { name: "Redmi Note 10 Pro Max", image: mi43 },
    { name: "Redmi Note 10 Pro", image: mi44 },
    { name: "Redmi Note 10S 5G", image: mi45 },
    { name: "Redmi Note 10S", image: mi46 },
    { name: "Redmi Note 10", image: mi47 },
    { name: "Redmi Note 9 Pro Max", image: mi48 },
    { name: "Redmi Note 9 Pro", image: mi1 },
    { name: "Redmi Note 9", image: mi2 },
    { name: "Redmi Note 8 Pro", image: mi3 },
    { name: "Redmi Note 8", image: mi4 },
    { name: "Redmi Note 7/7 Pro", image: mi5 },
    { name: "Redmi Note 6 Pro", image: mi7 },
    { name: "Redmi Note 5 Pro", image: mi1 }, // Use mi1 as placeholder
    { name: "Redmi Note 5", image: mi9 },
    { name: "Redmi Note 4", image: mi10 },
    { name: "Mi Note 3", image: mi11 },
    { name: "Redmi K20/K20 Pro", image: mi12 },
    { name: "Redmi Y3", image: mi13 },
    { name: "Redmi Y2", image: mi14 },
    { name: "Redmi Y1 Lite", image: mi15 },
    { name: "Redmi Y1", image: mi16 },
    { name: "Redmi Go", image: mi17 },
    { name: "Mi A3", image: mi18 },
    { name: "Mi A2", image: mi19 },
    { name: "Mi A1", image: mi20 },
    { name: "Redmi 10 Prime", image: mi21 },
    { name: "Redmi 9 Prime", image: mi22 },
    { name: "Redmi 9i", image: mi23 },
    { name: "Redmi 9i Sport", image: mi24 },
    { name: "Redmi 9", image: mi25 },
    { name: "Redmi 9A Sport", image: mi26 },
    { name: "Redmi 8A Dual", image: mi27 },
    { name: "Redmi 8A", image: mi28 },
    { name: "Redmi 8", image: mi29 },
    { name: "Redmi 7A", image: mi30 },
    { name: "Redmi 7", image: mi31 },
    { name: "Redmi 6A", image: mi32 },
    { name: "Redmi 6 Pro", image: mi33 },
    { name: "Redmi 6", image: mi34 },
    { name: "Redmi 5", image: mi35 },
    { name: "Redmi 4", image: mi36 },
    { name: "Redmi 3S Prime", image: mi37 },
    { name: "Redmi 3S", image: mi38 },
    { name: "Redmi 2", image: mi39 },
    { name: "Mi 5", image: mi40 },
    { name: "Mi 4", image: mi41 },
    { name: "Mi 3", image: mi42 },
    { name: "Mi 2", image: mi43 },
    { name: "Mi 1", image: mi44 },
    { name: "Redmi 1S", image: mi45 },
    { name: "Redmi Note Prime", image: mi46 },
    { name: "Redmi Note", image: mi47 },
    { name: "Redmi 1", image: mi48 },
  ];

  const filteredModels = miModels.filter((model) =>
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
            Home / Repair / Xiaomi/Redmi
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Xiaomi/Redmi Repair & Replacement
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
            placeholder="Search Xiaomi/Redmi models..."
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
            onFocus={(e) => (e.target.style.borderColor = "red")}
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
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(66,133,244,0.3)";
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
            XIAOMI/REDMI REPAIR & REPLACEMENT SERVICES
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            We provide expert repair and replacement services for Xiaomi and
            Redmi devices, including screen repair, battery replacement, camera
            fixes, and software troubleshooting. Reach out for reliable service
            you can trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiPage;