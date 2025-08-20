// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import "../components/Doorstep.css";
// // images
// import mi1 from "../assets/mi/mi-1.png";
// import mi2 from "../assets/mi/mi-2.png";
// import mi3 from "../assets/mi/mi-3.png";
// import mi4 from "../assets/mi/mi-4.png";
// import mi5 from "../assets/mi/mi-5.png";
// import mi7 from "../assets/mi/mi-7.png";
// import mi9 from "../assets/mi/mi-9.png";
// import mi10 from "../assets/mi/mi-10.png";
// import mi11 from "../assets/mi/mi-11.png";
// import mi12 from "../assets/mi/mi-12.png";
// import mi13 from "../assets/mi/mi-13.png";
// import mi14 from "../assets/mi/mi-14.png";
// import mi15 from "../assets/mi/mi-15.png";
// import mi16 from "../assets/mi/mi-16.png";
// import mi17 from "../assets/mi/mi-17.png";
// import mi18 from "../assets/mi/mi-18.png";
// import mi19 from "../assets/mi/mi-19.png";
// import mi20 from "../assets/mi/mi-20.png";
// import mi21 from "../assets/mi/mi-21.png";
// import mi22 from "../assets/mi/mi-22.png";
// import mi23 from "../assets/mi/mi-23.png";
// import mi24 from "../assets/mi/mi-24.png";
// import mi25 from "../assets/mi/mi-25.png";
// import mi26 from "../assets/mi/mi-26.png";
// import mi27 from "../assets/mi/mi-27.png";
// import mi28 from "../assets/mi/mi-28.png";
// import mi29 from "../assets/mi/mi-29.png";
// import mi30 from "../assets/mi/mi-30.png";
// import mi31 from "../assets/mi/mi-31.png";
// import mi32 from "../assets/mi/mi-32.png";
// import mi33 from "../assets/mi/mi-33.png";
// import mi34 from "../assets/mi/mi-34.png";
// import mi35 from "../assets/mi/mi-35.png";
// import mi36 from "../assets/mi/mi-36.png";
// import mi37 from "../assets/mi/mi-37.png";
// import mi38 from "../assets/mi/mi-38.png";
// import mi39 from "../assets/mi/mi-39.png";
// import mi40 from "../assets/mi/mi-40.png";
// import mi41 from "../assets/mi/mi-41.png";
// import mi42 from "../assets/mi/mi-42.png";
// import mi43 from "../assets/mi/mi-43.png";
// import mi44 from "../assets/mi/mi-44.png";
// import mi45 from "../assets/mi/mi-45.png";
// import mi46 from "../assets/mi/mi-46.png";
// import mi47 from "../assets/mi/mi-47.png";
// import mi48 from "../assets/mi/mi-48.png";

// import samsung1 from "../assets/samsung/samsung (1).png";
// import samsung2 from "../assets/samsung/samsung (2).png";
// import samsung3 from "../assets/samsung/samsung (3).png";
// import samsung4 from "../assets/samsung/samsung (4).png";
// import samsung5 from "../assets/samsung/samsung (5).png";
// import samsung6 from "../assets/samsung/samsung (6).png";
// import samsung7 from "../assets/samsung/samsung (7).png";
// import samsung8 from "../assets/samsung/samsung (8).png";
// import samsung9 from "../assets/samsung/samsung (9).png";
// import samsung10 from "../assets/samsung/samsung (10).png";

// import honor1 from "../assets/honor/honor (1).png";
// import honor2 from "../assets/honor/honor (2).png";
// import honor3 from "../assets/honor/honor (3).png";
// import honor4 from "../assets/honor/honor (4).png";
// import honor5 from "../assets/honor/honor (5).png";

// import iqoo1 from "../assets/iqoo/iqoo-1.png";
// import iqoo2 from "../assets/iqoo/iqoo-2.png";
// import iqoo4 from "../assets/iqoo/iqoo-4.png";
// import iqoo5 from "../assets/iqoo/iqoo-5.png";

// import poco1 from "../assets/poco/poco (1).png";
// import poco2 from "../assets/poco/poco (2).png";
// import poco3 from "../assets/poco/poco (3).png";
// import poco4 from "../assets/poco/poco (4).png";

// import vivo1 from "../assets/vivo/vivo (1).png";
// import vivo2 from "../assets/vivo/vivo (2).png";
// import vivo3 from "../assets/vivo/vivo (3).png";
// import vivo4 from "../assets/vivo/vivo (4).png";
// import vivo5 from "../assets/vivo/vivo (5).png";

// import oppo1 from "../assets/oppo/oppo (1).png";
// import oppo2 from "../assets/oppo/oppo (2).png";
// import oppo3 from "../assets/oppo/oppo (3).png";
// import oppo4 from "../assets/oppo/oppo (4).png";
// import oppo5 from "../assets/oppo/oppo (5).png";
// import oppo6 from "../assets/oppo/oppo (6).png";
// import oppo7 from "../assets/oppo/oppo (7).png";
// import oppo8 from "../assets/oppo/oppo (8).png";

// import onePlus1 from "../assets/onePlus/onePlus (1).png";
// import onePlus2 from "../assets/onePlus/onePlus (2).png";
// import onePlus3 from "../assets/onePlus/onePlus (3).png";
// import onePlus4 from "../assets/onePlus/onePlus (4).png";
// import onePlus5 from "../assets/onePlus/onePlus (5).png";
// import onePlus6 from "../assets/onePlus/onePlus (6).png";
// import onePlus7 from "../assets/onePlus/onePlus (7).png";
// import onePlus8 from "../assets/onePlus/onePlus (8).png";
// import onePlus9 from "../assets/onePlus/onePlus (9).png";
// import onePlus10 from "../assets/onePlus/onePlus (10).png";

// import motorola1 from "../assets/motorola/motorola (1).png";
// import motorola2 from "../assets/motorola/motorola (2).png";
// import motorola3 from "../assets/motorola/motorola (3).png";
// import motorola4 from "../assets/motorola/motorola (4).png";
// import motorola5 from "../assets/motorola/motorola (5).png";
// import motorola6 from "../assets/motorola/motorola (6).png";
// import motorola7 from "../assets/motorola/motorola (7).png";
// import motorola8 from "../assets/motorola/motorola (8).png";
// import motorola9 from "../assets/motorola/motorola (9).png";
// import motorola10 from "../assets/motorola/motorola (10).png";

