// import React from "react";

// const TermsCondition = () => {
//   return (
//     <div style={{ padding: "50px 20px", maxWidth: "900px", margin: "0 auto" }}>
//       <h1
//         style={{
//           textAlign: "center",
//           fontWeight: "bold",
//           marginBottom: "20px",
//           color: "#d32f2f",
//         }}
//       >
//         Terms & Conditions
//       </h1>
//       <p style={{ fontSize: "1.1rem", color: "#333", lineHeight: "1.7" }}>
//         Welcome to <span style={{ color: "#d32f2f", fontWeight: "600" }}>RedSet Go</span>. 
//         By accessing our website or using our repair services, you agree to the 
//         following terms and conditions. Please review them carefully.
//       </p>

//       <h3 style={{ marginTop: "30px", color: "#000", fontWeight: "600" }}>
//         Service Terms
//       </h3>
//       <ul style={{ color: "#444", lineHeight: "1.8" }}>
//         <li>
//           <span style={{ color: "#d32f2f", fontWeight: "600" }}>RedSet Go</span>{" "}
//           provides repair services for smartphones, laptops, tablets, and other 
//           electronic devices.
//         </li>
//         <li>
//           Customers are responsible for backing up their data before repair.{" "}
//           <span style={{ color: "#d32f2f", fontWeight: "600" }}>RedSetGo</span>{" "}
//           is not liable for lost or corrupted files.
//         </li>
//         <li>
//           Quotes provided are estimates. Final charges may vary depending on the 
//           service requirements.
//         </li>
//       </ul>

//       <h3 style={{ marginTop: "30px", color: "#000", fontWeight: "600" }}>
//         Warranty & Limitations
//       </h3>
//       <ul style={{ color: "#444", lineHeight: "1.8" }}>
//         <li>
//           All repairs are covered under the{" "}
//           <span style={{ color: "#d32f2f", fontWeight: "600" }}>
//             RedSetGo Warranty Policy
//           </span>.
//         </li>
//         <li>
//           Warranty does not apply in cases of accidental damage, liquid
//           exposure, third-party tampering, or misuse after service.
//         </li>
//       </ul>

//       <p style={{ marginTop: "30px", color: "#333", fontSize: "1rem" }}>
//         By continuing to use our services, you acknowledge and accept these 
//         terms in full.
//       </p>

//       <p
//         style={{
//           marginTop: "20px",
//           fontWeight: "500",
//           color: "#000",
//           borderLeft: "4px solid #d32f2f",
//           paddingLeft: "12px",
//         }}
//       >
//         <strong style={{ color: "#d32f2f" }}>Need help?</strong> Contact us
//         anytime for clarification or support.
//       </p>
//     </div>
//   );
// };

// export default TermsCondition;


import React from "react";

