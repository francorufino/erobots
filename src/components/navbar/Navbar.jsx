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
              <Nav.Link as={Link} to="/category/business">
                <div className="links">Business</div>
              </Nav.Link>
              <Nav.Link as={Link} to="/category/house">
                <div className="links">Housekeeper</div>
              </Nav.Link>
              <Nav.Link as={Link} to="/category/companion">
                <div className="links">Companion</div>
              </Nav.Link>
              <Nav.Link as={Link} to="/create">
                <div className="links">Create</div>
              </Nav.Link>
              {/* <Link to="/login">
                <div id="login" className="links">
                  Login
                </div>
              </Link> */}
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
