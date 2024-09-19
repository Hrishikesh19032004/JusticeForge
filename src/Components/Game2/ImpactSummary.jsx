import React from 'react';
import CardComponent from './CardComponent';

const ImpactSummary = ({ history }) => {
  const generateSummary = () => {
    let summary = "";
    
    if (history.includes(4) && history.includes(8)) {
      summary += "The law is implemented successfully with positive feedback.";
    } else if (history.includes(4) && history.includes(9)) {
      summary += "The law faces backlash from certain groups. The implementation is halted and revised.";
    } else if (history.includes(5) && history.includes(10)) {
      summary += "The law is well-received and effectively addresses the issue.";
    } else if (history.includes(5) && history.includes(11)) {
      summary += "The law is criticized for not addressing all concerns. Revisions are proposed.";
    } else if (history.includes(6) && history.includes(12)) {
      summary += "The revised law is approved with some amendments.";
    } else if (history.includes(6) && history.includes(13)) {
      summary += "The revised law is rejected for further modifications. The law is delayed.";
    } else if (history.includes(7) && history.includes(14)) {
      summary += "The existing laws remain effective with minor adjustments.";
    } else if (history.includes(7) && history.includes(15)) {
      summary += "Calls for reform increase as current laws are seen as inadequate. A new proposal is needed.";
    } else {
      summary += "Your choices led to a series of complex outcomes. The impact of the decisions varied.";
    }

    return summary;
  };

  return (
    <CardComponent text={generateSummary()} />
  );
};

export default ImpactSummary;
