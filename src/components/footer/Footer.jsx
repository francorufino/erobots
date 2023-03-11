import React from 'react';
import './Fotter.css';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footerFooter">
      <div className="footerBrand">e-robots - Where Innovation Meets Life</div>
      <div className="footerNavLinks">
        <div>
          <div className="links">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </div>
          <div className="links">
            <Nav.Link
              active
              className="navbarNames"
              as={Link}
              to="/category/industry"
            >
              Fun fact
            </Nav.Link>
          </div>
          <div className="links">
            <Nav.Link className="navbarNames" as={Link} to="/contact">
              Contact Us
            </Nav.Link>
          </div>
        </div>
        <div>
          <div className="links">
            <Nav.Link as={Link} to="/category/business">
              Business
            </Nav.Link>
          </div>
          <div className="links">
            <Nav.Link as={Link} to="/category/house">
              Housekeeper
            </Nav.Link>
          </div>
          <div className="links">
            <Nav.Link as={Link} to="/category/companion">
              Companion
            </Nav.Link>
          </div>
        </div>
        <div>
          <div className="links">
            <Nav.Link as={Link} to="/create">
              Create
            </Nav.Link>
          </div>
          <div className="links">
            <Nav.Link className="navbarNames" as={Link} to="/faq">
              FAQ
            </Nav.Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
