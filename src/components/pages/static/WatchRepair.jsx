import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const brands = [
  { name: "Samsung", image: "https://avatars.mds.yandex.net/i?id=1fd94090c52dcbff6956af8d9752b01b594188f6-4377722-images-thumbs&n=13"},
  { name: "Iphone", image: "https://yandex-images.clstorage.net/X5D2Ul200/5ff30ekXBx/7HWj4pmea8yx8SDo8yx4dOkj3PnWZ46-p1toMxzGkbvupWFwTgXgvZNVjXwCy-cVoUWYfQXOhDHz51ApgYxuKKMi4q6CgCTGsPEj5fo3cXPiK9yhk3u43o9-Fw1npeudwogpIRBVsKSFB9EmPqTwea9k-AVB4_xX4rYwSNvQJ3n8W4TCpoICwIDVduDxNlZ38Evg388BqMmbZwE0coXNqMCcFi0WQIOM_gf2LCSUqWuER9UFccDkRuO9F3XV0jlE2WOu5oa7LtKXxGHGxDRaVNlm2srAELfnvnIXNm-e0YzdsAIQDlaHqv4p0AYgtKpqoWLOPW3Z_Er_mg1uwM0odf9wmsWllxfnvtRq1co4RF7UdebP8Cax7Ih4OTNDmvOT_ZcbJhNigrrmKswoJrCqW5BY2DFy3eFi4KYqR8bMBlX0f6bErKgG6IHXT9P6F01l4Gbz1-M7gMiJcCUwWLXSrOWSPhUYaLad3yr4JRuUm0GAb8wrc8XYW-G9Infb_RNDyn2u866bCOyP6XzcwC59Y8Vu6unNDJbUvnUdE1uP7pbDtSMSPEWajOwd7w43tLRumWL0O1zT0HLAgj132eo8Y_xfsceJigfkocxl9Pk7Zn3SW9nm9iqA2IllGgpEu8aS5Y8CLjt4rKnRN_c4NIG9eohJ0htZ89Ft-7wwaeXqKXrgX63ShJwmyZf1efrhJmlhyGL86ts8psqCeSQBbpHWqd62JhUJfrCO3gXmExaRqHWwV8wZdOXeVfqfEWLRzzxf0keQ-6y-PNG96ljY3RRdcPV51e7ILb3KjVkgJUem8rzaqBMXEma5vdoR2RMmk5ReuUziOF_s_1f6uxxs0Monc9Z7ncupqQnHss969t0rTH3nZPve6TiE75h4JT9ivcCq36wbMTReoIzNDvcJJ5ifS6R10Cd3xuJS3rIpT_rIKEHOXq7hip4O0YPyePP2F21p92fc08Anrtm9RyMoerQ" },
]

const WatchesRepair = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

const handleBrandClick = (brand) => {
  navigate(`/smart-watches/${brand.name.toLowerCase().replace(/\s+/g, "-")}`, {
    state: {
      image: brand.image,   
      watchName: brand.name 
    },
  });
};


  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #dee2e6",
          padding: "20px 0",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <p style={{ marginBottom: "8px", color: "#6c757d", fontSize: "14px" }}>
            Home / Repair / Smart Watches
          </p>
          <h1 style={{ fontSize: "30px", fontWeight: "700", margin: 0, color: "#212529" }}>
            Smart Watch Repair & Replacement
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <Container className="py-5 text-center">
        {/* Search Input */}
        <div style={{ marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search Smart Watch Brands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "320px",
              padding: "12px 20px",
              border: "1px solid #ced4da",
              borderRadius: "30px",
              fontSize: "16px",
              outline: "none",
            }}
          />
        </div>

        {/* Brand Grid */}
        <Row xs={3} sm={4} md={5} lg={6} className="g-4">
          {filteredBrands.map((brand, idx) => (
            <Col key={idx} className="d-flex justify-content-center">
              <div
                className="brand-card"
                onClick={() => handleBrandClick(brand)}
              >
                <img src={brand.image} alt={brand.name} className="brand-logo" />
                <p className="brand-name">{brand.name}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Info Section */}
        <section
          style={{
            backgroundColor: "#fff",
            border: "1px solid #dee2e6",
            borderRadius: "12px",
            padding: "40px",
            textAlign: "center",
            marginTop: "60px",
          }}
        >
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px" }}>
            Smart Watch Repair & Replacement Services
          </h2>
          <p
            style={{
              color: "#6c757d",
              lineHeight: "1.6",
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "16px",
            }}
          >
            Smart watches keep you connected on the go — from health tracking to instant
            notifications. If your watch isn’t working properly, our expert team provides
            fast repairs, genuine replacement parts, and professional service so you can
            get back to your routine quickly.
          </p>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginTop: "30px",
              color: "#212529",
            }}
          >
            We Fix All Popular Smart Watch Brands
          </h3>
        </section>
      </Container>

      {/* Scoped CSS */}
      <style>{`
        .brand-card {
          width: 150px;
          height: 160px;
          background: #fff;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
          cursor: pointer;
        }
        .brand-card:hover {
          border-color: #e60000;
          box-shadow: 0 6px 18px rgba(230, 0, 0, 0.15);
          transform: translateY(-4px);
        }
        .brand-logo {
          max-height: 60px;
          max-width: 80%;
          object-fit: contain;
        }
        .brand-name {
          margin-top: 10px;
          font-size: 14px;
          font-weight: 500;
          color: #212529;
        }
      `}</style>
    </div>
  );
};

export default WatchesRepair;
