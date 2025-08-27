import { Container, Row, Col, Card, Button } from "react-bootstrap";

function EventsPage() {
  return (
    <section className="py-5 bg-light text-dark">
      <Container>
        <h2 className="text-center mb-4">Próximos Eventos</h2>
        <Row>
          {/* Aquí puedes mapear desde un array de eventos futuros */}
          <Col md={4}>
            <Card className="mb-3">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/400x200"
              />
              <Card.Body>
                <Card.Title>Techno Paradise</Card.Title>
                <Card.Text>Fecha: 20 de Diciembre 2025 - Medellín</Card.Text>
                <Button variant="dark">Comprar Boletería</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h2 className="text-center mt-5 mb-4">Eventos Pasados</h2>
        <Row>
          {/* Aquí mapearías los eventos pasados */}
          <Col md={4}>
            <Card className="mb-3">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/400x200"
              />
              <Card.Body>
                <Card.Title>Old School Rave</Card.Title>
                <Card.Text>Fecha: Agosto 2025 - Bogotá</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default EventsPage;
