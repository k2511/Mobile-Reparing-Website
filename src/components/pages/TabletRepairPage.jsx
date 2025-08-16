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
//        <div> ----------------------------------------------------------</div>
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
//   const [selectedBrand, setSelectedBrand] = useState(null);
//   const navigate = useNavigate();

//   // Tablet models with images
//   const tabletModels = [
//     { id: 1, name: "Apple iPad Pro 12.9", image: tablet1, brand: "Apple" },
//     { id: 2, name: "Apple iPad Air", image: tablet2, brand: "Apple" },
//     { id: 3, name: "Samsung Galaxy Tab S9", image: tablet3, brand: "Samsung" },
//     { id: 4, name: "Samsung Galaxy Tab A8", image: tablet4, brand: "Samsung" },
//     { id: 5, name: "Microsoft Surface Pro 9", image: tablet5, brand: "Microsoft" },
//     { id: 6, name: "Microsoft Surface Go 3", image: tablet6, brand: "Microsoft" },
//     { id: 7, name: "Lenovo Tab P12 Pro", image: tablet7, brand: "Lenovo" },
//     { id: 8, name: "Huawei MatePad Pro", image: tablet8, brand: "Huawei" },
//     { id: 9, name: "Amazon Fire HD 10", image: tablet9, brand: "Amazon" },
//     { id: 10, name: "Xiaomi Pad 6", image: tablet10, brand: "Xiaomi" },
//   ];

//   // Indian tablet brands and models
//   const indianTabletBrands = [
//     { brand: "Samsung", models: ["Galaxy Tab A7 Lite", "Galaxy Tab A8", "Galaxy Tab S6 Lite", "Galaxy Tab S7 FE", "Galaxy Tab S8", "Galaxy Tab S9", "Galaxy Tab Active 3"] },
//     { brand: "Lenovo", models: ["Tab M10 (3rd Gen)", "Tab P11", "Tab P11 Pro", "Tab M8", "Yoga Tab 13", "Tab K10"] },
//     { brand: "Realme", models: ["Realme Pad", "Realme Pad Mini", "Realme Pad X"] },
//     { brand: "Xiaomi", models: ["Redmi Pad", "Mi Pad 5", "Mi Pad 6", "Redmi Pad SE"] },
//     { brand: "Oppo", models: ["Oppo Pad", "Oppo Pad Air"] },
//     { brand: "OnePlus", models: ["OnePlus Pad", "OnePlus Pad Go"] },
//     { brand: "iQOO", models: ["iQOO Pad"] },
//     { brand: "Nokia", models: ["Nokia T10", "Nokia T20", "Nokia T21"] },
//     { brand: "Honor", models: ["Honor Pad X8", "Honor Pad X9", "Honor Pad 8"] },
//     { brand: "Micromax", models: ["Micromax Laptab", "Micromax Canvas Tab"] },
//     { brand: "Lava", models: ["Lava Tab", "Lava Tab 8"] },
//     { brand: "Amazon", models: ["Fire HD 8", "Fire HD 10", "Fire HD 10 Plus"] },
//     { brand: "Microsoft", models: ["Surface Go 3", "Surface Pro 9"] }
//   ];

//   const filteredModels = tabletModels.filter(model =>
//     model.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
//     (!selectedBrand || model.brand === selectedBrand)
//   );

//   const handleModelClick = (model) => {
//     navigate(`/brand-issues/${encodeURIComponent(model.name)}`, {
//       state: { image: model.image }
//     });
//   };

//   const handleBrandFilter = (brand) => {
//     setSelectedBrand(brand === selectedBrand ? null : brand);
//   };

//   return (
//     <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
//       {/* Header */}
//       <div style={{ backgroundColor: "white", borderBottom: "1px solid #dee2e6", padding: "20px 0" }}>
//         <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
//           <div style={{ marginBottom: "10px", color: "#6c757d", fontSize: "14px" }}>
//             Home / Repair / Tablets
//           </div>
//           <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#212529", margin: 0 }}>
//             Tablet Repair & Replacement
//           </h1>
//         </div>
//       </div>

