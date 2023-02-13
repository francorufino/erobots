import React from 'react';
import './FilterTypeComponent.css';


const FilterTypeComponent = () => {
  return (
    <div id="divFilterContanier" className="menu-filter">
      <ul className="menu-filter-ul">
        <li>for business</li>
        <li>for industry</li>
        <li>around the house</li>
        <li>companion</li>
      </ul>
    </div>
  );
};

export default FilterTypeComponent;


// <Nav.Link as={Link} to="/category/mouse">
//             Mouse
//           </Nav.Link>