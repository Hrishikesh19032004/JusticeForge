import React from 'react';
import './choice.css';

const CardComponent = ({ text }) => {
  return (
    <div className="card-component">
      <div className="card-content">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CardComponent;
