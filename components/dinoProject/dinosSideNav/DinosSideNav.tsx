"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useDinos } from "@/store";
import { usePathname } from "next/navigation";

import dinoIcon from "@/assets/dinoProj/dinoSideNav/dinoIcon.svg";
import dinoBirdIcon from "@/assets/dinoProj/dinoSideNav/dinoBirdIcon.svg";
import dinoWaterIcon from "@/assets/dinoProj/dinoSideNav/dinoWater.svg";
import dinoCactusIcon from "@/assets/dinoProj/dinoSideNav/dinoCactus.svg";
import arrLeft from "@/assets/dinoSlide/arrLeftWh.svg";
import likeAccIcon from "@/assets/dinoCardBlock/likeAcc.svg";
import bookmarkAccIcon from "@/assets/dinoCardBlock/bookmarkAcc.svg";
import arrRight from "@/assets/dinoBenefitsBlock/arrRightWhite.svg";

import styles from "./DinosSideNav.module.scss";

const DinosSideNav = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");
  const pathname = usePathname();

  const changeCategory = useDinos((state) => state.changeCategory);

  useEffect(() => {
    changeCategory(category);
  }, [category]);

  if (pathname === "/main/dinos") {
    return (
      <div className={open ? styles.mainAcc : styles.main}>
        <div className={styles.contentWrap}>
          <div className={styles.btnDiv}>
            <button onClick={() => setCategory("Хищные")}>
              <div>
                <Image src={dinoIcon} alt="" />
              </div>
              {open && <p>Predatory</p>}
            </button>
            <button onClick={() => setCategory("Травоядные")}>
              <div>
                <Image src={dinoCactusIcon} alt="" />
              </div>
              {open && <p>Herbivores</p>}
            </button>
            <button onClick={() => setCategory("Водные")}>
              <div>
                <Image src={dinoWaterIcon} alt="" />
              </div>
              {open && <p>Aquatic</p>}
            </button>
            <button onClick={() => setCategory("Птицеподобные")}>
              <div>
                <Image src={dinoBirdIcon} alt="" />
              </div>
              {open && <p>BirdLike</p>}
            </button>
            <button onClick={() => setCategory("Понравившиеся")}>
              <div>
                <Image src={likeAccIcon} alt="" />
              </div>
              {open && <p>Liked</p>}
            </button>
            <button onClick={() => setCategory("Сохраненные")}>
              <div>
                <Image src={bookmarkAccIcon} alt="" />
              </div>
              {open && <p>Saved</p>}
            </button>
          </div>
          <button onClick={() => setOpen(!open)} className={styles.openBtn}>
            <Image src={open ? arrRight : arrLeft} alt="" />
          </button>
        </div>
      </div>
    );
  }
};

export default DinosSideNav;
