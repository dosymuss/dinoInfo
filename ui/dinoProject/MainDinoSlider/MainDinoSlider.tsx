"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperClass, NavigationOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";

import raptorImg from "@/assets/dinoProjSlide/raptor.svg";
import rexImg from "@/assets/dinoProjSlide/rex.svg";
import dilopImg from "@/assets/dinoProjSlide/dilop.svg";

import arrRightWh from "@/assets/dinoBenefitsBlock/arrRightWhite.svg";
import arrLeftWh from "@/assets/dinoSlide/arrLeftWh.svg";

import styles from "./MainDinoSlider.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function MainDinoSlider() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.swiperMain}>
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper: SwiperClass) => {
          if (
            typeof swiper.params.navigation === "object" &&
            prevRef.current &&
            nextRef.current
          ) {
            const navigation = swiper.params.navigation as NavigationOptions;
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
          }
        }}
        modules={[Navigation]}
        className={styles.mySwiper}
      >
        <SwiperSlide style={{ backgroundColor: "transparent" }}>
          <div className={styles.slideWrap}>
            <Link href={"/main/dinos/1"}>Read about dino</Link>
            <Image className={styles.slideImage} src={raptorImg} alt="Raptor" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "transparent" }}>
          <div className={styles.slideWrap}>
            <Link href={"/main/dinos/2"}>Read about dino</Link>
            <Image className={styles.slideImage} src={rexImg} alt="Rex" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "transparent" }}>
          <div className={styles.slideWrap}>
            <Link href={"/main/dinos/14"}>Read about dino</Link>
            <Image
              className={styles.slideImage}
              src={dilopImg}
              alt="Dilophosaurus"
            />
          </div>
        </SwiperSlide>

        {/* Кастомные кнопки навигации */}
        <div ref={prevRef} className={styles.customPrev}>
          <Image src={arrLeftWh} alt="Previous" />
        </div>
        <div ref={nextRef} className={styles.customNext}>
          <Image src={arrRightWh} alt="Next" />
        </div>
      </Swiper>
    </div>
  );
}