// import tecno1 from "../assets/techno/techno (1).png";
// import tecno2 from "../assets/techno/techno (2).png";
// import tecno3 from "../assets/techno/techno (3).png";
// import tecno4 from "../assets/techno/techno (4).png";
// import tecno5 from "../assets/techno/techno (5).png";
// import google1 from "../assets/google/google-1.png";
// import google2 from "../assets/google/google-2.png";
// import google3 from "../assets/google/google-3.png";
// import google4 from "../assets/google/google-4.png";
// import google5 from "../assets/google/google-5.png";
// import google6 from "../assets/google/google-6.png";
// import google7 from "../assets/google/google-7.png";
// import google8 from "../assets/google/google-8.png";
// import google9 from "../assets/google/google-9.png";
// import google10 from "../assets/google/google-10.png";
// import google11 from "../assets/google/google-11.png";
// import google12 from "../assets/google/google-12.png";
// import google13 from "../assets/google/google-13.png";
// import laptop1 from "../assets/laptop/laptop-1.png";
// import laptop2 from "../assets/laptop/laptop-2.png";
// import laptop3 from "../assets/laptop/laptop-3.png";
// import laptop4 from "../assets/laptop/laptop-4.png";
// import laptop5 from "../assets/laptop/laptop-5.png";
// import laptop6 from "../assets/laptop/laptop-6.png";
// import laptop7 from "../assets/laptop/laptop-7.png";
// import laptop8 from "../assets/laptop/laptop-8.png";
// import laptop9 from "../assets/laptop/laptop-9.png";
// import laptop10 from "../assets/laptop/laptop-10.png";
// import tablet1 from "../assets/tablet/tablet-1.png";
// import tablet2 from "../assets/tablet/tablet-2.png";
// import tablet3 from "../assets/tablet/tablet-3.png";
// import tablet4 from "../assets/tablet/tablet-4.png";
// import tablet5 from "../assets/tablet/tablet-5.png";
// import tablet6 from "../assets/tablet/tablet-6.png";
// import tablet7 from "../assets/tablet/tablet-7.png";
// import tablet8 from "../assets/tablet/tablet-8.png";
// import tablet9 from "../assets/tablet/tablet-9.png";
// import tablet10 from "../assets/tablet/tablet-10.png";
// import cctv1 from "../assets/cctv/cctv-1.png";
// import cctv2 from "../assets/cctv/cctv-2.png";
// import cctv3 from "../assets/cctv/cctv-3.png";
// import cctv4 from "../assets/cctv/cctv-4.png";
// import cctv5 from "../assets/cctv/cctv-5.png";
// import cctv6 from "../assets/cctv/cctv-6.png";
// import cctv7 from "../assets/cctv/cctv-7.png";
// import cctv8 from "../assets/cctv/cctv-8.png";
// import realme1 from "../assets/realme/realme (1).png";
// import realme2 from "../assets/realme/realme (2).png";
// import realme3 from "../assets/realme/realme (3).png";
// import realme4 from "../assets/realme/realme (4).png";
// import realme5 from "../assets/realme/realme (5).png";
// import realme6 from "../assets/realme/realme (6).png";
// import realme7 from "../assets/realme/realme (7).png";
// import realme8 from "../assets/realme/realme (8).png";
// import realme9 from "../assets/realme/realme (9).png";
// import realme10 from "../assets/realme/realme (10).png";

// const Doorstep = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
//   const [query, setQuery] = useState(""); // What user types
//   const [results, setResults] = useState([]); // Search results
//   const [loading, setLoading] = useState(false); // Loader
//   const location = useLocation();
//   const showSection = location.state?.showSection || false;


//   const mobiles = [
//     { name: "Realme C21", image: realme1 },
//     { name: "Realme 12+ 5G", image: realme2 },
//     { name: "Realme 12 5G", image: realme3 },
//     { name: "Realme 9i 5G", image: realme4 },
//     { name: "Realme X7 Pro", image: realme5 },
//     { name: "Realme X32", image: realme6 },
//     { name: "Realme GT Neo 4", image: realme7 },
//     { name: "Realme XT", image: realme8 },
//     { name: "Realme X", image: realme9 },
//     { name: "Realme UI", image: realme10 },
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
//     { name: "Dell XPS 13", image: laptop1 },
//     { name: "Dell Inspiron 15", image: laptop2 },
//     { name: "HP Spectre x360", image: laptop3 },
//     { name: "HP Pavilion 14", image: laptop4 },
//     { name: "Lenovo ThinkPad X1 Carbon", image: laptop5 },
//     { name: "Lenovo IdeaPad 5", image: laptop6 },
//     { name: "Asus ZenBook 14", image: laptop7 },
//     { name: "Asus ROG Zephyrus G14", image: laptop8 },
//     { name: "Acer Swift 3", image: laptop9 },
//     { name: "Acer Predator Helios 300", image: laptop10 },
//     { name: "Google Pixel 5", image: google1 },
//     { name: "Google Pixel  7", image: google2 },
//     { name: "Google Pixel 9 Pro", image: google3 },
//     { name: "Google Pixel 6A", image: google4 },
//     { name: "Google Pixel 9 Pro", image: google5 },
//     { name: "Google Pixel 3A", image: google6 },
//     { name: "Google Pixel 9 Pro XL", image: google7 },
//     { name: "Google Pixel 3", image: google8 },
//     { name: "Google Pixel 9", image: google9 },
//     { name: "Google Pixel 3/XL", image: google10 },
//     { name: "Google Pixel 8A", image: google11 },
//     { name: "Google Pixel 2 XL", image: google12 },
//     { name: "Google Pixel 8 Pro", image: google13 },
//     { name: "Tecno spark Go 2021", image: tecno1 },
//     { name: "Tecno spark Go 2020", image: tecno2 },
//     { name: "Tecno spark GO", image: tecno3 },
//     { name: "Tecno 8T", image: tecno4 },
//     { name: "Tecno 8C", image: tecno5 },
//     { name: "Motorola edge 60 Pro", image: motorola1 },
//     { name: "Motorola edge 60 Fusion", image: motorola2 },
//     { name: "Motorola Edge 60 stylus", image: motorola3 },
//     { name: "Motorola Edge 60", image: motorola4 },
//     { name: "Motorola Razer 50 Ultra", image: motorola5 },
//     { name: "Motorola Razer 50", image: motorola6 },
//     { name: "Motorola Razer 40 Ultra 5G", image: motorola7 },
//     { name: "Motorola Razer 40 5G", image: motorola8 },
//     { name: "Motorola Moto G04s", image: motorola9 },
//     { name: "Motorola Moto G04", image: motorola10 },
//     { name: "OnePlus 10 Pro 5G", image: onePlus1 },
//     { name: "OnePlus Nord CE 3 5G", image: onePlus2 },
//     { name: "OnePlus 11R 5G", image: onePlus3 },
//     { name: "OnePlus Node 2", image: onePlus4 },
//     { name: "OnePlus Node ", image: onePlus5 },
//     { name: "OnePlus Nord CE2 lite", image: onePlus6 },
//     { name: "OnePlus 9R 5G", image: onePlus7 },
//     { name: "OnePlus 9 Pro", image: onePlus8 },
//     { name: "OnePlus 9", image: onePlus9 },
//     { name: "OnePlus 8t 5G", image: onePlus10 },
//     { name: "Redmi A5", image: mi1 },
//     { name: "Redmi A5 Plus", image: mi2 },
//     { name: "Redmi Note 14 Pro Plus", image: mi3 },
//     { name: "Redmi Note 14 Pro 5G", image: mi4 },
//     { name: "Redmi 14 5G", image: mi5 },
//     { name: "Redmi 13 5G", image: mi1 }, // Use mi1 as placeholder
//     { name: "Redmi A3", image: mi7 },
//     { name: "Redmi A2", image: mi1 }, // Use mi1 as placeholder
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
//     { id: 1, name: "Samsung S8", image: samsung1 },
//     { id: 2, name: "Samsung Galaxy M52 5G", image: samsung2 },
//     { id: 3, name: "Samsung Galaxy A22 5G", image: samsung3 },
//     { id: 4, name: "Samsung Galaxy A31", image: samsung4 },
//     { id: 5, name: "Samsung Galaxy M20", image: samsung5 },
//     { id: 6, name: "Samsung Galaxy S20 Plus", image: samsung6 },
//     { id: 7, name: "Samsung F12", image: samsung7 },
//     { id: 8, name: "Samsung S10e", image: samsung8 },
//     { id: 9, name: "Samsung Galaxy Z Fold3 5G", image: samsung9 },
//     { id: 10, name: "Samsung Galaxy S10 Plus", image: samsung10 },
//     { name: "Honor 20", image: honor1 },
//     { name: "Honor 10 lite", image: honor2 },
//     { name: "Honor 10 9S", image: honor3 },
//     { name: "Honor 9A", image: honor4 },
//     { name: "Honor 9lite", image: honor5 },
//     { name: "iQOO 7 Legend 5G", image: iqoo1 },
//     { name: "iQOO Z9 S 5G", image: iqoo2 },

//     { name: "iQOO Z9 lite 5G", image: iqoo4 },
//     { name: "iQOO Z9X 5G", image: iqoo5 },
//     { name: "Poco M4 Pro ", image: poco1 },
//     { name: "Poco M3 Pro 5G", image: poco2 },
//     { name: "Poco M3 Pro", image: poco3 },
//     { name: "Poco M2 Pro", image: poco4 },
//     { id: 1, name: "Vivo Y21G/Y12S", image: vivo1 },
//     { id: 2, name: "Vivo U20", image: vivo2 },
//     { id: 3, name: "Vivo U10", image: vivo3 },
//     { id: 4, name: "Vivo Z1 Pro", image: vivo4 },
//     { id: 5, name: "Vivo Y75", image: vivo5 },

