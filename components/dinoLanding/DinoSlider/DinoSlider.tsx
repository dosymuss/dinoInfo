"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./DinoSlider.scss";

import arrRightWh from "@/assets/dinoBenefitsBlock/arrRightWhite.svg";
import arrLeftWh from "@/assets/dinoSlide/arrLeftWh.svg";
import Image from "next/image";

// import required modules

export default function DinoSlider() {
  return (
    <div className="swiper-main">
      <Swiper
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            width={1304}
            height={700}
            className="slide-image"
            src="https://i.pinimg.com/564x/7e/57/dc/7e57dcb7c83d09ac1212267b59c53051.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1304}
            height={700}
            className="slide-image"
            src="https://i.pinimg.com/564x/53/eb/e5/53ebe5cd4bc647f60624757b249292b8.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1304}
            height={700}
            className="slide-image"
            src="https://i.pinimg.com/564x/0d/c7/9b/0dc79b2a250d348e2377dcc4432c378a.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1304}
            height={700}
            className="slide-image"
            src="https://i.pinimg.com/564x/da/06/47/da0647b3a5ac5e1cb303332690adbee1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1304}
            height={700}
            className="slide-image"
            src="https://i.pinimg.com/564x/65/6b/c9/656bc97782c23632a45ab5ab7cf7a19b.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={1304}
            height={700}
            className="slide-image"
            src="https://i.pinimg.com/564x/1b/8a/82/1b8a82d42f289ae072e7f8b358e4df10.jpg"
            alt=""
          />
        </SwiperSlide>

        {/* Кастомные кнопки навигации */}
        <div className="custom-prev">
          <Image src={arrLeftWh} alt="" />
        </div>
        <div className="custom-next">
          <Image src={arrRightWh} alt="" />
        </div>
      </Swiper>
    </div>
  );
}
