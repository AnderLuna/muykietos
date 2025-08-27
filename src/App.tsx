import { Container, Row, Col, Button, Card } from "react-bootstrap";
import NavbarCustom from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";
import EventsPage from "./pages/EventsPage";

function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-dark text-light text-center d-flex align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Container>
          <h1 className="display-3 fw-bold">Colectivo Techno</h1>
          <p className="lead">Ritmo, energía y comunidad en cada fiesta 🎶</p>
          <Link to="/events">
            <Button variant="outline-light" size="lg">
              Próximos Eventos
            </Button>
          </Link>
        </Container>
      </section>

      {/* Quienes somos */}
      <section id="about" className="py-5 bg-light text-dark">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>¿Quiénes somos?</h2>
              <p>
                Somos un colectivo de techno dedicado a crear experiencias
                únicas a través de la música, las fiestas y la cultura
                underground.
              </p>
            </Col>
            <Col md={6}>
              <img
                src="https://via.placeholder.com/600x400"
                alt="Colectivo"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Próximos eventos (solo vista previa) */}
      <section id="events" className="py-5 bg-dark text-light">
        <Container>
          <h2 className="text-center mb-4">Próximos Eventos</h2>
          <Row>
            <Col md={4}>
              <Card className="bg-light text-dark mb-3">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/400x200"
                />
                <Card.Body>
                  <Card.Title>Techno Night</Card.Title>
                  <Card.Text>Fecha: 15 de Octubre 2025 - Medellín</Card.Text>
                  <Button variant="dark">Comprar Boletería</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="bg-light text-dark mb-3">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/400x200"
                />
                <Card.Body>
                  <Card.Title>Rave Underground</Card.Title>
                  <Card.Text>Fecha: 30 de Octubre 2025 - Bogotá</Card.Text>
                  <Button variant="dark">Comprar Boletería</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="bg-light text-dark mb-3">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/400x200"
                />
                <Card.Body>
                  <Card.Title>Session Tech</Card.Title>
                  <Card.Text>Fecha: 12 de Noviembre 2025 - Cali</Card.Text>
                  <Button variant="dark">Comprar Boletería</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Link to="/events">
              <Button variant="outline-light">Más...</Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

function App() {
  return (
    <>
      <NavbarCustom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