//     { name: "Oppo Reno 4 Pro", image: oppo1 },
//     { name: "Oppo K3", image: oppo2 },
//     { name: "Oppo K1", image: oppo3 },
//     { name: "Oppo Reno 7 Pro 5G", image: oppo4 },
//     { name: "Oppo Reno 7", image: oppo5 },
//     { name: "Oppo Reno 6", image: oppo6 },
//     { name: "Oppo Reno3 Pro", image: oppo7 },
//     { name: "Oppo Reno5 pro", image: oppo8 },
//   ];

//   // Filter mobiles by search query
//   const filteredMobiles =
//     query.trim() === ""
//       ? []
//       : mobiles.filter((mobile) =>
//           mobile.name.toLowerCase().includes(query.toLowerCase())
//         );

//   useEffect(() => {
//     if (!query.trim()) {
//       setResults([]);
//       return;
//     }
//   }, [query]);

//   const services = [
//     {
//       img: "https://ongofix.com/upload/sliders/644126phone-img.png",
//       gadget: "Mobile Repair",
//     },
//     {
//       img: "https://th.bing.com/th/id/OIP.fQaT_GrXWDUfdK_Npy65NwHaHa?w=169&h=180&c=7&r=0&o=7&dpr=1.6&pid=1.7&rm=3",
//       gadget: "Tablet",
//     },
//     {
//       img: "https://ongofix.com/upload/sliders/644126macbook.webp",
//       gadget: "Laptop & Desktop",
//     },
//     {
//       img: "https://m.media-amazon.com/images/I/41oK-1w0oLL._AC_UY327_FMwebp_QL65_.jpg",
//       gadget: "CCTV",
//     },

//     {
//       img:"https://creativestudio24.in/wp-content/uploads/2024/04/AMC-responsive-1.jpg",
//       gadget:"A M C",
//     }
//   ];

//   const filteredServices = services.filter((service) =>
//     service.gadget.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleServiceClick = (service) => {
//     if (service.gadget === "Laptop & Desktop") {
//       navigate("/macbook-repair");
//     } else if (service.gadget === "CCTV") {
//       navigate("/cctv-repair");
//     } else if (service.gadget === "Tablet") {
//       navigate("/tablet-repair");
//     } else if (service.gadget === "Mobile Repair") {
//       const brandSection = document.getElementById("brand-section");
//       if (brandSection) {
//         brandSection.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     }
//   };

  

//   return (
//     <div className="container-fluid g-4 my-5 doorstep-container">
//       <div className="container">
//         {/* Header */}
//         <div className="header text-center">
//           <h1>DOORSTEP PHONE REPAIRS</h1>
//           <p>The fastest doorstep mobile repair services</p>
//         </div>

//         {/* Search */}
//         <div className="search-section text-center mb-5">
//           <div className="search-container">
//             <div className="position-relative">
//               <input
//                 type="text"
//                 className="search-input form-control ps-5"
//                 placeholder="Search mobile..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 style={{
//                   padding: "10px",
//                   width: "300px",
//                   marginBottom: "20px",
//                 }}
//               />
//               <i
//                 className="fa-solid fa-magnifying-glass position-absolute"
//                 style={{
//                   left: "20px",
//                   top: "39%",
//                   transform: "translateY(-50%)",
//                   color: "#888",
//                 }}
//               ></i>
//             </div>
//             <p className="model-link">How to find my model number</p>
//           </div>
//         </div>

        
//         <div className="row g-4 justify-content-center" >
//           {query.length == 0 &&
//             services.length > 0 &&
//             services.map((service, index) => (
//               <div
//                 key={index}
//                 className="col-6 col-sm-6 col-md-4 col-lg-2 d-flex"
//               >
//                 <div
//                   className="service-card w-100"
//                   onClick={() => handleServiceClick(service)}
//                   style={{ cursor: "pointer" }}
//                 >
//                   <img
//                     src={service.img}
//                     alt={service.gadget}
//                     className="img-fluid"
//                   />
//                   <h6>{service.gadget}</h6>
//                 </div>
//               </div>
//             ))}
//         </div>

       
//         <div   style={{
//             padding: "20px",
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
//             gap: "20px",
//             justifyItems: "center",
//           }}
//         >
//           {filteredMobiles.length > 0 &&
//             filteredMobiles.map((mobile, index) => (
//               <div
//                 key={index}
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   textAlign: "center",
//                   cursor: "pointer",
//                   padding: "15px",
//                   borderRadius: "8px",
//                   transition: "transform 0.2s ease, box-shadow 0.2s ease",
//                   border: "1px solid #e0e0e0",
//                   backgroundColor: "#fff",
//                   width: "100%",
//                   maxWidth: "150px",
//                 }}
//                 onClick={() => {
//                   navigate(`/brand-issues/${encodeURIComponent(mobile.name)}`, {
//                     state: { image: mobile.image },
//                   });
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.transform = "translateY(-5px)";
//                   e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.transform = "translateY(0)";
//                   e.target.style.boxShadow = "none";
//                 }}
//               >
//                 <img
//                   src={mobile.image}
//                   alt={mobile.name}
//                   style={{
//                     width: "80px",
//                     height: "80px",
//                     objectFit: "contain",
//                     marginBottom: "10px",
//                   }}
//                 />
//                 <p
//                   style={{
//                     margin: "0",
//                     fontSize: "14px",
//                     fontWeight: "500",
//                     color: "#333",
//                     lineHeight: "1.3",
//                   }}
//                 >
//                   {mobile.name}
//                 </p>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Doorstep;


///*****New Code Start Here-------------------- */



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import "../components/Doorstep.css";
// // images
// import mi1 from "../assets/mi/mi-1.png";
// import mi2 from "../assets/mi/mi-2.png";
// import mi3 from "../assets/mi/mi-3.png";
// import mi4 from "../assets/mi/mi-4.png";
// import mi5 from "../assets/mi/mi-5.png";
// import mi7 from "../assets/mi/mi-7.png";
// import mi9 from "../assets/mi/mi-9.png";
// import mi10 from "../assets/mi/mi-10.png";
// import mi11 from "../assets/mi/mi-11.png";
// import mi12 from "../assets/mi/mi-12.png";
// import mi13 from "../assets/mi/mi-13.png";
// import mi14 from "../assets/mi/mi-14.png";
// import mi15 from "../assets/mi/mi-15.png";
// import mi16 from "../assets/mi/mi-16.png";
// import mi17 from "../assets/mi/mi-17.png";
// import mi18 from "../assets/mi/mi-18.png";
// import mi19 from "../assets/mi/mi-19.png";
// import mi20 from "../assets/mi/mi-20.png";
// import mi21 from "../assets/mi/mi-21.png";
// import mi22 from "../assets/mi/mi-22.png";
// import mi23 from "../assets/mi/mi-23.png";
// import mi24 from "../assets/mi/mi-24.png";
// import mi25 from "../assets/mi/mi-25.png";
// import mi26 from "../assets/mi/mi-26.png";
// import mi27 from "../assets/mi/mi-27.png";
// import mi28 from "../assets/mi/mi-28.png";
// import mi29 from "../assets/mi/mi-29.png";
// import mi30 from "../assets/mi/mi-30.png";
// import mi31 from "../assets/mi/mi-31.png";
// import mi32 from "../assets/mi/mi-32.png";
// import mi33 from "../assets/mi/mi-33.png";
// import mi34 from "../assets/mi/mi-34.png";
// import mi35 from "../assets/mi/mi-35.png";
// import mi36 from "../assets/mi/mi-36.png";
// import mi37 from "../assets/mi/mi-37.png";
// import mi38 from "../assets/mi/mi-38.png";
// import mi39 from "../assets/mi/mi-39.png";
// import mi40 from "../assets/mi/mi-40.png";
// import mi41 from "../assets/mi/mi-41.png";
// import mi42 from "../assets/mi/mi-42.png";
// import mi43 from "../assets/mi/mi-43.png";
// import mi44 from "../assets/mi/mi-44.png";
// import mi45 from "../assets/mi/mi-45.png";
// import mi46 from "../assets/mi/mi-46.png";
// import mi47 from "../assets/mi/mi-47.png";
// import mi48 from "../assets/mi/mi-48.png";

