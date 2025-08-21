import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const articles = [
  {
    title: "How to Prolong Smartphone Battery Life",
    source: "Android Authority",
    url: "https://www.androidauthority.com/how-to-prolong-smartphone-battery-life-882395/",
    icon: "📱",
  },
  {
    title: "Laptop Repairability: Microsoft's Surface Leads the Way",
    source: "TechRadar",
    url: "https://www.techradar.com/computing/laptops/microsofts-repair-friendly-surface-puts-other-laptop-makers-on-notice-and-its-about-time",
    icon: "💻",
  },
  {
    title: "Safe and Easy Ways to Recycle Electronics",
    source: "The Guardian",
    url: "https://www.theguardian.com/environment/2025/may/27/safe-easy-ways-to-recycle-electronics-make-money",
    icon: "🌍",
  },
  {
    title: "‘It’s Cheap But It’s Not Disposable’: The Growth of Fast Tech Waste",
    source: "The Guardian",
    url: "https://www.theguardian.com/technology/2025/jun/24/its-cheap-but-its-not-disposable-why-fast-tech-is-a-growing-waste-problem",
    icon: "♻️",
  },
];

const Articles = () => {
  return (
    <div className="articles-section py-5 bg-light">
      <Container>
        {/* Header */}
        <div className="text-center mb-5 px-3">
          <h1 className="fw-bold text-danger">Articles</h1>
          <p className="lead text-secondary mt-3">
            Stay informed with valuable insights, practical guides, and thoughtful perspectives from{" "}
            <span className="fw-bold text-dark">expert sources.</span>
          </p>
        </div>

        {/* Articles Grid */}
        <Row className="g-4">
          {articles.map((article, index) => (
            <Col key={index} xs={12} sm={6} lg={6} xl={6}>
              <Card className="h-100 shadow border-0 rounded-3 article-card text-center p-3">
                <div className="fs-1">{article.icon}</div>
                <Card.Body>
                  <Card.Title className="fw-bold text-dark mb-3">
                    {article.title}
                  </Card.Title>
                  <Card.Subtitle className="mb-3 text-danger fw-semibold">
                    {article.source}
                  </Card.Subtitle>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-danger fw-bold px-4 py-2"
                  >
                    Read More
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Articles;
