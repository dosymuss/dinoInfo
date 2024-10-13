import { FC } from "react";
import Image from "next/image";
import styles from "./MiniImage.module.scss";

type TProps = {
  url: string | null;
  text: string;
  edit: boolean;
};

const MiniImage: FC<TProps> = ({ url, text, edit }) => {
  return (
    <>
      <div className={styles.main}>
        {edit && <p className={styles.text}>{text}</p>}
        <Image
          className={styles.miniImage}
          width={404}
          height={222}
          src={
            url
              ? url
              : "https://i.pinimg.com/236x/56/f3/50/56f3505a391ba208d939f8ac42037261.jpg"
          }
          onError={(e) =>
            (e.currentTarget.src =
              "https://i.pinimg.com/236x/56/f3/50/56f3505a391ba208d939f8ac42037261.jpg")
          }
          alt=""
        />
      </div>
    </>
  );
};

export default MiniImage;
