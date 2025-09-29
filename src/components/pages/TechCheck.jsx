


// import React, { useEffect, useState, useRef } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { FaUsers, FaStar, FaBriefcase } from "react-icons/fa";
// import { MdPhonelinkErase } from "react-icons/md";

// const statsData = [
//   { icon: <FaUsers size={42} />, value: 10000, label: "Happy Clients" },
//   { icon: <MdPhonelinkErase size={42} />, value: 4000, label: "Devices Fixed", suffix: "+" },
//   { icon: <FaStar size={42} />, value: 98, label: "Satisfaction Rate", suffix: "%" },
//   { icon: <FaBriefcase size={42} />, value: 15, label: "Years of Experience", suffix: "+" },
// ];

// const TechCheck = () => {
//   const [stats, setStats] = useState(statsData.map((s) => ({ ...s, count: 0 })));
//   const intervalsRef = useRef([]);

//   useEffect(() => {
//     // clear any old intervals (useful for hot reload)
//     intervalsRef.current.forEach((id) => clearInterval(id));
//     intervalsRef.current = statsData.map((stat, idx) => {
//       const increment = Math.max(1, Math.ceil(stat.value / 100));
//       const id = setInterval(() => {
//         setStats((prev) => {
//           return prev.map((ps, i) => {
//             if (i !== idx) return ps;
//             const next = Math.min(ps.count + increment, stat.value);
//             return { ...ps, count: next };
//           });
//         });
//       }, 20);
//       return id;
//     });

//     return () => {
//       intervalsRef.current.forEach((id) => clearInterval(id));
//       intervalsRef.current = [];
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []); // run once on mount

//   return (
//     <>
//       {/* Hero Section */}
//       <div
//         style={{
//           background: `linear-gradient(rgba(30, 36, 36, 0.85), rgba(30, 36, 36, 0.85)), url("https://show.creativemox.com/digifix/wp-content/uploads/sites/6/2025/08/repairing-smartphone-with-electronic-components-on-desk.jpg")`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           padding: "120px 20px 200px",
//           color: "#fff",
//           position: "relative",
//         }}
//       >
//         <Container>
//           <Row className="justify-content-center text-center">
//             <Col lg={8} md={10}>
//               <h1 className="fw-bold mb-4" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>
//                 Free Tech Check – Let&apos;s Talk About It
//               </h1>

//               <Button
//                 variant="danger"
//                 size="lg"
//                 className="fw-semibold shadow px-4 py-2"
//                 aria-label="Book a free tech check"
//                 style={{ backgroundColor: "red", borderColor: "red" }}
//               >
//                 Booking now
//               </Button>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* Stats Card */}
//       <Container style={{ marginTop: "-100px" }} className="position-relative">
//         <div className="bg-white rounded shadow-lg p-4" style={{ overflow: "hidden" }}>
//           <Row className="text-center gy-4">
//             {stats.map((stat, index) => (
//               <Col
//                 xs={6}
//                 md={3}
//                 key={index}
//                 className={`px-3 ${index !== stats.length - 1 ? "border-md-dotted" : ""}`}
//                 style={{ borderColor: "red" }}
//               >
//                 <div aria-hidden style={{ color: "red" }}>
//                   {stat.icon}
//                 </div>
//                 <p className="fw-bold mb-0 fs-4" style={{ color: "black" }}>
//                   {stat.count}
//                   {stat.suffix || ""}
//                 </p>
//                 <p className="mb-0 text-dark small">{stat.label}</p>
//               </Col>
//             ))}
//           </Row>

//           {/* Trust Bar */}
//           <Row className="mt-4">
//             <Col>
//               <div
//                 className="d-inline-block w-100 fw-semibold text-center rounded-bottom px-3 py-2"
//                 style={{ backgroundColor: "red", fontSize: "1rem", color: "#fff" }}
//               >
//                 <span className="me-2" style={{ fontSize: "18px", color: "gold" }}>
//                   ★★★★★
//                 </span>
//                 Built on Trust, Measured by Performance
//               </div>
//             </Col>
//           </Row>
//         </div>
//       </Container>

//       <style>{`
//         @media (min-width: 768px) {
//           .border-md-dotted {
//             border-right: 2px solid #ccc;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default TechCheck;





