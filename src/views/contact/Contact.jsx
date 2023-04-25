import React, { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import './Contact.css';
import BtnGlowFormSubmit from '../../components/btn/BtnGlowFormSumit';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitMsgContactForm = (event) => {
    event.preventDefault(event);
    if (
      formData.name.length > 0 &&
      formData.email.length > 0 &&
      formData.message.length > 0
    ) {
      sweetAlertMsgSent();
    } else {
      sweetAlerEmptyFields();
    }
  };

  function sweetAlerEmptyFields() {
    new Swal({
      title: 'Error',
      text: 'You must complete the fields to submit a message',
      icon: 'error',
      iconColor: '#ea58f9',
      color: 'rgb(110, 237, 237)',
      background: '#212121',
      showConfirmButton: true,
      confirmButtonColor: ' rgb(44, 157, 157)',
    });
  }

  function sweetAlertMsgSent() {
    new Swal({
      title: 'Sent!',
      text: 'Your message was sent and we will contact you back within 48 hours. If you need immediate attention please call us, we take calls 24/7',
      icon: 'success',
      iconColor: '#ea58f9',
      color: 'rgb(110, 237, 237)',
      background: '#212121',
      showConfirmButton: true,
      confirmButtonColor: ' rgb(44, 157, 157)',
    });
  }

  return (
    <Layout>
      <div className="container fatherContainer">
        <div className="outterContainer">
          <div className="left-column">
            <img
              id="img"
              src={require('../../assets/images/robotOnThePhone.png')}
              alt=""
            />
          </div>
          <div className="right-column">
            <div className="cLetsChatTitle">
              <h2>Let's Chat</h2>
            </div>
            <div className="containerForm">
              <div>
                <form>
                  <div>
                    <label htmlFor="name">Full Name:</label>
                    <input
                      className="imput"
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      className="imput"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                      className="imputMessage"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="btnSubmitFormCtConainer">
                    <button id="btnSubmitForm" type="submit">
                      <BtnGlowFormSubmit
                        fn={handleSubmitMsgContactForm}
                        text={'Submit'}
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
