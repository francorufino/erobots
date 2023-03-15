import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './index.css';
import { CartContextProvider } from './contexts/CartContext';
// import { firebaseConfig } from './firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';

// const firebaseConfig = {
//   apiKey: 'AIzaSyBSUQoYtIPwrp-UYAEvt0gIl1Eta313Ri4',
//   authDomain: 'e-robots.firebaseapp.com',
//   projectId: 'e-robots',
//   storageBucket: 'e-robots.appspot.com',
//   messagingSenderId: '973579672953',
//   appId: '1:973579672953:web:b5947f3c36616c069aa3a8',
// };

// const firebaseConfig = {
//   FIREBASE_API_KEY: 'AIzaSyBSUQoYtIPwrp-UYAEvt0gIl1Eta313Ri4',
//   FIREBASE_AUTH_DOMAIN: 'e-robots.firebaseapp.com',
//   FIREBASE_PROJECT_ID: 'e-robots',
//   FIREBASE_STORAGE_BUCKET: 'e-robots.appspot.com',
//   FIREBASE_MESSAGING_SENDER_ID: '973579672953',
//   FIREBASE_API_ID: '1:973579672953:web:b5947f3c36616c069aa3a8',
// };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>,
);
