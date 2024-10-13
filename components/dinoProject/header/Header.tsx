"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import dinoLogo from "@/assets/dinoLanding/dinoLogo.svg";

import styles from "./Header.module.scss";

const Header = () => {
  const isLoggedLocal = localStorage.getItem("is_logged");

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (isLoggedLocal) {
      setIsLogged(JSON.parse(isLoggedLocal));
    } else {
      setIsLogged(false);
    }
  }, []);

  const pathname = usePathname();

  return (
    <div className={styles.main}>
      <Link href={"/main"}>
        <Image src={dinoLogo} alt="Dino Logo" />
      </Link>

      <div className={styles.linkDiv}>
        {/* Ссылка на главную страницу (Main) */}
        <Link
          href="/main"
          className={pathname === "/main" ? styles.linkAcc : styles.link}
        >
          Home
        </Link>

        {/* Ссылка на страницу с динозаврами (DinosPage) */}
        <Link
          href="/main/dinos"
          className={pathname === "/main/dinos" ? styles.linkAcc : styles.link}
        >
          Dinos
        </Link>

        {/* Ссылка на профиль */}
        <Link
          href="/main/profile"
          className={
            pathname === "/main/profile" ? styles.linkAcc : styles.link
          }
        >
          Profile
        </Link>

        {/* Если пользователь не залогинен */}
        {!isLogged && (
          <>
            <Link
              href="/auth"
              className={pathname === "" ? styles.linkAcc : styles.link}
            >
              Log in
            </Link>

            <Link className={styles.linkBtn} href="/auth">
              Sign up
            </Link>
          </>
        )}

        {isLogged && (
          <button
            className={styles.linkBtn}
            onClick={() => {
              localStorage.removeItem("is_logged");
              window.location.reload(); // Перезагрузка страницы после логаута
            }}
          >
            Log out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