// import samsung1 from "../assets/samsung/samsung (1).png";
// import samsung2 from "../assets/samsung/samsung (2).png";
// import samsung3 from "../assets/samsung/samsung (3).png";
// import samsung4 from "../assets/samsung/samsung (4).png";
// import samsung5 from "../assets/samsung/samsung (5).png";
// import samsung6 from "../assets/samsung/samsung (6).png";
// import samsung7 from "../assets/samsung/samsung (7).png";
// import samsung8 from "../assets/samsung/samsung (8).png";
// import samsung9 from "../assets/samsung/samsung (9).png";
// import samsung10 from "../assets/samsung/samsung (10).png";

// import honor1 from "../assets/honor/honor (1).png";
// import honor2 from "../assets/honor/honor (2).png";
// import honor3 from "../assets/honor/honor (3).png";
// import honor4 from "../assets/honor/honor (4).png";
// import honor5 from "../assets/honor/honor (5).png";

// import iqoo1 from "../assets/iqoo/iqoo-1.png";
// import iqoo2 from "../assets/iqoo/iqoo-2.png";
// import iqoo4 from "../assets/iqoo/iqoo-4.png";
// import iqoo5 from "../assets/iqoo/iqoo-5.png";

// import poco1 from "../assets/poco/poco (1).png";
// import poco2 from "../assets/poco/poco (2).png";
// import poco3 from "../assets/poco/poco (3).png";
// import poco4 from "../assets/poco/poco (4).png";

// import vivo1 from "../assets/vivo/vivo (1).png";
// import vivo2 from "../assets/vivo/vivo (2).png";
// import vivo3 from "../assets/vivo/vivo (3).png";
// import vivo4 from "../assets/vivo/vivo (4).png";
// import vivo5 from "../assets/vivo/vivo (5).png";

// import oppo1 from "../assets/oppo/oppo (1).png";
// import oppo2 from "../assets/oppo/oppo (2).png";
// import oppo3 from "../assets/oppo/oppo (3).png";
// import oppo4 from "../assets/oppo/oppo (4).png";
// import oppo5 from "../assets/oppo/oppo (5).png";
// import oppo6 from "../assets/oppo/oppo (6).png";
// import oppo7 from "../assets/oppo/oppo (7).png";
// import oppo8 from "../assets/oppo/oppo (8).png";

// import onePlus1 from "../assets/onePlus/onePlus (1).png";
// import onePlus2 from "../assets/onePlus/onePlus (2).png";
// import onePlus3 from "../assets/onePlus/onePlus (3).png";
// import onePlus4 from "../assets/onePlus/onePlus (4).png";
// import onePlus5 from "../assets/onePlus/onePlus (5).png";
// import onePlus6 from "../assets/onePlus/onePlus (6).png";
// import onePlus7 from "../assets/onePlus/onePlus (7).png";
// import onePlus8 from "../assets/onePlus/onePlus (8).png";
// import onePlus9 from "../assets/onePlus/onePlus (9).png";
// import onePlus10 from "../assets/onePlus/onePlus (10).png";

// import motorola1 from "../assets/motorola/motorola (1).png";
// import motorola2 from "../assets/motorola/motorola (2).png";
// import motorola3 from "../assets/motorola/motorola (3).png";
// import motorola4 from "../assets/motorola/motorola (4).png";
// import motorola5 from "../assets/motorola/motorola (5).png";
// import motorola6 from "../assets/motorola/motorola (6).png";
// import motorola7 from "../assets/motorola/motorola (7).png";
// import motorola8 from "../assets/motorola/motorola (8).png";
// import motorola9 from "../assets/motorola/motorola (9).png";
// import motorola10 from "../assets/motorola/motorola (10).png";

// import tecno1 from "../assets/techno/techno (1).png";
// import tecno2 from "../assets/techno/techno (2).png";
// import tecno3 from "../assets/techno/techno (3).png";
// import tecno4 from "../assets/techno/techno (4).png";
// import tecno5 from "../assets/techno/techno (5).png";
// import google1 from "../assets/google/google-1.png";
// import google2 from "../assets/google/google-2.png";
// import google3 from "../assets/google/google-3.png";
// import google4 from "../assets/google/google-4.png";
// import google5 from "../assets/google/google-5.png";
// import google6 from "../assets/google/google-6.png";
// import google7 from "../assets/google/google-7.png";
// import google8 from "../assets/google/google-8.png";
// import google9 from "../assets/google/google-9.png";
// import google10 from "../assets/google/google-10.png";
// import google11 from "../assets/google/google-11.png";
// import google12 from "../assets/google/google-12.png";
// import google13 from "../assets/google/google-13.png";
// import laptop1 from "../assets/laptop/laptop-1.png";
// import laptop2 from "../assets/laptop/laptop-2.png";
// import laptop3 from "../assets/laptop/laptop-3.png";
// import laptop4 from "../assets/laptop/laptop-4.png";
// import laptop5 from "../assets/laptop/laptop-5.png";
// import laptop6 from "../assets/laptop/laptop-6.png";
// import laptop7 from "../assets/laptop/laptop-7.png";
// import laptop8 from "../assets/laptop/laptop-8.png";
// import laptop9 from "../assets/laptop/laptop-9.png";
// import laptop10 from "../assets/laptop/laptop-10.png";
// import tablet1 from "../assets/tablet/tablet-1.png";
// import tablet2 from "../assets/tablet/tablet-2.png";
// import tablet3 from "../assets/tablet/tablet-3.png";
// import tablet4 from "../assets/tablet/tablet-4.png";
// import tablet5 from "../assets/tablet/tablet-5.png";
// import tablet6 from "../assets/tablet/tablet-6.png";
// import tablet7 from "../assets/tablet/tablet-7.png";
// import tablet8 from "../assets/tablet/tablet-8.png";
// import tablet9 from "../assets/tablet/tablet-9.png";
// import tablet10 from "../assets/tablet/tablet-10.png";
// import cctv1 from "../assets/cctv/cctv-1.png";
// import cctv2 from "../assets/cctv/cctv-2.png";
// import cctv3 from "../assets/cctv/cctv-3.png";
// import cctv4 from "../assets/cctv/cctv-4.png";
// import cctv5 from "../assets/cctv/cctv-5.png";
// import cctv6 from "../assets/cctv/cctv-6.png";
// import cctv7 from "../assets/cctv/cctv-7.png";
// import cctv8 from "../assets/cctv/cctv-8.png";
// import realme1 from "../assets/realme/realme (1).png";
// import realme2 from "../assets/realme/realme (2).png";
// import realme3 from "../assets/realme/realme (3).png";
// import realme4 from "../assets/realme/realme (4).png";
// import realme5 from "../assets/realme/realme (5).png";
// import realme6 from "../assets/realme/realme (6).png";
// import realme7 from "../assets/realme/realme (7).png";
// import realme8 from "../assets/realme/realme (8).png";
// import realme9 from "../assets/realme/realme (9).png";
// import realme10 from "../assets/realme/realme (10).png";

// const Doorstep = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
//   const [query, setQuery] = useState(""); // What user types
//   const [results, setResults] = useState([]); // Search results
//   const [loading, setLoading] = useState(false); // Loader
//   const location = useLocation();
//   const showSection = location.state?.showSection || false;


