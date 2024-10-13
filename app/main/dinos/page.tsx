import DinosWrap from "@/components/dinoProject/dinosWrap/DinosWrap";
import styles from "./dinos.module.scss";


export default function Dinos() {
  return (
    <div className={styles.main}>
      <p className={styles.category}></p>
      <div >
        <DinosWrap />
      </div>
    </div>
  );
}
