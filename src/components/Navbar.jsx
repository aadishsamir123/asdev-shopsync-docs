import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function MainNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ width: '100vw' }}>
      <Navbar.Brand as={Link} to="/" className="ms-3 d-flex align-items-center">
        <img
          src="/assets/ss-logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top me-2"
          alt="Logo"
        />
        ShopSync Docs
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="https://as-shopsync.pages.dev">ShopSync Web</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavbar;