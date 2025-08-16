

// import React, { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";

// // Import brand logos
// import Samsung from "../assets/image/samsung.png";
// import Mi from "../assets/image/mi.png";
// import OnePlus from "../assets/image/oneplus.png";
// import Oppo from "../assets/image/oppo.png";
// import Google from "../assets/image/google.png";
// import Realme from "../assets/image/realme.png";
// import Motorola from "../assets/image/motorala.png";
// import iQOO from "../assets/image/iqoo.png";
// import Poco from "../assets/image/poco.png";
// import Tecno from "../assets/image/techno.png";
// import Nothing from "../assets/image/nothing.png";
// import Nokia from "../assets/image/nokia.png";
// import Honor from "../assets/image/honor.png";
// import Asus from "../assets/image/asus.png";
// import Huawei from "../assets/image/huawei.png";

// // Brand data configuration
// const BRANDS = [
//   { id: 1, name: "Samsung", image: Samsung },
//   { id: 2, name: "Mi", image: Mi },
//   { id: 4, name: "OnePlus", image: OnePlus },
//   { id: 5, name: "Oppo", image: Oppo },
//   { id: 6, name: "Google", image: Google },
//   { id: 7, name: "Realme", image: Realme },
//   { id: 8, name: "Motorola", image: Motorola },
//   { id: 9, name: "iQOO", image: iQOO },
//   { id: 10, name: "Poco", image: Poco },
//   { id: 11, name: "Tecno", image: Tecno },
//   { id: 12, name: "Nothing", image: Nothing },
//   { id: 13, name: "Nokia", image: Nokia },
//   { id: 14, name: "Honor", image: Honor },
//   { id: 15, name: "Asus", image: Asus },
//   { id: 16, name: "Huawei", image: Huawei },
//   { id: 17, name: "Apple", image: null },
//   { id: 18, name: "Lenovo", image: null },
//   { id: 19, name: "Microsoft", image: null },
//   { id: 20, name: "Amazon", image: null },
// ];

// const DEVICES = {
//   Samsung: ["Galaxy Tab A9", "Galaxy Tab S9 FE", "Galaxy Tab S10 Ultra"],
//   Mi: ["Redmi Pad SE", "Xiaomi Pad 6", "Xiaomi Pad 5"],
//   Vivo: ["Vivo Pad", "Vivo Pad Air"],
//   OnePlus: ["OnePlus Pad", "OnePlus Pad Go"],
//   Oppo: ["Oppo Pad", "Oppo Pad Air"],
//   Google: ["Pixel Tablet"],
//   Realme: ["Realme Pad Mini", "Realme Pad X", "Realme Pad 2"],
//   Motorola: ["Moto Tab G70", "Moto Tab G20"],
//   iQOO: ["iQOO Pad"],
//   Poco: ["Poco Pad"],
//   Tecno: ["Tecno Pad"],
//   Nothing: ["Nothing Tablet"],
//   Nokia: ["Nokia T20", "Nokia T10"],
//   Honor: ["Honor Pad 8", "Honor Pad X9"],
//   Asus: ["Asus ZenPad"],
//   Huawei: ["MatePad Pro", "MatePad 11"],
//   Apple: ["iPad Pro 12.9", "iPad Air", "iPad mini", "iPad (10th gen)"],
//   Lenovo: ["Tab P12 Pro", "Tab M10", "Yoga Tab 13", "Tab P11 Pro"],
//   Microsoft: ["Surface Pro 9", "Surface Go 3"],
//   Amazon: ["Fire HD 10", "Fire HD 8"],
// };

