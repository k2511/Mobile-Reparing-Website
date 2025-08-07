// import React, { useState } from "react";

// const Doorstep = () => {
//   const [searchTerm, setSearchTerm] = useState("");

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
//       gadget: "Laptop",
//     },
//     {
//       img: "https://m.media-amazon.com/images/I/41oK-1w0oLL._AC_UY327_FMwebp_QL65_.jpg",
//       gadget: "CCTV",
//     },
//   ];

//   const filteredServices = services.filter((service) =>
//     service.gadget.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <link
//         href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
//         rel="stylesheet"
//       />
//       <style>{`
//         .header h1 {
//           font-size: 2.3rem;
//           font-weight: 500;
//           color: #1a1a1a;
//           margin-bottom: 10px;
//         }

//         .header p {
//           color: #666;
//           font-size: 1.1rem;
//         }

//         .search-section {
//           display: flex;
//           justify-content: center;
//           align-items: center;
         
//           gap: 10px;
//         }

//         .search-input {
//           width: 325px;
//           padding: 12px 20px 12px 45px;
//           border-radius: 50px;
//           border: 2px solid #ccc;
//           font-size: 16px;
//         }

//         .model-link {
//           color: black;
//           text-decoration: underline;
//           font-weight: 500;
//           margin-bottom: 7px;
//         }

//         .service-card {
//           background: #fff;
//           border-radius: 16px;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.3s ease;
//           border: 2px solid transparent;
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
//           padding: 15px;
//           text-align: center;
//           height: 100%;
//           min-height: 200px;
//           overflow: hidden;
//           word-break: break-word;
//         }

//         .service-card:hover {
//           border-color: #e60000;
//           box-shadow: 0 6px 20px rgba(230, 0, 0, 0.1);
//         }

//         .service-card img {
//           max-height: 120px;
//           object-fit: contain;
//           margin-bottom: 10px;
//         }

//         .service-card h6 {
//           font-size: 1rem;
//           color: #1a1a1a;
//           font-weight: 600;
//         }

//         @media (max-width: 768px) {
//           .header h1 {
//             font-size: 2rem;
//           }
//         }

//         @media (max-width: 480px) {
//           .header h1 {
//             font-size: 1.8rem;
//           }

//           .search-input {
//             width: 100%;
//           }
//         }
//       `}</style>

//       <div
//         className="container-fluid g-4 my-5"
//         style={{ backgroundColor: "#f5f5f5", padding: "20px 0" }}
//       >
//         <div className="container">
//           {/* Header */}
//           <div className="header text-center">
//             <h1>DOORSTEP PHONE REPAIRS</h1>
//             <p>The fastest doorstep mobile repair services</p>
//           </div>

//           {/* Search */}
//           <div className="search-section text-center mb-5">
//             <div className="position-relative">
//               <input
//                 type="text"
//                 className="search-input form-control ps-5"
//                 placeholder="Search your model number"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <i
//                 className="fa-solid fa-magnifying-glass position-absolute"
//                 style={{
//                   left: "20px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   color: "#888",
//                 }}
//               ></i>
//             </div>
//             <p className="model-link">How to find my model number</p>
//           </div>

//           {/* Services */}
//           <div className="row g-4 justify-content-center">
//             {filteredServices.length > 0 ? (
//               filteredServices.map((service, index) => (
//                 <div
//                   key={index}
//                   className="col-6 col-sm-6 col-md-4 col-lg-2 d-flex justify-content-center"
//                 >
//                   <div className="service-card">
//                     <img
//                       src={service.img}
//                       alt={service.gadget}
//                       className="img-fluid"
//                     />
//                     <h6 className="mt-2">{service.gadget}</h6>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="text-center text-muted">No results found.</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Doorstep;





import React, { useState } from "react";

const Doorstep = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
      gadget: "Laptop",
    },
    {
      img: "https://m.media-amazon.com/images/I/41oK-1w0oLL._AC_UY327_FMwebp_QL65_.jpg",
      gadget: "CCTV",
    },
  ];

  const filteredServices = services.filter((service) =>
    service.gadget.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <style>{`
        .header h1 {
          font-size: 2.3rem;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 10px;
        }

        .header p {
          color: #666;
          font-size: 1.1rem;
        }

        .search-section {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .search-container {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .search-input {
          width: 325px;
          padding: 12px 20px 12px 45px;
          border-radius: 50px;
          border: 2px solid #ccc;
          font-size: 16px;
        }

        .model-link {
          color: black;
          text-decoration: underline;
          font-weight: 500;
          margin: 0;
          white-space: nowrap;
          font-size: 14px;
        }

        .service-card {
          background: #fff;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
          padding: 15px;
          text-align: center;
          height: 100%;
          min-height: 200px;
          overflow: hidden;
          word-break: break-word;
        }

        .service-card:hover {
          border-color: #e60000;
          box-shadow: 0 6px 20px rgba(230, 0, 0, 0.1);
        }

        .service-card img {
          max-height: 120px;
          object-fit: contain;
          margin-bottom: 10px;
        }

        .service-card h6 {
          font-size: 1rem;
          color: #1a1a1a;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .header h1 {
            font-size: 2rem;
          }

          .search-input {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .header h1 {
            font-size: 1.8rem;
          }

          .search-container {
            flex-direction: column;
            align-items: stretch;
          }

          .model-link {
            text-align: center;
          }
        }
      `}</style>

      <div
        className="container-fluid g-4 my-5"
        style={{ backgroundColor: "#f5f5f5", padding: "20px 0" }}
      >
        <div className="container">
          {/* Header */}
          <div className="header text-center">
            <h1>DOORSTEP PHONE REPAIRS</h1>
            <p>The fastest doorstep mobile repair services</p>
          </div>

          {/* Search Input & Link */}
          <div className="search-section text-center mb-5">
            <div className="search-container">
              <div className="position-relative">
                <input
                  type="text"
                  className="search-input form-control ps-5"
                  placeholder="Search your model number"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i
                  className="fa-solid fa-magnifying-glass position-absolute"
                  style={{
                    left: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#888",
                  }}
                ></i>
              </div>
              <p className="model-link">How to find my model number</p>
            </div>
          </div>

          {/* Services */}
          <div className="row g-4 justify-content-center">
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="col-6 col-sm-6 col-md-4 col-lg-2 d-flex justify-content-center"
                >
                  <div className="service-card">
                    <img
                      src={service.img}
                      alt={service.gadget}
                      className="img-fluid"
                    />
                    <h6 className="mt-2">{service.gadget}</h6>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-muted">No results found.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Doorstep;
