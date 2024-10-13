import Image from "next/image";

import arrRight from "@/assets/dinoCardBlock/arrRight.svg";
import DinoCardButtons from "@/ui/dinoLanding/DinoCardButtons/DinoCardButtons";
import DinoCardYear from "@/ui/dinoLanding/DinoCardYear/DinoCardYear";

import styles from "./DinoCardBlock.module.scss";

const DinoCardBlock = () => {
  return (
    <section className={styles.main}>
      <h2 className={styles.title}>
        Find out more information and broaden your horizons
      </h2>
      <div className={styles.cardDiv}>
        <div className={styles.firstCard}>
          <p>
            On our website you will be able to get acquainted with each
            dinosaur, study its unique features and habits. In addition, you
            will have the opportunity to examine their appearance in detail and
            learn interesting facts about the life of dinosaurs in different
            eras.
          </p>
          <div className={styles.imageDiv}>
            <DinoCardYear text="7.5 million y.a" />
            <DinoCardButtons />
          </div>

          <h3>Raptor (Velociraptor)</h3>
          <p>one of the most famous and fastest predatory dinosaurs</p>
        </div>

        <div className={styles.secondCard}>
          <div className={styles.secImageDiv}>
            <DinoCardYear text="68 million y.a" />
            <DinoCardButtons />
          </div>
          <h3>Tyrannosaurus rex</h3>
          <p>one of the most famous and powerful dinosaurs</p>
        </div>

        <div className={styles.thirdCard}>
          <div className={styles.thirdImageDiv}>
            <DinoCardYear text="150 million y.a" />
            <DinoCardButtons />
          </div>
          <h3>Diplodocus</h3>
          <p>one of the longest dinosaurs</p>
        </div>
      </div>
      <div className={styles.linkDiv}>
        <a href="#">
          <p>Discover more</p>
          <Image src={arrRight} alt="" />
        </a>
      </div>
    </section>
  );
};

export default DinoCardBlock;
