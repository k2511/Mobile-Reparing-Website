import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import brandModels from "../data/brandModels";

const BrandModelsPage = () => {
  const { brand } = useParams();
  const models = brandModels[brand] || [];

  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredModels = models.filter((model) =>
    model.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="my-5">
      <h2 className="mb-3">{brand.charAt(0).toUpperCase() + brand.slice(1)} Repair & Replacement</h2>
      <p>Home &gt; Repair &gt; {brand.charAt(0).toUpperCase() + brand.slice(1)}</p>

      <Form.Control
        type="search"
        placeholder="Select Model"
        className="mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ maxWidth: "300px" }}
      />

      <Row xs={2} sm={3} md={4} lg={6} className="g-4">
        {filteredModels.map((model, idx) => (
          <Col key={idx}>
            <div
              style={{
                borderRadius: "12px",
                padding: "15px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                textAlign: "center",
                cursor: "pointer",
                backgroundColor: "#fff",
              }}
              onClick={() => alert(`Clicked on ${model.name}`)}
            >
              <img
                src={model.image}
                alt={model.name}
                style={{ maxHeight: "150px", objectFit: "contain" }}
              />
              <p style={{ marginTop: "10px", fontSize: "14px" }}>{model.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BrandModelsPage;