//   const mobiles = [
//     { name: "Realme C21", image: realme1 },
//     { name: "Realme 12+ 5G", image: realme2 },
//     { name: "Realme 12 5G", image: realme3 },
//     { name: "Realme 9i 5G", image: realme4 },
//     { name: "Realme X7 Pro", image: realme5 },
//     { name: "Realme X32", image: realme6 },
//     { name: "Realme GT Neo 4", image: realme7 },
//     { name: "Realme XT", image: realme8 },
//     { name: "Realme X", image: realme9 },
//     { name: "Realme UI", image: realme10 },
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
//     { name: "Dell XPS 13", image: laptop1 },
//     { name: "Dell Inspiron 15", image: laptop2 },
//     { name: "HP Spectre x360", image: laptop3 },
//     { name: "HP Pavilion 14", image: laptop4 },
//     { name: "Lenovo ThinkPad X1 Carbon", image: laptop5 },
//     { name: "Lenovo IdeaPad 5", image: laptop6 },
//     { name: "Asus ZenBook 14", image: laptop7 },
//     { name: "Asus ROG Zephyrus G14", image: laptop8 },
//     { name: "Acer Swift 3", image: laptop9 },
//     { name: "Acer Predator Helios 300", image: laptop10 },
//     { name: "Google Pixel 5", image: google1 },
//     { name: "Google Pixel  7", image: google2 },
//     { name: "Google Pixel 9 Pro", image: google3 },
//     { name: "Google Pixel 6A", image: google4 },
//     { name: "Google Pixel 9 Pro", image: google5 },
//     { name: "Google Pixel 3A", image: google6 },
//     { name: "Google Pixel 9 Pro XL", image: google7 },
//     { name: "Google Pixel 3", image: google8 },
//     { name: "Google Pixel 9", image: google9 },
//     { name: "Google Pixel 3/XL", image: google10 },
//     { name: "Google Pixel 8A", image: google11 },
//     { name: "Google Pixel 2 XL", image: google12 },
//     { name: "Google Pixel 8 Pro", image: google13 },
//     { name: "Tecno spark Go 2021", image: tecno1 },
//     { name: "Tecno spark Go 2020", image: tecno2 },
//     { name: "Tecno spark GO", image: tecno3 },
//     { name: "Tecno 8T", image: tecno4 },
//     { name: "Tecno 8C", image: tecno5 },
//     { name: "Motorola edge 60 Pro", image: motorola1 },
//     { name: "Motorola edge 60 Fusion", image: motorola2 },
//     { name: "Motorola Edge 60 stylus", image: motorola3 },
//     { name: "Motorola Edge 60", image: motorola4 },
//     { name: "Motorola Razer 50 Ultra", image: motorola5 },
//     { name: "Motorola Razer 50", image: motorola6 },
//     { name: "Motorola Razer 40 Ultra 5G", image: motorola7 },
//     { name: "Motorola Razer 40 5G", image: motorola8 },
//     { name: "Motorola Moto G04s", image: motorola9 },
//     { name: "Motorola Moto G04", image: motorola10 },
//     { name: "OnePlus 10 Pro 5G", image: onePlus1 },
//     { name: "OnePlus Nord CE 3 5G", image: onePlus2 },
//     { name: "OnePlus 11R 5G", image: onePlus3 },
//     { name: "OnePlus Node 2", image: onePlus4 },
//     { name: "OnePlus Node ", image: onePlus5 },
//     { name: "OnePlus Nord CE2 lite", image: onePlus6 },
//     { name: "OnePlus 9R 5G", image: onePlus7 },
//     { name: "OnePlus 9 Pro", image: onePlus8 },
//     { name: "OnePlus 9", image: onePlus9 },
//     { name: "OnePlus 8t 5G", image: onePlus10 },
//     { name: "Redmi A5", image: mi1 },
//     { name: "Redmi A5 Plus", image: mi2 },
//     { name: "Redmi Note 14 Pro Plus", image: mi3 },
//     { name: "Redmi Note 14 Pro 5G", image: mi4 },
//     { name: "Redmi 14 5G", image: mi5 },
//     { name: "Redmi 13 5G", image: mi1 }, // Use mi1 as placeholder
//     { name: "Redmi A3", image: mi7 },
//     { name: "Redmi A2", image: mi1 }, // Use mi1 as placeholder
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
//     { id: 1, name: "Samsung S8", image: samsung1 },
//     { id: 2, name: "Samsung Galaxy M52 5G", image: samsung2 },
//     { id: 3, name: "Samsung Galaxy A22 5G", image: samsung3 },
//     { id: 4, name: "Samsung Galaxy A31", image: samsung4 },
//     { id: 5, name: "Samsung Galaxy M20", image: samsung5 },
//     { id: 6, name: "Samsung Galaxy S20 Plus", image: samsung6 },
//     { id: 7, name: "Samsung F12", image: samsung7 },
//     { id: 8, name: "Samsung S10e", image: samsung8 },
//     { id: 9, name: "Samsung Galaxy Z Fold3 5G", image: samsung9 },
//     { id: 10, name: "Samsung Galaxy S10 Plus", image: samsung10 },
//     { name: "Honor 20", image: honor1 },
//     { name: "Honor 10 lite", image: honor2 },
//     { name: "Honor 10 9S", image: honor3 },
//     { name: "Honor 9A", image: honor4 },
//     { name: "Honor 9lite", image: honor5 },
//     { name: "iQOO 7 Legend 5G", image: iqoo1 },
//     { name: "iQOO Z9 S 5G", image: iqoo2 },

//     { name: "iQOO Z9 lite 5G", image: iqoo4 },
//     { name: "iQOO Z9X 5G", image: iqoo5 },
//     { name: "Poco M4 Pro ", image: poco1 },
//     { name: "Poco M3 Pro 5G", image: poco2 },
//     { name: "Poco M3 Pro", image: poco3 },
//     { name: "Poco M2 Pro", image: poco4 },
//     { id: 1, name: "Vivo Y21G/Y12S", image: vivo1 },
//     { id: 2, name: "Vivo U20", image: vivo2 },
//     { id: 3, name: "Vivo U10", image: vivo3 },
//     { id: 4, name: "Vivo Z1 Pro", image: vivo4 },
//     { id: 5, name: "Vivo Y75", image: vivo5 },

//     { name: "Oppo Reno 4 Pro", image: oppo1 },
//     { name: "Oppo K3", image: oppo2 },
//     { name: "Oppo K1", image: oppo3 },
//     { name: "Oppo Reno 7 Pro 5G", image: oppo4 },
//     { name: "Oppo Reno 7", image: oppo5 },
//     { name: "Oppo Reno 6", image: oppo6 },
//     { name: "Oppo Reno3 Pro", image: oppo7 },
//     { name: "Oppo Reno5 pro", image: oppo8 },
//   ];

//   // Filter mobiles by search query
//   const filteredMobiles =
//     query.trim() === ""
//       ? []
//       : mobiles.filter((mobile) =>
//           mobile.name.toLowerCase().includes(query.toLowerCase())
//         );

//   useEffect(() => {
//     if (!query.trim()) {
//       setResults([]);
//       return;
//     }
//   }, [query]);

//   const services = [
//     {
//       img: "https://ongofix.com/upload/sliders/644126phone-img.png",
//       gadget: "Mobile Repair",
//     },
//     {
//       img: "https://th.bing.com/th/id/OIP.fQaT_GrXWDUfdK_Npy65NwHaHa?w=169&h=180&c=7&r=0&o=7&dpr=1.6&pid=1.7&rm=3",
//       gadget: "Tablet",
//     },
//     {
//       img: "https://ongofix.com/upload/sliders/644126macbook.webp",
//       gadget: "Computers",
//     },
//     {
//       img: "https://m.media-amazon.com/images/I/41oK-1w0oLL._AC_UY327_FMwebp_QL65_.jpg",
//       gadget: "CCTV",
//     },

//     {
//       img:"https://creativestudio24.in/wp-content/uploads/2024/04/AMC-responsive-1.jpg",
//     gadget:"AMC",
//     }
//   ];

