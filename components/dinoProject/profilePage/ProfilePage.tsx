"use client";

import { useEffect, useState } from "react";
import { useUser } from "@/store";

import TextDiv from "../textDiv/TextDiv";

import styles from "./ProfilePage.module.scss";
import MiniImage from "../miniImage/MiniImage";
import MainImage from "../mainImage/MainImage";

const ProfilePage = () => {
  const [edit, setEdit] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [newObject, setNewObject] = useState({
    img1: null,
    img2: null,
    img3: null,
    quote: null,
    email: null,
    nickname: null,
  });

  const handleUpdate = (key: string, value: string) => {
    setNewObject((prevState) => ({
      ...prevState, // копируем предыдущие значения
      [key]: value, // изменяем конкретное поле
    }));
  };

  const getUser = useUser((state) => state.getUser);
  const { user } = useUser((state) => state.state);
  const patchUser = useUser((state) => state.patchUser);

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (submit) {
      // Проверяем, что newObject заполнен
      if (
        newObject.img1 &&
        newObject.img2 &&
        newObject.img3 &&
        newObject.quote &&
        newObject.email &&
        newObject.nickname
      ) {
        patchUser(newObject);
        setEdit(false);
        setSubmit(false); // Сбрасываем состояние после отправки
      } else {
        console.error("Заполните все поля перед отправкой");
      }
    }
  }, [submit, newObject]);

  return (
    <div className={styles.main}>
      <div className={styles.textMiniImageDiv}>
        <TextDiv
          edit={edit}
          setEdit={setEdit}
          submit={submit}
          setSubmit={setSubmit}
          handleUpdate={handleUpdate}
        />
        <div className={styles.miniImageDiv}>
          <MiniImage text={"img2"} edit={edit} url={user?.img2} />
          <MiniImage text={"img3"} edit={edit} url={user?.img3} />
        </div>
      </div>
      <MainImage handleUpdate={handleUpdate} edit={edit} />
    </div>
  );
};

export default ProfilePage;
