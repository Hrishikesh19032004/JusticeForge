// src/components/Scenario.js
import React from 'react';

const Scenario = ({ title, scenario }) => {
  return (
    <div className="scenario-card">
      <h2>{title}</h2>
      <p>{scenario}</p>
    </div>
  );
};

export default Scenario;