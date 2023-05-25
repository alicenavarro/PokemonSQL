import React from 'react';
import './style.css';

function Home() {
  return (
    <div className="center-on-page">
      <div className="pokeball">
        <div className="pokeball__button"></div>
      </div>
      <div id="question-container" className="question-container">
        <h2>Pregunta:</h2>
        <p id="question" className="question"></p>
        <div id="options" className="options"></div>
        <button id="submit-button" className="submit-button">Responder</button>
        <p id="result" className="result"></p>
      </div>
    </div>
  );
}

export default Home;