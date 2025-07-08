import { useState, useEffect } from "react";
import facebookIcon from "../assets/icons/facebook-logo.svg";
import instagramIcon from "../assets/icons/instagram-logo.svg";
import ConsultationModal from "./ConsultationModal";

export default function ModalPanel({ isOpen, onClose }) {
  const [showConsultation, setShowConsultation] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const quizData = [
      { question: "Який стиль вам подобається?", options: ["Модерн", "Класика", "Мінімалізм"], answer: "Модерн" },
      { question: "Яка кімната потребує оновлення?", options: ["Вітальня", "Спальня", "Кухня"], answer: "Вітальня" }
    ];
    let currentQuestion = 0;
    let score = 0;

    function showQuestion() {
      const q = quizData[currentQuestion];
      document.getElementById("question").innerText = q.question;
      const optionsDiv = document.getElementById("options");
      optionsDiv.innerHTML = "";
      q.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
      });
    }

    function checkAnswer(selected) {
      if (selected === quizData[currentQuestion].answer) score++;
      currentQuestion++;
      if (currentQuestion < quizData.length) showQuestion();
      else {
        document.getElementById("quiz").innerHTML = `<h4>Результат: ${score} з ${quizData.length}</h4>`;
      }
    }

    showQuestion();

    return () => {
      document.getElementById("quiz").innerHTML = '<h4 id="question"></h4><div id="options"></div>';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-panel" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-panel-content">
        <span className="close-modal" onClick={onClose}>×</span>

        <h2>Додаткові опції</h2>

        {/* Квіз */}
        <div className="quiz-section">
          <h3>Пройдіть наш квіз!</h3>
          <div id="quiz">
            <h4 id="question"></h4>
            <div id="options"></div>
          </div>
        </div>

        {/* Соціальні мережі */}
        <div className="social-links">
          <h3>Ми у соціальних мережах:</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>

        {/* Замовити консультацію */}
        <button onClick={() => setShowConsultation(true)}>Замовити консультацію</button>
        {showConsultation && <ConsultationModal isOpen={true} onClose={() => setShowConsultation(false)} />}
      </div>
    </div>
  );
}