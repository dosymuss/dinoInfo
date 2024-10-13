"use client";

import { useState } from "react";
import Link from "next/link";
import dinoLogo from "@/assets/dinoLanding/dinoLogo.svg";
import LoginForm from "@/components/dinoProject/loginForm/LoginForm";
import RegisterForm from "@/components/dinoProject/RegisterForm/RegisterForm";
import AuthSlide from "@/components/dinoProject/authSlide/AuthSlide";

import styles from "./auth.module.scss";

const AuthPage = () => {
  const [type, setType] = useState<"log" | "reg">("log"); // reg and log
  return (
    <div className={styles.main}>
      <div className={styles.contentWrap}>
        <div className={styles.loginDiv}>
          <Link href={"/main"}>
            <img src={dinoLogo} alt="" />
          </Link>
          <h3>Get started</h3>
          <div className={styles.registerSwitch}>
            <p>You already have an account?</p>
            <button onClick={() => setType("log")}>Sign in</button>
          </div>
          <RegisterForm />
          <p className={styles.endText}>
            Arrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
            rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
          </p>
        </div>
        <div className={styles.registerDiv}>
          <Link href={"/main"}>
            <img src={dinoLogo} alt="" />
          </Link>
          <h3>You are back</h3>
          <div className={styles.registerSwitch}>
            <p>You don't have an account yet?</p>
            <button onClick={() => setType("reg")}>Sign up</button>
          </div>
          <LoginForm />
        </div>
        <AuthSlide type={type} />
      </div>

      {/* <img className={styles.treangle} src={treangleWh} alt="" /> */}
    </div>
  );
};

export default AuthPage;
