"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import CSS Modules
import styles from "./DinoInfoSlider.module.scss"; // Импортируем стили

import arrRightWh from "@/assets/dinoBenefitsBlock/arrRightWhite.svg";
import arrLeftWh from "@/assets/dinoSlide/arrLeftWh.svg";

// import required modules

type TProps = {
  images: string[];
};

export default function DinoInfoSlider({ images }: TProps) {
  return (
    <div className={styles.swiperMain}>
      <Swiper
        navigation={{
          nextEl: `.${styles.customNext}`, // Используем стили из модуля
          prevEl: `.${styles.customPrev}`, // Используем стили из модуля
        }}
        modules={[Navigation]}
        className={styles.mySwiper} // Используем класс из CSS-модуля
      >
        {images && images.length > 0 ? (
          images.map((url) => (
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                width={696}
                height={609}
                className="slide-image"
                src={url}
                alt=""
              />
            </SwiperSlide>
          ))
        ) : (
          <>
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                width={696}
                height={609}
                className="slide-image"
                src="https://i.pinimg.com/564x/76/0d/91/760d91a19255b6e9e060aa52b6427471.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                width={696}
                height={609}
                className="slide-image"
                src="https://i.pinimg.com/564x/31/4f/c5/314fc5b3f40147614dc98ec49d47378b.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                width={696}
                height={609}
                className="slide-image"
                src="https://i.pinimg.com/736x/28/17/69/281769681b994235996ba4485eeb5add.jpg"
                alt=""
              />
            </SwiperSlide>
          </>
        )}

        {/* Кастомные кнопки навигации */}
        <div className={styles.customPrev}>
          <Image src={arrLeftWh} alt="" />
        </div>
        <div className={styles.customNext}>
          <Image src={arrRightWh} alt="" />
        </div>
      </Swiper>
    </div>
  );
}
