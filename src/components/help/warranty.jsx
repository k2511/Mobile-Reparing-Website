// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";

// const Warranty = () => {
//   return (
//     <Container className="py-5">
//       {/* Header Section */}
//       <Row className="justify-content-center text-center mb-5">
//         <Col lg={8}>
//           <h2 className="fw-bold mb-3" style={{ color: "#b71c1c" }}>
//             Comprehensive Warranty
//           </h2>
//           <p className="text-muted">
//             Every service we provide comes with a clear warranty for your peace of mind. If something goes wrong, we are here to fix it quickly and fairly.
//           </p>
//         </Col>
//       </Row>

//       {/* Warranty Policy Card */}
//       <Row className="justify-content-center">
//         <Col lg={10}>
//           <Card className="border-0 shadow-sm p-4">
//             <Card.Body>
//               <h3 className="fw-bold mb-4" style={{ color: "#c62828" }}>
//                 Warranty Policy
//               </h3>

//               {/* Coverage */}
//               <h5 className="fw-semibold mt-3">1. Coverage</h5>
//               <ul className="text-muted">
//                 <li>Repairs performed and parts replaced are covered by a limited warranty (duration will be communicated during booking).</li>
//                 <li>Warranty applies only to the specific repair or part replaced and does not extend to the entire device.</li>
//               </ul>

//               {/* Exclusions */}
//               <h5 className="fw-semibold mt-3">2. Exclusions</h5>
//               <p className="text-muted">Warranty will not apply if:</p>
//               <ul className="text-muted">
//                 <li>The device suffers new physical or liquid damage after repair.</li>
//                 <li>The device has been opened, tampered with, or serviced by an unauthorized third party.</li>
//                 <li>Issues arise from unrelated problems not addressed in the original repair.</li>
//                 <li>Normal wear and tear (e.g., battery capacity reduction) occurs.</li>
//               </ul>

//               {/* Claims Process */}
//               <h5 className="fw-semibold mt-3">3. Claims Process</h5>
//               <ul className="text-muted">
//                 <li>Customers must present the original invoice/job card to claim warranty.</li>
//                 <li>Devices must be inspected by our technicians to confirm eligibility.</li>
//                 <li>Approved claims will be repaired or reworked free of charge.</li>
//               </ul>

//               {/* Limitations */}
//               <h5 className="fw-semibold mt-3">4. Limitations</h5>
//               <ul className="text-muted">
//                 <li>Warranty does not cover loss of data, indirect damages, or consequential losses.</li>
//                 <li>Warranty is strictly limited to the part or service originally performed.</li>
//               </ul>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Warranty;





import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const WARRANTY_DAYS = 180;

const Warranty = () => {
  return (
    <Container className="py-5">
      {/* Header Section */}
      <Row className="justify-content-center text-center mb-4">
        <Col lg={8}>
          <h2 className="fw-bold mb-2" style={{ color: "#b71c1c" }}>
            Comprehensive Warranty
            <Badge bg="danger" className="ms-3" style={{ fontSize: "0.8rem", verticalAlign: "middle" }}>
              {WARRANTY_DAYS} Days
            </Badge>
          </h2>
          <p className="text-muted">
            Every service we provide includes a clear {WARRANTY_DAYS}-day limited warranty on the specific repair or part replaced.
            This warranty gives you peace of mind — if the same issue reoccurs within the warranty period, we will rework the repair under the terms below.
          </p>
        </Col>
      </Row>

      {/* Warranty Policy Card */}
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="border-0 shadow-sm p-4">
            <Card.Body>
              <h3 className="fw-bold mb-4" style={{ color: "#c62828" }}>
                Warranty Policy
              </h3>

              {/* Coverage */}
              <h5 className="fw-semibold mt-3">1. Coverage</h5>
              <ul className="text-muted">
                <li>
                  Repairs performed and parts replaced by our technicians are covered by a limited warranty of <strong>{WARRANTY_DAYS} days</strong> from the date of service,
                  unless a different duration is explicitly communicated at the time of booking.
                </li>
                <li>
                  The warranty applies only to the specific repair work or replaced part and does not automatically extend to other components or the entire device.
                </li>
                <li>
                  If a supplied part comes with a manufacturer warranty longer or shorter than {WARRANTY_DAYS} days, that information will be shared during booking and the part's manufacturer terms will apply.
                </li>
              </ul>

              {/* Exclusions */}
              <h5 className="fw-semibold mt-3">2. Exclusions</h5>
              <p className="text-muted">The warranty will not apply in the following cases:</p>
              <ul className="text-muted">
                <li>New physical damage or liquid damage occurring after the repair (for example, drops or spills).</li>
                <li>Device opened, modified, or serviced by an unauthorized third party after our repair.</li>
                <li>Issues caused by unrelated faults that were not part of the original repair job.</li>
                <li>Normal wear and tear — for example, natural battery capacity reduction over time.</li>
                <li>Cosmetic damage that does not affect the repaired function, unless explicitly covered in writing.</li>
              </ul>

              {/* Claims Process */}
              <h5 className="fw-semibold mt-3">3. Claims Process</h5>
              <ul className="text-muted">
                <li>Please retain the original invoice/job card — it is required to make a warranty claim.</li>
                <li>Notify us as soon as you notice an issue and within the {WARRANTY_DAYS}-day warranty period.</li>
                <li>Bring the device to our service center or follow the returns instructions provided on your job card so our technicians can inspect the device.</li>
                <li>Once a claim is approved, we will repair or rework the covered issue at no charge. Parts replaced under warranty may be new or refurbished at our discretion.</li>
              </ul>

              {/* Limitations */}
              <h5 className="fw-semibold mt-3">4. Limitations</h5>
              <ul className="text-muted">
                <li>The warranty does not cover loss of data; customers are responsible for backing up data before repair.</li>
                <li>We are not liable for indirect, incidental, or consequential damages arising from the repair.</li>
                <li>Warranty eligibility will be determined by a technician inspection; fraudulent claims or tampered devices are excluded.</li>
              </ul>

              {/* Additional Notes */}
              <h5 className="fw-semibold mt-3">5. Additional Notes</h5>
              <ul className="text-muted">
                <li>Warranty start date: the date when the service is completed and the device is handed back to the customer.</li>
                <li>If you require a written warranty statement specifying parts and durations (for example for corporate or bulk repairs), please request this at the time of booking and we will provide it.</li>
                <li>For faster service, contact our support number or the WhatsApp booking number listed on your invoice when making a claim.</li>
              </ul>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Warranty;
