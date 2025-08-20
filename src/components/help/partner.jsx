// import React from "react";

// const Partner = () => {
//   return (
//     <div className="container py-5">
//       {/* Title */}
//       <h1 className="text-center fw-bold mb-4 text-danger display-6 display-md-5">
//         Partner With Us
//       </h1>

//       {/* Subtitle */}
//       <p className="text-center text-secondary fs-6 fs-md-5 mb-5">
//         Grow with <span className="text-danger fw-semibold">RedSetGo</span>.  
//         We welcome collaborations with organizations of all sizes.
//       </p>

//       {/* Partnership Options */}
//       <div className="row g-4">
//         <div className="col-md-4">
//           <div className="card h-100 shadow-sm border-0">
//             <div className="card-body">
//               <h5 className="card-title fw-semibold text-dark">
//                 Bulk Repairs
//               </h5>
//               <p className="card-text text-secondary">
//                 Discounted rates for schools, companies, and institutions.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-4">
//           <div className="card h-100 shadow-sm border-0">
//             <div className="card-body">
//               <h5 className="card-title fw-semibold text-dark">
//                 Corporate IT Support
//               </h5>
//               <p className="card-text text-secondary">
//                 Ongoing plans tailored to employee devices.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-4">
//           <div className="card h-100 shadow-sm border-0">
//             <div className="card-body">
//               <h5 className="card-title fw-semibold text-dark">
//                 Retail & Franchise
//               </h5>
//               <p className="card-text text-secondary">
//                 Expand our trusted brand in your region.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Why Partner With Us */}
//       <div className="mt-5">
//         <h3 className="h5 fw-semibold text-dark mb-3 text-center">
//           Why Partner With Us?
//         </h3>
//         <ul className="list-unstyled text-center text-secondary fs-6 lh-lg">
//           <li>✅ Expert technicians</li>
//           <li>✅ Fast turnaround</li>
//           <li>✅ Nationwide coverage</li>
//         </ul>
//       </div>

//       {/* Call to Action */}
//       <div className="text-center mt-4">
//         <p className="fw-medium text-dark fs-6">
//           Get in touch today and let’s build something together.
//         </p>
//         {/* <button className="btn btn-danger px-4 py-2 rounded-pill shadow-sm">
//           Contact Us
//         </button> */}
//          <a
//           href="tel:9916313616"
//           className="btn btn-danger px-4 py-2 rounded-pill shadow-sm"
//         >
//           📞 Call Us
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Partner;
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Partner = () => {
  return (
    <Container className="py-5">
      {/* Title */}
      <h1 className="text-center fw-bold mb-4 text-danger display-6">
        Partner With Us
      </h1>

      {/* Subtitle */}
      <p className="text-center text-secondary fs-6 mb-5">
        Grow with <span className="text-danger fw-semibold">RedSetGo</span>. <br />
        We welcome collaborations with organizations of all sizes.
      </p>

      {/* Partnership Options */}
      <Row className="g-4">
        <Col xs={12} md={4}>
  <Card className="h-100 shadow-sm border-0">
    <Card.Body>
      <Card.Title className="fw-semibold text-dark text-center">
        Bulk Repairs
      </Card.Title>
      <Card.Text className="text-secondary">
        Discounted rates for schools, companies, and institutions. 
        <br />
        We handle multiple devices efficiently with quick turnaround times, 
        ensuring minimal downtime. Our expert technicians provide quality repairs 
        for laptops, desktops, and mobile devices, tailored to your organization’s needs.
        <br />
        Flexible pickup and delivery options available.
      </Card.Text>
    </Card.Body>
  </Card>
</Col>

        <Col xs={12} md={4}>
  <Card className="h-100 shadow-sm border-0">
    <Card.Body>
      <Card.Title className="fw-semibold text-dark">
        Corporate IT Support
      </Card.Title>
      <Card.Text className="text-secondary">
        Ongoing plans tailored to employee devices. <br />
        Our corporate IT support ensures that your team stays productive with 
        minimal interruptions. We provide proactive maintenance, 
        remote troubleshooting, and on-site support when needed. 
        Customized service plans are available for organizations of all sizes, 
        covering laptops, desktops, and mobile devices. <br />
        Benefit from dedicated account management and priority response times.
      </Card.Text>
    </Card.Body>
  </Card>
</Col>

        <Col xs={12} md={4}>
  <Card className="h-100 shadow-sm border-0">
    <Card.Body>
      <Card.Title className="fw-semibold text-dark">
        Retail & Franchise
      </Card.Title>
      <Card.Text className="text-secondary">
        Expand our trusted brand in your region. <br />
        Join the RedSetGo network and become part of a growing, reputable brand. 
        We provide comprehensive franchise support including staff training, 
        marketing materials, and operational guidance to ensure your business thrives. 
        Benefit from proven processes, quality standards, and nationwide recognition. <br />
        Ideal for entrepreneurs looking to tap into a high-demand market with a 
        ready-made business model.
      </Card.Text>
    </Card.Body>
  </Card>
</Col>
      </Row>

      {/* Why Partner With Us */}
      <div className="mt-5 text-center">
        <h3 className="h5 fw-semibold text-dark mb-3">
          Why Partner With Us?
        </h3>
        <ul className="list-unstyled text-secondary fs-6 lh-lg">
          <li>✅ Expert technicians</li>
          <li>✅ Fast turnaround</li>
          <li>✅ Nationwide coverage</li>


        </ul>


      </div>

      {/* Call to Action */}
      <div className="text-center mt-4">
        <p className="fw-medium text-dark fs-6">
          Get in touch today and let’s build something together.
        </p>
        <Button
          href="tel:9916313616"
          variant="danger"
          className="px-4 py-2 rounded-pill shadow-sm"
        >
          📞 Call Us
        </Button>
      </div>
    </Container>
  );
};

export default Partner;
