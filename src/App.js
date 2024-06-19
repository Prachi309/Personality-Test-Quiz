// src/App.js
import React from 'react';
import './App.css';
import Questionnaire from './components/Questionnaire';
import { questions } from './data/questions';

function App() {
  return (
    <div className="App">
      <h1>Myers-Briggs Type Indicator</h1>
      <Questionnaire questions={questions} />
    </div>
  );
}

export default App;
