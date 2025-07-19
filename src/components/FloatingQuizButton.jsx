import React, { useState } from "react";
import QuizModal from "./QuizModal";

const FloatingQuizButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="quiz-floating-btn"
      >
        🧩 Розрахувати меблі
      </button>
      {open && <QuizModal onClose={() => setOpen(false)} />}
    </>
  );
};

export default FloatingQuizButton;
