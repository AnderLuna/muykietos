import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container className="text-center">
        <p className="mb-1">
          &copy; {new Date().getFullYear()} Colectivo Techno
        </p>
        <small>
          Síguenos en{" "}
          <a href="https://instagram.com" className="text-light">
            Instagram
          </a>{" "}
          |{" "}
          <a href="https://facebook.com" className="text-light">
            Facebook
          </a>{" "}
          |{" "}
          <a href="https://soundcloud.com" className="text-light">
            SoundCloud
          </a>
        </small>
      </Container>
    </footer>
  );
}

export default Footer;
