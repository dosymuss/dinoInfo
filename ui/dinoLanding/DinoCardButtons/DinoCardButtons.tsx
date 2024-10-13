import Image from "next/image";

import likeIcon from "@/assets/dinoCardBlock/likeIcon.svg";
import bookmarkIcon from "@/assets/dinoCardBlock/bookmarkIcon.svg";
import bookIcon from "@/assets/dinoCardBlock/bookIcon.svg";
import shareIcon from "@/assets/dinoCardBlock/shareIcon.svg";

import styles from "./DinoCardButtons.module.scss";

const DinoCardButtons = () => {
  return (
    <div className={styles.main}>
      <button>
        <Image src={likeIcon} alt="" />
      </button>
      <button>
        <Image src={shareIcon} alt="" />
      </button>
      <button>
        <Image src={bookIcon} alt="" />
      </button>
      <button>
        <Image src={bookmarkIcon} alt="" />
      </button>
    </div>
  );
};

export default DinoCardButtons;
