import dinoIcon from "@/assets/dinoLanding/dinoIcon.svg";

import styles from "./NoData.module.scss";

const NoData = () => {
  return (
    <div className={styles.main}>
      <img src={dinoIcon} alt="" />
      <p>We don't have such data.</p>
    </div>
  );
};

export default NoData;
