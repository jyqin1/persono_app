import React from 'react';
import './Unique.css'; 
import personoUniqueChart from '../assets/unique.png'; 

function Unique() {
  return (
    <div className="unique-component">
      <h2>The Persono Difference</h2>
      <p> We are committed to providing relevant data that truly enhances your sleep habits. </p>
      <img src={personoUniqueChart} alt="Persono vs. Other Brands" className="unique-chart" />
    </div>
  );
}

export default Unique;
