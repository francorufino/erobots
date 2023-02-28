import { createContext, useState } from 'react';

export const CartContext = createContext([]);
export const CartContextProvider = ({ children }) => {
  const fruits = ['apple', 'watermelon'];
  const veggies = ['apple', 'watermelon'];
  return (
    <CartContext.Provider value={{ fruits, veggies }}>
      {children}
    </CartContext.Provider>
  );
};
