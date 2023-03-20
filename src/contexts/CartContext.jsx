import { createContext, useState } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext([]);
export const CartContextProvider = ({ children }) => {
  const [productsAdded, setProductsAdded] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [qtyPerItem, setQtyPerItem] = useState(new Map());
  const updateQtyPerItem = (key, value) => {
    setQtyPerItem(new Map(qtyPerItem.set(key, value)));
  };

  //
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
    let newTotal = 0;
    productsAdded.map((product) => {
      return (newTotal = newTotal + product.price * qtyPerItem.get(product.id));
    });
    setCartTotal(newTotal);
  }

  function totalItemsInCart() {
    let totalItems = 0;
    productsAdded.map((p) => {
      return (totalItems = totalItems + qtyPerItem.get(p.id));
    });
    return totalItems;
  }

  function sendEmailToUserWithOrder() {
    console.log("Sending order sumary to user's email");
  }

  function clearCart() {
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
          // borderColor: '#ea58f9',
        });
        // setProductsAdded([]);
        // setCartTotal(0.0);
        // setQtyPerItem(new Map());
      }
    });
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
        add1ToCart,
        remove1FromCart,
        sendEmailToUserWithOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
