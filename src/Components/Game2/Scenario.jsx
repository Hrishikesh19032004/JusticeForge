import React from 'react';
import './choice.css'; // Import the CSS file

function Scenario({ scenario, onChoice }) {
  if (!scenario) {
    return <p>Scenario not available</p>;
  }

  return (
    <div className="scenario">
      <p>{scenario.text}</p>
      <div className="options">
        {Object.entries(scenario.options).map(([key, text]) => (
          <button key={key} onClick={() => onChoice(key)}>
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Scenario;
