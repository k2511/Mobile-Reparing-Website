import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const stories = [
  {
    name: "Bharath Kumar",
    device: "Google Pixel",
    review:
      "My Google Pixel screen was broken. A friend recommended Ongofix. The technician arrived on time, replaced it with an original screen, and phone ready within 15 minutes. Great service!",
    img: "https://via.placeholder.com/350x200.png?text=Google+Pixel",
  },
  {
    name: "Anisha",
    device: "Samsung Galaxy Fold 4",
    review:
      "My Galaxy Fold 4 had WiFi and hinge issues, and the service costs were too high elsewhere. Ongofix picked up the phone from my home, repaired the flex cable and hinge on the same day, and charged a fair price. Fast and hassle-free service!",
    img: "https://via.placeholder.com/350x200.png?text=Galaxy+Fold+4",
  },
  {
    name: "Aaditi Srinivas",
    device: "MacBook",
    review:
      "MacBook screen was cracked. It is as good as new. Thank you Ongofix!",
    img: "https://via.placeholder.com/350x200.png?text=MacBook",
  },
  // Add more stories if needed
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
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section style={{ backgroundColor: "#f9f9f9", padding: "60px 0" }}>
      <Container>
        {/* Header */}
        <Row className="justify-content-between align-items-center mb-4">
          <Col xs="auto">
            <h4 className="fw-bold mb-0">CUSTOMER STORIES</h4>
          </Col>
          <Col xs="auto" className="text-end">
            <a href="#" className="text-danger fw-semibold">View All</a>
          </Col>
        </Row>

        {/* Carousel */}
        <Slider {...settings}>
          {stories.map((story, idx) => (
            <div key={idx} className="px-2">
              <Card
                className="shadow border-0 h-100"
                style={{
                  borderRadius: "12px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={story.img}
                  alt={story.device}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                  }}
                />
                <Card.Body>
                  <Card.Title className="fw-semibold">{story.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {story.device}
                  </Card.Subtitle>
                  <Card.Text style={{ fontSize: "0.95rem" }}>
                    {story.review}
                  </Card.Text>
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





