import React, { useState } from "react";

// Import laptop images
import laptop1 from "../../assets/laptop/laptop-1.png";
import laptop2 from "../../assets/laptop/laptop-2.png";
import laptop3 from "../../assets/laptop/laptop-3.png";
import laptop4 from "../../assets/laptop/laptop-4.png";
import laptop5 from "../../assets/laptop/laptop-5.png";
import laptop6 from "../../assets/laptop/laptop-6.png";
import laptop7 from "../../assets/laptop/laptop-7.png";
import laptop8 from "../../assets/laptop/laptop-8.png";
import laptop9 from "../../assets/laptop/laptop-9.png";
import laptop10 from "../../assets/laptop/laptop-10.png";

const LaptopRepairPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const laptopModels = [
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
  ];

  const filteredModels = laptopModels.filter((model) =>
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
            Home / Repair / Laptops
          </div>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#212529",
              margin: 0,
            }}
          >
            Laptop Repair & Replacement
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
            placeholder="Search Laptop models..."
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

        {/* Laptop Models Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {filteredModels.map((model, index) => (
            <div
              key={index}
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
            LAPTOP REPAIR & REPLACEMENT
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Your laptop is more than just a device; it's an essential part of
            your daily life. Our expert laptop repair and replacement services
            ensure quick turnarounds, genuine parts, and reliable performance so
            you can get back to work without delays.
          </p>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginTop: "30px",
            }}
          >
            WE CAN FIX YOUR LAPTOP
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LaptopRepairPage;









// import React, { useState } from 'react';

// const LaptopRepairPage = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const laptopModels = [
//     { name: 'Dell XPS 13', year: '(2023)' },
//     { name: 'Dell Inspiron 15', year: '(2022)' },
//     { name: 'HP Spectre x360', year: '(2023)' },
//     { name: 'HP Pavilion 14', year: '(2021)' },
//     { name: 'Lenovo ThinkPad X1 Carbon', year: '(2022)' },
//     { name: 'Lenovo IdeaPad 5', year: '(2020)' },
//     { name: 'Asus ZenBook 14', year: '(2022)' },
//     { name: 'Asus ROG Zephyrus G14', year: '(2023)' },
//     { name: 'Acer Swift 3', year: '(2021)' },
//     { name: 'Acer Predator Helios 300', year: '(2022)' },
//   ];

//   const filteredModels = laptopModels.filter(model => 
//     model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     model.year.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleModelClick = (model) => {
//     alert(`Selected ${model.name} ${model.year} for repair/replacement`);
//   };

//   return (
//     <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
//       {/* Header */}
//       <div style={{ backgroundColor: 'white', borderBottom: '1px solid #dee2e6', padding: '20px 0' }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
//           <div style={{ marginBottom: '10px', color: '#6c757d', fontSize: '14px' }}>
//             Home / Repair / Laptops
//           </div>
//           <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#212529', margin: 0 }}>
//             Laptop Repair & Replacement
//           </h1>
//         </div>
//       </div>

//       {/* Content */}
//       <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
//         {/* Search Box */}
//         <div style={{ textAlign: 'center', marginBottom: '40px' }}>
//           <input
//             type="text"
//             placeholder="Search Laptop models..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             style={{
//               width: '300px',
//               padding: '12px 20px',
//               border: '1px solid #ced4da',
//               borderRadius: '25px',
//               fontSize: '16px',
//               outline: 'none'
//             }}
//           />
//         </div>

//         {/* Laptop Models Grid */}
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//           gap: '20px',
//           marginBottom: '40px'
//         }}>
//           {filteredModels.map((model, index) => (
//             <div
//               key={index}
//               onClick={() => handleModelClick(model)}
//               style={{
//                 backgroundColor: 'white',
//                 border: '1px solid #dee2e6',
//                 borderRadius: '10px',
//                 padding: '20px',
//                 textAlign: 'center',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease',
//                 boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//               }}
//               onMouseOver={(e) => {
//                 e.currentTarget.style.borderColor = '#007bff';
//                 e.currentTarget.style.transform = 'translateY(-2px)';
//               }}
//               onMouseOut={(e) => {
//                 e.currentTarget.style.borderColor = '#dee2e6';
//                 e.currentTarget.style.transform = 'translateY(0)';
//               }}
//             >
//               <div style={{
//                 width: '80px',
//                 height: '50px',
//                 backgroundColor: '#343a40',
//                 borderRadius: '5px',
//                 margin: '0 auto 15px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center'
//               }}>
//                 <div style={{
//                   width: '60px',
//                   height: '35px',
//                   backgroundColor: '#495057',
//                   borderRadius: '3px'
//                 }}></div>
//               </div>
//               <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '10px 0 5px' }}>
//                 {model.name}
//               </h3>
//               <p style={{ fontSize: '14px', color: '#6c757d', margin: 0 }}>
//                 {model.year}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Section */}
//         <div style={{
//           backgroundColor: 'white',
//           border: '1px solid #dee2e6',
//           borderRadius: '10px',
//           padding: '40px',
//           textAlign: 'center'
//         }}>
//           <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
//             LAPTOP REPAIR & REPLACEMENT
//           </h2>
//           <p style={{ color: '#6c757d', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
//             Your laptop is more than just a device; it's an essential part of your daily life. 
//             Our expert laptop repair and replacement services ensure quick turnarounds, genuine parts, 
//             and reliable performance so you can get back to work without delays.
//           </p>
//           <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '30px' }}>
//             WE CAN FIX YOUR LAPTOP
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LaptopRepairPage;
