import React, { Fragment } from 'react';
import CardComponent from '../cardComponent/CardComponent';
import FilterTypeComponent from '../filterTypeComponent/FilterTypeComponent';

const ItemListContainer = () => {
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
      <CardComponent />
    </Fragment>
  );
};

export default ItemListContainer;
