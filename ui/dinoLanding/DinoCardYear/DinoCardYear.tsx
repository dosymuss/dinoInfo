import styles from "./DinoCardYear.module.scss";

type TProps = {
  text: string;
};

const DinoCardYear = ({ text = "7.5 million y.a" }: TProps) => {
  return <div className={styles.main}>{text}</div>;
};

export default DinoCardYear;
