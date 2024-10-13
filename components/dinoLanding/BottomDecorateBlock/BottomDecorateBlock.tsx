import Image from "next/image";

import dinoIcon from "@/assets/dinoDicorateBlock/dinoIcon.svg";
import cactusIcon from "@/assets/dinoDicorateBlock/cactusIcon.svg";

import styles from "./BottomDecorateBlock.module.scss";

const BottomDecorateBlock = () => {
  return (
    <div className={styles.main}>
      <div>
        <Image src={dinoIcon} alt="" />
        <Image src={cactusIcon} alt="" />
      </div>
      <div>
        <Image src={dinoIcon} alt="" />
        <Image src={cactusIcon} alt="" />
      </div>
      <div>
        <Image src={dinoIcon} alt="" />
        <Image src={cactusIcon} alt="" />
      </div>
      <div>
        <Image src={dinoIcon} alt="" />
        <Image src={cactusIcon} alt="" />
      </div>
      <div>
        <Image src={dinoIcon} alt="" />
        <Image src={cactusIcon} alt="" />
      </div>
    </div>
  );
};

export default BottomDecorateBlock;
