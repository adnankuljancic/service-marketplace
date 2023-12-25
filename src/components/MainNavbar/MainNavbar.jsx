import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";

function MainNavbar() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">ServiceMarketplace</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link to="/">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link to="/login">Log in</Nav.Link>
              <Nav.Link href="#services">Sign up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;
