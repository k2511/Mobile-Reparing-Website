// import React from "react";

// const ContactButtons = () => {
//   return (
//     <div
//       className="contact-btns"
//     >
//       <a
//         href="tel:+91 99000 04531"
//         className="contact-button"
//       >
//         <i className="bi bi-telephone-fill text-white fs-6"></i>
//       </a>

//       <a
//         href="https://wa.me/99000 04531"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="contact-button"
//       >
//         <i className="bi bi-whatsapp text-white fs-5"></i>
//       </a>
//     </div>
//   );
// };

// export default ContactButtons;




import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

/**
 * ContactButtons
 * - tel: opens dialer with tel:+<countrycode><number> (no spaces)
 * - wa.me: opens WhatsApp chat with digits-only phone and optional prefilled message
 *
 * Edit `countryNumber` / `displayNumber` if you need to change the phone.
 */
const ContactButtons = () => {
  // country code + number (digits only)
  const countryNumber = "919900004531";
  const displayNumber = "+91 99000 04531";

  // hrefs
  const telHref = `tel:+${countryNumber}`;
  const waMessage = encodeURIComponent(
    "Hello Screen Guru, I need help with my device. Please assist."
  );
  const waHref = `https://wa.me/${countryNumber}?text=${waMessage}`;

  // basic inline styles you can replace with your CSS classes
  const btnStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    borderRadius: 25,
    textDecoration: "none",
    color: "#fff",
  };

  return (
    <div
      className="contact-btns"
      style={{
        display: "flex",
        gap: 12,
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {/* Call button */}
      <a
        href={telHref}
        title={`Call ${displayNumber}`}
        aria-label={`Call ${displayNumber}`}
        style={{ ...btnStyle, background: "#263238" }}
      >
        <FaPhoneAlt aria-hidden="true" />
      </a>

      {/* WhatsApp button */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        title="Message on WhatsApp"
        aria-label="Message Screen Guru on WhatsApp"
        style={{ ...btnStyle, background: "#25D366" }}
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
    </div>
  );
};

export default ContactButtons;
