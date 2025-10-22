import React, { useState } from 'react';
import './FeedBack.css';

const FeedBack = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    Name: '',
    Phone: '',
    Brand: '',
    Model: '',
    Problem: '',
    Area: '',
    City: '',
    Message: '',
  });

  // Destination WhatsApp number (10-digit Indian number)
  const DESTINATION_RAW = '9900004531';

  // Normalize to full international format: 91XXXXXXXXXX
  const normalizeDestination = (raw) => {
    if (!raw) return '';
    const digits = raw.replace(/\D/g, '');
    if (digits.length === 10) return '91' + digits;
    if (digits.length === 11 && digits.startsWith('0')) return '91' + digits.slice(1);
    if (digits.length >= 12) return digits; // assume already international
    return '';
  };

  const destinationNumber = normalizeDestination(DESTINATION_RAW);

  const handleToggle = () => setIsOpen((v) => !v);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const isUserPhoneValid = (phone) => {
    const digits = (phone || '').replace(/\D/g, '');
    return digits.length >= 7; // simple minimal check
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitting) return;

    if (!formData.Name || !formData.Phone) {
      alert('Please enter your Name and Phone before submitting.');
      return;
    }
    if (!isUserPhoneValid(formData.Phone)) {
      alert('Please enter a valid phone number.');
      return;
    }

    if (!destinationNumber) {
      alert('Destination WhatsApp number is not configured correctly.');
      return;
    }

    setSubmitting(true);

    const text = `📩 New Enquiry:
*Name:* ${formData.Name}
*Phone:* ${formData.Phone}
*Brand:* ${formData.Brand || '-'}
*Model:* ${formData.Model || '-'}
*Problem:* ${formData.Problem || '-'}
*Area:* ${formData.Area || '-'}
*City:* ${formData.City || '-'}
*Message:* ${formData.Message || '-'}`;

    const encoded = encodeURIComponent(text);

    // WhatsApp URL (works on mobile & desktop)
    const url = `https://wa.me/${destinationNumber}?text=${encoded}`;

    console.log('WhatsApp URL:', url); // for debugging

    try {
      const newWin = window.open(url, '_blank', 'noopener,noreferrer');

      if (!newWin) {
        // Fallback in same tab if popup blocked
        window.location.href = url;
      } else {
        try {
          newWin.focus();
        } catch (err) {}
      }

      // Reset form
      setFormData({
        Name: '',
        Phone: '',
        Brand: '',
        Model: '',
        Problem: '',
        Area: '',
        City: '',
        Message: '',
      });
      setIsOpen(false);
    } catch (err) {
      console.error('Error opening WhatsApp:', err);
      alert('Unable to open WhatsApp. Please try again or contact the number directly.');
    } finally {
      setTimeout(() => setSubmitting(false), 800);
    }
  };

  return (
    <div className="feedback-container">
      {/* Enquiry Button */}
      <button
        className="enquiry-button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls="feedback-form"
        title="Open enquiry form"
      >
        <ul className="enquiry-text list-unstyled text-center m-0 p-0">
          <li>E</li>
          <li>N</li>
          <li>Q</li>
          <li>U</li>
          <li>I</li>
          <li>R</li>
          <li>Y</li>
        </ul>
      </button>

      {/* Enquiry Form */}
      <div
        id="feedback-form"
        className={`feedback-form-container ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="card feedback-card">
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3"
            aria-label="Close"
            onClick={handleToggle}
          ></button>

          <h6 className="text-center fw-bold mb-3 mt-4">Quick Enquiry</h6>

          <form onSubmit={handleSubmit} noValidate>
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
                  name={field.label}
                  className="form-control form-control-sm"
                  required={field.required || false}
                  value={formData[field.label]}
                  onChange={handleChange}
                />
              </div>
            ))}

            <div className="mb-2">
              <label className="form-label mb-1" style={{ fontSize: '13px' }}>
                Message
              </label>
              <textarea
                name="Message"
                className="form-control form-control-sm"
                rows="2"
                placeholder="Your message..."
                value={formData.Message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="d-grid mt-3">
              <button
                type="submit"
                className="btn btn-sm text-white fw-semibold"
                style={{ backgroundColor: '#e51c23' }}
                disabled={submitting}
              >
                {submitting ? 'Opening WhatsApp...' : 'Submit via WhatsApp'}
              </button>
            </div>

            <div className="mt-2 small text-muted">
              Destination WhatsApp number: <strong>{destinationNumber}</strong>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
