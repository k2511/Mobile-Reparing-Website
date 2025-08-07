import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import latest1 from "../assets/image/latest-1.png";
import latest2 from "../assets/image/latest-2.png";
import latest3 from "../assets/image/latest-3.png";

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

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 2.5,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 991, min: 576 },
    items: 1.5,
  },
  mobile: {
    breakpoint: { max: 575, min: 0 },
    items: 1,
  },
};

const CustomArrow = ({ direction, onClick }) => {
  const Icon = direction === 'left' ? FaChevronLeft : FaChevronRight;
  return (
    <div 
      className={`custom-arrow custom-${direction}`}
      onClick={onClick}
    >
      <Icon size={20} />
    </div>
  );
};

const LatestBlogs = () => {
  return (
    <section style={{ backgroundColor: "#f9f9f9", padding: "60px 0", position: "relative" }}>
      <Container>
        <Row className="justify-content-between align-items-center mb-4">
          <Col xs="auto">
            <h4 className="fw-bold mb-0">LATEST BLOGS</h4>
          </Col>
          <Col xs="auto">
            <a href="/blogs" className="text-danger fw-semibold">
              View All
            </a>
          </Col>
        </Row>

        <div style={{ position: "relative" }}>
          <Carousel
            responsive={responsive}
            infinite={true}
            showDots={false}
            arrows={true}
            autoPlay={false}
            customLeftArrow={<CustomArrow direction="left" />}
            customRightArrow={<CustomArrow direction="right" />}
            containerClass="custom-carousel-container"
            itemClass="carousel-item-padding-40-px"
          >
            {blogs.map((blog, index) => (
              <div key={index} className="carousel-item-wrapper">
                <Card
                  className="h-100 shadow-sm border-0 d-flex flex-column"
                  style={{
                    borderRadius: "14px",
                    minHeight: "480px",
                  }}
                >
                  <div
                    style={{
                      height: "200px",
                      overflow: "hidden",
                      borderTopLeftRadius: "14px",
                      borderTopRightRadius: "14px",
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
                        {blog.title.length > 60 ? blog.title.slice(0, 60) + "..." : blog.title}
                      </Card.Title>
                      <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>
                        {blog.desc.length > 100 ? blog.desc.slice(0, 100) + "..." : blog.desc}
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
          </Carousel>
        </div>
      </Container>

      <style jsx>{`
        .carousel-item-wrapper {
          padding: 0 12px;
          height: 100%;
        }
        
        .custom-carousel-container {
          padding: 0 30px;
          position: relative;
        }
        
        .custom-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          cursor: pointer;
          color: #d60000;
          border: none;
          transition: all 0.3s ease;
        }
        
        .custom-arrow:hover {
          background: #d60000;
          color: white;
        }
        
        .custom-left {
          left: 0;
        }
        
        .custom-right {
          right: 0;
        }
        
        .carousel-item-padding-40-px {
          padding: 0 12px;
        }
        
        @media (max-width: 768px) {
          .custom-arrow {
            width: 30px;
            height: 30px;
          }
          
          .custom-carousel-container {
            padding: 0 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default LatestBlogs;