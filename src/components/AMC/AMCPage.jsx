// import React, { useState, useMemo } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// // Import AMC related images
// import AMCBasic from "../../assets/amc/amc-basic.png";
// import AMCStandard from "../../assets/amc/amc-standard.png";
// import AMCPremium from "../../assets/amc/amc-premium.png";
// import AMCEnterprise from "../../assets/amc/amc-enterprise.png";
// import "./AMCPage.css";

// const AMCPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   const amcPlans = [
//     {
//       name: "Basic AMC",
//       image: AMCBasic,
//       features: [
//         "2 free services per year",
//         "Hardware diagnostics",
//         "Software troubleshooting",
//         "Basic cleaning",
//       ],
//     },
//     {
//       name: "Standard AMC",
//       image: AMCStandard,
//       features: [
//         "4 free services per year",
//         "Hardware repairs (parts extra)",
//         "Software installation",
//         "Virus removal",
//         "Priority support",
//       ],
//     },
//     {
//       name: "Premium AMC",
//       image: AMCPremium,
//       features: [
//         "Unlimited services",
//         "Hardware repairs (parts extra)",
//         "Data backup assistance",
//         "Onsite support (within city)",
//         "24/7 emergency support",
//       ],
//     },
//     {
//       name: "Enterprise AMC",
//       image: AMCEnterprise,
//       features: [
//         "Bulk device coverage",
//         "Dedicated technician",
//         "Preventive maintenance",
//         "Remote support",
//         "Custom SLA agreements",
//       ],
//     },
//   ];

//   // Optimize filtering with useMemo
//   const filteredPlans = useMemo(
//     () =>
//       amcPlans.filter((plan) =>
//         plan.name.toLowerCase().includes(searchQuery.toLowerCase())
//       ),
//     [searchQuery, amcPlans]
//   );

//   const handlePlanClick = (plan) => {
//     navigate(`/amc/${encodeURIComponent(plan.name)}`, {
//       state: { planName: plan.name, planImage: plan.image, planDetails: plan },
//     });
//   };

//   return (
//     <div className="amc-page">
//       {/* Header */}
//       <div className="amc-header">
//         <div className="amc-header-content">
//           <div className="breadcrumb">Home / Services / AMC</div>
//           <h1>Annual Maintenance Contracts</h1>
//         </div>
//       </div>
//       {/* Content */}
//       <Container className="py-5 text-center">
//         {/* Search Box */}
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Search AMC Plans..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             aria-label="Search AMC plans"
//             className="search-input"
//           />
//         </div>
//         {/* AMC Plans Grid */}
//         <Row xs={1} sm={2} md={2} lg={4} className="g-4">
//           {filteredPlans.map((plan, idx) => (
//             <Col key={idx} className="d-flex justify-content-center">
//               <div className="amc-card" onClick={() => handlePlanClick(plan)}>
//                 <img
//                   src={plan.image}
//                   alt={plan.name}
//                   className="amc-logo"
//                   loading="lazy"
//                 />
//                 <h3>{plan.name}</h3>
//                 <h4>{plan.price}</h4>
//                 <ul>
//                   {plan.features.map((feature, i) => (
//                     <li key={i}>{feature}</li>
//                   ))}
//                 </ul>
//                 <button className="btn btn-primary">Get This Plan</button>
//               </div>
//             </Col>
//           ))}
//         </Row>
//         {/* Info Section */}
//         <div className="info-section">
//           <h2>WHY CHOOSE OUR AMC PLANS?</h2>
//           <p>
//             Our Annual Maintenance Contracts provide peace of mind and
//             cost-effective solutions for all your device maintenance needs. With
//             regular check-ups and priority service, you'll experience fewer
//             breakdowns and longer device lifespan.
//           </p>
//           <h3>BENEFITS:</h3>
//           <ul>
//             <li>Cost-effective compared to individual repairs</li>
//             <li>Priority service and support</li>
//             <li>Regular preventive maintenance</li>
//             <li>Extended device lifespan</li>
//             <li>Reduced downtime</li>
//             <li>Expert technicians with genuine parts</li>
//           </ul>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default AMCPage;


// import React, { useState, useMemo } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// // Import AMC related images
// import AMCBasic from "../../assets/amc/amc-basic.png";
// import AMCStandard from "../../assets/amc/amc-standard.png";
// import AMCPremium from "../../assets/amc/amc-premium.png";
// import AMCEnterprise from "../../assets/amc/amc-enterprise.png";
// import "./AMCPage.css";

// const AMCPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const navigate = useNavigate();

//   const amcPlans = [
//     {
//       id: 1,
//       name: "Basic AMC",
//       category: "non-comprehensive",
//       price: "₹2,999/year",
//       image: AMCBasic,
//       features: [
//         "2 free services per year",
//         "Hardware diagnostics",
//         "Software troubleshooting",
//         "Basic system cleaning",
//         "Antivirus updates",
//         "System optimization"
//       ],
//       description: "Perfect for home users with basic maintenance needs"
//     },
//     {
//       id: 2,
//       name: "Standard AMC",
//       category: "non-comprehensive",
//       price: "₹5,499/year",
//       image: AMCStandard,
//       features: [
//         "4 free services per year",
//         "Hardware repairs (parts extra)",
//         "Software installation & updates",
//         "Virus removal & protection",
//         "Priority support",
//         "Performance optimization",
//         "Data backup assistance"
//       ],
//       description: "Ideal for small businesses and power users"
//     },
//     {
//       id: 3,
//       name: "Premium AMC",
//       category: "comprehensive",
//       price: "₹8,999/year",
//       image: AMCPremium,
//       features: [
//         "Unlimited services",
//         "Hardware repairs with parts included",
//         "Onsite support (within city)",
//         "24/7 emergency support",
//         "Complete data backup solutions",
//         "Preventive maintenance",
//         "System upgrades"
//       ],
//       description: "Complete coverage with parts replacement included"
//     },
//     {
//       id: 4,
//       name: "Enterprise AMC",
//       category: "comprehensive",
//       price: "Custom Pricing",
//       image: AMCEnterprise,
//       features: [
//         "Bulk device coverage",
//         "Dedicated technician",
//         "Custom SLA agreements",
//         "Remote support 24/7",
//         "Preventive maintenance schedules",
//         "Network infrastructure support",
//         "Emergency response team"
//       ],
//       description: "Tailored solutions for large organizations"
//     },
//   ];

//   // Optimize filtering with useMemo
//   const filteredPlans = useMemo(() => {
//     return amcPlans.filter((plan) => {
//       const matchesSearch = plan.name.toLowerCase().includes(searchQuery.toLowerCase());
//       const matchesCategory = selectedCategory === "all" || plan.category === selectedCategory;
//       return matchesSearch && matchesCategory;
//     });
//   }, [searchQuery, selectedCategory]);

//   const handlePlanClick = (plan) => {
//     navigate(`/amc/${encodeURIComponent(plan.name)}`, {
//       state: { planName: plan.name, planImage: plan.image, planDetails: plan },
//     });
//   };

//   return (
//     <div className="amc-page">
//       {/* Header */}
//       <div className="amc-header">
//         <div className="amc-header-content">
//           <div className="breadcrumb">Home / Services / AMC</div>
//           <h1>Annual Maintenance Contracts</h1>
//           <p className="header-subtitle">
//             Comprehensive maintenance solutions for all your computing devices
//           </p>
//         </div>
//       </div>

//       {/* Content */}
//       <Container className="py-5">
//         {/* Search and Filter Section */}
//         <div className="search-filter-section text-center mb-5">
//           <div className="search-container">
//             <input
//               type="text"
//               placeholder="Search AMC Plans..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               aria-label="Search AMC plans"
//               className="search-input"
//             />
//           </div>
          
//           <div className="filter-buttons mt-3">
//             <button 
//               className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
//               onClick={() => setSelectedCategory('all')}
//             >
//               All Plans
//             </button>
//             <button 
//               className={`filter-btn ${selectedCategory === 'comprehensive' ? 'active' : ''}`}
//               onClick={() => setSelectedCategory('comprehensive')}
//             >
//               Comprehensive
//             </button>
//             <button 
//               className={`filter-btn ${selectedCategory === 'non-comprehensive' ? 'active' : ''}`}
//               onClick={() => setSelectedCategory('non-comprehensive')}
//             >
//               Non-Comprehensive
//             </button>
//           </div>
//         </div>

//         {/* AMC Plans Grid */}
//         <Row xs={1} sm={2} md={2} lg={4} className="g-4 mb-5">
//           {filteredPlans.map((plan) => (
//             <Col key={plan.id} className="d-flex justify-content-center">
//               <div className="amc-card" onClick={() => handlePlanClick(plan)}>
//                 <div className="plan-badge">
//                   {plan.category === 'comprehensive' ? 'Parts Included' : 'Service Only'}
//                 </div>
//                 <img
//                   src={plan.image}
//                   alt={plan.name}
//                   className="amc-logo"
//                   loading="lazy"
//                 />
//                 <h3>{plan.name}</h3>
//                 <h4 className="plan-price">{plan.price}</h4>
//                 <p className="plan-description">{plan.description}</p>
//                 <ul className="features-list">
//                   {plan.features.map((feature, i) => (
//                     <li key={i}>{feature}</li>
//                   ))}
//                 </ul>
//                 <button className="btn btn-primary mt-auto">Get This Plan</button>
//               </div>
//             </Col>
//           ))}
//         </Row>

