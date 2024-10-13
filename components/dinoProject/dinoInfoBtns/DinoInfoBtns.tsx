import Image from "next/image";

import bookMarkIcon from "@/assets/dinoCardBlock/bookmarkIcon.svg";
import likeIcon from "@/assets/dinoCardBlock/likeIcon.svg";
import shareIcon from "@/assets/dinoCardBlock/shareIcon.svg";
import styles from "./DinoInfoBtns.module.scss";

const DinoInfoBtns = () => {
  return (
    <div className={styles.main}>
      <button>
        <Image src={likeIcon} alt="" />
      </button>
      <button>
        <Image src={shareIcon} alt="" />
      </button>
      <button>
        <Image src={bookMarkIcon} alt="" />
      </button>
    </div>
  );
};

export default DinoInfoBtns;
