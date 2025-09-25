import alaa from "../assets/alaa.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <Navbar
        bg="light"
        data-bs-theme="light"
      >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/resume"
            >
              Resume
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
