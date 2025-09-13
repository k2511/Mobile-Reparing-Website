import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function BlogSection() {
  const blogs = [
    {
      title: "5 Warning Signs Your Mobile Phone Needs Immediate Repair",
      desc: "Is your smartphone heating up, draining battery fast, or showing unresponsive touch? Learn how to identify early signs of mobile phone damage so you can get professional mobile repair services before the problem becomes costly."
    },
    {
      title: "Top CCTV Camera Features to Keep Your Home & Business Safe",
      desc: "Discover the latest CCTV camera features like night vision, motion detection, and remote monitoring that ensure complete home and office security. Find out which security camera systems are worth your investment."
    },
    {
      title: "Why Your Laptop is Running Slow – Causes & Quick Fixes",
      desc: "From low storage to outdated software, we explain the common reasons laptops slow down and how you can improve speed with expert laptop repair and optimisation services."
    },
    {
      title: "Tablet vs Laptop – Choosing the Best Device for Your Needs",
      desc: "Confused between a tablet and a laptop for work, study, or entertainment? Compare their performance, portability, and features to make the right purchase."
    },
    {
      title: "The Hidden Risks of Cheap Mobile, Laptop & CCTV Repairs",
      desc: "Opting for cheap repair services can lead to poor quality parts, unreliable work, and permanent damage. Here’s why choosing a certified repair technician saves you money in the long run."
    },
    {
      title: "Data Safety During Mobile & Laptop Repairs – Our Process",
      desc: "We explain how we protect your data during repairs with secure handling, privacy protocols, and safe storage to keep your personal and business information confidential."
    }
  ];

  return (
    <section style={{ padding: "60px 0", backgroundColor: "#fefefe" }}>
      <Container>
        <h2 className="text-center fw-bold mb-3">OUR BLOG</h2>
        <hr style={{ width: "80px", border: "2px solid red", margin: "0 auto 40px" }} />
        <Row>
          {blogs.map((blog, idx) => (
            <Col md={6} lg={4} key={idx} className="mb-4">
              <Card className="shadow-sm h-100 border-0">
                <Card.Body>
                  <Card.Title className="fw-semibold">{blog.title}</Card.Title>
                  <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>
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
