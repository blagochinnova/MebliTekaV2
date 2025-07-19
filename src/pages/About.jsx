import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import ResumeModal from "../components/ResumeModal";
import "../style/styles.css"; // Підключаємо CSS

const TeamCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const cardVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
    transition: { duration: 0.6, ease: "easeInOut" },
  };

  return (
    <motion.div
      className="team-card-wrapper"
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={cardVariants.transition}
      style={{ perspective: "1000px" }}
    >
      <AnimatePresence>
        {isFlipped ? (
          <motion.div
            key="back"
            className="card-inner back-face"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 180 }}
            transition={cardVariants.transition}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="team-card back">
              <div className="card-header">
                <button className="flip-button" onClick={flipCard}>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <div className="card-content">
                <p className="bio">{member.bio}</p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="front"
            className="card-inner front-face"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: -180 }}
            transition={cardVariants.transition}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="team-card front">
              <div className="card-header">
                <button className="flip-button" onClick={flipCard}>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <div className="card-content">
                <div className="avatar-container">
                  <div className="member-avatar">
                    <img src={`/images/${member.image}`} alt={member.name} />
                  </div>
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function About() {
  const [isConsultationOpen, setConsultationOpen] = useState(false);
  const [isResumeOpen, setResumeOpen] = useState(false);

  // Дані про працівників з біографіями
  const teamMembers = [
    {
      id: 1,
      name: "Лі Хан",
      role: "Збиральник меблів",
      image: "worker1-removebg.png",
      bio: "Ветеран із Південної Кореї. Втратив руку на війні, захищаючи свободу України. Сьогодні - частина нашої родини в MebliTeka, де з гідністю працює збирачем меблів.",
    },
    {
      id: 2,
      name: "Андрій Супрунов",
      role: "Мебляр",
      image: "worker2-removebg.png",
      bio: "Майстер із понад 20-річним досвідом у меблевій сфері. Працював у провідних команіях України та США. Спеціалізується на кухнях, шафах-купе та меблях преміум-класу. Сьогодні - частина команди MebliTeka в Івано-Франківську.",
    },
    {
      id: 3,
      name: "В'ячеслав Соборний",
      role: "Мебляр",
      image: "worker3-removebg.png",
      bio: "Проєктує корпусні меблі будь-якої складності. Підбирає матеріали та фурнітуру під ваші потреби.Забезпечує якісну збірку та монтаж. Створює стильні й довговічні рішення для вашого простору.",
    },
    {
      id: 4,
      name: "Олександр Міхов",
      role: "Дизайнер та інноватор",
      image: "worker4-removebg.png",
      bio: "Колишній майор елітного підрозділу 'Омега'. Після поранення не зупинився - став частиною нашої команди як талановитий дизайнер та генератор інновацій.",
    },
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
            <div className="team-container">
              <h2 className="team-title">Наша команда</h2>
              <p className="team-subtitle">
                Знайомтесь з людьми, які щодня створюють для вас затишок та
                якісні меблі:
              </p>
              <div className="team-grid">
                {teamMembers.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
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