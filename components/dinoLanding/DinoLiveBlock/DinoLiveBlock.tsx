import Image from "next/image";

import firstImg from "@/assets/dinoLiveBlock/firstImg.svg";
import secImg from "@/assets/dinoLiveBlock/secImg.svg";
import thirdImg from "@/assets/dinoLiveBlock/thirdImg.svg";
import smallImg from "@/assets/dinoLiveBlock/smallImg.svg";
import arrRightWh from "@/assets/dinoBenefitsBlock/arrRightWhite.svg";

import styles from "./DinoLiveBlock.module.scss";

const DinoLiveBlock = () => {
  return (
    <section className={styles.main}>
      <h3 className={styles.title}>See our app live</h3>
      <p className={styles.desc}>Go to our website and study the information</p>
      <div className={styles.imageDiv}>
        <Image src={firstImg} alt="" />
        <Image src={secImg} alt="" />
        <div className={styles.imageDivLinkBlock}>
          <div className={styles.linkDiv}>
            <Image src={smallImg} alt="" />
            <div>
              <div>
                <p>Learn more</p>
                <p>Learn more about the world</p>
              </div>

              <button>
                <Image src={arrRightWh} alt="" />
              </button>
            </div>
          </div>
          <Image className={styles.thirdImg} src={thirdImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default DinoLiveBlock;
