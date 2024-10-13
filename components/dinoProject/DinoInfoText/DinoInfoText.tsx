import { FC } from "react";
import styles from "./DinoInfoText.module.scss";

type TProps = {
  text: string;
  title: string;
};

const DinoInfoText: FC<TProps> = ({
  text = "woivcjweiubvwebvhyubwevyubwevhbhuewbvhuewbvhuwevuhb",
  title = "title",
}) => {
  return (
    <div className={styles.main}>
      <p className={styles.title}>{title}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default DinoInfoText;
