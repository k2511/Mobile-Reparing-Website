import React, { useState } from 'react';
import './FeedBack.css';

const FeedBack = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="position-fixed top-50 end-0 translate-middle-y pe-3">
      {/* Feedback Button */}
      <button
        className="btn-danger p-2 fw-semibold text-white position-fixed top-50 translate-middle-y"
        onClick={handleToggle}
        style={{
          backgroundColor: 'rgb(255, 0, 0)',
          right: 0,
          borderTopLeftRadius: '15px',
          borderBottomLeftRadius: '15px',
          borderTopRightRadius: '0',
          borderBottomRightRadius: '0',
          boxShadow: '-5px 10px 6px rgba(0, 0, 0, 0.3)',
          zIndex: 1050,
        }}
      >
        <ul className="list-unstyled text-center m-0 p-0" style={{ lineHeight: '1' }}>
          <li>E</li>
          <li>N</li>
          <li>Q</li>
          <li>U</li>
          <li>I</li>
          <li>R</li>
          <li>Y</li>
        </ul>
      </button>

      {/* Feedback Form */}
      <div
        className={`position-absolute top-50 end-100 translate-middle-y ms-3 ${isOpen ? 'd-block' : 'd-none'}`}
        style={{ width: '390px', zIndex: 1040 }}
      >
        <div className="card shadow-lg p-4 bg-white rounded-4 position-relative">
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3"
            aria-label="Close"
            onClick={handleToggle}
          ></button>

          <h5 className="text-center fw-bold mb-2">Ongofix Website Satisfaction Survey</h5>

          <p className="text-muted text-center mb-3" style={{ fontSize: '14px' }}>
            We appreciate your time! Please take a moment to share your feedback on your experience with the Ongofix website.
          </p>

          <p className="text-muted mb-3" style={{ fontSize: '14px' }}>
            Based on your experience, how likely are you to recommend the Ongofix website to your friends or colleagues?
          </p>

          {/* Rate Us */}
          <div className="mb-3">
            <label className="form-label fw-semibold d-block">Rate Us:</label>
            <div className="d-flex justify-content-between flex-wrap gap-1">
              {[...Array(10)].map((_, i) => (
                <button
                  key={i}
                  className="btn btn-outline-secondary btn-sm flex-fill"
                  style={{ flex: '0 0 28px', padding: '6px 0' }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Comment */}
          <div className="mb-3">
            <label htmlFor="comments" className="form-label fw-semibold">
              Tell us more: <span className="fw-normal">What influenced your rating?</span>
            </label>
            <textarea
              className="form-control"
              id="comments"
              rows="3"
              placeholder="Enter your feedback here..."
            ></textarea>
          </div>

          {/* Submit */}
          <div className="d-grid">
            <button
              className="btn text-white fw-semibold"
              style={{ backgroundColor: '#e51c23' }}
              onClick={() => alert('Feedback submitted!')}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Floating Phone and WhatsApp Buttons */}
      <div
        className="position-fixed bottom-0 end-0 mb-4 me-4 d-flex flex-column gap-2"
        style={{ zIndex: 1051 }}
      >
        {/* Phone Button */}
        <a
          href="tel:+1234567890"
          className="d-flex align-items-center justify-content-center rounded-circle"
          style={{
            backgroundColor: '#3b5998',
            width: '50px',
            height: '50px',
          }}
        >
          <i className="bi bi-telephone-fill text-white fs-5"></i>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex align-items-center justify-content-center rounded-circle"
          style={{
            backgroundColor: '#25D366',
            width: '50px',
            height: '50px',
          }}
        >
          <i className="bi bi-whatsapp text-white fs-4"></i>
        </a>
      </div>
    </div>
  );
};

export default FeedBack;





