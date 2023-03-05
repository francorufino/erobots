import { createContext, useState } from 'react';

export const CartContext = createContext([]);
export const CartContextProvider = ({ children }) => {
  const [productsAdded, setProductsAdded] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  function updateCartTotal(productsAdded) {
    productsAdded.map((product) => {
      setCartTotal(cartTotal + product.price);
    });
  }

  function addProduct(product) {
    setProductsAdded([...productsAdded, product]);
    setCartTotal(cartTotal + product.price);
    console.log('function add to cart no cartcontext' + productsAdded);
  }

  function deleteProductFromCart(id) {
    setProductsAdded(productsAdded.filter((product) => product.id !== id));
    updateCartTotal(productsAdded);
  }

  function clear() {
    setProductsAdded([]);
    setCartTotal(0.0);
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
        //sumTotalInCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
