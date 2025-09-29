import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function BlogSection() {
  const blogs = [
    {
      title: "Top 5 Signs Your Phone Needs Immediate Repair",
      desc: "Is your phone overheating, battery draining fast, or the screen unresponsive? Learn how to spot issues early and get professional mobile repair services before it gets worse.",
      img: "https://images.unsplash.com/photo-1580910051078-1f95c5d3a5f4?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Tablet Maintenance Tips for Longevity",
      desc: "Keep your tablet performing at its best with essential maintenance tips including battery care, storage management, and software updates.",
      img: "https://images.unsplash.com/photo-1611162617219-cb9c37d64c3b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Smart Watch Care: Extend Your Device Life",
      desc: "From battery optimization to strap maintenance, discover how to take care of your smart watch so it stays accurate and lasts longer.",
      img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Must-Have Mobile Accessories for Your Device",
      desc: "Protect and enhance your mobile experience with essential accessories like cases, screen protectors, chargers, and headphones.",
      img: "https://images.unsplash.com/photo-1603791452906-9c3f797f3ec3?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section style={{ padding: "60px 0", backgroundColor: "#fefefe" }}>
      <Container>
        <h2 className="text-center fw-bold mb-3">OUR BLOG</h2>
        <hr style={{ width: "80px", border: "2px solid red", margin: "0 auto 40px" }} />
        <Row>
          {blogs.map((blog, idx) => (
            <Col md={6} lg={3} key={idx} className="mb-4">
              <Card className="shadow-sm h-100 border-0">
                <Card.Img
                  variant="top"
                  src={blog.img}
                  alt={blog.title}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-semibold">{blog.title}</Card.Title>
                  <Card.Text className="text-muted" style={{ fontSize: "0.9rem", flexGrow: 1 }}>
                    {blog.desc}
                  </Card.Text>
                  <Button variant="danger" size="sm">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
