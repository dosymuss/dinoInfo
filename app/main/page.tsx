import Link from "next/link";

import CardInfoBlock from "@/components/dinoProject/main/CardInfoBlock/CardInfoBlock";
import MainDinoSlider from "@/ui/dinoProject/MainDinoSlider/MainDinoSlider";
import CanStadyBlock from "@/components/dinoProject/main/CardStudyBlock/CardStudyBlock";

import dinoGreen from "@/assets/dinoLanding/dinoIcon.svg";

import styles from "./main.module.scss";

export default function Main() {
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.textAndSlide}>
          <div className={styles.textDiv}>
            <h1 className={styles.title}>Read about the Dinos</h1>
            <div>
              <Link href={"/main/dinos"}>Read more</Link>
              <img src={dinoGreen} alt="" />
            </div>
          </div>
          <MainDinoSlider />
        </div>
      </div>
      <div className={styles.blockDiv}>
        <CardInfoBlock />
        <CanStadyBlock />
      </div>
    </div>
  );
}
