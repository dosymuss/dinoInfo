import { FC, useEffect, useState } from "react";
import { useUser } from "@/store";
import Image from "next/image";

import DinoInput from "@/ui/dinoProject/dinoInput/DinoInput";

import styles from "./MainImage.module.scss";

type TProps = {
  edit: boolean;
  handleUpdate: (key: string, value: string) => void;
};

const MainImage: FC<TProps> = ({ edit, handleUpdate }) => {
  const user = useUser((state) => state.state.user);

  const changeUser = useUser((state) => state.changeUser);

  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");

  // Синхронизация изображений с данными пользователя
  useEffect(() => {
    if (user) {
      setImage1(user.img1 || "");
      setImage2(user.img2 || "");
      setImage3(user.img3 || "");
    }
  }, [user]);

  const validateImageUrl = (url: string): boolean => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  };

  useEffect(() => {
    handleUpdate("img1", image1);
    handleUpdate("img2", image2);
    handleUpdate("img3", image3);

    if (validateImageUrl(image1)) {
      handleUpdate("img1", image1);
      changeUser({ img1: image1 });
    }
    if (validateImageUrl(image2)) {
      handleUpdate("img2", image2);
      changeUser({ img2: image2 });
    }
    if (validateImageUrl(image3)) {
      handleUpdate("img3", image3);
      changeUser({ img3: image3 });
    }
  }, [image1, image2, image3]);

  if (edit && Object.keys(user || {}).length > 0) {
    return (
      <div className={styles.editMain}>
        <p className={styles.bigImgTitle}>
          Select a new image and paste the URL into the input field
        </p>
        <div className={styles.inpDiv}>
          <DinoInput
            value={image1}
            onChange={(e) => setImage1(e.target.value)}
            type={"text"}
            labelText={"ImageBig url"}
          />
          <DinoInput
            type={"text"}
            labelText={"Image url 2"}
            value={image2}
            onChange={(e) => setImage2(e.target.value)}
          />
          <DinoInput
            type={"text"}
            labelText={"Image url 3"}
            value={image3}
            onChange={(e) => setImage3(e.target.value)}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Image
          className={styles.image}
          width={650}
          height={650}
          src={
            user?.img1
              ? user.img1
              : "https://i.pinimg.com/564x/10/74/da/1074da99c517e30be06f447f953c0bc7.jpg"
          }
          alt="Main Image"
          onError={(e) =>
            (e.currentTarget.src =
              "https://i.pinimg.com/564x/10/74/da/1074da99c517e30be06f447f953c0bc7.jpg")
          }
        />
      </div>
    );
  }
};

export default MainImage;
