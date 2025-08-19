import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Import AMC related images
import AMCBasic from "../../assets/amc/amc-basic.png";
import AMCStandard from "../../assets/amc/amc-standard.png";
import AMCPremium from "../../assets/amc/amc-premium.png";
import AMCEnterprise from "../../assets/amc/amc-enterprise.png";
import "./AMCPage.css";

const AMCPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const amcPlans = [
    {
      name: "Basic AMC",
      image: AMCBasic,
      price: "₹2,999/year",
      features: [
        "2 free services per year",
        "Hardware diagnostics",
        "Software troubleshooting",
        "Basic cleaning",
      ],
    },
    {
      name: "Standard AMC",
      image: AMCStandard,
      price: "₹4,999/year",
      features: [
        "4 free services per year",
        "Hardware repairs (parts extra)",
        "Software installation",
        "Virus removal",
        "Priority support",
      ],
    },
    {
      name: "Premium AMC",
      image: AMCPremium,
      price: "₹7,999/year",
      features: [
        "Unlimited services",
        "Hardware repairs (parts extra)",
        "Data backup assistance",
        "Onsite support (within city)",
        "24/7 emergency support",
      ],
    },
    {
      name: "Enterprise AMC",
      image: AMCEnterprise,
      price: "Custom Quote",
      features: [
        "Bulk device coverage",
        "Dedicated technician",
        "Preventive maintenance",
        "Remote support",
        "Custom SLA agreements",
      ],
    },
  ];

  // Optimize filtering with useMemo
  const filteredPlans = useMemo(
    () =>
      amcPlans.filter((plan) =>
        plan.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery, amcPlans]
  );

  const handlePlanClick = (plan) => {
    navigate(`/amc/${encodeURIComponent(plan.name)}`, {
      state: { planName: plan.name, planImage: plan.image, planDetails: plan },
    });
  };

  return (
    <div className="amc-page">
      {/* Header */}
      <div className="amc-header">
        <div className="amc-header-content">
          <div className="breadcrumb">Home / Services / AMC</div>
          <h1>Annual Maintenance Contracts</h1>
        </div>
      </div>
      {/* Content */}
      <Container className="py-5 text-center">
        {/* Search Box */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search AMC Plans..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search AMC plans"
            className="search-input"
          />
        </div>
        {/* AMC Plans Grid */}
        <Row xs={1} sm={2} md={2} lg={4} className="g-4">
          {filteredPlans.map((plan, idx) => (
            <Col key={idx} className="d-flex justify-content-center">
              <div className="amc-card" onClick={() => handlePlanClick(plan)}>
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="amc-logo"
                  loading="lazy"
                />
                <h3>{plan.name}</h3>
                <h4>{plan.price}</h4>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button className="btn btn-primary">Get This Plan</button>
              </div>
            </Col>
          ))}
        </Row>
        {/* Info Section */}
        <div className="info-section">
          <h2>WHY CHOOSE OUR AMC PLANS?</h2>
          <p>
            Our Annual Maintenance Contracts provide peace of mind and
            cost-effective solutions for all your device maintenance needs. With
            regular check-ups and priority service, you'll experience fewer
            breakdowns and longer device lifespan.
          </p>
          <h3>BENEFITS:</h3>
          <ul>
            <li>Cost-effective compared to individual repairs</li>
            <li>Priority service and support</li>
            <li>Regular preventive maintenance</li>
            <li>Extended device lifespan</li>
            <li>Reduced downtime</li>
            <li>Expert technicians with genuine parts</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default AMCPage;