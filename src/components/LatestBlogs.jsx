import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import img1 from "../assets/BlogSection/img1.jpg"
import img2 from "../assets/BlogSection/img2.jpg"
import img3 from "../assets/BlogSection/img3.jpg"
import img4 from "../assets/BlogSection/img4.jpg"
import img5 from "../assets/BlogSection/img5.jpg"
import img6 from "../assets/BlogSection/img6.jpg"


export default function BlogSection() {
  const blogs = [
    {
      title: "5 Warning Signs Your Mobile Phone Needs Immediate Repair",
      desc: "Is your smartphone heating up, draining battery fast, or showing unresponsive touch? Learn how to identify early signs of mobile phone damage so you can get professional mobile repair services before the problem becomes costly.",
      img:img1, // phone repair
    },
    {
      title: "Top CCTV Camera Features to Keep Your Home & Business Safe",
      desc: "Discover the latest CCTV camera features like night vision, motion detection, and remote monitoring that ensure complete home and office security. Find out which security camera systems are worth your investment.",
      img: img2, // CCTV camera
    },
    {
      title: "Why Your Laptop is Running Slow – Causes & Quick Fixes",
      desc: "From low storage to outdated software, we explain the common reasons laptops slow down and how you can improve speed with expert laptop repair and optimisation services.",
      img: img3, // slow laptop
    },
    {
      title: "Tablet vs Laptop – Choosing the Best Device for Your Needs",
      desc: "Confused between a tablet and a laptop for work, study, or entertainment? Compare their performance, portability, and features to make the right purchase.",
      img: img4,// tablet vs laptop
    },
    {
      title: "The Hidden Risks of Cheap Mobile, Laptop & CCTV Repairs",
      desc: "Opting for cheap repair services can lead to poor quality parts, unreliable work, and permanent damage. Here’s why choosing a certified repair technician saves you money in the long run.",
      img:img5, // technician repair
    },
    {
      title: "Data Safety During Mobile & Laptop Repairs – Our Process",
      desc: "We explain how we protect your data during repairs with secure handling, privacy protocols, and safe storage to keep your personal and business information confidential.",
      img: img6, // data security
    }
  ];

  return (
    <section style={{ padding: "60px 0", backgroundColor: "#fefefe" }}>
      <Container>
        <h2 className="text-center fw-bold mb-3">OUR BLOG</h2>
        <hr
          style={{
            width: "80px",
            border: "2px solid red",
            margin: "0 auto 40px"
          }}
        />
        <Row>
          {blogs.map((blog, idx) => (
            <Col md={6} lg={4} key={idx} className="mb-4">
              <Card className="shadow-sm h-100 border-0">
                <div
                  style={{
                    height: "200px",
                    overflow: "hidden",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px"
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={blog.img}
                    alt={blog.title}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="fw-semibold">{blog.title}</Card.Title>
                  <Card.Text
                    className="text-muted"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {blog.desc}
                  </Card.Text>
                  <Button variant="danger" size="sm">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