//   const filteredServices = services.filter((service) =>
//     service.gadget.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleServiceClick = (service) => {
//   if (service.gadget === "Computers") {
//     navigate("/macbook-repair");
//   } else if (service.gadget === "CCTV") {
//     navigate("/cctv-repair");
//   } else if (service.gadget === "Tablet") {
//     navigate("/tablet-repair");
//   } else if (service.gadget === "Mobile Repair") {
//     const brandSection = document.getElementById("brand-section");
//     if (brandSection) {
//       brandSection.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   } else if (service.gadget === "AMC") {
//     navigate("/amc"); // Navigate to AMC page
//   }
// };

  

//   return (
//     <div className="container-fluid g-4 my-5 doorstep-container">
//       <div className="container">
//         {/* Header */}
//         <div className="header text-center">
//           <h1>DOORSTEP PHONE REPAIRS</h1>
//           <p>The fastest doorstep mobile repair services</p>
//         </div>

//         {/* Search */}
//         <div className="search-section text-center mb-2">
//           <div className="search-container">
//             <div className="position-relative">
//               <input
//                 type="text"
//                 className="search-input form-control ps-5"
//                 placeholder="Search mobile..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 style={{
//                   padding: "10px",
//                   width: "300px",
//                   marginBottom: "20px",
//                 }}
//               />
//               <i
//                 className="fa-solid fa-magnifying-glass position-absolute"
//                 style={{
//                   left: "20px",
//                   top: "39%",
//                   transform: "translateY(-50%)",
//                   color: "#888",
//                 }}
//               ></i>
//             </div>
//             <p className="model-link">How to find my model number</p>
//           </div>
//         </div>

        
//         <div className="row g-4 justify-content-center" >
//           {query.length == 0 &&
//             services.length > 0 &&
//             services.map((service, index) => (
//               <div
//                 key={index}
//                 className="col-6 col-sm-6 col-md-4 col-lg-2 d-flex"
//               >
//                 <div
//                   className="service-card w-100"
//                   onClick={() => handleServiceClick(service)}
//                   style={{ cursor: "pointer" }}
//                 >
//                   <img
//                     src={service.img}
//                     alt={service.gadget}
//                     className="img-fluid"
//                   />
//                   <h6>{service.gadget}</h6>
//                 </div>
//               </div>
//             ))}
//         </div>

       
//         <div   style={{
//             padding: "20px",
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
//             gap: "20px",
//             justifyItems: "center",
//           }}
//         >
//           {filteredMobiles.length > 0 &&
//             filteredMobiles.map((mobile, index) => (
//               <div
//                 key={index}
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   textAlign: "center",
//                   cursor: "pointer",
//                   padding: "15px",
//                   borderRadius: "8px",
//                   transition: "transform 0.2s ease, box-shadow 0.2s ease",
//                   border: "1px solid #e0e0e0",
//                   backgroundColor: "#fff",
//                   width: "100%",
//                   maxWidth: "150px",
//                 }}
//                 onClick={() => {
//                   navigate(`/brand-issues/${encodeURIComponent(mobile.name)}`, {
//                     state: { image: mobile.image },
//                   });
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.transform = "translateY(-5px)";
//                   e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.transform = "translateY(0)";
//                   e.target.style.boxShadow = "none";
//                 }}
//               >
//                 <img
//                   src={mobile.image}
//                   alt={mobile.name}
//                   style={{
//                     width: "80px",
//                     height: "80px",
//                     objectFit: "contain",
//                     marginBottom: "10px",
//                   }}
//                 />
//                 <p
//                   style={{
//                     margin: "0",
//                     fontSize: "14px",
//                     fontWeight: "500",
//                     color: "#333",
//                     lineHeight: "1.3",
//                   }}
//                 >
//                   {mobile.name}
//                 </p>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Doorstep;


/***************************** Final Code Start Here *********************************/


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../components/Doorstep.css";
// images
import mi1 from "../assets/mi/mi-1.png";
import mi2 from "../assets/mi/mi-2.png";
import mi3 from "../assets/mi/mi-3.png";
import mi4 from "../assets/mi/mi-4.png";
import mi5 from "../assets/mi/mi-5.png";
import mi7 from "../assets/mi/mi-7.png";
import mi9 from "../assets/mi/mi-9.png";
import mi10 from "../assets/mi/mi-10.png";
import mi11 from "../assets/mi/mi-11.png";
import mi12 from "../assets/mi/mi-12.png";
import mi13 from "../assets/mi/mi-13.png";
import mi14 from "../assets/mi/mi-14.png";
import mi15 from "../assets/mi/mi-15.png";
import mi16 from "../assets/mi/mi-16.png";
import mi17 from "../assets/mi/mi-17.png";
import mi18 from "../assets/mi/mi-18.png";
import mi19 from "../assets/mi/mi-19.png";
import mi20 from "../assets/mi/mi-20.png";
import mi21 from "../assets/mi/mi-21.png";
import mi22 from "../assets/mi/mi-22.png";
import mi23 from "../assets/mi/mi-23.png";
import mi24 from "../assets/mi/mi-24.png";
import mi25 from "../assets/mi/mi-25.png";
import mi26 from "../assets/mi/mi-26.png";
import mi27 from "../assets/mi/mi-27.png";
import mi28 from "../assets/mi/mi-28.png";
import mi29 from "../assets/mi/mi-29.png";
import mi30 from "../assets/mi/mi-30.png";
import mi31 from "../assets/mi/mi-31.png";
import mi32 from "../assets/mi/mi-32.png";
import mi33 from "../assets/mi/mi-33.png";
import mi34 from "../assets/mi/mi-34.png";
import mi35 from "../assets/mi/mi-35.png";
import mi36 from "../assets/mi/mi-36.png";
import mi37 from "../assets/mi/mi-37.png";
import mi38 from "../assets/mi/mi-38.png";
import mi39 from "../assets/mi/mi-39.png";
import mi40 from "../assets/mi/mi-40.png";
import mi41 from "../assets/mi/mi-41.png";
import mi42 from "../assets/mi/mi-42.png";
import mi43 from "../assets/mi/mi-43.png";
import mi44 from "../assets/mi/mi-44.png";
import mi45 from "../assets/mi/mi-45.png";
import mi46 from "../assets/mi/mi-46.png";
import mi47 from "../assets/mi/mi-47.png";
import mi48 from "../assets/mi/mi-48.png";

import samsung1 from "../assets/samsung/samsung (1).png";
import samsung2 from "../assets/samsung/samsung (2).png";
import samsung3 from "../assets/samsung/samsung (3).png";
import samsung4 from "../assets/samsung/samsung (4).png";
import samsung5 from "../assets/samsung/samsung (5).png";
import samsung6 from "../assets/samsung/samsung (6).png";
import samsung7 from "../assets/samsung/samsung (7).png";
import samsung8 from "../assets/samsung/samsung (8).png";
import samsung9 from "../assets/samsung/samsung (9).png";
import samsung10 from "../assets/samsung/samsung (10).png";

import honor1 from "../assets/honor/honor (1).png";
import honor2 from "../assets/honor/honor (2).png";
import honor3 from "../assets/honor/honor (3).png";
import honor4 from "../assets/honor/honor (4).png";
import honor5 from "../assets/honor/honor (5).png";

import iqoo1 from "../assets/iqoo/iqoo-1.png";
import iqoo2 from "../assets/iqoo/iqoo-2.png";
import iqoo4 from "../assets/iqoo/iqoo-4.png";
import iqoo5 from "../assets/iqoo/iqoo-5.png";

import poco1 from "../assets/poco/poco (1).png";
import poco2 from "../assets/poco/poco (2).png";
import poco3 from "../assets/poco/poco (3).png";
import poco4 from "../assets/poco/poco (4).png";