const TermsCondition = () => {
  return (
    <div className="container py-4 py-md-5">
      <h1 className="text-center fw-bold mb-4 text-danger display-6 display-md-5">
        Terms & Conditions
      </h1>

      <p className="fs-6 fs-md-5 text-secondary lh-lg">
        At <span className="text-danger fw-semibold">RedSetGo</span>, your trust
        and satisfaction are at the heart of what we do. These Terms and
        Conditions outline how we provide our repair services, supply genuine
        parts, and protect your data. By using our website or booking a service,
        you agree to these Terms, which are designed to ensure fairness,
        transparency, and peace of mind for every customer.
      </p>

      {/* Sections */}
      <Section title="1. Definitions">
        <ul className="lh-lg text-secondary ps-3">
          <li>
            <b>Company / We / Us / Our:Refers to</b>{" "}
            <span className="text-danger fw-semibold">RedSetGo</span>.
          </li>
          <li>
            <b>Customer / You / Your:</b> Refers to any individual or business
            booking or using our services.
          </li>
          <li>
            <b>Services:</b> Includes device diagnostics, repairs, part
            replacements, software support, and related services.
          </li>
          <li>
            <b>Devices/Gadgets:</b> Refers to smartphones, laptops, computers,
            tablets, and other electronic products accepted for repair.
          </li>
        </ul>
      </Section>

      <Section title="2. Service Eligibility">
        <ul className="lh-lg text-secondary ps-3">
          <li>You must be at least 18 years old, or have parent/guardian consent.</li>
          <li>You must be the rightful owner of the device, or have authorization from the owner to request repair.</li>
        </ul>
      </Section>

      <Section title="3. Service Bookings & Payments">
        <ul className="lh-lg text-secondary ps-3">
          <li>Service requests can be made via website, phone, WhatsApp, or at our service center.</li>
          <li>Diagnostic checks may require an upfront fee (communicated before acceptance).</li>
          <li>Repairs will only proceed once you approve the diagnostic estimate.</li>
          <li>Payments must be completed before device collection/delivery unless otherwise agreed in writing.</li>
        </ul>
      </Section>

      <Section title="4. Diagnostics & Repair Authorization">
        <ul className="lh-lg text-secondary ps-3">
          <li>By submitting your device, you authorize RedSetGo to run diagnostics and perform approved repairs.</li>
          <li>We may require temporary access to your device software.</li>
          <li>You are responsible for backing up your data. We are not responsible for data loss.</li>
        </ul>
      </Section>

      <Section title="5. Device Handover & Collection">
        <ul className="lh-lg text-secondary ps-3">
          <li>Devices may be handed over at our service centers or via courier (where available).</li>
          <li>Risk of damage/loss during third-party courier transit is beyond our control.</li>
          <li>Devices must be collected within 30 days of repair completion; otherwise, storage fees may apply, or disposal may occur after notice.</li>
        </ul>
      </Section>

      <Section title="6. Repair Warranty & Rework Policy">
        <ul className="lh-lg text-secondary ps-3">
          <li>Most repairs/parts include a limited warranty (duration communicated at booking).</li>
          <li>Warranty covers only the specific issue repaired, not future unrelated issues or accidental damage.</li>
          <li>If the same issue recurs under warranty, rework is free of charge.</li>
          <li>
            Warranty is void if:
            <ul className="lh-lg ps-4">
              <li>Another provider tampers with the device.</li>
              <li>There is physical/liquid damage after repair.</li>
              <li>Unauthorized modifications are made.</li>
            </ul>
          </li>
        </ul>
      </Section>

      <Section title="7. Refunds & Cancellations">
        <ul className="lh-lg text-secondary ps-3">
          <li>Once a repair is approved and work started, cancellations are not permitted.</li>
          <li>Diagnostic fees are non-refundable.</li>
          <li>Refunds only apply if we cannot complete the approved repair and no alternative solution is available.</li>
        </ul>
      </Section>

      <Section title="8. Intellectual Property">
        <ul className="lh-lg text-secondary ps-3">
          <li>All website content belongs to RedSetGo.</li>
          <li>Customer-provided logos, data, or content remain customer property.</li>
        </ul>
      </Section>

      <Section title="9. Limitation of Liability">
        <ul className="lh-lg text-secondary ps-3">
          <li>We are not liable for data loss during repairs.</li>
          <li>We are not liable for indirect/consequential damages (e.g., lost profits).</li>
          <li>Our maximum liability is limited to the service cost.</li>
        </ul>
      </Section>

      <Section title="10. Privacy & Data Handling">
        <ul className="lh-lg text-secondary ps-3">
          <li>We collect only necessary customer details for service purposes.</li>
          <li>Data is not shared with third parties except logistics/payment providers.</li>
          <li>See our Privacy Policy for more details.</li>
        </ul>
      </Section>

      <Section title="11. Force Majeure">
        <p className="text-secondary lh-lg">
          RedSetGo is not responsible for delays or failures due to events
          outside our control (e.g., strikes, natural disasters, supply shortages,
          or government restrictions).
        </p>
      </Section>

      <Section title="12. Governing Law">
        <p className="text-secondary lh-lg">
          These Terms are governed by the laws of India. Disputes fall under the
          exclusive jurisdiction of courts in Pune, Maharashtra.
        </p>
      </Section>

      <Section title="13. Updates to Terms">
        <p className="text-secondary lh-lg">
          We may update these Terms occasionally. Continued use of services
          implies acceptance of changes.
        </p>
      </Section>

      <Section title="14. Contact Us">
        <p className="text-secondary lh-lg">
          For questions, please contact{" "}
          <span className="text-danger fw-semibold">RedSetGo</span>.
        </p>
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mt-4">
    <h3 className="h6 h5-md fw-semibold text-dark mb-2">{title}</h3>
    {children}
  </div>
);

export default TermsCondition;

