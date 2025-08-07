import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaAward, FaHome, FaTools, FaCertificate } from 'react-icons/fa';
import technician from '../assets/image/technician.jpg'; 

const WhyUs = () => {
  const features = [
    {
      icon: <FaAward size={28} className="text-danger" />,
      title: 'Genuine Parts',
      desc: 'We use original spare parts to ensure long-lasting performance with 90 days warranty.',
    },
    {
      icon: <FaHome size={28} className="text-danger" />,
      title: 'Doorstep Service',
      desc: 'Get professional repairs at your home or office with no hidden charges.',
    },
    {
      icon: <FaTools size={28} className="text-danger" />,
      title: 'Expert Technicians',
      desc: 'Trained professionals with deep expertise in major brands, ensuring both device care and complete data safety.',
    },
    {
      icon: <FaCertificate size={28} className="text-danger" />,
      title: 'Certified Warranty',
      desc: 'Every repair comes with a certificate-backed warranty for peace of mind.',
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
                    <Card.Text className="text-muted">{item.desc}</Card.Text>
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




