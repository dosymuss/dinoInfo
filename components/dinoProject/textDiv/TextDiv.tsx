import { useState, useEffect, Dispatch, SetStateAction, FC } from "react";
// import { useActions } from "../../../../hooks/useActions";
import { useUser } from "@/store";
import Image from "next/image";

import editIcon from "@/assets/dinoProj/dinoProfile/editIcon.svg";
import markIcon from "@/assets/dinoProj/dinoProfile/markIcon.svg";
import xIcon from "@/assets/dinoProj/dinoProfile/xIcon.svg";

import styles from "./TextDiv.module.scss";

type TProps = {
  edit: boolean;
  setEdit: Dispatch<SetStateAction<boolean>>;
  submit: boolean;
  setSubmit: Dispatch<SetStateAction<boolean>>;
  handleUpdate: (key: string, value: string) => void;
};

const TextDiv: FC<TProps> = ({
  edit,
  setEdit,
  submit,
  setSubmit,
  handleUpdate,
}) => {
  const user = useUser((state) => state.state.user);
  const changeUser = useUser((state) => state.changeUser);

  // Локальные состояния
  const [bigText, setBigText] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");

  // Синхронизация состояний при изменении user
  useEffect(() => {
    if (user) {
      setBigText(user.quote || "");
      setEmail(user.email || "");
      setNickname(user.nickname || "");
    }
  }, []); // Обновляем только при изменении user

  useEffect(() => {
    if (bigText !== user?.quote) {
      handleUpdate("quote", bigText);
      changeUser({ quote: bigText });
    }
    if (email !== user?.email) {
      handleUpdate("email", email);
      changeUser({ email: email });
    }
    if (nickname !== user?.nickname) {
      handleUpdate("nickname", nickname);
      changeUser({ nickname: nickname });
    }
  }, [bigText, email, nickname]);

  if (edit && Object.keys(user || {}).length > 0) {
    return (
      <div className={styles.editMain}>
        <textarea
          className={styles.textarea}
          value={bigText}
          onChange={(e) => setBigText(e.target.value)}
        ></textarea>
        <p className={styles.descText}>
          After changing the fields, click on the check mark
        </p>
        <div className={styles.textBtnDiv}>
          <div className={styles.nickEmailDiv}>
            <p>@</p>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="nickname"
            />
            <p>/</p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
          </div>
          <div className={styles.btnDiv}>
            <button onClick={() => setSubmit(!submit)}>
              <Image src={markIcon} alt="" />
            </button>
            <button onClick={() => setEdit(false)}>
              <Image src={xIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.main}>
        <p className={styles.quote}>{user?.quote}</p>
        <div className={styles.textBtnDiv}>
          <p>
            @{user?.nickname} / {user?.email}
          </p>
          <button onClick={() => setEdit(true)}>
            <Image src={editIcon} alt="" />
          </button>
        </div>
      </div>
    );
  }
};

export default TextDiv;
