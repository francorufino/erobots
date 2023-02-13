import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import './Navbar.css';
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
            <span>e-robots</span>
            <span>
              <img src="../images/infinite.jpeg"></img>
            </span>
          </Navbar.Brand>
          <Nav.Link className="navbarNames" as={Link} to="/about">
            About
          </Nav.Link>
          <Nav className="me-auto">
            <Nav.Link className="navbarNames" as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarr;