//         {/* AMC Types Explanation */}
//         <div className="amc-types-section mb-5">
//           <h2 className="text-center mb-4">Types of AMC Plans</h2>
//           <Row>
//             <Col md={6}>
//               <div className="type-card comprehensive">
//                 <h4>Comprehensive AMC</h4>
//                 <p>
//                   Covers both services and spare parts replacement. This provides complete 
//                   protection where all repairs, maintenance, and part replacements are included 
//                   in the annual fee.
//                 </p>
//                 <div className="type-features">
//                   <span>✓ Services Included</span>
//                   <span>✓ Parts Replacement Included</span>
//                   <span>✓ Higher Value</span>
//                 </div>
//               </div>
//             </Col>
//             <Col md={6}>
//               <div className="type-card non-comprehensive">
//                 <h4>Non-Comprehensive AMC</h4>
//                 <p>
//                   Covers services only, with spare parts charged separately. This is more 
//                   budget-friendly but additional costs may apply for part replacements.
//                 </p>
//                 <div className="type-features">
//                   <span>✓ Services Included</span>
//                   <span>✗ Parts Charged Extra</span>
//                   <span>✓ Budget Friendly</span>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </div>

//         {/* What's Included Section */}
//         <div className="whats-included-section mb-5">
//           <h2 className="text-center mb-4">What's Included in Our AMC</h2>
//           <Row>
//             <Col md={6} lg={3}>
//               <div className="service-card">
//                 <div className="service-icon">🔧</div>
//                 <h5>Preventive Maintenance</h5>
//                 <p>Regular system checks, cleaning, and updates to prevent issues</p>
//               </div>
//             </Col>
//             <Col md={6} lg={3}>
//               <div className="service-card">
//                 <div className="service-icon">🛠️</div>
//                 <h5>Hardware & Software Repair</h5>
//                 <p>Troubleshooting and repair of all hardware and software issues</p>
//               </div>
//             </Col>
//             <Col md={6} lg={3}>
//               <div className="service-card">
//                 <div className="service-icon">🛡️</div>
//                 <h5>Antivirus & Security</h5>
//                 <p>Regular antivirus updates and system security optimization</p>
//               </div>
//             </Col>
//             <Col md={6} lg={3}>
//               <div className="service-card">
//                 <div className="service-icon">📞</div>
//                 <h5>Support Services</h5>
//                 <p>On-call, remote, and onsite support based on your plan</p>
//               </div>
//             </Col>
//           </Row>
//         </div>

//         {/* Benefits Section */}
//         <div className="benefits-section">
//           <Row>
//             <Col lg={6}>
//               <h2>Why Choose Our AMC Plans?</h2>
//               <p className="lead">
//                 Our Annual Maintenance Contracts provide peace of mind and cost-effective 
//                 solutions for all your device maintenance needs. With regular check-ups and 
//                 priority service, you'll experience fewer breakdowns and longer device lifespan.
//               </p>
//             </Col>
//             <Col lg={6}>
//               <h3>Key Benefits:</h3>
//               <ul className="benefits-list">
//                 <li>✓ Increases computer life and performance</li>
//                 <li>✓ Reduces unexpected downtime significantly</li>
//                 <li>✓ Saves costs compared to one-time repairs</li>
//                 <li>✓ Priority support from certified technicians</li>
//                 <li>✓ Regular preventive maintenance schedules</li>
//                 <li>✓ Expert technicians with genuine parts</li>
//                 <li>✓ Customizable service level agreements</li>
//                 <li>✓ 24/7 emergency support (premium plans)</li>
//               </ul>
//             </Col>
//           </Row>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default AMCPage;


import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AMCPage.css";

const AMCPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const amcPlans = [
    {
      id: 1,
      name: "Basic AMC",
      category: "non-comprehensive",
      icon: "🔧",
      features: [
        "Regular preventive maintenance (checking systems, cleaning, updates)",
        "Troubleshooting and repair of hardware/software issues",
        "Antivirus updates and system optimization",
        "On-call or onsite support"
      ],
      description: "Perfect for home users with basic maintenance needs",
      coverage: "Service coverage only"
    },
    {
      id: 2,
      name: "Standard AMC",
      category: "non-comprehensive",
      icon: "⚙️",
      features: [
        "Regular preventive maintenance (checking systems, cleaning, updates)",
        "Troubleshooting and repair of hardware/software issues",
        "Replacement of faulty parts (sometimes extra cost)",
        "Antivirus updates and system optimization",
        "On-call or onsite support"
      ],
      description: "Ideal for small businesses and power users",
      coverage: "Service coverage with optional parts replacement"
    },
    {
      id: 3,
      name: "Premium AMC",
      category: "comprehensive",
      icon: "🛡️",
      features: [
        "Regular preventive maintenance (checking systems, cleaning, updates)",
        "Troubleshooting and repair of hardware/software issues",
        "Replacement of faulty parts included",
        "Antivirus updates and system optimization",
        "On-call or onsite support"
      ],
      description: "Complete coverage with parts replacement included",
      coverage: "Full service and parts coverage"
    },
    {
      id: 4,
      name: "Enterprise AMC",
      category: "comprehensive",
      icon: "🏢",
      features: [
        "Bulk device coverage",
        "Dedicated technician",
        "Custom SLA agreements",
        "Remote support 24/7",
        "Preventive maintenance schedules",
        "Network infrastructure support",
        "Emergency response team"
      ],
      description: "Tailored solutions for large organizations",
      coverage: "Enterprise-grade full coverage with dedicated support"
    },
  ];

  // Optimize filtering with useMemo
  const filteredPlans = useMemo(() => {
    return amcPlans.filter((plan) => {
      const matchesSearch = plan.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || plan.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handlePlanClick = (plan) => {
    navigate(`/amc/${encodeURIComponent(plan.name)}`, {
      state: { planDetails: plan },
    });
  };

  return (
    <div className="amc-page">
      {/* Header */}
      <div className="amc-header">
        <div className="amc-header-content">
          {/* <div className="breadcrumb">Home / Services / AMC</div> */}
          <h1>Annual Maintenance Contracts</h1>
          <p className="header-subtitle">
            Comprehensive maintenance solutions for all your computing devices
          </p>
        </div>
      </div>

      {/* Content */}
      <Container className="py-5">
        {/* Search and Filter Section */}
        <div className="search-filter-section text-center mb-5">
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
          
          <div className="filter-buttons mt-3">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Plans
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'comprehensive' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('comprehensive')}
            >
              Comprehensive
            </button>
            <button 
              className={`filter-btn ${selectedCategory === 'non-comprehensive' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('non-comprehensive')}
            >
              Non-Comprehensive
            </button>
          </div>
        </div>

        {/* AMC Plans Grid */}
        <Row xs={1} sm={2} md={2} lg={4} className="g-4 mb-5">
          {filteredPlans.map((plan) => (
            <Col key={plan.id} className="d-flex justify-content-center">
              <div className="amc-card" onClick={() => handlePlanClick(plan)}>
                <div className="plan-badge">
                  {plan.category === 'comprehensive' ? 'Parts Included' : 'Service Only'}
                </div>
                <div className="plan-icon">{plan.icon}</div>
                <h3>{plan.name}</h3>
                <p className="coverage-info">{plan.coverage}</p>
                <p className="plan-description">{plan.description}</p>
                <ul className="features-list">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button className="btn btn-primary mt-auto">Get This Plan</button>
              </div>
            </Col>
          ))}
        </Row>

        {/* AMC Types Explanation */}
        <div className="amc-types-section mb-5">
          <h2 className="text-center mb-4">Types of AMC Plans</h2>
          <Row>
            <Col md={6}>
              <div className="type-card comprehensive">
                <h4>Comprehensive AMC</h4>
                <p>
                  Covers both services and spare parts replacement. This provides complete 
                  protection where all repairs, maintenance, and part replacements are included 
                  in the annual fee.
                </p>
                <div className="type-features">
                  <span>✓ Services Included</span>
                  <span>✓ Parts Replacement Included</span>
                  <span>✓ Higher Value</span>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="type-card non-comprehensive">
                <h4>Non-Comprehensive AMC</h4>
                <p>
                  Covers services only, with spare parts charged separately. This is more 
                  budget-friendly but additional costs may apply for part replacements.
                </p>
                <div className="type-features">
                  <span>✓ Services Included</span>
                  <span>✗ Parts Charged Extra</span>
                  <span>✓ Budget Friendly</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <Row>
            <Col lg={6}>
              <h2>Why Choose Our AMC Plans?</h2>
              <p className="lead">
                Our Annual Maintenance Contracts provide peace of mind and cost-effective 
                solutions for all your device maintenance needs. With regular check-ups and 
                priority service, you'll experience fewer breakdowns and longer device lifespan.
              </p>
            </Col>
            <Col lg={6}>
              <h3>Key Benefits:</h3>
              <ul className="benefits-list">
                <li>✓ Increases computer life and performance</li>
                <li>✓ Reduces unexpected downtime significantly</li>
                <li>✓ Saves costs compared to one-time repairs</li>
                <li>✓ Priority support from the service provider</li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AMCPage;