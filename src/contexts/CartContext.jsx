import { createContext, useState, useEffect } from 'react';
import {
  collection,
  getFirestore,
  addDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
import Swal from 'sweetalert2';

export const CartContext = createContext([]);
export const CartContextProvider = ({ children }) => {
  const [productsAdded, setProductsAdded] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const userFirstName = JSON.parse(localStorage.getItem('userFN'));
  const userLastName = JSON.parse(localStorage.getItem('userLN'));
  const userEmail = JSON.parse(localStorage.getItem('userEmail'));
  localStorage.getItem('userFN');
  let orderID = '';

  useEffect(() => {
    const amount = productsAdded
      .map((product) => parseInt(product.item.price) * product.quantityAdded)
      .reduce((partialSum, a) => partialSum + a, 0);
    setCartTotal(amount);
  }, [productsAdded]);

  function placeOrder(total) {
    const dateTime = generateDateAndTime();
    saveOrderInDB(dateTime, total);
    sendEmailToUserWithOrder();
    sweetAlertWithOrderPlaced();
    sweetAlertWithOrderNumber();
    navigateToHome();
  }

  function saveOrderInDB(dateTime, total) {
    const order = {
      dateTime,
      buyer: {
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
      },
      items: productsAdded,
      total,
    };

    const db = getFirestore();
    const ordersRef = collection(db, 'orders');
    addDoc(ordersRef, order).then(async (ordersRef) => {
      orderID = ordersRef.id;
      console.log(orderID);
      await productsAdded.map((product) =>
        updateProduct(
          product.item.id,
          product.item.stock - product.quantityAdded,
        ),
      );

      setProductsAdded([]);
      setCartTotal(0);
    });
  }

  function generateDateAndTime() {
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
    console.log('Order placed on' + datetime);
    return datetime;
  }

  function sweetAlertWithOrderPlaced() {
    console.log(
      'Sending sweet alert saying order was placed successfully' + orderID,
    );
    Swal.fire({
      title: 'Order placed successfully',
      text: 'testeeeeeeeee' + orderID,
      icon: 'success',
      iconColor: '#ea58f9',
      color: 'rgb(110, 237, 237)',
      background: '#212121',
      backdrop: `
      rgb(110, 237, 237))`,
      showConfirmButton: true,
    });
  }

  function sweetAlertWithOrderNumber() {
    console.log('sending an imagiray order number from Firebase');
  }

  function navigateToHome() {}

  function addProduct(item, quantity) {
    console.log({ item });
    const isAlreadyAdded = isInCart(item.id);
    if (isAlreadyAdded) {
      setProductsAdded((prevState) =>
        prevState.map((productAdded) =>
          productAdded.item.id === item.id
            ? {
                ...productAdded,
                quantityAdded: productAdded.quantityAdded + quantity,
              }
            : productAdded,
        ),
      );
    } else {
      setProductsAdded((prevState) =>
        prevState.concat({ item, quantityAdded: quantity }),
      );
    }
  }

  function isInCart(id) {
    return productsAdded.some((product) => product.item.id === id);
  }

  function updateProduct(productId, stock) {
    const db = getFirestore();
    const productRef = doc(db, 'items', productId);
    updateDoc(productRef, { stock });
  }

  function updateToCart(product, isAdding) {
    const productQuantityUpdated = productsAdded.map((productAdded) =>
      productAdded.item.id === product.item.id
        ? {
            ...productAdded,
            quantityAdded: isAdding
              ? productAdded.quantityAdded + 1
              : productAdded.quantityAdded - 1,
          }
        : productAdded,
    );

    setProductsAdded(productQuantityUpdated);
  }

  function deleteProductFromCart(id) {
    setProductsAdded(productsAdded.filter((product) => product.item.id !== id));
  }

  function sendEmailToUserWithOrder() {
    console.log(
      'Sending an imaginary email to the user with the order sumary and confirmation',
    );
    Swal.fire({
      text: 'The order confirmation was sent to the email you provided',
      icon: 'success',
      iconColor: '#ea58f9',
      color: 'rgb(110, 237, 237)',
      background: '#212121',
      backdrop: `
      rgb(110, 237, 237))`,
      showConfirmButton: false,
      timer: 4000,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('sending an imaginary email to the user');
      }
    });
  }

  function handleClickClearCart() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This will delete all products in you cart.',
      icon: 'warning',
      iconColor: '#ea58f9',
      color: 'rgb(110, 237, 237)',
      background: '#212121',
      backdrop: `
      rgb(110, 237, 237))
  `,
      showCancelButton: true,
      confirmButtonColor: 'rgb(110, 237, 237)',
      cancelButtonColor: '#ea58f9',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          color: 'rgb(110, 237, 237)',
          background: '#212121',
          title: 'Deleted!',
          text: 'Your cart is now empty.',
          icon: 'success',
          iconColor: '#ea58f9',
        });
        setProductsAdded([]);
        setCartTotal(0);
      }
    });
  }

  return (
    <CartContext.Provider
      value={{
        productsAdded,
        cartTotal,
        addProduct,
        deleteProductFromCart,
        isInCart,
        updateToCart,
        sendEmailToUserWithOrder,
        handleClickClearCart,
        placeOrder,
        orderID,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
