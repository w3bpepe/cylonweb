import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

function NavbarCylon() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="none" variant="light">
      <Container>
        <Navbar.Brand href="#home">Cylon Cartel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#deets">About Us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Roadmap
            </Nav.Link>
            <Nav.Link href="#deets">Team</Nav.Link>
            <Nav.Link href="#deets">FAQ</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCylon;