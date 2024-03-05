import React, { useState } from 'react';
import './CommonQuestions.css';

const CommonQuestions = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleDropdown = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const questions = [
    {
      question: "What are the specifications of Persono Smart Pillow?",
      answer: "Answer to this question..."
    },
    {
      question: "Which smartphones are compatible with Persono technology?",
      answer: "Answer to this question..."
    },

  ];

  return (
    <div className="common-questions">
      {questions.map((item, index) => (
        <div key={index} className={`question-item ${activeQuestion === index ? 'active' : ''}`}>
          <button
            className="question-toggle"
            onClick={() => toggleDropdown(index)}
            aria-expanded={activeQuestion === index}
          >
            {item.question}
            <span className="arrow">{activeQuestion === index ? '▲' : '▼'}</span>
          </button>
          {activeQuestion === index && (
            <div className="answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommonQuestions;
