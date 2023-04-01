import React from 'react';
import './Fotter.css';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Footer = () => {
  const userFirstName = JSON.parse(localStorage.getItem('userFN'));
  const userLastName = JSON.parse(localStorage.getItem('userLN'));
  const userEmail = JSON.parse(localStorage.getItem('userEmail'));
  const userAddress = JSON.parse(localStorage.getItem('userAddress'));
  const userBorough = JSON.parse(localStorage.getItem('userBorough'));
  const userZipCode = JSON.parse(localStorage.getItem('userZipCode'));
  const userCreditCard = JSON.parse(localStorage.getItem('userCreditCart'));

  function logout() {
    sweetAlertLogoutMsg();
  }

  function sweetAlertLogoutMsg() {
    if (
      (userFirstName,
      userLastName,
      userEmail,
      userAddress,
      userBorough,
      userZipCode,
      userCreditCard)
    ) {
      Swal.fire({
        className: 'sweetAlertBtnTextColor',
        title: 'Are you sure?',
        text: 'If you logout you will have to type all your information again to place a new order',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Yes, delete all my information',
        confirmButtonColor: '#ea58f9',
        denyButtonText: `Don't delete it, keep me signed in`,
        denyButtonColor: 'rgb(44, 157, 157)',
        icon: 'warning',
        iconColor: '#ea58f9',
        color: 'rgb(110, 237, 237)',
        background: '#212121',
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear();
          new Swal({
            title: 'Deleted!',
            text: 'All your information was deleted successfully',
            icon: 'success',
            iconColor: '#ea58f9',
            color: '#ea58f9',
            background: '#212121',
            showConfirmButton: false,
            backdrop: `
        rgb(110, 237, 237))
        // })`,
            padding: '3em',
            timer: 3000,
          });
        } else if (result.isDenied) {
          new Swal({
            title: 'Saved',
            text: 'Your information was saved successfully',
            icon: 'success',
            iconColor: '#ea58f9',
            color: '#ea58f9',
            background: '#212121',
            showConfirmButton: false,
            backdrop: `
        rgb(110, 237, 237))
        // })`,
            padding: '3em',
            timer: 3000,
          });
        }
      });
    } else {
      new Swal({
        title: 'Not found',
        text: 'It looks like you do not have any information saved',
        icon: 'error',
        iconColor: '#ea58f9',
        color: '#ea58f9',
        background: '#212121',
        showConfirmButton: false,
        backdrop: `
    rgb(110, 237, 237))
    // })`,
        padding: '3em',
        timer: 5000,
      });
    }
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
          <Nav.Link className="navbarNames" as={Link} to="/">
            <div className="links">Home</div>
          </Nav.Link>
          <Nav.Link className="navbarNames" as={Link} to="/category/business">
            <div className="links">Business</div>
          </Nav.Link>
          <Nav.Link className="navbarNames" as={Link} to="/category/house">
            <div className="links">Housekeeper</div>
          </Nav.Link>
        </div>{' '}
        <div>
          <Nav.Link className="navbarNames" as={Link} to="/category/companion">
            <div className="links">Companion</div>
          </Nav.Link>
          <Nav.Link className="navbarNames" as={Link} to="/create">
            <div className="links">Create</div>
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            <div className="links">About us</div>
          </Nav.Link>
        </div>{' '}
        <div>
          <Nav.Link className="navbarNames" as={Link} to="/cart">
            <div className="links">Cart</div>
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
