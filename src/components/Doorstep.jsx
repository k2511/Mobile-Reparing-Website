import React, { useState, useEffect } from "react";
import { FaBeer } from "react-icons/fa";
const Doorstep = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  const services = [
    {
      img: "https://ongofix.com/upload/sliders/644126phone-img.png",
      gadget: "Mobile Repair",
    },

    {
      img: "https://th.bing.com/th/id/OIP.fQaT_GrXWDUfdK_Npy65NwHaHa?w=169&h=180&c=7&r=0&o=7&dpr=1.6&pid=1.7&rm=3",
      gadget: "tablet  ",
    },
    {
      img: "https://ongofix.com/upload/sliders/644126macbook.webp",
      gadget: "Laptop ",
    },
    {
      img: "https://m.media-amazon.com/images/I/41oK-1w0oLL._AC_UY327_FMwebp_QL65_.jpg",
      gadget: "CCTV",
    },
  ];

  const slideWidth = 100 / itemsPerView;
  const translateX = -currentSlide * (slideWidth * itemsPerView);

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <style>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
          // background-color: #f5f5f5;
          padding: 20px 0;
        }

        .header h1 {
          font-size: 2.3rem;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 10px;
          letter-spacing: -0.5px;
        }

        .header p {
          color: #666;
          font-size: 1.1rem;
        }

        .search-container {
          position: relative;
          width: 300px;
          margin: 0 auto 20px;
        }

        .search-section {
          display: flex;

          justify-content: center;
          width: full;
          gap: 30px;
          align-items: center;
        }

        .search-input {
          width: 100%;
          padding: 15px 20px 15px 50px;
          border: 2px solid #e0e0e0;
          border-radius: 50px;
          font-size: 16px;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .search-input:focus {
          border-color: #007aff;
          box-shadow: none;
        }
        .row {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 10px;
          align-items: center;
        }
        .search-icon {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
        }

        .model-link {
          color: black;
          text-decoration: underline;
          font-weight: 500;
          margin-bottom:7px;
        }

        .services-container {
          position: relative;
          overflow: hidden;
        }

        .services-grid {
          display: flex;
          transition: transform 0.3s ease;
          gap: 20px;
          transform: translateX(${translateX}%);
        }

        .service-card img {
          /* Adjust size */
          display: flex;
         
          margin-bottom: 10px;
          height: 130px;
          object-fit: contain;
        }

        // .service-card {
        //   background: white;
        //   border-radius: 20px;
        //   padding: 5px 5px;
        //   text-align: center;
        //   box-shadow: 0 4px 5px rgba(0, 0, 0, 0.08);
        //   transition: transform 0.3s ease, box-shadow 0.3s ease;
        //   cursor: pointer;
        //   border: none;
        //   height: 100%;
        //   display: flex;
        //   flex-direction: column;
        //   justify-content: center;
        //   // border: 2px solid black;
        //   align-items: center;
        // }
        // //   .main{
        // //         display: flex;
        // //   flex-direction: column;
        // //   justify-content: center;
        // //   border: 2px solid black;
        // //  align-items: center;
        // //   }

        // .service-card:hover {
        //   transform: scale(1.03);
        //   box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        //   border: 2px solid red !important;

        // }


    .service-card {
  width: 150px;
  height: 150px;
  background: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin: auto;
}



        .service-card:hover {
          border-color: #e60000; /* red border */
          box-shadow: 0 6px 20px rgba(230, 0, 0, 0.1);
        }

        .service-card h3 {
          font-size: 1.2rem;
          color: #1a1a1a;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .service-card p {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.4;
          margin-bottom: 0;
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #333;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .nav-arrow:hover {
          background: #007aff;
          color: white;
          transform: translateY(-50%) scale(1.1);
        }

        .nav-arrow.prev {
          left: -25px;
        }

        .nav-arrow.next {
          right: -25px;
        }

        .search-input {
          width: 325px;
        }
        .feedback-button {
          position: fixed;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          background: #ff3b30;
          color: white;
          border: none;
          padding: 15px 8px;
          border-radius: 15px 0 0 15px;
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 1px;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          box-shadow: -3px 0 15px rgba(255, 59, 48, 0.3);
          transition: all 0.3s ease;
          z-index: 100;
        }

        .feedback-button:hover {
          background: #ff2d20;
          transform: translateY(-50%) translateX(-5px);
          box-shadow: -5px 0 20px rgba(255, 59, 48, 0.4);
        }

        .dots-container {
          display: flex;
          justify-content: center;
          margin-top: 30px;
          gap: 10px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ddd;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .fa-solid, .fas {
    font-weight: bold;
    font-size: 18px;
}

        .dot.active {
          background: #007aff;
        }

        @media (max-width: 768px) {
        .search-section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: full;
            gap: 30px;
            align-items: center;
          }
            
          .header h1 {
            font-size: 2rem;
          }

          .service-card {
            flex: 0 0 calc(50% - 10px);
          }

          .nav-arrow {
            display: none;
          }

          .services-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          .services-grid {
            padding-bottom: 10px;
          }

          .services-grid::-webkit-scrollbar {
            height: 4px;
          }

          .services-grid::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }

          .services-grid::-webkit-scrollbar-thumb {
            background: #007aff;
            border-radius: 10px;
          }

          .feedback-button {
            padding: 12px 6px;
            font-size: 12px;
          }

          .dots-container {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .header h1 {
            font-size: 1.8rem;
          }

          

          .service-card {
            padding: 5px 3px;
          }
        }
      `}</style>

      <div
        className="container-fluid g-4 my-5"
        style={{ backgroundColor: "#f5f5f5", padding: "20px 0" }}
      >
        <div className="container">
          {/* Header */}
          <div className="header text-center ">
            <h1>DOORSTEP PHONE REPAIRS</h1>
            <p>The fastest doorstep mobile repair services</p>
          </div>

          {/* Search Section */}
          <div className="search-section text-center mb-5 ">
            <div className="search position-relative">
              <input
                type="text"
                className="search-input form-control ps-5"
                placeholder="Search your model number"
              />
              <i
                className="fa-solid fa-magnifying-glass position-absolute"
                style={{
                  left: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#888",
                }}
              ></i>
            </div>

            <div className="text-dark">
              <p className="model-link">How to find my model number</p>
            </div>
          </div>

          {/* Services Section */}

          <div className="row  g-4 ">
            {services.map((service, index) => (
              <div
                key={index}
                className="main col-8 col-sm-6 col-md-4 col-lg-2 "
              >
                <div className="service-card   ">
                  <img
                    src={service.img}
                    alt={service.gadget}
                    className="mx-auto "
                  />

                  <h6 className=" mt-3 ">{service.gadget}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Doorstep;







// import React, { useState } from "react";
// import { FaBeer } from "react-icons/fa";

// const Doorstep = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [itemsPerView, setItemsPerView] = useState(4);
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

//   const slideWidth = 100 / itemsPerView;
//   const translateX = -currentSlide * (slideWidth * itemsPerView);

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
//         /* Paste all your styles here exactly as before (unchanged) */
//         /* ... */
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

//           {/* Search Section */}
//           <div className="search-section text-center mb-5">
//             <div className="search position-relative">
//               <input
//                 type="text"
//                 className="search-input form-control ps-5"
//                 placeholder="Search your model number"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)} // ✅ Controlled input
//               />
//               <i
//                 className="fa-solid fa-magnifying-glass position-absolute"
//                 style={{
//                   left: "15px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   color: "#888",
//                 }}
//               ></i>
//             </div>

//             <div className="text-dark">
//               <p className="model-link">How to find my model number</p>
//             </div>
//           </div>

//           {/* Services Section */}
//           <div className="row g-4">
//             {filteredServices.length > 0 ? (
//               filteredServices.map((service, index) => (
//                 <div
//                   key={index}
//                   className="main col-8 col-sm-6 col-md-4 col-lg-2"
//                 >
//                   <div className="service-card">
//                     <img
//                       src={service.img}
//                       alt={service.gadget}
//                       className="mx-auto"
//                     />
//                     <h6 className="mt-3">{service.gadget}</h6>
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
