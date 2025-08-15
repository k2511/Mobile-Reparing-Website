




import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import latest1 from "../assets/image/latest-1.png";
import latest2 from "../assets/image/latest-2.png";
import latest3 from "../assets/image/latest-3.png";
import { NavLink } from "react-router-dom";

const blogs = [
  {
    title: "iPhone Display Issues: How to Fix Green, White, and Yellow Tint After an iOS Update?",
    date: "October 8, 2024",
    desc: "When it comes to purchasing and using a mobile phone, iPhones top the list. Isn't it true that these phones have raised the bar?",
    img: latest1,
  },
  {
    title: "Ongofix Announces Festive Offer: 30% Off on Mobile Repair Services",
    date: "September 2, 2024",
    desc: "[Mumbai, 1st Sept 2024] – As the festive season approaches, Ongofix, a leading mobile repair service provider...",
    img: latest2,
  },
  {
    title: "Mobile Woes Begone: Effective Solutions for Common Smartphone Issues",
    date: "September 1, 2024",
    desc: "Smartphones have become indispensable tools in our daily lives. Yet, like any technology...",
    img: latest3,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2.5,
  slidesToScroll: 1,
  autoplay: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const LatestBlogs = () => {
  return (
    <section
      style={{
        backgroundColor: "#f9f9f9",
        padding: "60px 0",
        position: "relative",
      }}
    >
      <Container>
        <Row className="justify-content-between align-items-center mb-4">
          <Col xs="auto">
            <h4 className="fw-bold mb-0">LATEST BLOGS</h4>
          </Col>
          <Col xs="auto">
            <NavLink to="/about-us" className="text-danger fw-semibold">
              View All
            </NavLink>
          </Col>
        </Row>

        <Slider {...settings}>
          {blogs.map((blog, index) => (
            <div key={index} className="px-2">
              <Card
                className="h-100 shadow-sm border-0 d-flex flex-column mx-auto"
                style={{
                  borderRadius: "12px",
                  minHeight: "420px",
                  width: "100%",
                  maxWidth: "380px",
                }}
              >
                <div
                  style={{
                    height: "200px",
                    overflow: "hidden",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={blog.img}
                    alt={blog.title}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="fw-semibold mb-2" style={{ fontSize: "1rem" }}>
                      {blog.title.length > 60
                        ? blog.title.slice(0, 60) + "..."
                        : blog.title}
                    </Card.Title>
                    <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>
                      {blog.desc.length > 100
                        ? blog.desc.slice(0, 100) + "..."
                        : blog.desc}
                    </Card.Text>
                    <small className="text-muted">{blog.date}</small>
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                    className="rounded-pill mt-3 align-self-start"
                  >
                    View More
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default LatestBlogs;