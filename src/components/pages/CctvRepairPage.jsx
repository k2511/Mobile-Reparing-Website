// import React, { useState } from "react";

// import cctv1 from "../../assets/cctv/cctv-1.png";
// import cctv2 from "../../assets/cctv/cctv-2.png";
// import cctv3 from "../../assets/cctv/cctv-3.png";
// import cctv4 from "../../assets/cctv/cctv-4.png";
// import cctv5 from "../../assets/cctv/cctv-5.png";
// import cctv6 from "../../assets/cctv/cctv-6.png";
// import cctv7 from "../../assets/cctv/cctv-7.png";
// import cctv8 from "../../assets/cctv/cctv-8.png";

// const CctvRepairPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const cctvModels = [
//     { name: "Hikvision DS-2CD2143G0", image: cctv1 },
//     { name: "Dahua N52A", image: cctv2 },
//     { name: "CP Plus CP-UNC-TA21PL3", image: cctv3 },
//     { name: "Bosch NBN-73023BA", image: cctv4 },
//     { name: "Panasonic WV-S2131L", image: cctv5 },
//     { name: "Samsung SND-L6083R", image: cctv6 },
//     { name: "Sony SNC-VB770", image: cctv7 },
//     { name: "Axis P5635-E", image: cctv8 },
//   ];

//   const filteredModels = cctvModels.filter((model) =>
//     model.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleModelClick = (model) => {
//     alert(`Selected ${model.name} for repair/replacement`);
//   };

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
//             Home / Repair / CCTV
//           </div>
//           <h1
//             style={{
//               fontSize: "32px",
//               fontWeight: "bold",
//               color: "#212529",
//               margin: 0,
//             }}
//           >
//             CCTV Repair & Replacement
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
//             placeholder="Search CCTV models..."
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

//         {/* CCTV Models Grid */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//             gap: "20px",
//             marginBottom: "40px",
//           }}
//         >
//           {filteredModels.map((model, index) => (
//             <div
//               key={index}
//               onClick={() => handleModelClick(model)}
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
//                 e.currentTarget.style.borderColor = "red";
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
//                   width: "100%",
//                   height: "150px",
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
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "24px",
//               fontWeight: "bold",
//               marginBottom: "20px",
//             }}
//           >
//             CCTV REPAIR & REPLACEMENT
//           </h2>
//           <p
//             style={{
//               color: "#6c757d",
//               lineHeight: "1.6",
//               maxWidth: "800px",
//               margin: "0 auto",
//             }}
//           >
//             Our CCTV repair and replacement services cover all major brands and
//             models, ensuring your security system stays operational at all
//             times.
//           </p>
//           <h3
//             style={{
//               fontSize: "18px",
//               fontWeight: "600",
//               marginTop: "30px",
//             }}
//           >
//             WE CAN FIX YOUR CCTV
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CctvRepairPage;





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import CCTV images
import cctv1 from "../../assets/cctv/cctv-1.png";
import cctv2 from "../../assets/cctv/cctv-2.png";
import cctv3 from "../../assets/cctv/cctv-3.png";
import cctv4 from "../../assets/cctv/cctv-4.png";
import cctv5 from "../../assets/cctv/cctv-5.png";
import cctv6 from "../../assets/cctv/cctv-6.png";
import cctv7 from "../../assets/cctv/cctv-7.png";
import cctv8 from "../../assets/cctv/cctv-8.png";

const CctvRepairPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const cctvModels = [
    { id: 1, name: "Hikvision DS-2CD2143G0", image: cctv1 },
    { id: 2, name: "Dahua N52A", image: cctv2 },
    { id: 3, name: "CP Plus CP-UNC-TA21PL3", image: cctv3 },
    { id: 4, name: "Bosch NBN-73023BA", image: cctv4 },
    { id: 5, name: "Panasonic WV-S2131L", image: cctv5 },
    { id: 6, name: "Samsung SND-L6083R", image: cctv6 },
    { id: 7, name: "Sony SNC-VB770", image: cctv7 },
    { id: 8, name: "Axis P5635-E", image: cctv8 },
  ];

  const filteredModels = cctvModels.filter((model) =>
    model.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleModelClick = (model) => {
    alert(`Selected ${model.name} for repair/replacement`);
  };

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
            Home / Repair / CCTV
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            CCTV Repair & Replacement
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
            placeholder="Search CCTV models..."
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

        {/* CCTV Models Grid */}
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
              key={model.id}
              onClick={() => {
                handleModelClick(model);
                navigate(`/brand-issues/${encodeURIComponent(model.name)}`, {
                  state: { image: model.image },
                });
              }}
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
                  width: "100%",
                  height: "150px",
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
            CCTV REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Our CCTV repair and replacement services cover all major brands and
            models, ensuring your security system stays operational at all
            times.
          </p>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginTop: "30px",
            }}
          >
            WE CAN FIX YOUR CCTV
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CctvRepairPage;



