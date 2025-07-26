import React from "react";

const FloatingQuizButton = () => {
  const handleClick = () => {
    window.open("https://mrqz.to/68847a42eb0b180033546e4e", "_blank");
  };

  return (
    <button onClick={handleClick} className="quiz-floating-btn">
      🧩 Розрахувати меблі
    </button>
  );
};

export default FloatingQuizButton;
