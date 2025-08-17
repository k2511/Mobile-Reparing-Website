// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// // Import tablet images
// import tablet1 from "../../assets/tablet/tablet-1.png";
// import tablet2 from "../../assets/tablet/tablet-2.png";
// import tablet3 from "../../assets/tablet/tablet-3.png";
// import tablet4 from "../../assets/tablet/tablet-4.png";
// import tablet5 from "../../assets/tablet/tablet-5.png";
// import tablet6 from "../../assets/tablet/tablet-6.png";
// import tablet7 from "../../assets/tablet/tablet-7.png";
// import tablet8 from "../../assets/tablet/tablet-8.png";
// import tablet9 from "../../assets/tablet/tablet-9.png";
// import tablet10 from "../../assets/tablet/tablet-10.png";

// const TabletRepairPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   const tabletModels = [
//     { id: 1, name: "Apple iPad Pro 12.9", image: tablet1 },
//     { id: 2, name: "Apple iPad Air", image: tablet2 },
//     { id: 3, name: "Samsung Galaxy Tab S9", image: tablet3 },
//     { id: 4, name: "Samsung Galaxy Tab A8", image: tablet4 },
//     { id: 5, name: "Microsoft Surface Pro 9", image: tablet5 },
//     { id: 6, name: "Microsoft Surface Go 3", image: tablet6 },
//     { id: 7, name: "Lenovo Tab P12 Pro", image: tablet7 },
//     { id: 8, name: "Huawei MatePad Pro", image: tablet8 },
//     { id: 9, name: "Amazon Fire HD 10", image: tablet9 },
//     { id: 10, name: "Xiaomi Pad 6", image: tablet10 },

//   ];

// const TabModels = [
//   { brand: "Samsung", models: ["Galaxy Tab A7 Lite", "Galaxy Tab A8", "Galaxy Tab S6 Lite", "Galaxy Tab S7 FE", "Galaxy Tab S8", "Galaxy Tab S9", "Galaxy Tab Active 3"] },
//   { brand: "Lenovo", models: ["Tab M10 (3rd Gen)", "Tab P11", "Tab P11 Pro", "Tab M8", "Yoga Tab 13", "Tab K10"] },
//   { brand: "Realme", models: ["Realme Pad", "Realme Pad Mini", "Realme Pad X"] },
//   { brand: "Xiaomi", models: ["Redmi Pad", "Mi Pad 5", "Mi Pad 6", "Redmi Pad SE"] },
//   { brand: "Oppo", models: ["Oppo Pad", "Oppo Pad Air"] },
//   { brand: "OnePlus", models: ["OnePlus Pad", "OnePlus Pad Go"] },
//   { brand: "iQOO", models: ["iQOO Pad"] },
//   { brand: "Nokia", models: ["Nokia T10", "Nokia T20", "Nokia T21"] },
//   { brand: "Honor", models: ["Honor Pad X8", "Honor Pad X9", "Honor Pad 8"] },
//   { brand: "Micromax", models: ["Micromax Laptab", "Micromax Canvas Tab"] },
//   { brand: "Lava", models: ["Lava Tab", "Lava Tab 8"] },
//   { brand: "Amazon", models: ["Fire HD 8", "Fire HD 10", "Fire HD 10 Plus"] },
//   { brand: "Microsoft", models: ["Surface Go 3", "Surface Pro 9"] }
// ];

// // map se sirf brand print karna
// TabModels.map(item => console.log(item.brand));

//   const filteredModels = tabletModels.filter((model) =>
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
//             Home / Repair / Tablets
//           </div>
//           <h1
//             style={{
//               fontSize: "32px",
//               fontWeight: "bold",
//               color: "#212529",
//               margin: 0,
//             }}
//           >
//             Tablet Repair & Replacement
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
//             placeholder="Search Tablet models..."
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

//         {/* Tablet Models Grid */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//             gap: "20px",
//             marginBottom: "40px",
//           }}
//         >
//           {filteredModels.map((model) => (
//             <div
//               key={model.id}
//               onClick={() => {
//                 handleModelClick(model);
//                 navigate(`/brand-issues/${encodeURIComponent(model.name)}`, {
//                   state: { image: model.image },
//                 });
//               }}
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