// // BrandCard component for better reusability
// const BrandCard = ({ brand, onClick }) => (
//   <div
//     onClick={() => onClick(brand)}
//     style={{
//       backgroundColor: "white",
//       border: "1px solid #dee2e6",
//       borderRadius: "8px",
//       padding: "10px",
//       textAlign: "center",
//       cursor: "pointer",
//       transition: "all 0.3s ease",
//       boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
//       width: "100%",
//       maxWidth: "150px",
//       height: "150px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     }}
//     onMouseOver={(e) => {
//       e.currentTarget.style.borderColor = "#007bff";
//       e.currentTarget.style.transform = "translateY(-2px)";
//     }}
//     onMouseOut={(e) => {
//       e.currentTarget.style.borderColor = "#dee2e6";
//       e.currentTarget.style.transform = "translateY(0)";
//     }}
//   >
//     {brand.image ? (
//       <img
//         src={brand.image}
//         alt={brand.name}
//         style={{
//           maxWidth: "50%",
//           maxHeight: "90%",
//           objectFit: "contain",
//         }}
//       />
//     ) : (
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: "16px",
//           fontWeight: "bold",
//           color: "#6c757d",
//         }}
//       >
//         {brand.name}
//       </div>
//     )}
//   </div>
// );

// BrandCard.propTypes = {
//   brand: PropTypes.object.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

// // SearchInput component for better reusability
// const SearchInput = ({ value, onChange, placeholder }) => (
//   <input
//     type="text"
//     placeholder={placeholder}
//     value={value}
//     onChange={onChange}
//     style={{
//       width: "250px",
//       padding: "10px 15px",
//       border: "1px solid #ced4da",
//       borderRadius: "20px",
//       fontSize: "14px",
//       outline: "none",
//     }}
//   />
// );

// SearchInput.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   placeholder: PropTypes.string,
// };

// SearchInput.defaultProps = {
//   placeholder: "Search...",
// };

// const TabletBrands = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   const handleBrandClick = (brand) => {
//     navigate(`/tablet-repair/${encodeURIComponent(brand.name.toLowerCase())}`, {
//       state: { image: brand.image },
//     });
//   };

//   const filteredBrands = BRANDS.filter((brand) =>
//     brand.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
//       {/* Header */}
//       <div
//         style={{
//           backgroundColor: "white",
//           borderBottom: "1px solid #dee2e6",
//           padding: "15px 0",
//         }}
//       >
//         <Container>
//           <div
//             style={{
//               marginBottom: "8px",
//               color: "#6c757d",
//               fontSize: "12px",
//             }}
//           >
//             Home / Brands / Tablets
//           </div>
//           <h1
//             style={{
//               fontSize: "24px",
//               fontWeight: "bold",
//               color: "#212529",
//               margin: 0,
//             }}
//           >
//             Tablet Brands
//           </h1>
//         </Container>
//       </div>

//       {/* Content */}
//       <Container style={{ padding: "20px 15px" }}>
//         {/* Search Box */}
//         <div style={{ textAlign: "center", marginBottom: "20px" }}>
//           <SearchInput
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search Tablet brands..."
//           />
//         </div>

//         {/* Brands Grid */}
//         <Row xs={2} sm={3} md={4} lg={5} xl={6} className="g-3 mb-3">
//           {filteredBrands.map((brand) => (
//             <Col key={brand.id} className="d-flex justify-content-center">
//               <BrandCard brand={brand} onClick={handleBrandClick} />
//             </Col>
//           ))}
//         </Row>

//         {/* No results message */}
//         {filteredBrands.length === 0 && (
//           <div style={{ textAlign: "center", padding: "20px" }}>
//             <p>No brands found matching your search.</p>
//           </div>
//         )}

//         {/* Bottom Section */}
//         <div
//           style={{
//             backgroundColor: "white",
//             border: "1px solid #dee2e6",
//             borderRadius: "8px",
//             padding: "20px",
//             textAlign: "center",
//             marginTop: "20px",
//           }}
//         >
//           <h2
//             style={{
//               fontSize: "20px",
//               fontWeight: "bold",
//               marginBottom: "15px",
//             }}
//           >
//             TABLET BRANDS & REPAIRS
//           </h2>
//           <p
//             style={{
//               color: "#6c757d",
//               lineHeight: "1.5",
//               maxWidth: "700px",
//               margin: "0 auto",
//               fontSize: "14px",
//             }}
//           >
//             Explore a wide range of tablet brands and their models. Select your
//             brand to view available tablets and find the best repair or
//             replacement options tailored to your needs.
//           </p>
//           <h3
//             style={{
//               fontSize: "16px",
//               fontWeight: "600",
//               marginTop: "20px",
//             }}
//           >
//             CHOOSE YOUR TABLET BRAND
//           </h3>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default TabletBrands;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

