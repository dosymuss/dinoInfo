import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Теперь модули импортируются напрямую
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

// Импортируем CSS Modules
import styles from "./AuthSlide.module.scss"; // Импортируем стили

import firstSlideImg from "@/assets/dinoProj/dinoAuth/firstSlideImg.svg";
import secondSlideImg from "@/assets/dinoProj/dinoAuth/secondSlide.svg";
import thirdSlideImg from "@/assets/dinoProj/dinoAuth/thirdSlide.svg";

const AuthSlide = ({ type }: { type: "log" | "reg" }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Pagination]} // Модули передаются прямо здесь
      className={type === "log" ? styles.mySwiper : styles.mySwiperLog}
    >
      <SwiperSlide>
        <div className={styles["slide-content"]}>
          <Image src={firstSlideImg} alt="Image 1" />
          <div>
            <p>Read and become smarter</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles["slide-content"]}>
          <Image src={secondSlideImg} alt="Image 2" />
          <div>
            <p>Everything is convenient and interesting</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles["slide-content"]}>
          <Image src={thirdSlideImg} alt="Image 3" />
          <div>
            <p>Explore and discover history</p>
          </div>
        </div>
      </SwiperSlide>
      {/* Добавьте дополнительные слайды при необходимости */}
    </Swiper>
  );
};

export default AuthSlide;
