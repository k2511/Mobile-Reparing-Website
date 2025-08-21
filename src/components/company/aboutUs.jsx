// import React from 'react';

// const AboutUs = () => {
//   return (
//      <div className="container py-5">
//       {/* Hero Section */}
//       <div className="text-center mb-5">
//         <h1 className="fw-bold text-danger">About RedSetGo</h1>
//         <p className="lead text-secondary mt-3">
//           Fast, reliable, and transparent device repair services delivered right to your doorstep.
//         </p>
//       </div>

//       {/* Company Story & Mission */}
//       <div className="row align-items-center mb-5">
//         <div className="col-md-6 mb-4 mb-md-0">
//           <img
//             src="https://via.placeholder.com/500x300"
//             alt="RedSetGo Repairs"
//             className="img-fluid rounded shadow-sm"
//           />
//         </div>
//         <div className="col-md-6">
//           <h3 className="fw-bold text-danger mb-3">Our Story</h3>
//           <p>
//            RedSetGo began as a single repair center with a simple mission: 
//             provide fast and honest device repair services. Over the years, we have grown to serve 
//             thousands of satisfied customers across Maharashtra with our team of certified technicians.
//           </p>

//           <h3 className="fw-bold text-danger mt-4 mb-3">Our Mission</h3>
//           <p>
//             To make device repair hassle-free and transparent. We use genuine parts and perform repairs 
//             right in front of you in under 30 minutes, with no hidden charges—just reliable service.
//           </p>
//         </div>
//       </div>

//       {/* Vision & Values */}
//       <div className="row text-center">
//         <div className="col-md-4 mb-4">
//           <div className="p-4 shadow-sm rounded-3 bg-light h-100">
//             <h5 className="fw-bold text-danger mb-3">Vision</h5>
//             <p>
//               To be the most trusted and convenient device repair service in India, redefining customer experience.
//             </p>
//           </div>
//         </div>

//         <div className="col-md-4 mb-4">
//           <div className="p-4 shadow-sm rounded-3 bg-light h-100">
//             <h5 className="fw-bold text-danger mb-3">Values</h5>
//             <p>
//               Integrity, transparency, speed, and customer satisfaction guide every repair we perform.
//             </p>
//           </div>
//         </div>

//         <div className="col-md-4 mb-4">
//           <div className="p-4 shadow-sm rounded-3 bg-light h-100">
//             <h5 className="fw-bold text-danger mb-3">Why Choose Us</h5>
//             <p>
//               Fast doorstep service, certified technicians, genuine parts, and a commitment to honesty.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="text-center mt-5">
//         <h4 className="fw-bold text-danger mb-3">Ready to Fix Your Device?</h4>
//         <p className="mb-4">Contact RedSetGo today and get your device repaired quickly and reliably.</p>
//         <a href="/contact" className="btn btn-danger px-4 py-2">
//           Contact Us
//         </a>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5 px-3">
        <h1 className="fw-bold text-danger">About Us</h1>
        <p className="lead text-secondary mt-3">
          At <span className="fw-bold text-dark">RedSetGo</span>, we believe technology should last longer and not end up in landfills.  
          That’s why we provide reliable, affordable, and sustainable repair services for smartphones, laptops, tablets, and more.
        </p>
      </div>

      {/* Who We Are Section */}
      <div className="row justify-content-center text-center mb-5 px-3">
        <div className="col-lg-10">
          <h3 className="fw-bold text-danger mb-3">Who We Are</h3>
          <p>
            We are a team of <span className="fw-bold">certified technicians</span> passionate about giving devices a new lease on life.  
            From cracked screens to complex hardware & software issues, we help individuals, businesses,  
            and organizations keep their tech running smoothly.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-5 px-3">
        <h3 className="fw-bold text-danger text-center mb-4">Why Choose Us</h3>
        <div className="row g-4">
          <div className="col-md-4 col-sm-6">
            <div className="p-4 shadow-sm rounded-3 bg-light h-100 border-top border-danger border-3 text-center">
              <h5 className="fw-bold text-dark mb-3">Trusted Worldwide</h5>
              <p>Trusted by <span className="fw-bold text-danger">25,000+ users</span> and brands globally.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="p-4 shadow-sm rounded-3 bg-light h-100 border-top border-danger border-3 text-center">
              <h5 className="fw-bold text-dark mb-3">Fast Service</h5>
              <p>Most repairs are completed <span className="fw-bold text-danger">same-day or next-day</span>.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="p-4 shadow-sm rounded-3 bg-light h-100 border-top border-danger border-3 text-center">
              <h5 className="fw-bold text-dark mb-3">Authentic Parts</h5>
              <p>We use only <span className="fw-bold text-danger">quality-tested, manufacturer-grade components</span>.</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="p-4 shadow-sm rounded-3 bg-light h-100 border-top border-danger border-3 text-center">
              <h5 className="fw-bold text-dark mb-3">Transparent Pricing</h5>
              <p>Clear estimates, <span className="fw-bold text-danger">no hidden costs</span>.</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="p-4 shadow-sm rounded-3 bg-light h-100 border-top border-danger border-3 text-center">
              <h5 className="fw-bold text-dark mb-3">Eco-Friendly</h5>
              <p>Reducing <span className="fw-bold text-danger">e-waste</span> through responsible repairs and recycling.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="row g-4 text-center mb-5 px-3">
        <div className="col-md-6">
          <div className="p-4 shadow-sm rounded-3 bg-dark text-white h-100">
            <h5 className="fw-bold text-danger mb-3">Our Mission</h5>
            <p>
              To make device repair accessible, trustworthy, and environmentally responsible  
              so people everywhere can rely on technology without unnecessary replacements.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-4 shadow-sm rounded-3 bg-dark text-white h-100">
            <h5 className="fw-bold text-danger mb-3">Our Vision</h5>
            <p>
              To become one of the world’s most trusted repair services, leading in  
              <span className="fw-bold text-white"> innovation, sustainability, and customer satisfaction</span>.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-5 px-3">
        <h4 className="fw-bold text-dark mb-3">Ready to Fix Your Device?</h4>
        <p className="mb-4">
          Contact <span className="fw-bold text-danger">RedSetGo</span> today and get your device repaired quickly and reliably.
        </p>
        <a href="/contact-us" className="btn btn-danger px-4 py-2 fw-bold shadow">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
