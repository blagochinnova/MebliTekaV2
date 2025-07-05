import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../style/styles.css";

const catalogData = [
  {
    title: "Кухня",
    images: [
      { src: "/kitchen1.jpg" },
      { src: "/kitchen2.jpg" },
      { src: "/kitchen3.jpg" },
      { src: "/kitchen4.jpg" },
      { src: "/kitchen5.jpg" },
      { src: "/kitchen6.jpg" },
      { src: "/kitchen7.jpg" },
    ],
  },
  {
    title: "Спальня",
    images: [
      { src: "/bedroom1.jpg" },
      { src: "/bedroom2.jpg" },
      { src: "/bedroom3.jpg" },
      { src: "/bedroom4.jpg" },
      { src: "/bedroom5.jpg" },
      { src: "/bedroom6.jpg" },
    ],
  },
  {
    title: "Вітальня",
    images: [
      { src: "/living1.jpg" },
      { src: "/living2.jpg" }, 
      { src: "/living3.jpg" },
      { src: "/living4.jpg" },
      { src: "/living5.jpg" },
      { src: "/living6.jpg" },
    ],
  },
  {
    title: "Передпокій",
    images: [
      { src: "/corridor1.jpg" },
      { src: "/corridor2.jpg" },
      { src: "/corridor3.jpg" },
      { src: "/corridor4.jpg" },
      { src: "/corridor5.jpg" },
      { src: "/corridor6.jpg" },
    ],
  },
  {
    title: "Гардеробні системи",
    images: [
      { src: "/wardrobe1.jpg" },
      { src: "/wardrobe2.jpg" },
      { src: "/wardrobe3.jpg"},
      { src: "/wardrobe4.jpg"},
      { src: "/wardrobe5.jpg" },
    ],
  },
  {
    title: "Комоди, тумби",
    images: [
      { src: "/card1.jpg" },
      { src: "/card2.jpg" },
      { src: "/card3.jpg"},
      { src: "/card4.jpg"},
      { src: "/card5.jpg" },
    ],
  },
  {
    title: "Модульні стінки",
    images: [
      { src: "/modularwalls1.jpg" },
      { src: "/modularwalls2.jpg" },
      { src: "/modularwalls3.jpg"},
      { src: "/modularwalls4.jpg"},
    ],
  },
];

export default function Catalog() {
  return (
    <main>
      <h2 className="page-title">Рішення, які ми реалізуємо за вашим бажанням і макетом.</h2>
      <div className="container kitchen-page">
        {catalogData.map((category, index) => (
          <section key={index} className="catalog-section">
            <h2>{category.title}</h2>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              loop
            >
              {category.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="slide-wrapper">
                    <img
                      src={`/images/${img.src}`}
                      alt={img.label || `Фото ${category.title}`}
                    />
                    {img.label && <p>{img.label}</p>}
                    <div className="swiper-pagination" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        ))}
      </div>
    </main>
  );
}
