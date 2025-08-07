import React from 'react';

const Home = () => (
  <section className="hero py-5 text-center">
    <div className="container">
      <h1 className="mb-3 fw-bold">Fast & Reliable Mobile Repair</h1>
      <p className="lead mb-4">Screen replacement, battery issues, water damage repairs – done in under 60 minutes.</p>
      {/* <Link to="/services" className="btn btn-outline-primary btn-lg">View Services</Link> */}
      <div className="mt-5">
        <img src="https://source.unsplash.com/1000x400/?mobile,repair,phone" alt="Mobile Repair" className="img-fluid rounded shadow"/>
      </div>
    </div>
  </section>
);

export default Home;
