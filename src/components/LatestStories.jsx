import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vivo from "../assets/image/vivo-s.png";
import pixel from "../assets/image/pixel-s.png";
import samsung from "../assets/image/samsung fold-s.png";

const stories = [
  {
    name: "Bharath Kumar",
    device: "Google Pixel",
    review:
      "My Google Pixel screen was broken. A friend recommended Ongofix. The technician arrived on time, replaced it with an original screen, and phone ready within 15 minutes. Great service!",
    img: vivo,
  },
  {
    name: "Anisha",
    device: "Samsung Galaxy Fold 4",
    review:
      "My Galaxy Fold 4 had WiFi and hinge issues, and the service costs were too high elsewhere. Ongofix picked up the phone from my home, repaired the flex cable and hinge on the same day, and charged a fair price. Fast and hassle-free service!",
    img: pixel,
  },
  {
    name: "Aaditi Srinivas",
    device: "MacBook",
    review:
      "MacBook screen was cracked. It is as good as new. Thank you Ongofix!MacBook screen was cracked. It is as good as new. Thank you Ongofix MacBook screen was cracked. It is as good as new. Thank you Ongofix, , ",
    img: samsung,
  },
];

const LatestStories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section style={{ backgroundColor: "#f9f9f9", padding: "60px 0" }}>
      <Container className="customer-stories">
        {/* Header */}
        <Row className="justify-content-between align-items-center mb-4">
          <Col xs="auto">
            <h4 className="fw-bold mb-0">CUSTOMER STORIES</h4>
          </Col>
          <Col xs="auto" className="text-end">
            <a href="#" className="text-danger fw-semibold">
              View All
            </a>
          </Col>
        </Row>

        {/* Carousel */}
        <Slider {...settings}>
          {stories.map((story, idx) => (
            <div key={idx} className="px-2">
              <Card
                style={{
                  height: "100%",
                  minHeight: "420px",
                  borderRadius: "12px",
                }}
              >
                {/* Fixed image container */}
                <div
                  style={{
                    height: "200px",
                    width: "100%",
                    overflow: "hidden",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={story.img}
                    alt={story.device}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Card body with flexible space */}
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="fw-semibold">
                      {story.name}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {story.device}
                    </Card.Subtitle>
                    <Card.Text style={{ fontSize: "0.95rem" }}>
                      {story.review}
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default LatestStories;


