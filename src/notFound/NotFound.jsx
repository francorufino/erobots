import React from 'react';
import "./NotFound.css";
import "../App.css"

const NotFound = () => {
  
  return (
    
    <div className = "head-text">
  <div className = "head-image">
    <img src = {require ('../images/404pageimag.png')}/>
  </div>
    <div class='text-on-image'>
       <h3 className="container"> Uh oh... something went wrong </h3>
       <p className="container"> 404 page not found </p>
    </div>
</div>
   
  )
}

export default NotFound

