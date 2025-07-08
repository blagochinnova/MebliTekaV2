import React, { useState } from "react";
import pencilRulerIcon from "../assets/icons/pencil-ruler.svg";
import stackIcon from "../assets/icons/stack.svg";
import shieldIcon from "../assets/icons/shield.svg";
import clockIcon from "../assets/icons/clock.svg";
import pencilIcon from "../assets/icons/pencil.svg";
import hammerIcon from "../assets/icons/hammer.svg";
import wrenchIcon from "../assets/icons/wrench.svg";
import gearSixIcon from "../assets/icons/gear-six.svg";

import "../style/styles.css";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <main>
      <div className="container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Меблі для дому з історією перемоги</h1>
            <Link className="button" to="/Catalog">
              Переглянути Каталог
            </Link>
          </div>
          <div className="image-grid">
            <img src="/images/main1.jpg" alt="" />
            <img src="/images/main2.jpg" alt="" />
            <img src="/images/main3.jpg" alt="" />
            <img src="/images/main4.jpg" alt="" />
          </div>
        </section>
        <section className="advantages-section">
          <h2>Наші переваги</h2>
          <div className="advantages-list">
            <div className="advantage-item">
              
                <img src={pencilRulerIcon} alt="" />
                <h3>Індивідуальний дизайн</h3>
                <p>
                  Створюємо меблі, які ідеально вписуються у ваш простір.
                  Враховуємо кожну деталь — стиль, функціональність, побажання.
                  Ваш інтер'єр — ваші правила.
                </p>
            
            </div>
            <div className="advantage-item">
           
                <img src={stackIcon} alt="" />
                <h3>Якісні матеріали</h3>
                <p>
                  Ми використовуємо лише перевірені та довговічні матеріали —
                  для комфорту, естетики й надійності на роки. Меблі, якими
                  хочеться користуватися щодня.
                </p>
          
            </div>
            <div className="advantage-item">
          
                <img src={shieldIcon} alt="" />
                <h3>Гарантія до 5 років</h3>
                <p>
                  Ми впевнені в якості нашої роботи — саме тому надаємо гарантію
                  до 5 років на всі вироби. Надійність, підтверджена часом.
                </p>
  
            </div>
            <div className="advantage-item">
  
                <img src={clockIcon} alt="" />
                <h3>Швидке виготовлення</h3>
                <p>
                  Ми виготовляємо меблі за індивідуальними замовленнями у
                  максимально короткі строки, не жертвуючи якістю. Ваші ідеї
                  втілюються в життя швидко та професійно!
                </p>
  
            </div>
          </div>
        </section>

        <section className="services-section">
          <h2>Наші послуги</h2>
          <div className="services-list">
            <div className="service-item">
              <img src={pencilIcon} alt="" />
              <h3>Дизайн</h3>
              <p>
                Індивідуальний підхід до створення стильних та функціональних
                меблів, які ідеально впишуться у ваш інтер’єр.
              </p>
              {/* <a className="btn-link learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="btn-text">Дізнатися більше </span>
              </a> */}
            </div>
            <div className="service-item">
              <img src={hammerIcon} alt="" />
              <h3>Виготовлення меблів</h3>
              <p>
                Професійне виготовлення меблів на замовлення з урахуванням ваших
                побажань і сучасних стандартів якості.
              </p>
              {/* <a className="btn-link learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="btn-text">Дізнатися більше </span>
              </a> */}
            </div>
            <div className="service-item">
              <img src={wrenchIcon} alt="" />
              <h3>Встановлення</h3>
              <p>
                Швидкий і якісний монтаж меблів з гарантією правильного і
                безпечного встановлення.
              </p>
              {/* <a className="btn-link learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="btn-text">Дізнатися більше </span>
              </a> */}
            </div>
            <div className="service-item">
              <img src={gearSixIcon} alt="" />
              <h3>Обслуговування</h3>
              <p>
                Професійний догляд і ремонт меблів, щоб вони служили вам довго.
              </p>
              {/* <a className="btn-link learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="btn-text">Дізнатися більше </span>
              </a> */}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
