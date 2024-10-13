import Image from "next/image";

import dinoLogo from "@/assets/dinoLanding/dinoLogo.svg";
import dinoIcon from "@/assets/dinoLanding/dinoIcon.svg";

import styles from "./HeroBlock.module.scss";

const HeroBlock = () => {
  return (
    <section>
      <div className={styles.main}>
        <Image src={dinoLogo} alt="" />
        <div className={styles.textDiv}>
          <p>welcome to dino world</p>
          <div>
            <h1>Dinosaurs </h1>
            <h1>Informations </h1>
            <h1>Now</h1>
          </div>
          <p>
            This project was created by Dossymus for practice. He wanted to
            fulfill his childhood dream. After all, there is still that dreaming
            child in him
          </p>
        </div>
        <div className={styles.buttonDiv}>
          <button>Get started</button>
          <Image src={dinoIcon} alt="" />
        </div>
      </div>
      <div className={styles.heroImgWrap}>
        <div>
          <a href="#">Home</a>
          <a href="#">Project</a>
          <a href="#">Log in</a>
          <button>Sign up</button>
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;
