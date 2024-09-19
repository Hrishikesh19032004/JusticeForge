// src/components/Evidence.js
import React, { useState } from 'react';

const Evidence = ({ clues, selectClue }) => {
  const [selectedClue, setSelectedClue] = useState("");

  const handleSelect = (clue) => {
    setSelectedClue(clue);
    selectClue(clue);
  };

  return (
    <div className="evidence-card">
      <h3>Select the relevant constitutional article:</h3>
      {clues.map((clue, index) => (
        <button key={index} onClick={() => handleSelect(clue)}>
          {clue}
        </button>
      ))}
      <p>Selected: {selectedClue}</p>
    </div>
  );
};

export default Evidence;
