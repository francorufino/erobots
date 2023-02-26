import { createContext, useEffect, useState } from 'react';
import { Item as itemMock } from '../mocks/item/Item.mock';

function CartContext({ children }) {
  const [stockContext, setStockContext] = useState(0);

  function UpdateStock() {
    useEffect(() => {
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(itemMock);
        }, 1000);
      }).then(
        (data) => {
          data.map((product) => {
            setStockContext(product.stock);
            console.log(product.stock);
          });
        },
        [stockContext],
      );
    });
  }

  return <CartContext value={{ UpdateStock }}>{children}</CartContext>;
}

export default CartContext;