import vivo1 from "../assets/vivo/vivo (1).png";
import vivo2 from "../assets/vivo/vivo (2).png";
import vivo3 from "../assets/vivo/vivo (3).png";
import vivo4 from "../assets/vivo/vivo (4).png";
import vivo5 from "../assets/vivo/vivo (5).png";

import oppo1 from "../assets/oppo/oppo (1).png";
import oppo2 from "../assets/oppo/oppo (2).png";
import oppo3 from "../assets/oppo/oppo (3).png";
import oppo4 from "../assets/oppo/oppo (4).png";
import oppo5 from "../assets/oppo/oppo (5).png";
import oppo6 from "../assets/oppo/oppo (6).png";
import oppo7 from "../assets/oppo/oppo (7).png";
import oppo8 from "../assets/oppo/oppo (8).png";

import onePlus1 from "../assets/onePlus/onePlus (1).png";
import onePlus2 from "../assets/onePlus/onePlus (2).png";
import onePlus3 from "../assets/onePlus/onePlus (3).png";
import onePlus4 from "../assets/onePlus/onePlus (4).png";
import onePlus5 from "../assets/onePlus/onePlus (5).png";
import onePlus6 from "../assets/onePlus/onePlus (6).png";
import onePlus7 from "../assets/onePlus/onePlus (7).png";
import onePlus8 from "../assets/onePlus/onePlus (8).png";
import onePlus9 from "../assets/onePlus/onePlus (9).png";
import onePlus10 from "../assets/onePlus/onePlus (10).png";

import motorola1 from "../assets/motorola/motorola (1).png";
import motorola2 from "../assets/motorola/motorola (2).png";
import motorola3 from "../assets/motorola/motorola (3).png";
import motorola4 from "../assets/motorola/motorola (4).png";
import motorola5 from "../assets/motorola/motorola (5).png";
import motorola6 from "../assets/motorola/motorola (6).png";
import motorola7 from "../assets/motorola/motorola (7).png";
import motorola8 from "../assets/motorola/motorola (8).png";
import motorola9 from "../assets/motorola/motorola (9).png";
import motorola10 from "../assets/motorola/motorola (10).png";

import tecno1 from "../assets/techno/techno (1).png";
import tecno2 from "../assets/techno/techno (2).png";
import tecno3 from "../assets/techno/techno (3).png";
import tecno4 from "../assets/techno/techno (4).png";
import tecno5 from "../assets/techno/techno (5).png";
import google1 from "../assets/google/google-1.png";
import google2 from "../assets/google/google-2.png";
import google3 from "../assets/google/google-3.png";
import google4 from "../assets/google/google-4.png";
import google5 from "../assets/google/google-5.png";
import google6 from "../assets/google/google-6.png";
import google7 from "../assets/google/google-7.png";
import google8 from "../assets/google/google-8.png";
import google9 from "../assets/google/google-9.png";
import google10 from "../assets/google/google-10.png";
import google11 from "../assets/google/google-11.png";
import google12 from "../assets/google/google-12.png";
import google13 from "../assets/google/google-13.png";
import laptop1 from "../assets/laptop/laptop-1.png";
import laptop2 from "../assets/laptop/laptop-2.png";
import laptop3 from "../assets/laptop/laptop-3.png";
import laptop4 from "../assets/laptop/laptop-4.png";
import laptop5 from "../assets/laptop/laptop-5.png";
import laptop6 from "../assets/laptop/laptop-6.png";
import laptop7 from "../assets/laptop/laptop-7.png";
import laptop8 from "../assets/laptop/laptop-8.png";
import laptop9 from "../assets/laptop/laptop-9.png";
import laptop10 from "../assets/laptop/laptop-10.png";
import tablet1 from "../assets/tablet/tablet-1.png";
import tablet2 from "../assets/tablet/tablet-2.png";
import tablet3 from "../assets/tablet/tablet-3.png";
import tablet4 from "../assets/tablet/tablet-4.png";
import tablet5 from "../assets/tablet/tablet-5.png";
import tablet6 from "../assets/tablet/tablet-6.png";
import tablet7 from "../assets/tablet/tablet-7.png";
import tablet8 from "../assets/tablet/tablet-8.png";
import tablet9 from "../assets/tablet/tablet-9.png";
import tablet10 from "../assets/tablet/tablet-10.png";
import cctv1 from "../assets/cctv/cctv-1.png";
import cctv2 from "../assets/cctv/cctv-2.png";
import cctv3 from "../assets/cctv/cctv-3.png";
import cctv4 from "../assets/cctv/cctv-4.png";
import cctv5 from "../assets/cctv/cctv-5.png";
import cctv6 from "../assets/cctv/cctv-6.png";
import cctv7 from "../assets/cctv/cctv-7.png";
import cctv8 from "../assets/cctv/cctv-8.png";
import realme1 from "../assets/realme/realme (1).png";
import realme2 from "../assets/realme/realme (2).png";
import realme3 from "../assets/realme/realme (3).png";
import realme4 from "../assets/realme/realme (4).png";
import realme5 from "../assets/realme/realme (5).png";
import realme6 from "../assets/realme/realme (6).png";
import realme7 from "../assets/realme/realme (7).png";
import realme8 from "../assets/realme/realme (8).png";
import realme9 from "../assets/realme/realme (9).png";
import realme10 from "../assets/realme/realme (10).png";

