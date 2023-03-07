import React, { useState } from 'react';
import { Layout } from '../../components/layout/Layout';
import './Contact.css';

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Or you can send this data to your backend API here
    setFormData({ name: '', email: '', message: '' }); // Reset the form data
  };

  return (
    <Layout>
      <div className="container">
        <div className="outterContainer">
          <div className="left-column">
            <img
              id="img"
              src={require('../../assets/images/robotOnThePhone.png')}
              alt=""
            />
          </div>
          <div className="right-column">
            <div>
              <h2>Let's Chat</h2>
            </div>
            <div className="containerForm">
              <div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name">Full Name:</label>
                    <input
                      className="imputName"
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
                      className="imputEmail"
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
                  <div id="btnSubmitForm">
                    <button type="submit">Submit</button>
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
