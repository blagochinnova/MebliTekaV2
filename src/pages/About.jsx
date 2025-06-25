import React, { useState } from "react";
import ResumeModal from "../components/ResumeModal";
import "../style/about.css"

export default function About() {
  const [isConsultationOpen, setConsultationOpen] = useState(false);
  const [isResumeOpen, setResumeOpen] = useState(false);

  return (
    <>

      <main>
        <div className="container">
          <section className="mission-section">
            <h2>Наша місія</h2>
            <p>
              Ми — меблева компанія, яка не лише створює якісні меблі, але й дбає
              про людей. Одним із наших головних пріоритетів є
              <strong> працевлаштування людей з інвалідністю</strong>. Ми віримо,
              що кожен має право на гідну роботу, розвиток та підтримку в колективі.
            </p>
          </section>

          <section className="team-section">
            <h2>Наша команда</h2>
            <p className="team-intro">
              Знайомтесь з людьми, які щодня створюють для вас затишок та якісні меблі:
            </p>

            <div className="team-list">
              {[1, 2, 3, 4].map((n, i) => (
                <div className="member" key={i}>
                  <img
                    src={`../image/${n % 2 === 0 ? "IMG_4529.jpg" : "IMG_4141.jpg"}`}
                    alt={`Фото працівника ${i + 1}`}
                  />
                  <p className="team-text">
                    Ім’я Прізвище — короткий опис спеціальності або ролі.
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="request-section">
            <h2>Запрошуємо до команди</h2>
            <p>
              Якщо ви маєте інвалідність і хочете працювати в дружньому та підтримуючому колективі —{" "}
              <strong>ми відкриті до співпраці</strong>. Надішліть своє резюме або просто зв’яжіться з нами, і ми з радістю розглянемо вашу кандидатуру.
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

      {isResumeOpen && (
        <ResumeModal onClose={() => setResumeOpen(false)} />
      )}
    </>
  );
}
