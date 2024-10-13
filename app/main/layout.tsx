import { Metadata } from "next";
import Image from "next/image";
import { FC, ReactNode } from "react";

import Container from "@/ui/dinoProject/container/Container";
import Header from "@/components/dinoProject/header/Header";
import treangle from "@/assets/dinoMain/treangleBack.svg";

import styles from "./wraper.module.scss";

export const metadata: Metadata = {
  title: "dinoInfo main page",
  description: "you can watch info about a dino",
};

interface LayoutProps {
  children: ReactNode;
  params: { pathname: string }; // Это `params`, который будет содержать путь
}

const Layout: FC<LayoutProps> = ({ children, params }) => {
  const { pathname } = params; // Получаем `pathname` из params

  return (
    <div className={styles.main}>
      <Header />
      <Image className={styles.treangle} src={treangle} alt="" />
      <Container>
        <p>Current Path: {pathname}</p>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
