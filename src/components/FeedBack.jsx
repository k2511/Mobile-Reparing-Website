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
        <div>
          <ul
            className="list-unstyled text-center m-0 p-0"
            style={{ lineHeight: '1', margin: 0, padding: 0 }}
          >
            <li>E</li>
            <li>N</li>
            <li>Q</li>
            <li>U</li>
            <li>I</li>
            <li>R</li>
            <li>Y</li>
          </ul>
        </div>
      </button>

      {/* Feedback Form */}
      <div
        className={`position-absolute top-50 end-100 translate-middle-y ms-3 ${
          isOpen ? 'd-block' : 'd-none'
        }`}
        style={{ width: '390px', zIndex: 1040 }}
      >
        <div className="card shadow-lg p-4 bg-white rounded-4 position-relative">
          {/* Close Icon */}
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3"
            aria-label="Close"
            onClick={handleToggle}
          ></button>

          <h6 className="text-center fw-bold mb-3 mt-3">Quick Enquiry</h6>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Enquiry submitted!');
              handleToggle();
            }}
          >
            {/* Fields */}
            {[
              { label: 'Name', type: 'text', required: true },
              { label: 'Phone', type: 'tel', required: true },
              { label: 'Brand', type: 'text' },
              { label: 'Model', type: 'text' },
              { label: 'Problem', type: 'text' },
              { label: 'Area', type: 'text' },
              { label: 'City', type: 'text' },
            ].map((field, idx) => (
              <div className="mb-2" key={idx}>
                <label className="form-label mb-1" style={{ fontSize: '13px' }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  className="form-control form-control-sm"
                  required={field.required || false}
                />
              </div>
            ))}

            {/* Message */}
            <div className="mb-2">
              <label className="form-label mb-1" style={{ fontSize: '13px' }}>
                Message
              </label>
              <textarea
                className="form-control form-control-sm"
                rows="2"
                placeholder="Your message..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="d-grid mt-3">
              <button
                type="submit"
                className="btn btn-sm text-white fw-semibold"
                style={{ backgroundColor: '#e51c23' }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;





