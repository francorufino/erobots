import React, { useState, useEffect } from 'react';
import ItemDetail from '../../components/itemDetail/ItemDetail';
import { Item as Items } from '../../mocks/item/Item.mock';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

const ItemDetailContainer = () => {
  // const navigate = useNavigate;
  function createANonExistingProduct() {
    new Swal({
      title: 'Product not found',
      text: 'Sorry, we do not sell this product!',
      icon: 'error',
      iconColor: '#ea58f9',
      color: 'rgb(110, 237, 237)',
      background: '#212121',
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
      }
    });
  }

  const [item, setItem] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    new Promise((resolve) =>
      // Simulation of a call to an api
      setTimeout(() => {
        const itemFiltered = Items.find((item) => {
          return item.id == id;
        });
        resolve(itemFiltered);
      }, 1000),
    ).then((data) => setItem(data));
  }, [id]);

  if (!item) {
    createANonExistingProduct();
    // navigate('/');
  }
  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
