import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './index.css';
import { CartContextProvider } from './contexts/CartContext';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBSUQoYtIPwrp-UYAEvt0gIl1Eta313Ri4',
  authDomain: 'e-robots.firebaseapp.com',
  projectId: 'e-robots',
  storageBucket: 'e-robots.appspot.com',
  messagingSenderId: '973579672953',
  appId: '1:973579672953:web:b5947f3c36616c069aa3a8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>,
);
