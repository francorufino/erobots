import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../../App.css';
import '../navbar/Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../cartwidget/CartWidget';
import { Link } from 'react-router-dom';

function Navbarr() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="navbarNames" as={Link} to="/" id="brand">
            <span>
              <img src="../assets/images/infinite.jpeg"></img>
            </span>
            <span className="neon-text">e-robots</span>
          </Navbar.Brand>
          <Nav.Link className="navbarNames" as={Link} to="/category/business">
            Business
          </Nav.Link>

          <Nav.Link className="navbarNames" as={Link} to="/category/house">
            Housekeeper
          </Nav.Link>
          <Nav.Link className="navbarNames" as={Link} to="/category/companion">
            Companion
          </Nav.Link>
          <Nav.Link className="navbarNames" as={Link} to="/companion/create">
            Create
          </Nav.Link>
          <Nav.Link className="navbarNames" as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link
            active
            className="navbarNames"
            as={Link}
            to="/category/industry"
          >
            Fan fact
          </Nav.Link>
          <Nav.Link className="navbarNames" as={Link} to="/contact">
            Contact
          </Nav.Link>

          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarr;
