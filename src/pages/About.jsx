import React, { useState } from "react";
import ResumeModal from "../components/ResumeModal";
import "../style/styles.css";

export default function About() {
  const [isConsultationOpen, setConsultationOpen] = useState(false);
  const [isResumeOpen, setResumeOpen] = useState(false);

  // Дані про працівників
  const teamMembers = [
    { id: 1, name: "Іван Іванов", role: "Дизайнер", image: "worker1.jpg" },
    { id: 2, name: "Марія Петрова", role: "Архітектор", image: "worker2.jpg" },
    { id: 3, name: "Олег Сидоров", role: "Менеджер", image: "worker3.jpg" },
    { id: 4, name: "Анна Коваль", role: "Консультант", image: "worker4.jpg" },
  ];

  return (
    <>
      <main>
        <div className="container">
          <section className="mission-section">
            <div className="mission-content">
              <h2>Наша місія</h2>
              <p>
                Ми — меблева компанія, яка не лише створює якісні меблі, але й
                дбає про людей. Одним із наших головних пріоритетів є
                <strong> працевлаштування людей з інвалідністю</strong>. Ми
                віримо, що кожен має право на гідну роботу, розвиток та
                підтримку в колективі.
              </p>
            </div>
            <img src="/images/LogoN." alt="" />
          </section>

          <section className="team-section">
            <h2>Наша команда</h2>
            <p className="team-intro">
              Знайомтесь з людьми, які щодня створюють для вас затишок та якісні
              меблі:
            </p>

            <div className="team-list">
              {teamMembers.map((member, i) => (
                <div className="member" key={member.id}>
                  <img
                    src={`/images/${member.image}`} // Використовуємо унікальне зображення для кожного
                    alt={`Фото працівника ${member.name}`}
                  />
                  <p className="team-text">
                    {member.name} — {member.role}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="request-section">
            <h2>Запрошуємо до команди</h2>
            <p>
              Якщо ви маєте інвалідність і хочете працювати в дружньому та
              підтримуючому колективі —{" "}
              <strong>ми відкриті до співпраці</strong>. Надішліть своє резюме
              або просто зв’яжіться з нами, і ми з радістю розглянемо вашу
              кандидатуру.
            </p>
            <button
              className="button open-resume-modal-btn"
              onClick={() => setResumeOpen(true)}
            >
              Надіслати резюме
            </button>
          </section>
        </div>
      </main>

      {isResumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </>
  );
}