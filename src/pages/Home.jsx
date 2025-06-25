import React, { useState } from "react";
import "../style/styles.css"

export default function HomePage() {

  return (
  

      <main>
        <div className="container">
          <section className="hero-section">
            <div className="hero-content">
              <h1>Меблі для дому з історією перемоги</h1>
              <a className="button" href="/Catalog">Переглянути Каталог</a>
            </div>
            <div className="image-grid">
              <img src="/main1.jpg" alt="" />
              <img src="/main2.jpg" alt="" />
              <img src="/main3.jpg" alt="" />
              <img src="/main4.jpg" alt="" />
            </div>
          </section>

          <section className="advantages-section">
            <h2>Наші переваги</h2>
            <div className="advantages-list">
              <div className="advantage-item">
                <a href="#">
                  <img src="/icon/pencil-ruler.svg" alt="" />
                  <h3>Індивідуальний дизайн</h3>
                  <p>
                    Створюємо меблі, які ідеально вписуються у ваш простір.
                    Враховуємо кожну деталь — стиль, функціональність, побажання.
                    Ваш інтер'єр — ваші правила.
                  </p>
                </a>
              </div>
              <div className="advantage-item">
                <a href="#">
                  <img src="/icon/stack.svg" alt="" />
                  <h3>Якісні матеріали</h3>
                  <p>
                    Ми використовуємо лише перевірені та довговічні матеріали —
                    для комфорту, естетики й надійності на роки. Меблі, якими
                    хочеться користуватися щодня.
                  </p>
                </a>
              </div>
              <div className="advantage-item">
                <a href="#">
                  <img src="/icon/shield.svg" alt="" />
                  <h3>Гарантія до 5 років</h3>
                  <p>
                    Ми впевнені в якості нашої роботи — саме тому надаємо гарантію
                    до 5 років на всі вироби. Надійність, підтверджена часом.
                  </p>
                </a>
              </div>
              <div className="advantage-item">
                <a href="#">
                  <img src="/icon/clock.svg" alt="" />
                  <h3>Швидке виготовлення</h3>
                  <p>
                    Ми виготовляємо меблі за індивідуальними замовленнями у
                    максимально короткі строки, не жертвуючи якістю. Ваші ідеї
                    втілюються в життя швидко та професійно!
                  </p>
                </a>
              </div>
            </div>
          </section>

          <section className="services-section">
            <h2>Наші послуги</h2>
            <div className="services-list">
              <a href="#" className="service-item">
                <img src="/icon/pencil.svg" alt="" />
                <h3>Дизайн</h3>
                <p>
                  Індивідуальний підхід до створення стильних та функціональних
                  меблів, які ідеально впишуться у ваш інтер’єр.
                </p>
                <span className="learn-more">Дізнатися більше →</span>
              </a>
              <a href="#" className="service-item">
                <img src="/icon/hammer.svg" alt="" />
                <h3>Виготовлення меблів</h3>
                <p>
                  Професійне виготовлення меблів на замовлення з урахуванням ваших
                  побажань і сучасних стандартів якості.
                </p>
                <span className="learn-more">Дізнатися більше →</span>
              </a>
              <a href="#" className="service-item">
                <img src="/icon/wrench.svg" alt="" />
                <h3>Встановлення</h3>
                <p>
                  Швидкий і якісний монтаж меблів з гарантією правильного і
                  безпечного встановлення.
                </p>
                <span className="learn-more">Дізнатися більше →</span>
              </a>
              <a href="#" className="service-item">
                <img src="/icon/gear-six.svg" alt="" />
                <h3>Обслуговування</h3>
                <p>
                  Професійний догляд і ремонт меблів, щоб вони служили вам довго.
                </p>
                <span className="learn-more">Дізнатися більше →</span>
              </a>
            </div>
          </section>
        </div>
      </main>
  );
}
