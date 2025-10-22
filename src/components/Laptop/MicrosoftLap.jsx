// import React, { useState } from "react";
// import "./Laptop.css";
// import { useNavigate } from "react-router-dom";
// import surface1 from "../../assets/microsoftLaptop/surface1.jpg";
// import surface2 from "../../assets/microsoftLaptop/surface2.jpg";
// import surface3 from "../../assets/microsoftLaptop/surface3.jpg";
// import surface4 from "../../assets/microsoftLaptop/surface4.jpg";
// import surface5 from "../../assets/microsoftLaptop/surface5.jpg";
// import surface6 from "../../assets/microsoftLaptop/surface6.jpg";
// import surface7 from "../../assets/microsoftLaptop/surface7.jpg";
// import surface8 from "../../assets/microsoftLaptop/surface8.jpg";
// import surface9 from "../../assets/microsoftLaptop/surface9.jpg";
// import surface10 from "../../assets/microsoftLaptop/surface10.jpg";
// import surface11 from "../../assets/microsoftLaptop/surface11.jpg";
// import surface12 from "../../assets/microsoftLaptop/surface12.jpg";
// import surface13 from "../../assets/microsoftLaptop/surface13.jpg";
// import surface14 from "../../assets/microsoftLaptop/surface14.jpg";
// import surface15 from "../../assets/microsoftLaptop/surface15.jpg";
// import surface16 from "../../assets/microsoftLaptop/surface16.jpg";
// import surface17 from "../../assets/microsoftLaptop/surface17.jpg";
// import surface18 from "../../assets/microsoftLaptop/surface18.jpg";
// import surface19 from "../../assets/microsoftLaptop/surface19.jpg";
// import surface20 from "../../assets/microsoftLaptop/surface20.jpg";

// const MicrosoftLap = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   const microsoftModels = [
//     { id: 1, name: "Surface Pro 7", image: surface1 },
//     { id: 2, name: "Surface Pro 8", image: surface2 },
//     { id: 3, name: "Surface Laptop 3", image: surface3 },
//     { id: 4, name: "Surface Laptop 4", image: surface4 },
//     { id: 5, name: "Surface Laptop Go", image: surface5 },
//     { id: 6, name: "Surface Laptop Studio", image: surface6 },
//     { id: 7, name: "Surface Book 2", image: surface7 },
//     { id: 8, name: "Surface Book 3", image: surface8 },
//     { id: 9, name: "Surface Go 2", image: surface9 },
//     { id: 10, name: "Surface Go 3", image: surface10 },
//     { id: 11, name: "Surface Pro X", image: surface11 },
//     { id: 12, name: "Surface Studio 2", image: surface12 },
//     { id: 13, name: "Surface Neo", image: surface13 },
//     { id: 14, name: "Surface Pro 6", image: surface14 },
//     { id: 15, name: "Surface Laptop 2", image: surface15 },
//     { id: 16, name: "Surface Book", image: surface16 },
//     { id: 17, name: "Surface Go", image: surface17 },
//     { id: 18, name: "Surface Duo", image: surface18 },
//     { id: 19, name: "Surface Hub 2S", image: surface19 },
//     { id: 20, name: "Surface Hub 2", image: surface20 },
//   ];

//   const filteredModels = microsoftModels.filter((model) =>
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
//         <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
//           <div style={{ marginBottom: "10px", color: "#6c757d", fontSize: "14px" }}>
//             Home / Repair / Laptops / Microsoft
//           </div>
//           <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#212529", margin: 0 }}>
//             Microsoft Laptop Repair & Replacement
//           </h1>
//         </div>
//       </div>

//       {/* Content */}
//       <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
//         {/* Search Box */}
//         <div style={{ textAlign: "center", marginBottom: "40px" }}>
//           <input
//             type="text"
//             placeholder="Search Microsoft models..."
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
//         <div className="tablet-grid"
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
//               <h3 style={{ fontSize: "16px", fontWeight: "600", margin: "10px 0 5px" }}>
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
//           <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
//             MICROSOFT REPAIR & REPLACEMENT
//           </h2>
//           <p style={{ color: "#6c757d", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto" }}>
//             Microsoft Surface devices are versatile and high-performing. Whether it's a
//             screen replacement, battery repair, or performance upgrade, our certified technicians
//             provide reliable repair services using genuine Microsoft parts.
//           </p>
//           <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
//             WE CAN FIX YOUR MICROSOFT DEVICE
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MicrosoftLap;


import React, { useState } from "react";
import "./Laptop.css";
import { useNavigate } from "react-router-dom";
import surface1 from "../../assets/microsoftLaptop/surface1.jpg";
import surface2 from "../../assets/microsoftLaptop/surface2.jpg";
import surface3 from "../../assets/microsoftLaptop/surface3.jpg";
import surface4 from "../../assets/microsoftLaptop/surface4.jpg";
import surface5 from "../../assets/microsoftLaptop/surface5.jpg";
import surface6 from "../../assets/microsoftLaptop/surface6.jpg";
import surface7 from "../../assets/microsoftLaptop/surface7.jpg";
import surface8 from "../../assets/microsoftLaptop/surface8.jpg";
import surface9 from "../../assets/microsoftLaptop/surface9.jpg";
import surface10 from "../../assets/microsoftLaptop/surface10.jpg";
import surface11 from "../../assets/microsoftLaptop/surface11.jpg";
import surface12 from "../../assets/microsoftLaptop/surface12.jpg";
import surface13 from "../../assets/microsoftLaptop/surface13.jpg";
import surface14 from "../../assets/microsoftLaptop/surface14.jpg";
import surface15 from "../../assets/microsoftLaptop/surface15.jpg";
import surface16 from "../../assets/microsoftLaptop/surface16.jpg";
import surface17 from "../../assets/microsoftLaptop/surface17.jpg";
import surface18 from "../../assets/microsoftLaptop/surface18.jpg";
import surface19 from "../../assets/microsoftLaptop/surface19.jpg";
import surface20 from "../../assets/microsoftLaptop/surface20.jpg";

const MicrosoftLap = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const microsoftModels = [
    { id: 1, name: "Surface Pro 7", image: surface1 },
    { id: 2, name: "Surface Pro 8", image: surface2 },
    { id: 3, name: "Surface Laptop 3", image: surface3 },
    { id: 4, name: "Surface Laptop 4", image: surface4 },
    { id: 5, name: "Surface Laptop Go", image: surface5 },
    { id: 6, name: "Surface Laptop Studio", image: surface6 },
    { id: 7, name: "Surface Book 2", image: surface7 },
    { id: 8, name: "Surface Book 3", image: surface8 },
    { id: 9, name: "Surface Go 2", image: surface9 },
    { id: 10, name: "Surface Go 3", image: surface10 },
    { id: 11, name: "Surface Pro X", image: surface11 },
    { id: 12, name: "Surface Studio 2", image: surface12 },
    { id: 13, name: "Surface Neo", image: surface13 },
    { id: 14, name: "Surface Pro 6", image: surface14 },
    { id: 15, name: "Surface Laptop 2", image: surface15 },
    { id: 16, name: "Surface Book", image: surface16 },
    { id: 17, name: "Surface Go", image: surface17 },
    { id: 18, name: "Surface Duo", image: surface18 },
    { id: 19, name: "Surface Hub 2S", image: surface19 },
    { id: 20, name: "Surface Hub 2", image: surface20 },
  ];

  const filteredModels = microsoftModels.filter((model) =>
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
            Home / Repair / Laptops / Microsoft
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#212529", margin: 0 }}>
            Microsoft Laptop Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        {/* Search Box */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search Microsoft models..."
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
                navigate(`/laptops/microsoft/${encodeURIComponent(model.name)}`, {
                  state: {
                    brandImage: model.image,
                    brandName: "Microsoft",
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
            MICROSOFT REPAIR & REPLACEMENT
          </h2>
          <p style={{ color: "#6c757d", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto" }}>
            Microsoft Surface devices are versatile and high-performing. Whether it's a
            screen replacement, battery repair, or performance upgrade, our certified technicians
            provide reliable repair services using genuine Microsoft parts.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
            WE CAN FIX YOUR MICROSOFT DEVICE
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MicrosoftLap;