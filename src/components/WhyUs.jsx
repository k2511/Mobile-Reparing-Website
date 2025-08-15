import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaAward, FaHome, FaTools, FaCertificate } from 'react-icons/fa';
import technician from '../assets/image/technician.jpg'; 

const WhyUs = () => {
  const features = [
    {
      icon: <FaAward size={28} className="text-danger" />,
      title: 'Fast & Reliable Service',
      desc: 'We value your time, providing quick turnarounds without compromising on quality. Our streamlined processes and responsive team ensure that your issues are addressed promptly. We also maintain strict timelines, so you can get back to your routine without unnecessary delays.',
    },
    {
      icon: <FaHome size={28} className="text-danger" />,
      title: 'Doorstep Service',
      desc: 'Repairs made easy — at your home or office, with honest pricing and no hidden fees.',
    },
    {
      icon: <FaTools size={28} className="text-danger" />,
      title: 'Expert Technicians',
      desc: 'Our skilled team uses advanced tools to deliver precision repairs every time. Each technician is trained to handle complex tasks with accuracy and professionalism. We also stay updated with the latest industry techniques to ensure lasting results for every project.',
    },
    {
      icon: <FaCertificate size={28} className="text-danger" />,
      title: 'Affordable Pricing',
      desc: 'We offer fair, upfront prices with no hidden charges – only honest service. Our pricing model is transparent and designed to suit different budgets. By combining quality with cost-effectiveness, we make sure you get maximum value for your investment.',
    },
  ];

  return (
    <section style={{ backgroundColor: '#f9f9f9', padding: '60px 0' }}>
      <Container>
        <h2 className="text-center fw-bold mb-3">WHY US</h2>
        <hr style={{ width: '80px', border: '2px solid red', margin: '0 auto 40px' }} />

        <Row className="align-items-center gap-0">
          {/* ✅ LEFT: Feature Cards */}
          <Col md={6}>
            {features.map((item, idx) => (
              <Card key={idx} className="mb-4 shadow-sm border-0">
                <Card.Body className="d-flex align-items-start">
                  <div className="me-3 mt-1">{item.icon}</div>
                  <div>
                    <Card.Title className="mb-1 fw-semibold">{item.title}</Card.Title>
                    <Card.Text className="text-muted f-3" >{item.desc}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Col>

          {/* ✅ RIGHT: Image */}
          <Col md={6} className="text-center">
            <img
              src={technician}
              alt="Technician with customer"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '420px', width: '100%', objectFit: 'cover' }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyUs;




