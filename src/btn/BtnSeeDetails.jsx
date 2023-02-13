import React, { useState } from 'react';
import './BtnSeeDetails.css';
import '../itemList/ItemList.css';
import {Link} from 'react-router-dom'

const BtnSeeDetails = ({detail}) => {
  const [string, setString] = useState(detail);
  const [path, setPath] = useState("")
  function seeDetail() {
    alert(detail.id);
    
  }
  return (
    <div className="robot-tag">
      <Link to={`/detail/${detail.id}`}><button className="detail" onClick={seeDetail}>
        See more
      </button>
      </Link>
    </div>
  );
};

export default BtnSeeDetails;



