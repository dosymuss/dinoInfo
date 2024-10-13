import { FC } from "react";
import styles from "./NameCategoryDiv.module.scss";

type TProps = {
  name: string;
  category: string;
};

const NameCategoryDiv: FC<TProps> = ({
  name = "raptor",
  category = "predatory",
}) => {
  return (
    <div className={styles.nameCategoryDiv}>
      <p>{name}</p>
      <span></span>
      <p className={styles.categoryText}>{category}</p>
    </div>
  );
};

export default NameCategoryDiv;
