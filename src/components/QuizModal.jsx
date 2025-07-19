import React, { useState } from "react";
import "../style/styles.css"

const QuizModal = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState("");
  const [answers, setAnswers] = useState({});
  const [contact, setContact] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const questions = {
    kitchen: ["Який розмір кухні?", "Потрібна техніка?", "Ваш бюджет?"],
    living: ["Який стиль вам подобається?", "Потрібні місця для зберігання?", "Ваш бюджет?"],
    bedroom: ["Скільки місць для сну потрібно?", "Який розмір кімнати?", "Бажаний стиль?"],
  };

  const handleNext = (answer) => {
    if (step === 0) {
      setCategory(answer);
    } else {
      setAnswers((prev) => ({ ...prev, [`q${step}`]: answer }));
    }
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    const message = `
  <b>🛋️ Новий запит з квізу</b>
  <b>Кімната:</b> ${category}
  ${Object.entries(answers)
      .map(([key, val], i) => `<b>Питання ${i + 1}:</b> ${val}`)
      .join("\n")}
  <b>Імʼя:</b> ${contact.name}
  <b>Телефон:</b> ${contact.phone}
  `;
  
    try {
      const res = await fetch("/api/sendToTelegram", {
        method: "POST",
        body: JSON.stringify({ message }),
      });
  
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Помилка при надсиланні в Telegram");
      }
    } catch (error) {
      console.error(error);
      alert("Не вдалося відправити");
    }
  };

  const currentQuestions = questions[category];
  const question = currentQuestions?.[step - 1];

  const renderStep = () => { 
    if (submitted) {
      return (
      <>
      <p className="quiz-title">Дякуємо! Ми з вами звʼяжемось 👌</p>;
      <button className="quiz-button" onClick={() => onClose()}>Закрити</button>
      </>
    );
  }

    if (step === 0) {
      return (
        <>
          <h2 className="quiz-title">Яку кімнату меблюєте?</h2>
          <div className="quiz-buttons">
            <button onClick={() => handleNext("kitchen")}>Кухня</button>
            <button onClick={() => handleNext("living")}>Вітальня</button>
            <button onClick={() => handleNext("bedroom")}>Спальня</button>
          </div>
        </>
      );
    }

    if (step <= currentQuestions.length) {
      return (
        <>
        <h2 className="quiz-title">{question}</h2>
        <input
        className="quiz-input"
        type="text"
        placeholder="Ваша відповідь"
        onKeyDown={(e) => {
          if (e.key === "Enter")
          handleNext(e.target.value);
        }
        }
        />
        </>
      )
    }

    return (
      <>
        <h2 className="quiz-title">Залиште контакт</h2>
        <input
          className="quiz-input"
          placeholder="Ваше ім'я"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
        />
        <input
          className="quiz-input"
          placeholder="Номер телефону"
          value={contact.phone}
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
        />
        <button
          onClick={handleSubmit}
          className="quiz-button"
          disabled={!contact.name || !contact.phone}
        >
          Надіслати
        </button>
      </>
    );
  };

  return (
    <div className="quiz-overlay">
      <div className="quiz-modal">
        <button
          onClick={onClose}
          className="quiz-close"
        >
          ×
        </button>
        {renderStep()}
      </div>
    </div>
  );
};

export default QuizModal;