//       {/* Content */}
//       <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
//         {/* Search and Filter Section */}
//         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "40px", flexWrap: "wrap" }}>
//           <div style={{ marginBottom: "20px" }}>
//             <input
//               type="text"
//               placeholder="Search Tablet models..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               style={{
//                 width: "300px",
//                 padding: "12px 20px",
//                 border: "1px solid #ced4da",
//                 borderRadius: "25px",
//                 fontSize: "16px",
//                 outline: "none",
//               }}
//             />
//           </div>

//           {/* Brand Filter */}
//           <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//             {indianTabletBrands.map((brandData, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => handleBrandFilter(brandData.brand)}
//                 style={{
//                   padding: "8px 16px",
//                   border: `1px solid ${selectedBrand === brandData.brand ? "#007bff" : "#ced4da"}`,
//                   borderRadius: "20px",
//                   backgroundColor: selectedBrand === brandData.brand ? "#007bff" : "white",
//                   color: selectedBrand === brandData.brand ? "white" : "#212529",
//                   cursor: "pointer",
//                   transition: "all 0.3s ease",
//                 }}
//               >
//                 {brandData.brand}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Tablet Models Grid */}
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px", marginBottom: "40px" }}>
//           {filteredModels.length > 0 ? (
//             filteredModels.map((model) => (
//               <div
//                 key={model.id}
//                 onClick={() => handleModelClick(model)}
//                 style={{
//                   backgroundColor: "white",
//                   border: "1px solid #dee2e6",
//                   borderRadius: "10px",
//                   padding: "20px",
//                   textAlign: "center",
//                   cursor: "pointer",
//                   transition: "all 0.3s ease",
//                   boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//                 }}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.borderColor = "#007bff";
//                   e.currentTarget.style.transform = "translateY(-2px)";
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.borderColor = "#dee2e6";
//                   e.currentTarget.style.transform = "translateY(0)";
//                 }}
//               >
//                 <img
//                   src={model.image}
//                   alt={model.name}
//                   style={{
//                     width: "100%",
//                     height: "150px",
//                     objectFit: "contain",
//                     marginBottom: "15px",
//                   }}
//                 />
//                 <h3 style={{ fontSize: "16px", fontWeight: "600", margin: "10px 0 5px" }}>
//                   {model.name}
//                 </h3>
//               </div>
//             ))
//           ) : (
//             <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "40px" }}>
//               <p>No tablet models found matching your search criteria.</p>
//             </div>
//           )}
//         </div>

//         {/* Bottom Section */}
//         <div style={{ backgroundColor: "white", border: "1px solid #dee2e6", borderRadius: "10px", padding: "40px", textAlign: "center" }}>
//           <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
//             TABLET REPAIR & REPLACEMENT
//           </h2>
//           <p style={{ color: "#6c757d", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto" }}>
//             Your tablet is an essential part of your digital life — whether you
//             use it for work, entertainment, or staying connected. Our expert
//             repair services ensure fast turnaround times, genuine parts, and
//             lasting quality so you can get back to what matters most.
//           </p>
//           <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
//             WE CAN FIX YOUR TABLET
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TabletRepairPage;





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

// BrandButton component for logo-only buttons
const BrandButton = ({ brand, isSelected, onClick }) => (
  <button
    onClick={() => onClick(brand.name)}
    style={{
      padding: "8px 16px",
      border: `1px solid ${isSelected ? "#007bff" : "#ced4da"}`,
      borderRadius: "20px",
      backgroundColor: isSelected ? "#007bff" : "white",
      color: isSelected ? "white" : "#212529",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    }}
  >
    {brand.logo && (
      <img
        src={brand.logo}
        alt={brand.name}
        style={{
          height: "16px",
          width: "auto",
          filter: isSelected ? "brightness(0) invert(1)" : "none",
        }}
      />
    )}
    {brand.name}
  </button>
);

BrandButton.propTypes = {
  brand: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

// SearchInput component for reusability
const SearchInput = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    style={{
      width: "300px",
      padding: "12px 20px",
      border: "1px solid #ced4da",
      borderRadius: "25px",
      fontSize: "16px",
      outline: "none",
    }}
  />
);

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
  placeholder: "Search...",
};

const TabletRepairPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const navigate = useNavigate();

  // Tablet brands with web-hosted logos
  const tabletBrands = [
    { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
    { name: "Xiaomi", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Xiaomi_logo_%282021-%29.svg" },
    { name: "Vivo", logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Vivo_Logo.svg" },
    { name: "OnePlus", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/OnePlus_logo.svg" },
    { name: "Oppo", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Oppo_LOGO_2019.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Realme", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Realme_logo.svg" },
    { name: "Motorola", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Motorola_logo.svg" },
    { name: "iQOO", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Iqoo_logo.svg" },
    { name: "Poco", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/POCO_logo.svg" },
    { name: "Tecno", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Tecno_Mobile_Logo.svg" },
    { name: "Nothing", logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Nothing_Logo.svg" },
    { name: "Nokia", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Nokia_5G_Logo.svg" },
    { name: "Honor", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Honor_logo.svg" },
    { name: "Asus", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg" },
    { name: "Huawei", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Huawei_Standard_logo.svg" },
    { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Lenovo_logo_2015.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  ];

  // Comprehensive tablet models list with web-hosted images
  const tabletModels = [
    // Samsung
    { id: 1, name: "Samsung Galaxy Tab A9", image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-x110nzaeinu/gallery/in-galaxy-tab-a9-wifi-x110-sm-x110nzaeinu-thumb-539087654", brand: "Samsung" },
    { id: 2, name: "Samsung Galaxy Tab S9 FE", image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-x510nzaeinu/gallery/in-galaxy-tab-s9-fe-wifi-x510-sm-x510nzaeinu-thumb-539087656", brand: "Samsung" },
    { id: 3, name: "Samsung Galaxy Tab S10 Ultra", image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-x920nzaaxar/gallery/in-galaxy-tab-s10-ultra-5g-x920-sm-x920nzaaxar-thumb-539087658", brand: "Samsung" },
    { id: 4, name: "Samsung Galaxy Tab A8", image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-x200nzaeinu/gallery/in-galaxy-tab-a8-4gb-ram-sm-x200-sm-x200nzaeinu-thumb-530606022", brand: "Samsung" },
    { id: 5, name: "Samsung Galaxy Tab S8", image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-x700nzaaxar/gallery/in-galaxy-tab-s8-5g-x700-sm-x700nzaaxar-thumb-530606024", brand: "Samsung" },
    // Xiaomi
    { id: 6, name: "Xiaomi Pad 6", image: "https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-pad-6/specs-header.png", brand: "Xiaomi" },
    { id: 7, name: "Xiaomi Pad 5", image: "https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-pad-5/1.jpg", brand: "Xiaomi" },
    { id: 8, name: "Redmi Pad SE", image: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-pad-se/kv.jpg", brand: "Xiaomi" },
    // Vivo
    { id: 9, name: "Vivo Pad", image: "https://www.vivo.com/content/dam/vivo/global/product/pad/images/kv.jpg", brand: "Vivo" },
    { id: 10, name: "Vivo Pad Air", image: "https://www.vivo.com/content/dam/vivo/global/product/pad-air/images/kv.jpg", brand: "Vivo" },
    // OnePlus
    { id: 11, name: "OnePlus Pad", image: "https://image01.oneplus.net/ebp/202303/13/1-M00-3E-2C-rB8BYWQj8XqAMtXpAAKQZ9Y2R1U796.png", brand: "OnePlus" },
    { id: 12, name: "OnePlus Pad Go", image: "https://image01.oneplus.net/ebp/202310/10/1-M00-3F-2C-rB8BYWRj8XqAMtXpAAKQZ9Y2R1U798.png", brand: "OnePlus" },
    // Oppo
    { id: 13, name: "Oppo Pad", image: "https://image.oppo.com/content/dam/oppo/product-asset-library/pad/pad-list-page/pad-purple.png", brand: "Oppo" },
    { id: 14, name: "Oppo Pad Air", image: "https://image.oppo.com/content/dam/oppo/common/mkt/specs/oppo-pad-air/en/image1.png", brand: "Oppo" },
    // Google
    { id: 15, name: "Google Pixel Tablet", image: "https://lh3.googleusercontent.com/jlRfx3A_4BPUv0Tw5kVCoW2yVaB3qX99yT6lR2EhV9aVgrnM0OtN3XU8YkYfE7E7fW9V4A", brand: "Google" },
    // Realme
    { id: 16, name: "Realme Pad Mini", image: "https://image01.realme.net/general/20220420/1650452047810.png", brand: "Realme" },
    { id: 17, name: "Realme Pad X", image: "https://image01.realme.net/general/20220520/1653052047810.png", brand: "Realme" },
    { id: 18, name: "Realme Pad 2", image: "https://image01.realme.net/general/20230720/1690052047810.png", brand: "Realme" },
    // Motorola
    { id: 19, name: "Moto Tab G70", image: "https://motorola.vtexassets.com/arquivos/ids/156022/Moto-Tab-G70.png", brand: "Motorola" },
    { id: 20, name: "Moto Tab G20", image: "https://motorola.vtexassets.com/arquivos/ids/156023/Moto-Tab-G20.png", brand: "Motorola" },
    // iQOO
    { id: 21, name: "iQOO Pad", image: "https://www.iqoo.com/content/dam/vivo/iqoo/cn/product/pad/images/kv/kv-pc.png", brand: "iQOO" },
    // Poco
    { id: 22, name: "Poco Pad", image: "https://i01.appmifile.com/webfile/globalimg/products/pc/poco-pad/kv.jpg", brand: "Poco" },
    // Tecno
    { id: 23, name: "Tecno Pad", image: "https://www.tecno-mobile.com/content/dam/tecno/product/pad/images/kv.jpg", brand: "Tecno" },
    // Nothing
    { id: 24, name: "Nothing Tablet", image: "https://via.placeholder.com/150?text=Nothing+Tablet", brand: "Nothing" },
    // Nokia
    { id: 25, name: "Nokia T20", image: "https://www.nokia.com/sites/default/files/styles/scale_720_4_3/public/2021-10/Nokia-T20-hero-image.png", brand: "Nokia" },
    { id: 26, name: "Nokia T10", image: "https://www.nokia.com/sites/default/files/styles/scale_720_4_3/public/2022-07/Nokia-T10-hero-image.png", brand: "Nokia" },
    // Honor
    { id: 27, name: "Honor Pad 8", image: "https://www.hihonor.com/content/dam/honor/global/product-list/tablets/honor-pad-8/images/kv.jpg", brand: "Honor" },
    { id: 28, name: "Honor Pad X9", image: "https://www.hihonor.com/content/dam/honor/in/product-list/tablets/honor-pad-x9/overview/display.png", brand: "Honor" },
    // Asus
    { id: 29, name: "Asus ZenPad", image: "https://dlcdnwebimgs.asus.com/gain/zenpad-8-0-z380m.png", brand: "Asus" },
    { id: 30, name: "Asus ZenPad 3S", image: "https://dlcdnwebimgs.asus.com/gain/zenpad-3s-10-z500m.png", brand: "Asus" },
    // Huawei
    { id: 31, name: "Huawei MatePad Pro", image: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/tablets/matepad-pro-13-2/img/kv/kv.jpg", brand: "Huawei" },
    { id: 32, name: "Huawei MatePad 11", image: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/tablets/matepad-11/images/matepad-11.png", brand: "Huawei" },
    // Lenovo
    { id: 33, name: "Lenovo Tab P12 Pro", image: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MTQ4MzU2fGltYWdlL3BuZ3xoYjMvaDk1LzEwMjYwOTU3ODg0NDE0LnBuZ3w1YzUzYzQ0YjY3OTUzZDYxY2M1YzU1YzY0YzY0YzY5YzA3YzY1YzY0YzY1YzY0YzY1YzY0YzY1YzY0YzY1/lenovo-tab-p12-pro-front.png", brand: "Lenovo" },
    { id: 34, name: "Lenovo Tab M10", image: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MTQ4MzU3fGltYWdlL3BuZ3xoYjMvaDk1LzEwMjYwOTU3ODg0NDE1LnBuZ3w1YzUzYzQ0YjY3OTUzZDYxY2M1YzU1YzY0YzY0YzY5YzA3YzY1YzY0YzY1YzY0YzY1YzY0YzY1YzY0YzY1/lenovo-tab-m10-front.png", brand: "Lenovo" },
    { id: 35, name: "Lenovo Yoga Tab 13", image: "https://www.lenovo.com/medias/lenovo-yoga-tab-13-hero.png?context=bWFzdGVyfHJvb3R8MTI3NDM3fGltYWdlL3BuZ3xoNDMvaDZmLzEwNzQwNjY5MDU1MTA2LnBuZ3w5NDVhYzA2OWQ2M2U3ZmU5NzI3ZmU2ZDVhNzY4ZDY1ZjVhYzA2OWQ2M2U3ZmU5NzI3ZmU2ZDVhNzY4ZDY1", brand: "Lenovo" },
    // Microsoft
    { id: 36, name: "Microsoft Surface Pro 9", image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4YJZm?ver=2a2b", brand: "Microsoft" },
    { id: 37, name: "Microsoft Surface Go 3", image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4YJZn?ver=2a2c", brand: "Microsoft" },
    // Amazon
    { id: 38, name: "Amazon Fire HD 10", image: "https://m.media-amazon.com/images/I/61k+Qf0qMRL._AC_UF1000,1000_QL80_.jpg", brand: "Amazon" },
    { id: 39, name: "Amazon Fire HD 8", image: "https://m.media-amazon.com/images/I/61d4bE0nJTL._AC_UF1000,1000_QL80_.jpg", brand: "Amazon" },
  ];

  // Filter models based on search and brand selection
  const filteredModels = tabletModels.filter(
    (model) =>
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!selectedBrand || model.brand === selectedBrand)
  );

  // Handle brand selection
  const handleBrandFilter = (brandName) => {
    setSelectedBrand(brandName === selectedBrand ? null : brandName);
  };

  // Handle model selection
  const handleModelClick = (model) => {
    navigate(`/brand-issues/${encodeURIComponent(model.name)}`, {
      state: { image: model.image },
    });
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Header */}
      <div style={{ backgroundColor: "white", borderBottom: "1px solid #dee2e6", padding: "20px 0" }}>
        <Container>
          <div style={{ marginBottom: "10px", color: "#6c757d", fontSize: "14px" }}>
            Home / Repair / Tablets
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#212529", margin: 0 }}>
            Tablet Repair & Replacement
          </h1>
        </Container>
      </div>

      {/* Content */}
      <Container style={{ padding: "40px 15px" }}>
        {/* Search and Filter Section */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "40px", flexWrap: "wrap" }}>
          <div style={{ marginBottom: "20px" }}>
            <SearchInput
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Tablet models..."
            />
          </div>

          {/* Brand Filter */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {tabletBrands.map((brand, idx) => (
              <BrandButton
                key={idx}
                brand={brand}
                isSelected={selectedBrand === brand.name}
                onClick={handleBrandFilter}
              />
            ))}
          </div>
        </div>

        {/* Tablet Models Grid */}
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 mb-4">
          {filteredModels.length > 0 ? (
            filteredModels.map((model) => (
              <Col key={model.id}>
                <div
                  onClick={() => handleModelClick(model)}
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #dee2e6",
                    borderRadius: "10px",
                    padding: "20px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    height: "100%",
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
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/150?text=Tablet+Image";
                    }}
                  />
                  <h3 style={{ fontSize: "16px", fontWeight: "600", margin: "10px 0 5px" }}>
                    {model.name}
                  </h3>
                  <p style={{ color: "#6c757d", fontSize: "14px" }}>{model.brand}</p>
                </div>
              </Col>
            ))
          ) : (
            <Col xs={12} className="text-center py-5">
              <p>No tablet models found matching your search criteria.</p>
            </Col>
          )}
        </Row>

        {/* Bottom Section */}
        <div style={{
          backgroundColor: "white",
          border: "1px solid #dee2e6",
          borderRadius: "10px",
          padding: "40px",
          textAlign: "center",
          marginTop: "40px"
        }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
            TABLET REPAIR & REPLACEMENT
          </h2>
          <p style={{ color: "#6c757d", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto" }}>
            Your tablet is an essential part of your digital life — whether you
            use it for work, entertainment, or staying connected. Our expert
            repair services ensure fast turnaround times, genuine parts, and
            lasting quality so you can get back to what matters most.
          </p>
          <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "30px" }}>
            WE CAN FIX YOUR TABLET
          </h3>
        </div>
      </Container>
    </div>
  );
};

export default TabletRepairPage;