import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * TermCondition.jsx
 * Polished, fully responsive Terms & Conditions component for a Mobile Repairing website.
 * Improvements:
 *  - Larger, consistent touch targets for buttons and checkbox on small devices
 *  - Buttons become full-width stacked on extra-small screens and inline on sm+
 *  - Sticky action footer with subtle shadow so actions remain reachable
 *  - Accessible labels and aria attributes
 *
 * Props:
 *  - title (string) optional
 *  - phone (string) WhatsApp phone number in international format, e.g. '+919900004531'
 *  - prefillMessage (string) message to prefill in WhatsApp chat
 *  - onSend (function) optional callback fired just before opening WhatsApp
 *  - initialCollapsed (boolean) whether sections start collapsed (default: false)
 */

export default function TermCondition({
  title = "Terms & Conditions",
  phone = "+919900004531",
  prefillMessage =
    "Hello ScreenGuru, I accept the Terms & Conditions and would like to proceed with a repair booking.",
  onSend = () => {},
  initialCollapsed = false,
}) {
  const [accepted, setAccepted] = useState(false);
  const [expanded, setExpanded] = useState(!initialCollapsed);

  function sanitizePhone(p) {
    // Remove anything that is not a digit
    const digits = String(p || "").replace(/\D/g, "");
    return digits;
  }

  function handleSend(e) {
    e.preventDefault();
    if (!accepted) return;

    try {
      onSend();
    } catch (err) {
      // ignore
    }

    const number = sanitizePhone(phone);
    if (!number) {
      const mailto = `mailto:info@screenguru.in?subject=${encodeURIComponent(
        "Repair booking - Terms accepted"
      )}&body=${encodeURIComponent(prefillMessage)}`;
      window.open(mailto, "_blank");
      return;
    }

    const url = `https://wa.me/${number}?text=${encodeURIComponent(prefillMessage)}`;
    window.open(url, "_blank");
  }

  // Inline styles tuned for consistent sizing across devices
  const styles = {
    stickyFooter: {
      position: "sticky",
      bottom: 0,
      zIndex: 20,
      boxShadow: "0 -6px 18px rgba(0,0,0,0.06)",
      borderTop: "1px solid rgba(0,0,0,0.04)",
      background: "#fff",
    },
    primaryBtn: {
      minHeight: 40,
      paddingTop: "0.625rem",
      paddingBottom: "0.625rem",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },
    outlineBtn: {
      minHeight: 52,
      paddingTop: "0.625rem",
      paddingBottom: "0.625rem",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },
    checkbox: {
      transform: "scale(1.18)",
      marginRight: "0.6rem",
    },
  };

  return (
    <div className="container-fluid p-3" style={{ maxWidth: 980 }}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card shadow-sm rounded-3">
            <div className="card-body d-flex flex-column" style={{ minHeight: 380 }}>
              <header className="d-flex align-items-start justify-content-between mb-3">
                <div>
                  <h1 className="h5 mb-0">{title}</h1>
                  <small className="text-muted">Please review our terms before continuing.</small>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    aria-label="Close"
                    onClick={() => window.history.back()}
                  >
                    Close
                  </button>
                </div>
              </header>

              <main
                className="mb-3 overflow-auto border rounded p-3"
                style={{ maxHeight: "60vh", WebkitOverflowScrolling: "touch" }}
                aria-label="Terms content"
                role="region"
              >
                <section className="mb-3">
                  <h2 className="h6">1. Introduction</h2>
                  <p className="mb-1 small">
                    Welcome to ScreenGuru, your trusted mobile repairing partner. By booking a
                    repair or using our services, you agree to these Terms & Conditions.
                  </p>
                </section>

                <section className="mb-3">
                  <h2 className="h6 d-flex justify-content-between align-items-center">
                    <span>2. Service Policy</span>
                    <button
                      className="btn btn-link btn-sm p-0"
                      onClick={() => setExpanded((s) => !s)}
                      aria-expanded={expanded}
                    >
                      {expanded ? "Collapse" : "Expand"}
                    </button>
                  </h2>

                  {expanded ? (
                    <div>
                      <p className="mb-1 small">
                        We provide mobile repair services including screen replacement,
                        battery change, data recovery (where possible), and software fixes.
                        We use high-quality parts and certified technicians, but turnaround
                        time depends on part availability and issue complexity.
                      </p>
                    </div>
                  ) : (
                    <div className="small text-muted">(Section collapsed)</div>
                  )}
                </section>

                <section className="mb-3">
                  <h2 className="h6">3. Warranty</h2>
                  <p className="mb-1 small">
                    Repaired parts are covered by a limited warranty. Check your invoice for
                    warranty length and terms. Warranty does not cover physical damage,
                    liquid ingress, or third-party modifications.
                  </p>
                </section>

                <section className="mb-3">
                  <h2 className="h6">4. Privacy & Data</h2>
                  <p className="mb-1 small">
                    Technicians may need to power on and test devices. We will not intentionally
                    access or share your personal data. Please back up important data before
                    submitting your device for service.
                  </p>
                </section>

                <section className="mb-3">
                  <h2 className="h6">5. Payments & Refunds</h2>
                  <p className="mb-1 small">
                    Payment is due on collection or before delivery for courier repairs. Refunds
                    will be considered if the issue is not resolved, subject to inspection.
                  </p>
                </section>

                <section className="mb-3">
                  <h2 className="h6">6. Liability</h2>
                  <p className="mb-1 small">
                    Our liability is limited to the value of the repair performed. We are not
                    liable for pre-existing problems, unauthorized third-party repairs, or data loss.
                  </p>
                </section>

                <section>
                  <h2 className="h6">7. Contact</h2>
                  <p className="mb-0 small">
                    For support, email <a href="mailto:info@screenguru.in">info@screenguru.in</a> or call
                    <a className="ms-1" href="tel:+919900004531">+91-9900004531</a>.
                  </p>
                </section>
              </main>

              {/* Action footer: stacked on xs, inline on sm+. Larger buttons and checkbox for touch */}
              <div style={styles.stickyFooter} className="py-2">
                <form onSubmit={handleSend} className="container-fluid px-2">
                  <div className="row g-2 align-items-center">
                    <div className="col-12 col-sm-7 d-flex align-items-center">
                      <input
                        id="tcAccept"
                        type="checkbox"
                        className="form-check-input"
                        checked={accepted}
                        onChange={(e) => setAccepted(e.target.checked)}
                        aria-describedby="tcHelp"
                        style={styles.checkbox}
                      />

                      <label htmlFor="tcAccept" className="form-check-label small mb-0">
                        I have read and accept the Terms & Conditions.
                      </label>
                    </div>

                    <div className="col-12 col-sm-5 d-grid gap-2 d-sm-flex justify-content-end">
                      <button
                        type="button"
                        className="btn btn-outline-secondary d-none d-sm-inline-flex"
                        onClick={() => window.print()}
                        title="Print the terms"
                        style={styles.outlineBtn}
                      >
                        Print
                      </button>

                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={!accepted}
                        aria-disabled={!accepted}
                        style={styles.primaryBtn}
                      >
                        Send via WhatsApp
                      </button>
                    </div>

                    <div className="col-12">
                      <div id="tcHelp" className="form-text mt-2 small text-muted">
                        Your acceptance will be recorded. By clicking "Send via WhatsApp" you will be
                        redirected to WhatsApp — make sure you have saved our number if needed.
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="text-center mt-2 small text-muted">Last updated: Sep 29, 2025</div>
        </div>
      </div>
    </div>
  );
}