import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaUsers, FaStar, FaBriefcase } from "react-icons/fa";
import { MdPhonelinkErase } from "react-icons/md";

const statsData = [
  { icon: <FaUsers size={42} />, value: 10000, label: "Happy Clients" },
  { icon: <MdPhonelinkErase size={42} />, value: 4000, label: "Devices Fixed", suffix: "+" },
  { icon: <FaStar size={42} />, value: 98, label: "Satisfaction Rate", suffix: "%" },
  { icon: <FaBriefcase size={42} />, value: 15, label: "Years of Experience", suffix: "+" },
];

const TechCheck = () => {
  const [stats, setStats] = useState(statsData.map((s) => ({ ...s, count: 0 })));
  const intervalsRef = useRef([]);

  useEffect(() => {
    intervalsRef.current.forEach((id) => clearInterval(id));
    intervalsRef.current = statsData.map((stat, idx) => {
      const increment = Math.max(1, Math.ceil(stat.value / 100));
      const id = setInterval(() => {
        setStats((prev) =>
          prev.map((ps, i) => {
            if (i !== idx) return ps;
            const next = Math.min(ps.count + increment, stat.value);
            return { ...ps, count: next };
          })
        );
      }, 20);
      return id;
    });

    return () => {
      intervalsRef.current.forEach((id) => clearInterval(id));
      intervalsRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        style={{
          background: `linear-gradient(rgba(30, 36, 36, 0.85), rgba(30, 36, 36, 0.85)), url("https://show.creativemox.com/digifix/wp-content/uploads/sites/6/2025/08/repairing-smartphone-with-electronic-components-on-desk.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "120px 20px 200px",
          color: "#fff",
          position: "relative",
        }}
      >
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8} md={10}>
              <h1 className="fw-bold mb-4" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>
                Free Tech Check – Let&apos;s Talk About It
              </h1>

              <Button
                variant="danger"
                  href="tel:+919900004531"
                size="lg"
                className="fw-semibold shadow px-4 py-2"
                aria-label="Book a free tech check"
                style={{ backgroundColor: "red", borderColor: "red" }}
              >
                Booking now
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Stats Card */}
      <Container style={{ marginTop: "-100px" }} className="position-relative">
        <div className="bg-white rounded shadow-lg p-4" style={{ overflow: "hidden" }}>
          <Row className="text-center gy-4">
            {stats.map((stat, index) => (
              <Col
                xs={6}
                md={3}
                key={index}
                className={`stat-col px-3 ${index !== stats.length - 1 ? "with-sep" : ""}`}
              >
                <div aria-hidden style={{ color: "red" }}>
                  {stat.icon}
                </div>
                <p className="fw-bold mb-0 fs-4" style={{ color: "black" }}>
                  {stat.count}
                  {stat.suffix || ""}
                </p>
                <p className="mb-0 text-dark small">{stat.label}</p>
              </Col>
            ))}
          </Row>

          {/* Trust Bar */}
          <Row className="mt-4">
            <Col>
              <div
                className="d-inline-block w-100 fw-semibold text-center rounded-bottom px-3 py-2"
                style={{ backgroundColor: "red", fontSize: "1rem", color: "#fff" }}
              >
                <span className="me-2" style={{ fontSize: "18px", color: "gold" }}>
                  ★★★★★
                </span>
                Built on Trust, Measured by Performance
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Responsive separator styles */}
      <style>{`
        .stat-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        /* MOBILE: two columns per row (xs=6) — add a right border on the left item of each pair */
        @media (max-width: 767.98px) {
          .stat-col.with-sep {
            border: none; /* reset */
          }
          /* apply a solid #ccc right border to the odd items (1,3,...) so it appears between the two items in a row */
          .stat-col.with-sep:nth-child(odd) {
            border-right: 1px solid #ccc;
            padding-right: 0.75rem;
          }
          /* if an odd item is also the last item, remove its right border */
          .stat-col.with-sep:nth-child(odd):last-child {
            border-right: none;
          }
        }

        /* MD+ screens: vertical dotted right border between columns (except last) */
        @media (min-width: 768px) {
          .stat-col {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .stat-col.with-sep {
            border-right: 1px dotted #ccc;
          }
          .stat-col.with-sep:last-child {
            border-right: none;
          }
        }
      `}</style>
    </>
  );
};

export default TechCheck;
