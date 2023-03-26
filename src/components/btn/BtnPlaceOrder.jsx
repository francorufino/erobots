import React, { useState, useContext } from 'react';
import '../btn/BtnPlaceOrder.css';
import { CartContext } from '../../contexts/CartContext';
import Swal from 'sweetalert2';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

// .then(okay => {
//   if (okay) {
//    window.location.href = "URL";
//  }
// });

const BtnPlaceOrder = () => {
  const userFirstName = JSON.parse(localStorage.getItem('userFN'));
  const userLastName = JSON.parse(localStorage.getItem('userLN'));
  const userEmail = JSON.parse(localStorage.getItem('userEmail'));
  const {
    productsAdded,
    cartTotal,
    totalItemsInCart,
    setProductsAdded,
    setCartTotal,
    setQtyPerItem,
  } = useContext(CartContext);

  console.log(productsAdded);

  function placeOrder() {
    //everytime this btn is pressed a new order is generating containing all the info about the product and then it has to be added to the "My Orders" view page, latest orders always on top

    if (!userFirstName && !userLastName && !userEmail) {
      new Swal({
        title: 'Login',
        text: 'You must log in in order to place an order',
        icon: 'warning',
        iconColor: '#ea58f9',
        color: '#ea58f9',
        background: '#212121',
        showConfirmButton: true,
        backdrop: `
        rgb(110, 237, 237))
        // })`,
        padding: '3em',
      }).then((okay) => {
        if (okay) {
          window.location.href = '/login';
        }
      });
    } else {
      createOrderSumary();
      createMsgUserOrderPlaced();
      // setProductsAdded([]);
      // setCartTotal(0.0);
      // setQtyPerItem(new Map());
    }
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
    }).then(() => {
      // window.location.href = '/';
    });
  }

  function createOrderSumary() {
    const timeStamp = createDateAndTimeOrder();
    // const order = {
    //   buyer: {
    //     firstName: userFirstName,
    //     lastName: userLastName,
    //     email: userEmail,
    //   },
    //   items: [],
    //   total: cartTotal,
    // };
    console.log('Order Sumary Created');
    console.log(
      `ORDER SUMARY:
      DATE AND TIME: ${timeStamp}
      CUSTOMER: ${userFirstName} ${userLastName}
      EMAIL: ${userEmail}
      PRODUCTS PURCHASED: ${productsAdded}
      TOTAL ITEMS PURCHASED: ${totalItemsInCart()}
      TOTAL ORDER: ${cartTotal}`,
    );
    // const ordersCollection = collection(db, 'orders');
    // orderSumary(
    //   orderIdDB,
    //   dateAndTimeDB,
    //   userName,
    //   email,
    //   productsAdded,
    //   cartTotal,
    // );
  }

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

  return (
    <button className="btnPlaceOrder" onClick={placeOrder}>
      Procced to checkout
    </button>
  );
};
export default BtnPlaceOrder;
