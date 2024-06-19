
import React from 'react';

function Question({ question, onAnswer }) {
  return (
    <div className='question-container container'>
      <h2 className='ques'>Q. {question.question}</h2>
      {question.answers.map((answer, index) => (
        <button key={index} onClick={() => onAnswer(answer.type)}>
          {answer.text}
        </button>
      ))}
    </div>
  );
}

export default Question;
