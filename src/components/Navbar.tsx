import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function NavbarCustom() {
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Nosotros" },
    { path: "/events", label: "Eventos" },
    { path: "/tickets", label: "Boletería" },
    { path: "/media", label: "Media" },
    { path: "/contact", label: "Contacto" },
  ];

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-uppercase">
          🎶 Colectivo Techno
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            {menuItems.map((item) => (
              <Nav.Link
                as={Link}
                to={item.path}
                key={item.path}
                className={`mx-2 ${
                  location.pathname === item.path ? "active fw-bold" : ""
                }`}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
