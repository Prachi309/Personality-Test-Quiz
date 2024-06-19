
import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

function Questionnaire({ questions }) {
  const [bool, setBool] = useState(false);

  const handleBool = () => {
    setBool(!bool);
  };
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1); 
  const [responses, setResponses] = useState({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });

  const handleAnswer = (type) => {
    setResponses({
      ...responses,
      [type]: responses[type] + 1
    });

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(questions.length); 
    }
  };

  const calculateResult = () => {
    const result = [
      responses.E >= responses.I ? 'E' : 'I',
      responses.S >= responses.N ? 'S' : 'N',
      responses.T >= responses.F ? 'T' : 'F',
      responses.J >= responses.P ? 'J' : 'P'
    ].join('');

    return result;
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(-1);
    setResponses({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
  };

  const handleStart = () => {
    setCurrentQuestionIndex(0);
  };

  return (
    <div>
      {currentQuestionIndex === -1 ? (
        <div className="test-description">
          <h2>Welcome to the 16 Personality Test</h2>
          <p>The 16 personality types are derived from the Myers-Briggs Type Indicator (MBTI), a psychological framework based on Carl Jung's theory of psychological types. The MBTI categorizes personalities into 16 types based on four dichotomies:
<br />
Extraversion (E) vs. Introversion (I)
<br />
Sensing (S) vs. Intuition (N)
<br />
Thinking (T) vs. Feeling (F)
<br />
Judging (J) vs. Perceiving (P)</p>
<button onClick={handleBool} > Why you should take the test?</button>
{bool && (
        <p>
          Taking personality tests like the Myers-Briggs Type Indicator (MBTI) can provide valuable insights into your behavior, preferences, strengths, and areas for improvement. This self-awareness can help you make informed decisions in various aspects of life, from career choices to personal relationships.
        </p>
      )}
<br />
          <button onClick={handleStart}>Start Test</button>
        </div>
      ) : currentQuestionIndex < questions.length ? (
        <Question
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      ) : (
        <Result result={calculateResult()} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default Questionnaire;
