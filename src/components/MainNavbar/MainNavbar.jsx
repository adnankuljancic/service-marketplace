import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom"



function MainNavbar() {
  return (
    <>
      <Navbar className="bg-body-tertiary" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          ServiceMarketplace
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Log in
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default MainNavbar;
