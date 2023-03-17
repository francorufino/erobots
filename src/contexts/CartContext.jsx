import { createContext, useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { UserContext } from './UserContext';
export const CartContext = createContext([]);
export const CartContextProvider = ({ children }) => {
  const [productsAdded, setProductsAdded] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [qtyPerItem, setQtyPerItem] = useState(new Map());
  const updateQtyPerItem = (key, value) => {
    setQtyPerItem(new Map(qtyPerItem.set(key, value)));
  };
  const { userName, email, verifyUserLoggedIn } = useContext(UserContext);
  // const { orderIdDB, dateAndTimeDB } = db;
  // const orderSumary = (
  //   orderID,
  //   dateAndTime,
  //   userName,
  //   emailUser,
  //   productsBought,
  //   qtyBought,
  //   totalInOrder,
  // ) => {
  //   return {
  //     orderID: orderID,
  //     dateAndTime: dateAndTime,
  //     userName: userName,
  //     emailUser: emailUser,
  //     productsBought: productsBought,
  //     qtyBought: qtyBought,
  //     totalInOrder: totalInOrder,
  //   };
  // };

  function addProduct(product, qty) {
    const pID = product.id;
    if (!isInCart(pID)) {
      setProductsAdded([...productsAdded, product]);
    }
    if (!qtyPerItem.has(pID)) {
      updateQtyPerItem(pID, 0);
    }
    updateQtyPerItem(pID, qtyPerItem.get(pID) + qty);
    updateCartTotal();
  }

  function isInCart(id) {
    return productsAdded.some((product) => product.id === id);
  }

  function add1ToCart(id) {
    updateQtyPerItem(id, qtyPerItem.get(id) + 1);
    updateCartTotal();
  }

  function remove1FromCart(id) {
    updateQtyPerItem(id, qtyPerItem.get(id) - 1);
    updateCartTotal();
  }

  function deleteProductFromCart(id) {
    setProductsAdded(productsAdded.filter((product) => product.id !== id));
    //qtyPerItem.delete(id);
    updateCartTotal();
  }

  function updateCartTotal() {
    const newTotal = 0;
    productsAdded.map((product) => {
      newTotal = newTotal + product.price * qtyPerItem.get(product.id);
    });
    setCartTotal(newTotal);
  }

  function totalItemsInCart() {
    let totalItems = 0;
    productsAdded.map((p) => {
      totalItems = totalItems + qtyPerItem.get(p.id);
    });
    return totalItems;
  }

  function placeOrder() {
    if (verifyUserLoggedIn()) {
      // createOrderSumary();
      createMsgUserOrderPlaced();
      sendEmailToUserWithOrder();
      clearCart();
    }
  }

  // function createOrderSumary() {
  //   const ordersCollection = collection(db, 'orders');
  //   orderSumary(
  //     orderIdDB,
  //     dateAndTimeDB,
  //     userName,
  //     email,
  //     productsAdded,
  //     totalItemsInCart,
  //     cartTotal,
  //   );
  // }

  function createMsgUserOrderPlaced() {
    new Swal({
      tittle: 'Order Placed',
      text: 'Check your email to see your order details',
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

  function sendEmailToUserWithOrder() {
    //sendEmail to user
  }

  function clearCart() {
    new Swal({
      title: 'Delete',
      text: 'Are you sure you want to delete ALL products from your cart?',
      icon: 'error',
      buttons: ['No', 'Yes'],
    }).then((answer) => {
      if (answer) {
        new Swal({
          text: 'All your items were deleted with success!',
          icon: 'success',
          buttons: 'OK',
          timer: '2000',
        });
      }
    });

    setProductsAdded([]);
    setCartTotal(0.0);
    setQtyPerItem(new Map());
  }

  return (
    <CartContext.Provider
      value={{
        productsAdded,
        cartTotal,
        qtyPerItem,
        addProduct,
        deleteProductFromCart,
        clearCart,
        isInCart,
        totalItemsInCart,
        placeOrder,
        add1ToCart,
        remove1FromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
