import React, { FC, useState } from "react";
import Image from "next/image";

import eye from "../../../assets/dinoProj/dinoAuth/eyeIcon.svg";
import eyeClose from "../../../assets/dinoProj/dinoAuth/eyeIconClose.svg";
import eyeErrClose from "../../../assets/dinoProj/dinoAuth/eyeErrIconClose.svg";
import eyeErr from "../../../assets/dinoProj/dinoAuth/eyeErrIcon.svg";

import styles from "./DinoInput.module.scss";

type TProps = {
  type: string;
  labelText: string;
  error?: string | null;
} & React.InputHTMLAttributes<HTMLInputElement>;

const DinoInput: FC<TProps> = ({ type, labelText, error = null, ...props }) => {
  const [text, setText] = useState("");
  const [inpType, setInpType] = useState(type);

  const inputClass = error ? styles.inpErr : styles.inp; // Добавляем класс ошибки для инпута
  const inpBtnDivClass = error ? styles.inpBtnDivErr : styles.inpBtnDiv;
  const inpPassClass = error ? styles.inpPassErr : styles.inpPass;
  const labelClass = error ? styles.labelErr : styles.label; // Добавляем класс ошибки для лейбла

  if (type == "text") {
    return (
      <div className={styles.main}>
        <input
          {...props}
          className={inputClass}
          id={labelText}
          type="text"
          placeholder=""
        />
        <label htmlFor={labelText} className={labelClass}>
          {labelText}
        </label>
        <p className={styles.errText}>{error}</p>
      </div>
    );
  } else {
    return (
      <div className={styles.main}>
        <div className={inpBtnDivClass}>
          <input
            {...props}
            className={inpPassClass}
            id={labelText}
            type={inpType}
            placeholder=""
          />
          <button
            onClick={() => {
              if (inpType === "text") {
                setInpType("password");
              } else {
                setInpType("text");
              }
            }}
          >
            <Image
              src={
                inpType === "text"
                  ? error
                    ? eyeErr
                    : eye
                  : error
                  ? eyeErrClose
                  : eyeClose
              }
              alt=""
            />
          </button>
          <label htmlFor={labelText} className={labelClass}>
            {labelText}
          </label>
        </div>
        <p className={styles.errText}>{error}</p>
      </div>
    );
  }
};

export default DinoInput;
