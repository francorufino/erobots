import React, { useState, useContext } from 'react';
import '../btn/BtnPlaceOrder.css';
import { CartContext } from '../../contexts/CartContext';
import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

const BtnPlaceOrder = () => {
  // const navigate = useNavigate();
  const [orderID, setOrderID] = useState('IDNumber from Firebase');
  const userFirstName = JSON.parse(localStorage.getItem('userFN'));
  const userLastName = JSON.parse(localStorage.getItem('userLN'));
  const userEmail = JSON.parse(localStorage.getItem('userEmail'));
  console.log(localStorage.getItem('userFN'));
  const {
    productsAdded,
    cartTotal,
    totalItemsInCart,
    setProductsAdded,
    setCartTotal,
    setQtyPerItem,
  } = useContext(CartContext);

  function placeOrder() {
    if (!userFirstName && !userLastName && !userEmail) {
      alert('You have to Log in to place an order');
    } else {
      createOrderID();
      createOrderSumary();
      createMsgUserOrderPlaced();
      setProductsAdded([]);
      setCartTotal(0.0);
      setQtyPerItem(new Map());
      // navigate('/');
    }
  }

  function createOrderID(orderID) {
    console.log('creating order ID');
    setOrderID(orderID);
  }

  function createMsgUserOrderPlaced() {
    new Swal({
      title: 'Order Placed',
      text: 'A confirmation was sent to you email',
      icon: 'success',
      iconColor: '#ea58f9',
      color: '#ea58f9',
      background: '#212121',
      showConfirmButton: false,
      timer: '4000',
      backdrop: `
      rgb(110, 237, 237))
      // })`,
      padding: '3em',
    });
    // navigate('/');
  }

  function createOrderSumary(
    orderID,
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
