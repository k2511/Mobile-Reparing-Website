import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";

// Import Oppo images (1 to 15)
import oppo1 from "../../assets/oppoTab/oppoTablet1.jpg";
import oppo2 from "../../assets/oppoTab/oppoTablet2.jpg";
import oppo3 from "../../assets/oppoTab/oppoTablet3.jpg";
import oppo4 from "../../assets/oppoTab/oppoTablet4.jpg";
import oppo5 from "../../assets/oppoTab/oppoTablet5.jpg";
import oppo6 from "../../assets/oppoTab/oppoTablet6.jpg";
import oppo7 from "../../assets/oppoTab/oppoTablet7.jpg";
import oppo8 from "../../assets/oppoTab/oppoTablet8.jpg";
import oppo9 from "../../assets/oppoTab/oppoTablet9.jpg";
import oppo10 from "../../assets/oppoTab/oppoTablet10.jpg";
import oppo11 from "../../assets/oppoTab/oppoTablet11.jpg";
import oppo12 from "../../assets/oppoTab/oppoTablet12.jpg";
import oppo13 from "../../assets/oppoTab/oppoTablet13.jpg";
import oppo14 from "../../assets/oppoTab/oppoTablet14.jpg";
import oppo15 from "../../assets/oppoTab/oppoTablet15.jpg";

// Create Oppo models array
const oppoModels = [
  { id: 1, name: "Oppo Pad 1", image: oppo1 },
  { id: 2, name: "Oppo Pad 2", image: oppo2 },
  { id: 3, name: "Oppo Pad 3", image: oppo3 },
  { id: 4, name: "Oppo Pad 4", image: oppo4 },
  { id: 5, name: "Oppo Pad 5", image: oppo5 },
  { id: 6, name: "Oppo Pad 6", image: oppo6 },
  { id: 7, name: "Oppo Pad 7", image: oppo7 },
  { id: 8, name: "Oppo Pad 8", image: oppo8 },
  { id: 9, name: "Oppo Pad 9", image: oppo9 },
  { id: 10, name: "Oppo Pad 10", image: oppo10 },
  { id: 11, name: "Oppo Pad 11", image: oppo11 },
  { id: 12, name: "Oppo Pad 12", image: oppo12 },
  { id: 13, name: "Oppo Pad 13", image: oppo13 },
  { id: 14, name: "Oppo Pad 14", image: oppo14 },
  { id: 15, name: "Oppo Pad 15", image: oppo15 },
];

const OppoTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredModels = oppoModels.filter((model) =>
    model.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-light min-vh-100">
      <Helmet>
        <title>Oppo Tablet Repair - RedSet Go Repairs</title>
        <meta
          name="description"
          content="Expert Oppo tablet repair services including screen replacement and battery repair in Pune."
        />
        <meta name="keywords" content="oppo tablet repair, doorstep tablet repair pune, redsetgo repairs" />
      </Helmet>
      {/* Header */}
      <div className="bg-white border-bottom py-4">
        <Container>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-2">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/tablet-repair">Repair</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Oppo
              </li>
            </ol>
          </nav>
          <h1 className="fs-3 fw-bold text-dark mb-0">
            Oppo Tablet Repair & Replacement
          </h1>
        </Container>
      </div>

      {/* Search and tablet list */}
      <Container className="py-5">
        <div className="text-center mb-5">
          <input
            type="text"
            placeholder="Search Oppo models..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control w-50 mx-auto rounded-pill p-3"
            style={{ maxWidth: "400px" }}
          />
        </div>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {filteredModels.map((model) => (
            <Col key={model.id}>
              <div
                className="card h-100 border"
                onClick={() =>
                  navigate(`/brand-issues/${encodeURIComponent(model.name)}`, {
                    state: { image: model.image },
                  })
                }
                style={{ cursor: "pointer", transition: "all 0.3s ease" }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "#dc3545";
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
                  className="card-img-top"
                  style={{ height: "150px", objectFit: "contain", padding: "10px" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-center fs-6 fw-semibold">
                    {model.name}
                  </h5>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        {/* Footer Info */}
        <div className="card border mt-5 p-4 text-center">
          <h2 className="fs-4 fw-bold mb-3">OPPO TABLET REPAIR & REPLACEMENT</h2>
          <p
            className="text-muted lh-base"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            Your Oppo tablet is essential for work and entertainment. Our expert
            Oppo repair services provide quick turnaround, genuine parts, and
            reliable performance.
          </p>
          <h3 className="fs-5 fw-semibold mt-4">WE CAN FIX YOUR OPPO TABLET</h3>
        </div>
      </Container>
    </div>
  );
};

export default OppoTab;