//          <div>
//   {TabModels.map((model, idx) => {
//     return <div key={idx}>{model.brand}</div>;
//   })}
// </div>

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
//             TABLET REPAIR & REPLACEMENT
//           </h2>
//           <p
//             style={{
//               color: "#6c757d",
//               lineHeight: "1.6",
//               maxWidth: "800px",
//               margin: "0 auto",
//             }}
//           >
//             Your tablet is an essential part of your digital life — whether you
//             use it for work, entertainment, or staying connected. Our expert
//             repair services ensure fast turnaround times, genuine parts, and
//             lasting quality so you can get back to what matters most.
//           </p>
//           <h3
//             style={{
//               fontSize: "18px",
//               fontWeight: "600",
//               marginTop: "30px",
//             }}
//           >
//             WE CAN FIX YOUR TABLET
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TabletRepairPage;

//************************************************************************** */

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Samsung from "../../assets/image/Samsung.png";
import Mi from "../../assets/image/mi.png";
import OnePlus from "../../assets/image/oneplus.png";
import Oppo from "../../assets/image/oppo.png";
import Google from "../../assets/image/google.png";
import Realme from "../../assets/image/realme.png";
import Motorola from "../../assets/image/motorala.png";
import iQOO from "../../assets/image/iqoo.png";
import Poco from "../../assets/image/poco.png";
import Tecno from "../../assets/image/techno.png";
import Nothing from "../../assets/image/nothing.png";
import Nokia from "../../assets/image/nokia.png";
import Honor from "../../assets/image/honor.png";
import Asus from "../../assets/image/Asus.png";
import Huawei from "../../assets/image/huawei.png";
import Lava from "../../assets/image/lava.png";
import Microsoft from "../../assets/image/microsoft.png";
import Amazon from "../../assets/image/amazon.png";
import Micromax from "../../assets/image/micromax.png";

const brands = [
  { name: "Samsung", image: Samsung },
  { name: "Mi", image: Mi },
  { name: "OnePlus", image: OnePlus },
  { name: "Oppo", image: Oppo },
  { name: "Google", image: Google },
  { name: "Realme", image: Realme },
  { name: "Motorola", image: Motorola },
  { name: "iQOO", image: iQOO },
  { name: "Poco", image: Poco },
  { name: "Tecno", image: Tecno },
  { name: "Nothing", image: Nothing },
  { name: "Nokia", image: Nokia },
  { name: "Honor", image: Honor },
  { name: "Asus", image: Asus },
  { name: "Huawei", image: Huawei },
  { name: "Lava", image: Lava },
  { name: "Microsoft", image: Microsoft },
  { name: "Amazon", image: Amazon },
  { name: "Micromax", image: Micromax },
];

const TabletRepairPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBrandClick = (brand) => {
    // Navigate to specific brand tablet page
    navigate(`/tablets/${brand.name.toLowerCase()}`, {
      state: { 
        brandName: brand.name,
        brandImage: brand.image 
      }
    });
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
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginBottom: "10px", color: "#6c757d", fontSize: "14px" }}>
            Home / Repair / Tablets
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#212529", margin: 0 }}>
            Tablet Repair & Replacement
          </h1>
        </div>
      </div>

      {/* Content */}
      <Container className="py-5 text-center">
        {/* Search Box */}
        <div style={{ marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search Tablet Brands..."
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

        {/* Brands Grid */}
        <Row xs={3} sm={4} md={5} lg={6} className="g-4">
          {filteredBrands.map((brand, idx) => (
            <Col key={idx} className="d-flex justify-content-center">
              <div
                className="brand-card"
                onClick={() => handleBrandClick(brand)}
              >
                <img src={brand.image} alt={brand.name} className="brand-logo" />
              </div>
            </Col>
          ))}
        </Row>

        {/* Info Section */}
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #dee2e6",
            borderRadius: "10px",
            padding: "40px",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
            TABLET REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Your tablet is an essential part of your digital life — whether you use it for
            work, entertainment, or staying connected. Our expert repair services ensure
            fast turnaround times, genuine parts, and lasting quality so you can get back
            to what matters most.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
            WE CAN FIX YOUR TABLET
          </h3>
        </div>
      </Container>

      {/* Scoped CSS */}
      <style>{`
        .brand-card {
          width: 150px;
          height: 150px;
          background: #fff;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
          margin: auto;
          cursor: pointer;
        }
        .brand-card:hover {
          border-color: #e60000;
          box-shadow: 0 6px 20px rgba(230, 0, 0, 0.1);
        }
        .brand-logo {
          max-height: 60px;
          max-width: 80%;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
};

export default TabletRepairPage;