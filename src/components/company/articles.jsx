





import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const articles = [
  {
    title: "How to Prolong Smartphone Battery Life",
    source: "Android Authority",
    url: "https://www.androidauthority.com/how-to-prolong-smartphone-battery-life-882395/",
    icon: "📱",
    summary:
      "Smartphone batteries wear out over time, but simple practices can extend their lifespan. This guide explains how to avoid overcharging, reduce background activity, use optimized charging modes, and lower screen brightness. It also highlights common myths about charging habits, helping users maximize performance and reduce the need for frequent battery replacements.",
  },
  {
    title: "Laptop Repairability: Microsoft’s Surface Leads the Way",
    source: "TechRadar",
    url: "https://www.techradar.com/computing/laptops/microsofts-repair-friendly-surface-puts-other-laptop-makers-on-notice-and-its-about-time",
    icon: "💻",
    summary:
      "Microsoft has redefined laptop repairability with its new Surface line. Unlike many sealed devices, these laptops are easier to open, upgrade, and repair, setting a benchmark for the industry. This shift benefits users, promotes sustainability, and pressures other manufacturers to rethink design choices that limit device lifespan.",
  },
  {
    title: "Safe and Easy Ways to Recycle Electronics",
    source: "The Guardian",
    url: "https://www.theguardian.com/environment/2025/may/27/safe-easy-ways-to-recycle-electronics-make-money",
    icon: "🌍",
    summary:
      "A practical guide to recycling electronics responsibly while saving space and reducing waste. It outlines safe methods for disposing of old gadgets, introduces recycling drop-off centers, and explains how some items can even earn users cash. The article emphasizes reducing environmental harm by diverting electronics from landfills into sustainable recycling streams.",
  },
  {
    title: "‘It’s Cheap But It’s Not Disposable’: The Growth of Fast Tech Waste",
    source: "The Guardian",
    url: "https://www.theguardian.com/technology/2025/jun/24/its-cheap-but-its-not-disposable-why-fast-tech-is-a-growing-waste-problem",
    icon: "♻️",
    summary:
      "Cheap gadgets are flooding the market, but their short lifespans create mountains of e-waste. The rise of 'fast tech' parallels fast fashion, with products made to be replaced quickly. The article stresses the importance of repair, recycling, and conscious consumption to fight the growing environmental crisis driven by disposable technology.",
  },
];

const Articles = () => {
  return (
    <div className="articles-section py-5 bg-light">
      <Container>
        {/* Header */}
        <div className="text-center mb-5 px-3">
          <h1 className="fw-bold text-danger">📚 Articles</h1>
          <p className="lead text-secondary mt-3">
            Stay informed with valuable insights, practical guides, and thoughtful perspectives from{" "}
            <span className="fw-bold text-dark">expert sources.</span>
          </p>
        </div>

        {/* Articles Grid */}
        <Row className="g-4">
          {articles.map((article, index) => (
            <Col key={index} xs={12} md={6}>
              <Card className="h-100 shadow border-0 rounded-4 article-card p-3">
                <div className="fs-1 text-center">{article.icon}</div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold text-dark mb-2 text-center">
                    {article.title}
                  </Card.Title>
                  <Card.Subtitle className="mb-3 text-danger fw-semibold text-center">
                    {article.source}
                  </Card.Subtitle>
                  <Card.Text className="text-secondary small flex-grow-1">
                    {article.summary}
                  </Card.Text>
                  <div className="text-center mt-3">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-danger fw-bold px-4 py-2"
                    >
                      Read More
                    </a>
                  </div>
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
