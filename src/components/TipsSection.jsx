import { Container, Row, Col, Card } from "react-bootstrap";

export default function TipsSection() {
  const tips = [
    {
      title: "Keep Your Device Clean",
      desc: "Dust and grime can block ventilation and cause overheating. For example, a quick wipe-down of your Samsung Galaxy S23 or Dell Inspiron laptop every week keeps it running cooler and smoother.",
    },
    {
      title: "Install Antivirus Software",
      desc: "Malware can slow down even the fastest devices. Use trusted tools like Norton 360 or Quick Heal to keep your HP Pavilion or OnePlus 12 safe from online threats.",
    },
    {
      title: "Backup Your Data Before Any Repair",
      desc: "Whether you own an iPhone 14 Pro or a Lenovo ThinkPad, always store your files on Google Drive, iCloud, or an external hard drive to avoid data loss during service.",
    },
    {
      title: "Use a Good-Quality Case",
      desc: "A sturdy case can save your Redmi Note 13 Pro or iPad Air from costly drops. Brands like Spigen or OtterBox offer excellent protection without adding bulk.",
    },
    {
      title: "Update Your System Regularly",
      desc: "Software updates improve performance and security. Whether it’s your Windows 11 laptop or Android device, staying updated means smoother performance and fewer glitches.",
    },
    {
      title: "Choose Trusted Technicians",
      desc: "Hand over your MacBook Pro or Samsung A54 only to certified repair experts. Skilled service ensures your device lasts longer and works like new.",
    },
  ];

  return (
    <section style={{ backgroundColor: "#fff", padding: "60px 0" }}>
      <Container>
        <h2 className="text-center fw-bold mb-3">
          6 Quick Tips for Device Care
        </h2>
        <hr
          style={{
            width: "80px",
            border: "2px solid red",
            margin: "0 auto 40px",
          }}
        />

        <Row>
          {tips.map((tip, idx) => (
            <Col md={4} sm={6} xs={12} key={idx} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <div
                    style={{
                      background: "red",
                      color: "#fff",
                      borderRadius: "50%",
                      width: "36px",
                      height: "36px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      marginBottom: "12px",
                    }}
                  >
                    {idx + 1}
                  </div>
                  <Card.Title className="fw-semibold mb-2">
                    {tip.title}
                  </Card.Title>
                  <Card.Text
                    className="text-muted"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {tip.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
