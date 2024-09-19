// src/components/CaseSummary.js
import React from 'react';

const CaseSummary = ({ isCorrect, solution }) => {
  return (
    <div className="summary-card">
      <h3>{isCorrect ? "Correct!" : "Incorrect"}</h3>
      <p>{solution}</p>
    </div>
  );
};

export default CaseSummary;