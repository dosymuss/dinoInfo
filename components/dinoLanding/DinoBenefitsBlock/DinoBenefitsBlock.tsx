import Image from "next/image";

import arrRightWhite from "@/assets/dinoBenefitsBlock/arrRightWhite.svg";
import firstImg from "@/assets/dinoBenefitsBlock/firstImg.svg";
import secImg from "@/assets/dinoBenefitsBlock/secImg.svg";
import thirdImg from "@/assets/dinoBenefitsBlock/thirdImg.svg";
import fourthImg from "@/assets/dinoBenefitsBlock/fourthImg.svg";

import styles from "./DinoBenefitsBlock.module.scss";

const DinoBenefitsBlock = () => {
  return (
    <section className={styles.main}>
      <h2 className={styles.title}>What are the benefits of this app?</h2>
      <p className={styles.desc}>
        Our app provides users with a unique opportunity to study dinosaurs,
        receive educational materials and enjoy a user-friendly interface on any
        device.
      </p>
      <div className={styles.benefitItem}>
        <div>
          <Image src={firstImg} alt="" />
          <p>Interactive dinosaur learning</p>
        </div>
        <button>
          <Image src={arrRightWhite} alt="" />
        </button>
      </div>
      <div className={styles.benefitItemTwo}>
        <button>
          <Image src={arrRightWhite} alt="" />
        </button>
        <div>
          <p>Educational materials</p>
          <Image src={secImg} alt="" />
        </div>
      </div>
      <div className={styles.benefitItem}>
        <div>
          <Image src={thirdImg} alt="" />
          <p>User-friendly interface</p>
        </div>
        <button>
          <Image src={arrRightWhite} alt="" />
        </button>
      </div>
      <div className={styles.benefitItemTwo}>
        <button>
          <Image src={arrRightWhite} alt="" />
        </button>
        <div>
          <p>Support for various devices</p>
          <Image src={fourthImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default DinoBenefitsBlock;
