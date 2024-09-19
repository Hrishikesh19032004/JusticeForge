// src/components/Puzzle.js
import React from 'react';

const Puzzle = ({ selectedClue, correctAnswer, checkAnswer }) => {
  const handleSubmit = () => {
    // Check if the selected clue matches the correct answer (case-insensitive)
    checkAnswer(selectedClue.trim().toLowerCase() === correctAnswer.trim().toLowerCase());
  };

  return (
    <div className="puzzle-card">
      <h3>Solve the puzzle:</h3>
      <p>Based on the evidence, does this scenario violate any constitutional rights?</p>
      <button onClick={handleSubmit}>Submit Answer</button>
    </div>
  );
};

export default Puzzle;
