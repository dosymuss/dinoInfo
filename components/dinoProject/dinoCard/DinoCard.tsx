"use client";

import { IDino } from "@/types";
import { FC } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import bookIcon from "@/assets/dinoCardBlock/bookIcon.svg";
import bookmarkIcon from "@/assets/dinoCardBlock/bookmarkIcon.svg";
import likeIcon from "@/assets/dinoCardBlock/likeIcon.svg";
import shareIcon from "@/assets/dinoCardBlock/shareIcon.svg";
import bookAccIcon from "@/assets/dinoCardBlock/bookAcc.svg";
import bookmarkAccIcon from "@/assets/dinoCardBlock/bookmarkAcc.svg";
import likeAccIcon from "@/assets/dinoCardBlock/likeAcc.svg";
import shareIAcccon from "@/assets/dinoCardBlock/shareAcc.svg";

import styles from "./DinoCard.module.scss";

type TProps = {
  dino: IDino;
};

const DinoCard: FC<TProps> = ({ dino }) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/main/dinos/${dino.id}`);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${dino?.images[0]})`,
      }}
      className={styles.main}
    >
      <div className={styles.buttonDiv}>
        <button>
          <Image src={likeIcon} alt="" />
        </button>
        <button>
          <Image src={shareIcon} alt="" />
        </button>
        <button onClick={handleRedirect}>
          <Image src={bookIcon} alt="" />
        </button>
        <button>
          <Image src={bookmarkIcon} alt="" />
        </button>
      </div>
      <p className={styles.yearText}>{dino?.time}</p>
    </div>
  );
};

export default DinoCard;
