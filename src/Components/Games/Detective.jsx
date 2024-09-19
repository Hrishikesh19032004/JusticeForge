import React, { useState } from "react";
import Scenario from "./components/Scenario";
import Evidence from "./components/Evidence";
import Puzzle from "./components/Puzzle";
import CaseSummary from "./components/CaseSummary";
import cases from "./data/cases";
import "./Styles.css";

function Detective() {
  const [currentCase, setCurrentCase] = useState(0);
  const [selectedClue, setSelectedClue] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const selectClue = (clue) => {
    setSelectedClue(clue);
  };

  const checkAnswer = (correct) => {
    setIsCorrect(correct);
  };

  const handleNextCase = () => {
    if (currentCase < cases.length - 1) {
      setCurrentCase(currentCase + 1);
      setSelectedClue("");
      setIsCorrect(null);
    }
  };

  const currentCaseData = cases[currentCase];

  return (
    <>
    <div className="rules" style={{fontSize:'1.1rem'}}>
      <div style={{fontSize:'3rem'}}>Detective Game Rules</div><br/>
      <div style={{fontSize:'1.5rem'}}>Welcome to the Detective Game!</div> Your mission is to solve each case by carefully analyzing the provided<br/> scenarios, clues, and solving the puzzles.<br/> Follow these rules to ensure you stay on track:<br/><br/>

      <div style={{fontSize:'1.5rem'}}>Objective</div>
      The goal is to solve each case by selecting the correct clue that solves the mystery. For each case:<br/><br/>

      <div style={{fontSize:'1.5rem'}}>Read the scenario carefully.</div>
      Examine the clues presented to you.<br/>
      Solve the puzzle based on the clue you believe is correct.<br/>
      If you solve the puzzle correctly, you will proceed to the case summary.<br/>
      Move on to the next case until all cases are solved.<br/>
      </div>
    <div className="App" style={{ marginTop: "6rem" }}>
      
      <Scenario
        title={currentCaseData.title}
        scenario={currentCaseData.scenario}
      />
      {!isCorrect && (
        <>
          <Evidence clues={currentCaseData.clues} selectClue={selectClue} style={{marginBottom:'5px'}}/>
          <Puzzle
            selectedClue={selectedClue}
            correctAnswer={currentCaseData.correctAnswer}
            checkAnswer={checkAnswer}
            style={{marginBottom:'15px'}}
          />
        </>
      )}
      {isCorrect !== null && (
        <>
          <CaseSummary
            isCorrect={isCorrect}
            solution={currentCaseData.solution}
          />
          <button
            onClick={handleNextCase}
            disabled={currentCase >= cases.length - 1}
            className="next-button"
          >
            {currentCase >= cases.length - 1 ? "No More Cases" : "Next Case"}
          </button>
        </>
      )}
    </div>
    </>
  );
}

export default Detective;
