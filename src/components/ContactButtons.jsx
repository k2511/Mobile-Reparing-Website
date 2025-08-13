import React from "react";

const ContactButtons = () => {
  return (
    <div
      className="contact-btns"
    >
      <a
        href="tel:+91 7676784785"
        className="contact-button"
      >
        <i className="bi bi-telephone-fill text-white fs-6"></i>
      </a>

      <a
        href="https://wa.me/917676784785"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-button"
      >
        <i className="bi bi-whatsapp text-white fs-5"></i>
      </a>
    </div>
  );
};

export default ContactButtons;
