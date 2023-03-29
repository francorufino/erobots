import React from 'react';
import './Fotter.css';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Footer = () => {
  function logout() {
    sweetAlertLogoutMsg();
    localStorage.removeItem('userFN');
    localStorage.removeItem('userLN');
    localStorage.removeItem('userEmail');
  }

  function sweetAlertLogoutMsg() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'If you logout you will have to type all your checkout information again in order to go to checkout page',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes, delete all my information',
      denyButtonText: `Don't delete it, keep me signed in`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        localStorage.clear();
        Swal.fire('Deleted!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Your credentials are safe', '', 'success');
      }
    });
  }

  return (
    <div className="footerFooter">
      <div className="footerBrand">
        {' '}
        <span className="text-rainbow-animation text">e-robots</span> - Where
        Innovation Meets Life
      </div>
      <div className="footerNavLinks">
        <div>
          <Nav.Link as={Link} to="/about">
            <div className="links">About</div>
          </Nav.Link>
          <Nav.Link
            active
            className="navbarNames"
            as={Link}
            to="/category/industry"
          >
            <div className="links">Fun fact</div>
          </Nav.Link>

          <Nav.Link className="navbarNames" as={Link} to="/contact">
            <div className="links">Contact Us</div>
          </Nav.Link>
        </div>
        <div>
          <Nav.Link className="navbarNames" as={Link} to="/faq">
            <div className="links">FAQ</div>
          </Nav.Link>
          <div className="links">My Orders</div>
          <div className="links logout" onClick={logout}>
            Log out
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
