import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../style/catalog.css"

const catalogData = [
  {
    title: "Кухня",
    images: [
      { src: "/kitchen1.jpg", label: "Кухонний гарнітур “Модерн”" },
      { src: "/kitchen2.jpg", label: "Кутова кухня з дерева" },
      { src: "/kitchen3.jpg", label: "Кухня в скандинавському стилі" },
      { src: "/kitchen4.jpg", label: "Кухня" },
      { src: "/kitchen5.jpg" },
      { src: "/kitchen6.jpg" },
      { src: "/kitchen7.jpg" }
    ]
  },
  {
    title: "Спальня",
    images: [
      { src: "/bedroom1.jpg", label: "Спальня" },
      { src: "/bedroom2.jpg", label: "Спальня" },
      { src: "/bedroom3.jpg", label: "Спальня" },
      { src: "/bedroom4.jpg", label: "Спальня" },
      { src: "/bedroom5.jpg" },
      { src: "/bedroom6.jpg" }
    ]
  },
  {
    title: "Вітальня",
    images: [
      { src: "/living1.jpg" },
      { src: "/living2.jpg" }, // Тут, typo: має бути .jpg
      { src: "/living3.jpg" },
      { src: "/living4.jpg" },
      { src: "/living5.jpg" },
      { src: "/living6.jpg" }
    ]
  },
  {
    title: "Передпокій",
    images: [
      { src: "/corridor1.jpg" },
      { src: "/corridor2.jpg", label: "Передпокій" },
      { src: "/corridor3.jpg" },
      { src: "/corridor4.jpg" },
      { src: "/corridor5.jpg" },
      { src: "/corridor6.jpg" }
    ]
  }
];

export default function Catalog() {
  return (
    <main>
      <div className="container kitchen-page">
        {catalogData.map((category, index) => (
          <section key={index} className={`${category.title.toLowerCase()}-section`}>
            <h2>{category.title}</h2>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              
            >
              {category.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                <img
                  src={`/images/${img.src}`}
                  alt={img.label || `Фото ${category.title} ${idx + 1}`}
                />
                {img.label && <p>{img.label}</p>}
              </SwiperSlide>
              
              ))}
            </Swiper>
          </section>
        ))}
      </div>
    </main>
  );
}
