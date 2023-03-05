import { createContext, useState } from 'react';

export const CartContext = createContext([]);
export const CartContextProvider = ({ children }) => {
  const [productsAdded, setProductsAdded] = useState([]);

  function addProduct(product) {
    setProductsAdded([...productsAdded, product]);
    console.log('function add to cart no cartcontext' + productsAdded);
  }

  function deleteProductFromCart(id) {
    setProductsAdded(productsAdded.filter((product) => product.id !== id));
  }

  function clear() {
    setProductsAdded([]);
  }

  function isInCart(id) {
    return productsAdded.some((product) => product.id === id);
  }

  return (
    <CartContext.Provider
      value={{
        productsAdded,
        addProduct,
        deleteProductFromCart,
        clear,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
