// import React from "react";
// const ContactButtons = () => {
//   return (
//     <div
//       className="contact-btns position-fixed bottom-0 end-0 mb-4 me-3 d-flex flex-column gap-2"
//       style={{
//         zIndex: 9999, // ensure it stays on top
//       }}
//     >
//       <a
//         href="tel:+1234567890"
//         className="d-flex align-items-center justify-content-center rounded-circle shadow contact-button"
//       >
//         <i className="bi bi-telephone-fill text-white fs-6"></i>
//       </a>

//       <a
//         href="https://wa.me/1234567890"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="d-flex align-items-center justify-content-center rounded-circle shadow contact-button"
//       >
//         <i className="bi bi-whatsapp text-white fs-5"></i>
//       </a>
//     </div>
//   );
// };

// export default ContactButtons;





import React from "react";

const ContactButtons = () => {
  return (
    <div
      className="contact-btns"
    >
      <a
        href="tel:+1234567890"
        className="contact-button"
      >
        <i className="bi bi-telephone-fill text-white fs-6"></i>
      </a>

      <a
        href="https://wa.me/1234567890"
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
