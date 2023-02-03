import React, { Fragment } from 'react';
import CardComponent from '../cardComponent/CardComponent';
import FilterTypeComponent from '../filterTypeComponent/FilterTypeComponent';
import HeaderComponent from '../headerComponent/HeaderComponent';

const ItemListContainer = ({ greeting }) => {
  // const getData=()=>{
  //   fetch('data.json'
  //   ,{
  //     headers : {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }
  //   )
  //     .then(function(response){
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       console.log(myJson);
  //     });
  // }
  // useEffect(()=>{
  //   getData()
  // },[])

  return (
    <Fragment>
      <FilterTypeComponent />
      <HeaderComponent />
      <CardComponent />
    </Fragment>
  );
};

export default ItemListContainer;
