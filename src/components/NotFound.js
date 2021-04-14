import React from 'react';

import './styles/NotFound.css';
import img from '../images/notFound.svg';

function NotFound() {
  return (
    <div className="notFound_container">
      <img src={img} alt="Nothing was found image" />
    </div>
  );
}

export default NotFound;
