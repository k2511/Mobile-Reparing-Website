import React from 'react';
import why from "../assets/image/why.png";

const WhyUs = () => {
  return (
    <div
      className="container py-5"
      style={{ backgroundColor: '#fff', minHeight: '400px' }}
    >
      {/* Flexbox row with responsive spacing */}
      <div className="d-flex flex-column flex-md-row align-items-center why-row animate-mobile">
        
        {/* Image Section */}
        <div className="col-12 col-md-5 mb-4 mb-md-0 why-image">
          <img 
            src={why} 
            alt="Disassembled phone" 
            className="img-fluid"
          />
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-6">
          <h4
            style={{
              color: 'red',
              textTransform: 'uppercase',
              fontSize: '1rem',
              marginBottom: '10px',
            }}
          >
            WHY CHOOSE US
          </h4>
          <h3
            style={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '15px',
            }}
          >
            Fast Repairs, No Hassle, Trust Screen Guru Every Time.
          </h3>
          <p
            style={{
              color: '#666',
              fontSize: '0.9rem',
              marginBottom: '30px',
            }}
          >
            Vel sodales dictum etiam litora mauris risus sapien urna tristique.
            Finibus vivamus justo ut aenean lobortis consetetur tortor quam si.
          </p>

          {/* Features Grid */}
          <div className="row">
            {/* Feature Cards */}
            <div className="col-12 col-md-6 mb-3">
              <div className="card p-3 feature-card bg-light">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-gear-fill" style={{ color: 'red', fontSize: '1.5rem', marginRight: '10px' }}></i>
                  <h5 style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0 }}>Fast Turnaround Time</h5>
                </div>
                <p style={{ color: '#666', fontSize: '0.85rem' }}>Porta tellus fermentum ex turpis ipsum vestibulum purus vitae platea</p>
              </div>
            </div>

            <div className="col-12 col-md-6 mb-3">
              <div className="card p-3 feature-card text-white" style={{ backgroundColor: 'red' }}>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-shield-check" style={{ fontSize: '1.5rem', marginRight: '10px' }}></i>
                  <h5 style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0 }}>Comprehensive Warranty</h5>
                </div>
                <p style={{ fontSize: '0.85rem' }}>Porta tellus fermentum ex turpis ipsum vestibulum purus vitae platea</p>
              </div>
            </div>

            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <div className="card p-3 feature-card bg-light">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-laptop" style={{ color: 'red', fontSize: '1.5rem', marginRight: '10px' }}></i>
                  <h5 style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0 }}>Multi-Device Expertise</h5>
                </div>
                <p style={{ color: '#666', fontSize: '0.85rem' }}>Porta tellus fermentum ex turpis ipsum vestibulum purus vitae platea</p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="card p-3 feature-card bg-light">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-headset" style={{ color: 'red', fontSize: '1.5rem', marginRight: '10px' }}></i>
                  <h5 style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0 }}>Customer-Centric Support</h5>
                </div>
                <p style={{ color: '#666', fontSize: '0.85rem' }}>Porta tellus fermentum ex turpis ipsum vestibulum purus vitae platea</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* local CSS */}
      <style jsx>{`
        .why-row { gap: 0; }

        @media (min-width: 992px) {
          .why-row { gap: 3rem; }
        }

        /* Mobile-only animation */
        @media (max-width: 767px) {
          .animate-mobile {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeSlideUp 0.8s forwards;
          }

          .feature-card {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeSlideUp 0.8s forwards;
            animation-delay: 0.2s;
          }

          @keyframes fadeSlideUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </div>
  );
};

export default WhyUs;
