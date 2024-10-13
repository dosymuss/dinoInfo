import Image from "next/image";

import sizeIcon from "@/assets/dinoMain/sizeIcon.svg";
import colorIcon from "@/assets/dinoMain/color.svg";
import lifeIcon from "@/assets/dinoMain/life.svg";

import styles from "./CardStudyBlock.module.scss";

const CanStadyBlock = () => {
  return (
    <div className={styles.main}>
      <p className={styles.title}>
        You can study their height, weight, color, and their lifestyle.
      </p>
      <div className={styles.imageDiv}>
        <div>
          <Image src={sizeIcon} alt="" />
          <p>Size</p>
        </div>
        <div>
          <Image src={colorIcon} alt="" />
          <p>Color</p>
        </div>
        <div>
          <Image src={lifeIcon} alt="" />
          <p>Life</p>
        </div>
      </div>
    </div>
  );
};

export default CanStadyBlock;
