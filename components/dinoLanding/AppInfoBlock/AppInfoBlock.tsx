import Image from "next/image";

import dinoWhiteIcon from "@/assets/dinoLanding/dinoIconWhite.svg";

import styles from "./AppInfoBlock.module.scss";

const AppInfoBlock = () => {
  return (
    <section className={styles.main}>
      <div className={styles.infoItem}>
        <Image src={dinoWhiteIcon} alt="" />
        <p>100+ Dinosaur Facts</p>
      </div>
      <div className={styles.infoItem}>
        <Image src={dinoWhiteIcon} alt="" />
        <p>Quick search for information</p>
      </div>
      <div className={styles.infoItem}>
        <Image src={dinoWhiteIcon} alt="" />
        <p>Beautiful display of information</p>
      </div>
    </section>
  );
};

export default AppInfoBlock;
