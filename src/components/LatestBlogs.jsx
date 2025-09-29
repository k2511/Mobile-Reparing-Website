import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function BlogSection() {
  const blogs = [
    {
      title: "Top 5 Signs Your Phone Needs Immediate Repair",
      desc: "Is your phone overheating, battery draining fast, or the screen unresponsive? Learn how to spot issues early and get professional mobile repair services before it gets worse.",
      img: "https://t3.ftcdn.net/jpg/16/62/78/06/360_F_1662780650_xzkOIcIn3BzAcGXJTnPpvVS4rTL6Qu5h.jpg",
    },
    {
      title: "Tablet Maintenance Tips for Longevity",
      desc: "Keep your tablet performing at its best with essential maintenance tips including battery care, storage management, and software updates.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSV_kfxChAYxXgfmzWfHc0ZyBHoYKturOTGGLS08U-V67WuANvb0jh-Aw4EJt034vA5Cc&usqp=CAU",
    },
    {
      title: "Smart Watch Care: Extend Your Device Life",
      desc: "From battery optimization to strap maintenance, discover how to take care of your smart watch so it stays accurate and lasts longer.",
      img: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw61458d43/images/Titan/Catalog/90188AP01_1.jpg?sw=600&sh=600",
    },
    {
      title: "Must-Have Mobile Accessories for Your Device",
      desc: "Protect and enhance your mobile experience with essential accessories like cases, screen protectors, chargers, and headphones.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2nv3-ZvqclqdxJ0Zc6uO4pFs7Z3_M1apQg&s",
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
            margin: "0 auto 40px",
          }}
        />
        <Row>
          {blogs.map((blog, idx) => (
            <Col xs={12} sm={6} md={6} lg={3} key={idx} className="mb-4">
              <Card className="shadow-sm h-100 border-0 d-flex flex-column">
                <div
                  style={{
                    height: "200px",
                    overflow: "hidden",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
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
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-semibold">{blog.title}</Card.Title>
                  <Card.Text
                    className="text-muted"
                    style={{ fontSize: "0.9rem", flexGrow: 1 }}
                  >
                    {blog.desc}
                  </Card.Text>
                  <Button variant="danger" size="sm" className="mt-auto">
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
