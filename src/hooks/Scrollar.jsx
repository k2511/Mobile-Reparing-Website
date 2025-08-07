
// src/components/Popup.jsx
import './Scrollar.css'

export default function Scrollar({ onClose }) {
    
    return (
        <div className="popup-overlay d-flex align-items-center justify-content-center min-vh-100 bg-dark bg-opacity-50">
        <div className="popup-content container-md bg-white rounded-3 shadow-lg p-4 p-md-5 position-relative" style={{ maxWidth: '600px' }}>
          {/* Close Button */}
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3"
            aria-label="Close"
            onClick={onClose}
          ></button>
          <h4 className="text-center mb-4 fw-bold text-danger">Special Offer!</h4>
          <p className="text-center text-muted mb-5">Don't miss out. Contact us today!</p>
          <div>
            <div className="row g-4">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label fw-medium">Name</label>
                <input
                  type="text"
                  className="form-control rounded-3"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label fw-medium">Email</label>
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label fw-medium">Message</label>
                <textarea
                  className="form-control rounded-3"
                  id="message"
                  rows="5"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <div className="col-12 d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-success px-4 py-2 fw-medium rounded-3"
                  onClick={() => alert('Form submitted!')} // Replace with actual submit logic
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
  