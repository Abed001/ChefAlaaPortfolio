import alaa from "../assets/alaa.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <Navbar
        className="font-semibold"
        bg="light"
        data-bs-theme="light"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              className="w-20"
              src={alaa}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="py-5 px-2 p-lg-0 "
          >
            <Nav className=" ms-auto gap-y-5 gap-x-5 text-[0.875rem]">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
