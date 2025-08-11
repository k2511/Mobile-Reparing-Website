import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/Doorstep.css";

const Doorstep = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

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

  const handleServiceClick = (service) => {
    if (service.gadget === "Laptop") {
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
              <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-2 d-flex">
                <div
                  className="service-card w-100"
                  onClick={() => handleServiceClick(service)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={service.img} alt={service.gadget} className="img-fluid" />
                  <h6>{service.gadget}</h6>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-muted">No results found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doorstep;
