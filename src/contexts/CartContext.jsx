import { createContext, useState } from 'react';

export const CartContext = createContext([]);
export const CartContextProvider = ({ children }) => {
  const [productsAdded, setProductsAdded] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [amountPerItem, setAmountPerItem] = useState(new Map());
  const updateAmountPerItem = (key, value) => {
    setAmountPerItem(new Map(amountPerItem.set(key, value)));
  };

  function totalItemsInCart() {
    let totalItems = 0;
    productsAdded.map((p) => {
      totalItems = totalItems + amountPerItem.get(p.id);
    });
    return totalItems;
  }

  function placeOrder() {
    alert('Your order was placed! Thank you for shopping at e-robots');
    clear();
  }

  function updateCartTotal(productsAdded) {
    productsAdded.map((product) => {
      setCartTotal(cartTotal + product.price * amountPerItem(product.id));
    });
  }

  function addProduct(product, amount) {
    const pID = product.id;
    if (!isInCart(pID)) {
      setProductsAdded([...productsAdded, product]);
    }
    if (!amountPerItem.has(pID)) {
      updateAmountPerItem(pID, 0);
    }
    updateAmountPerItem(pID, amountPerItem.get(pID) + amount);
    setCartTotal(cartTotal + product.price * amount);
  }

  function deleteProductFromCart(id) {
    setProductsAdded(productsAdded.filter((product) => product.id !== id));
    //amountPerItem.delete(id);
    updateCartTotal(productsAdded);
  }

  function clear() {
    setProductsAdded([]);
    setCartTotal(0.0);
    setAmountPerItem(new Map());
  }

  function isInCart(id) {
    return productsAdded.some((product) => product.id === id);
  }

  return (
    <CartContext.Provider
      value={{
        productsAdded,
        cartTotal,
        amountPerItem,
        addProduct,
        deleteProductFromCart,
        clear,
        isInCart,
        totalItemsInCart,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
