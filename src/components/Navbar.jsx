// Navbar.jsx
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

function MainNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ width: '100vw' }} className={styles.navbar}>
      <Navbar.Brand as={Link} to="/" className={ styles.brand }>
        <img
          src="/assets/ss-logo.png"
          width="36"
          height="36"
          className={styles.logo}
          alt="Logo"
        />
        <span className={styles.brandText}>ShopSync Docs</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={styles.navLinks}>
          <Nav.Link as={Link} to="https://as-shopsync.pages.dev" className={styles.navLink}>
            ShopSync Web
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavbar;