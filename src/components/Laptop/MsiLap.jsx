// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Laptop.css";
// // Import MSI laptop images
// import msi1 from "../../assets/msiLaptop/msiLaptop1.jpg";
// import msi2 from "../../assets/msiLaptop/msiLaptop2.jpg";
// import msi3 from "../../assets/msiLaptop/msiLaptop3.jpg";
// import msi4 from "../../assets/msiLaptop/msiLaptop4.jpg";
// import msi5 from "../../assets/msiLaptop/msiLaptop5.jpg";
// import msi6 from "../../assets/msiLaptop/msiLaptop6.jpg";


// const MsiLap = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   // MSI models with images
//   const msiModels = [
//     { id: 1, name: "MSI GS66 Stealth", image: msi1 },
//     { id: 2, name: "MSI GE76 Raider", image: msi2 },
//     { id: 3, name: "MSI GP66 Leopard", image: msi3 },
//     { id: 4, name: "MSI Prestige 14", image: msi4 },
//     { id: 5, name: "MSI Modern 15", image: msi5 },
//     { id: 6, name: "MSI Creator Z16", image: msi6 },
//     // Add more models as needed
//   ];

//   const filteredModels = msiModels.filter((model) =>
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
//             Home / Repair / Laptops / MSI
//           </div>
//           <h1
//             style={{
//               fontSize: "32px",
//               fontWeight: "bold",
//               color: "#212529",
//               margin: 0,
//             }}
//           >
//             MSI Laptop Repair & Replacement
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
//             placeholder="Search MSI models..."
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
//           // className="main"
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
//             MSI REPAIR & REPLACEMENT
//           </h2>
//           <p
//             style={{
//               color: "#6c757d",
//               lineHeight: "1.6",
//               maxWidth: "800px",
//               margin: "0 auto",
//             }}
//           >
//             Your MSI laptop is designed for performance and gaming excellence. 
//             From hardware issues to replacements, our certified technicians 
//             provide quick service with genuine MSI parts.
//           </p>
//           <h3
//             style={{
//               fontSize: "18px",
//               fontWeight: "600",
//               marginTop: "30px",
//             }}
//           >
//             WE CAN FIX YOUR MSI
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MsiLap;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Laptop.css";
import msi1 from "../../assets/msiLaptop/msiLaptop1.jpg";
import msi2 from "../../assets/msiLaptop/msiLaptop2.jpg";
import msi3 from "../../assets/msiLaptop/msiLaptop3.jpg";
import msi4 from "../../assets/msiLaptop/msiLaptop4.jpg";
import msi5 from "../../assets/msiLaptop/msiLaptop5.jpg";
import msi6 from "../../assets/msiLaptop/msiLaptop6.jpg";

const MsiLap = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // MSI models with images
  const msiModels = [
    { id: 1, name: "MSI GS66 Stealth", image: msi1 },
    { id: 2, name: "MSI GE76 Raider", image: msi2 },
    { id: 3, name: "MSI GP66 Leopard", image: msi3 },
    { id: 4, name: "MSI Prestige 14", image: msi4 },
    { id: 5, name: "MSI Modern 15", image: msi5 },
    { id: 6, name: "MSI Creator Z16", image: msi6 },
  ];

  const filteredModels = msiModels.filter((model) =>
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
            Home / Repair / Laptops / MSI
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            MSI Laptop Repair & Replacement
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
            placeholder="Search MSI models..."
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
                navigate(`/laptops/msi/${encodeURIComponent(model.name)}`, {
                  state: {
                    brandImage: model.image,
                    brandName: "MSI",
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
            MSI REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Your MSI laptop is designed for performance and gaming excellence. 
            From hardware issues to replacements, our certified technicians 
            provide quick service with genuine MSI parts.
          </p>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginTop: "30px",
            }}
          >
            WE CAN FIX YOUR MSI
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MsiLap;