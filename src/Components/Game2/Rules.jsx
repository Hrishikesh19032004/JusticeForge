import React from 'react';
import './choice.css';

const Rules = () => {
  return (
    <div className="rules" style={{ marginTop: '2rem', padding: '20px', backgroundColor: '#1e1e1e', borderRadius: '10px', color: 'white', maxWidth: '600px', margin: '0 auto', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
      <h2>Game Rules</h2>
      <ul>
        <li>Read the scenario presented to you carefully.</li>
        <li>Select one of the available options to make a choice in the story.</li>
        <li>Your choices will impact the outcome of the story and lead to different scenarios.</li>
        <li>You can go back to the previous scenario by clicking the "Go Back" button.</li>
        <li>Once you reach the final scenario, your history of choices will be summarized.</li>
        <li>Play through the story multiple times to explore different outcomes and impacts of your decisions.</li>
      </ul>
      <p>Good luck, and enjoy the game!</p>
    </div>
  );
};

export default Rules;
