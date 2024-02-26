import React from 'react';
import './Unique.css'; // Assuming you have a CSS file for styling
import personoUniqueChart from '../assets/unique.png'; // Update path as necessary

function Unique() {
  return (
    <div className="unique-component">
      <h2>The Persono Difference</h2>
      <img src={personoUniqueChart} alt="Persono vs. Other Brands" className="unique-chart" />
    </div>
  );
}

export default Unique;
