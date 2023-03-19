import React, { useState, useContext } from 'react';
import '../btn/BtnPlaceOrder.css';
import { CartContext } from '../../contexts/CartContext';
import Swal from 'sweetalert2';

const BtnPlaceOrder = () => {
  const [orderID, setOrderID] = useState('');
  const userFirstName = JSON.parse(localStorage.getItem('userFN'));
  const userLastName = JSON.parse(localStorage.getItem('userLN'));
  const userEmail = JSON.parse(localStorage.getItem('userEmail'));
  console.log(localStorage.getItem('userFN'));
  const {
    // productsAdded,
    // cartTotal,
    // totalItemsInCart,
    // setProductsAdded,
    // setCartTotal,
    // setQtyPerItem,
  } = useContext(CartContext);

  function placeOrder() {
    if (userFirstName && userLastName && userEmail) {
      alert('all good');
      alert(userLastName, userEmail);
    }

    createOrderID();
    createOrderSumary();
    // userFirstName,
    //   userLastName,
    //   userEmail,
    // orderID,
    // productsAdded,
    // totalItemsInCart,
    // cartTotal,
    createMsgUserOrderPlaced();
    // setProductsAdded([]);
    // setCartTotal(0.0);
    // setQtyPerItem(new Map());
  }

  function createOrderID(orderID) {
    console.log('creating order ID');
    setOrderID(orderID);
  }

  function createMsgUserOrderPlaced() {
    new Swal({
      tittle: 'Order Placed',
      text: 'Thank you for shopping at e-robots!',
      icon: 'success',
      buttons: ['OK', 'View order'],
    }).then((answer) => {
      if (answer) {
        //2. navigate to a sumary page with all info of the order
        //1. call a function that sends an email with all info of the order to the user
      }
    });
  }

  function createOrderSumary(
    orderID,
    // userFirstName,
    // userLastName,
    // userEmail,
    productsAdded,
    totalItemsInCart,
    cartTotal,
  ) {
    const timeStamp = createDateAndTimeOrder();
    console.log('Order Sumary Created');
    console.log(
      `ORDER SUMARY:
      ORDER NUMBER: ${orderID},
      DATE AND TIME: ${timeStamp}
      CUSTOMER: ${userFirstName} ${userLastName}
      EMAIL: ${userEmail}
      PRODUCTS PURCHASED: ${productsAdded}
      TOTAL ITEMS PURCHASED: ${totalItemsInCart}
      TOTAL ORDER: ${cartTotal}`,
    );
    // const ordersCollection = collection(db, 'orders');
    // orderSumary(
    //   orderIdDB,
    //   dateAndTimeDB,
    //   userName,
    //   email,
    //   productsAdded,
    //   totalItemsInCart,
    //   cartTotal,
    // );

    function createDateAndTimeOrder() {
      console.log('Creating time and date');
      var currentdate = new Date();
      var datetime =
        currentdate.getDate() +
        '/' +
        (currentdate.getMonth() + 1) +
        '/' +
        currentdate.getFullYear() +
        ' @ ' +
        currentdate.getHours() +
        ':' +
        currentdate.getMinutes() +
        ':' +
        currentdate.getSeconds();
      return datetime;
    }
  }

  return (
    <button className="btnPlaceOrder" onClick={placeOrder}>
      Place Order
    </button>
  );
};

export default BtnPlaceOrder;
