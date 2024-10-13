import Image from "next/image";

import dinoLogoWh from "@/assets/dinoLanding/dinoLogoWh.svg";

import styles from "./DinoFooter.module.scss";

const DinoFooter = () => {
  return (
    <footer className={styles.main}>
      <Image src={dinoLogoWh} alt="" />
    </footer>
  );
};

export default DinoFooter;
