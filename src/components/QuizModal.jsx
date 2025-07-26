import React from "react";
import "../style/quiz.css";

const QuizModal = ({ onClose }) => {
  return (
    <div className="quiz-modal-overlay">
      <div className="quiz-modal-content">
        <button className="quiz-modal-close" onClick={onClose}>
          ✕
        </button>
        <iframe
          src="https://mrqz.to/68847a42eb0b180033546e4e"
          title="Marquiz"
          width="100%"
          height="600"
          style={{ border: "none", borderRadius: "8px" }}
          allow="fullscreen"
        />
      </div>
    </div>
  );
};

export default QuizModal;