const Doorstep = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [query, setQuery] = useState(""); // What user types
  const [results, setResults] = useState([]); // Search results
  const [loading, setLoading] = useState(false); // Loader
  const location = useLocation();
  const showSection = location.state?.showSection || false;


  const mobiles = [
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
    { id: 1, name: "Apple iPad Pro 12.9", image: tablet1 },
    { id: 2, name: "Apple iPad Air", image: tablet2 },
    { id: 3, name: "Samsung Galaxy Tab S9", image: tablet3 },
    { id: 4, name: "Samsung Galaxy Tab A8", image: tablet4 },
    { id: 5, name: "Microsoft Surface Pro 9", image: tablet5 },
    { id: 6, name: "Microsoft Surface Go 3", image: tablet6 },
    { id: 7, name: "Lenovo Tab P12 Pro", image: tablet7 },
    { id: 8, name: "Huawei MatePad Pro", image: tablet8 },
    { id: 9, name: "Amazon Fire HD 10", image: tablet9 },
    { id: 10, name: "Xiaomi Pad 6", image: tablet10 },
    { name: "Dell XPS 13", image: laptop1 },
    { name: "Dell Inspiron 15", image: laptop2 },
    { name: "HP Spectre x360", image: laptop3 },
    { name: "HP Pavilion 14", image: laptop4 },
    { name: "Lenovo ThinkPad X1 Carbon", image: laptop5 },
    { name: "Lenovo IdeaPad 5", image: laptop6 },
    { name: "Asus ZenBook 14", image: laptop7 },
    { name: "Asus ROG Zephyrus G14", image: laptop8 },
    { name: "Acer Swift 3", image: laptop9 },
    { name: "Acer Predator Helios 300", image: laptop10 },
    { name: "Google Pixel 5", image: google1 },
    { name: "Google Pixel  7", image: google2 },
    { name: "Google Pixel 9 Pro", image: google3 },
    { name: "Google Pixel 6A", image: google4 },
    { name: "Google Pixel 9 Pro", image: google5 },
    { name: "Google Pixel 3A", image: google6 },
    { name: "Google Pixel 9 Pro XL", image: google7 },
    { name: "Google Pixel 3", image: google8 },
    { name: "Google Pixel 9", image: google9 },
    { name: "Google Pixel 3/XL", image: google10 },
    { name: "Google Pixel 8A", image: google11 },
    { name: "Google Pixel 2 XL", image: google12 },
    { name: "Google Pixel 8 Pro", image: google13 },
    { name: "Tecno spark Go 2021", image: tecno1 },
    { name: "Tecno spark Go 2020", image: tecno2 },
    { name: "Tecno spark GO", image: tecno3 },
    { name: "Tecno 8T", image: tecno4 },
    { name: "Tecno 8C", image: tecno5 },
    { name: "Motorola edge 60 Pro", image: motorola1 },
    { name: "Motorola edge 60 Fusion", image: motorola2 },
    { name: "Motorola Edge 60 stylus", image: motorola3 },
    { name: "Motorola Edge 60", image: motorola4 },
    { name: "Motorola Razer 50 Ultra", image: motorola5 },
    { name: "Motorola Razer 50", image: motorola6 },
    { name: "Motorola Razer 40 Ultra 5G", image: motorola7 },
    { name: "Motorola Razer 40 5G", image: motorola8 },
    { name: "Motorola Moto G04s", image: motorola9 },
    { name: "Motorola Moto G04", image: motorola10 },
    { name: "OnePlus 10 Pro 5G", image: onePlus1 },
    { name: "OnePlus Nord CE 3 5G", image: onePlus2 },
    { name: "OnePlus 11R 5G", image: onePlus3 },
    { name: "OnePlus Node 2", image: onePlus4 },
    { name: "OnePlus Node ", image: onePlus5 },
    { name: "OnePlus Nord CE2 lite", image: onePlus6 },
    { name: "OnePlus 9R 5G", image: onePlus7 },
    { name: "OnePlus 9 Pro", image: onePlus8 },
    { name: "OnePlus 9", image: onePlus9 },
    { name: "OnePlus 8t 5G", image: onePlus10 },
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
    { id: 1, name: "Samsung S8", image: samsung1 },
    { id: 2, name: "Samsung Galaxy M52 5G", image: samsung2 },
    { id: 3, name: "Samsung Galaxy A22 5G", image: samsung3 },
    { id: 4, name: "Samsung Galaxy A31", image: samsung4 },
    { id: 5, name: "Samsung Galaxy M20", image: samsung5 },
    { id: 6, name: "Samsung Galaxy S20 Plus", image: samsung6 },
    { id: 7, name: "Samsung F12", image: samsung7 },
    { id: 8, name: "Samsung S10e", image: samsung8 },
    { id: 9, name: "Samsung Galaxy Z Fold3 5G", image: samsung9 },
    { id: 10, name: "Samsung Galaxy S10 Plus", image: samsung10 },
    { name: "Honor 20", image: honor1 },
    { name: "Honor 10 lite", image: honor2 },
    { name: "Honor 10 9S", image: honor3 },
    { name: "Honor 9A", image: honor4 },
    { name: "Honor 9lite", image: honor5 },
    { name: "iQOO 7 Legend 5G", image: iqoo1 },
    { name: "iQOO Z9 S 5G", image: iqoo2 },

    { name: "iQOO Z9 lite 5G", image: iqoo4 },
    { name: "iQOO Z9X 5G", image: iqoo5 },
    { name: "Poco M4 Pro ", image: poco1 },
    { name: "Poco M3 Pro 5G", image: poco2 },
    { name: "Poco M3 Pro", image: poco3 },
    { name: "Poco M2 Pro", image: poco4 },
    { id: 1, name: "Vivo Y21G/Y12S", image: vivo1 },
    { id: 2, name: "Vivo U20", image: vivo2 },
    { id: 3, name: "Vivo U10", image: vivo3 },
    { id: 4, name: "Vivo Z1 Pro", image: vivo4 },
    { id: 5, name: "Vivo Y75", image: vivo5 },

    { name: "Oppo Reno 4 Pro", image: oppo1 },
    { name: "Oppo K3", image: oppo2 },
    { name: "Oppo K1", image: oppo3 },
    { name: "Oppo Reno 7 Pro 5G", image: oppo4 },
    { name: "Oppo Reno 7", image: oppo5 },
    { name: "Oppo Reno 6", image: oppo6 },
    { name: "Oppo Reno3 Pro", image: oppo7 },
    { name: "Oppo Reno5 pro", image: oppo8 },
  ];

  // Filter mobiles by search query
  const filteredMobiles =
    query.trim() === ""
      ? []
      : mobiles.filter((mobile) =>
          mobile.name.toLowerCase().includes(query.toLowerCase())
        );

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
  }, [query]);

  const services = [
     {
      img: "https://ongofix.com/upload/sliders/644126phone-img.png",
      gadget: "Mobile Repair",
    },
    {
      img: "https://th.bing.com/th/id/OIP.fQaT_GrXWDUfdK_Npy65NwHaHa?w=169&h=180&c=7&r=0&o=7&dpr=1.6&pid=1.7&rm=3",
      gadget: "Tablet",
    },
    {
      img: "https://ongofix.com/upload/sliders/644126macbook.webp",
      gadget: "Computers",
    },
    {
      img: "https://m.media-amazon.com/images/I/41oK-1w0oLL._AC_UY327_FMwebp_QL65_.jpg",
      gadget: "CCTV",
    },
    {
      img:"https://creativestudio24.in/wp-content/uploads/2024/04/AMC-responsive-1.jpg",
      gadget:"AMC",
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGs37w-ug6MVUxv9YMuWBsmaGA7tZ8cT7exLgYJrl6u7xSZSHsSrYC_vAm0j4ZXe_dflA&usqp=CAU",
      gadget:"Spare Parts",
    }
  ];

  const filteredServices = services.filter((service) =>
    service.gadget.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleServiceClick = (service) => {
  if (service.gadget === "Computers") {
      navigate("/macbook-repair");
    } else if (service.gadget === "CCTV") {
      navigate("/cctv-repair");
    } else if (service.gadget === "Tablet") {
      navigate("/tablet-repair");
    } else if (service.gadget === "Mobile Repair") {
      const brandSection = document.getElementById("brand-section");
      if (brandSection) {
        brandSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (service.gadget === "AMC") {
      navigate("/amc");
    } else if (service.gadget === "Spare Parts") {
      navigate("/spare-parts");
    }
};

  

  return (
    <div className="container-fluid g-4 my-5 doorstep-container">
      <div className="container">
        {/* Header */}
        <div className="header text-center">
          <h1>DOORSTEP PHONE REPAIRS</h1>
          <p>The fastest doorstep mobile repair services</p>
        </div>

        {/* Search */}
        <div className="search-section text-center mb-4">
          <div className="search-container">
            <div className="position-relative">
              <input
                type="text"
                className="search-input form-control ps-5"
                placeholder="Search mobile..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  padding: "10px",
                  width: "300px",
                  marginBottom: "20px",
                }}
              />
              <i
                className="fa-solid fa-magnifying-glass position-absolute"
                style={{
                  left: "20px",
                  top: "39%",
                  transform: "translateY(-50%)",
                  color: "#888",
                }}
              ></i>
            </div>
            <p className="model-link">How to find my model number</p>
          </div>
        </div>

        
        <div className="row g-4 justify-content-center" >
          {query.length == 0 &&
            services.length > 0 &&
            services.map((service, index) => (
              <div
                key={index}
                className="col-6 col-sm-6 col-md-4 col-lg-2 d-flex"
              >
                <div
                  className="service-card w-100"
                  onClick={() => handleServiceClick(service)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={service.img}
                    alt={service.gadget}
                    className="img-fluid"
                  />
                  <h6>{service.gadget}</h6>
                </div>
              </div>
            ))}
        </div>

       
        <div   style={{
            padding: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: "20px",
            justifyItems: "center",
          }}
        >
          {filteredMobiles.length > 0 &&
            filteredMobiles.map((mobile, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "15px",
                  borderRadius: "8px",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  border: "1px solid #e0e0e0",
                  backgroundColor: "#fff",
                  width: "100%",
                  maxWidth: "150px",
                }}
                onClick={() => {
                  navigate(`/brand-issues/${encodeURIComponent(mobile.name)}`, {
                    state: { image: mobile.image },
                  });
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-5px)";
                  e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                <img
                  src={mobile.image}
                  alt={mobile.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                    marginBottom: "10px",
                  }}
                />
                <p
                  style={{
                    margin: "0",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#333",
                    lineHeight: "1.3",
                  }}
                >
                  {mobile.name}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Doorstep;





