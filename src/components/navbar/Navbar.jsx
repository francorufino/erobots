import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../../App.css';
import '../navbar/Navbar.css';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../cartwidget/CartWidget';
import { Link } from 'react-router-dom';
import Logo from './Logo';

function Navbarr() {
  return (
    <>
      <article id="outterContainerNavbar">
        <div className="navLinks container">
          <div className="logoContainer">
            <div>
              <Nav.Link as={Link} to="/">
                <Logo />
              </Nav.Link>
            </div>
          </div>
          <div>
            <div className="linksNav">
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
              <div className="links">
                <Nav.Link as={Link} to="/create">
                  Create
                </Nav.Link>
              </div>
              <div>
                <div id="cartWidgetNavBar" className="links">
                  <Link className="cart-container" to="/cart">
                    <CartWidget />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 

                
                
               
        {/*  */}
        {/* <Nav.Link className="navbarNames" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link
                active
                className="navbarNames"
                as={Link}
                to="/category/industry"
              >
                Fun fact
              </Nav.Link>
              <Nav.Link className="navbarNames" as={Link} to="/contact">
                Contact
              </Nav.Link> */}
        {/* </div>
        </div> */}
      </article>
    </>
  );
}

export default Navbarr;
