import Link from "next/link";
import Image from "next/image";

import dinoCard from "@/assets/dinoMain/dinoCard.svg";


import styles from "./CardInfoBlock.module.scss";

const CardInfoBlock = () => {
  return (
    <div className={styles.main}>
      <div className={styles.imageDiv}>
        <Image src={dinoCard} alt="" />
        <p>Click on the product card and study the information</p>
      </div>
      <p className={styles.afterText}>
        The card contains a lot of information that will be interesting and
        useful to you.
      </p>
      <Link href={"#"} className={styles.watchBtn}>
        Watch info
      </Link>
    </div>
  );
};

export default CardInfoBlock;