// BrandCard component for reusability
const BrandCard = ({ brand, onClick }) => (
  <div
    onClick={() => onClick(brand)}
    style={{
      backgroundColor: "white",
      border: "1px solid #dee2e6",
      borderRadius: "8px",
      padding: "10px",
      textAlign: "center",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      width: "100%",
      maxWidth: "150px",
      height: "150px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
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
    {brand.logo ? (
      <img
        src={brand.logo}
        alt={brand.name}
        style={{
          maxWidth: "50%",
          maxHeight: "90%",
          objectFit: "contain",
        }}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/50?text=Logo";
        }}
      />
    ) : (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#6c757d",
        }}
      >
        {brand.name}
      </div>
    )}
  </div>
);

BrandCard.propTypes = {
  brand: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string,
  }).isRequired,
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

const TabletBrands = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Tablet brands with web-hosted logos
  const tabletBrands = [
    { id: 1, name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
    { id: 2, name: "Xiaomi", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Xiaomi_logo_%282021-%29.svg" },
    { id: 3, name: "Vivo", logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Vivo_Logo.svg" },
    { id: 4, name: "OnePlus", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/OnePlus_logo.svg" },
    { id: 5, name: "Oppo", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Oppo_LOGO_2019.svg" },
    { id: 6, name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { id: 7, name: "Realme", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Realme_logo.svg" },
    { id: 8, name: "Motorola", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Motorola_logo.svg" },
    { id: 9, name: "iQOO", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Iqoo_logo.svg" },
    { id: 10, name: "Poco", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/POCO_logo.svg" },
    { id: 11, name: "Tecno", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Tecno_Mobile_Logo.svg" },
    { id: 12, name: "Nothing", logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Nothing_Logo.svg" },
    { id: 13, name: "Nokia", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Nokia_5G_Logo.svg" },
    { id: 14, name: "Honor", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Honor_logo.svg" },
    { id: 15, name: "Asus", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg" },
    { id: 16, name: "Huawei", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Huawei_Standard_logo.svg" },
    { id: 17, name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Lenovo_logo_2015.svg" },
    { id: 18, name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { id: 19, name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  ];

  // Handle brand click to navigate to repair page
  const handleBrandClick = (brand) => {
    navigate(`/tablet-repair/${encodeURIComponent(brand.name.toLowerCase())}`, {
      state: { logo: brand.logo },
    });
  };

  // Filter brands based on search query
  const filteredBrands = tabletBrands.filter((brand) =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Header */}
      <div
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #dee2e6",
          padding: "15px 0",
        }}
      >
        <Container>
          <div
            style={{
              marginBottom: "8px",
              color: "#6c757d",
              fontSize: "12px",
            }}
          >
            Home / Brands / Tablets
          </div>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Tablet Brands
          </h1>
        </Container>
      </div>

      {/* Content */}
      <Container style={{ padding: "20px 15px" }}>
        {/* Search Box */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <SearchInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Tablet brands..."
          />
        </div>

        {/* Brands Grid */}
        <Row xs={2} sm={3} md={4} lg={5} xl={6} className="g-3 mb-3">
          {filteredBrands.length > 0 ? (
            filteredBrands.map((brand) => (
              <Col key={brand.id} className="d-flex justify-content-center">
                <BrandCard brand={brand} onClick={handleBrandClick} />
              </Col>
            ))
          ) : (
            <Col xs={12} className="text-center py-5">
              <p>No brands found matching your search.</p>
            </Col>
          )}
        </Row>

        {/* Bottom Section */}
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #dee2e6",
            borderRadius: "8px",
            padding: "20px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            TABLET BRANDS & REPAIRS
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.5",
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "14px",
            }}
          >
            Explore a wide range of tablet brands and their models. Select your
            brand to view available tablets and find the best repair or
            replacement options tailored to your needs.
          </p>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "600",
              marginTop: "20px",
            }}
          >
            CHOOSE YOUR TABLET BRAND
          </h3>
        </div>
      </Container>
    </div>
  );
};

export default TabletBrands;

