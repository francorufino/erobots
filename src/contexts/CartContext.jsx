import { createContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext([]);
export const CartContextProvider = ({ children }) => {
  const [productsAdded, setProductsAdded] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const amount = productsAdded
      .map((product) => parseInt(product.item.price) * product.quantityAdded)
      .reduce((partialSum, a) => partialSum + a, 0);
    setCartTotal(amount);
  }, [productsAdded]);

  function addProduct(item, quantity) {
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
    return productsAdded.some((product) => product.id === id);
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

  function goToCheckout() {
    alert('rodando funcao go to checkout');
  }

  function sendEmailToUserWithOrder() {
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
        goToCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
