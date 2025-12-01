import clsx from "clsx";
import { FC } from "react";

import { Header } from "../../sections/header";
import { Footer } from "../../sections/footer";

import { TMainLayoutProps } from "./types";

import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";

import styles from "./main-layout.module.css";

export const MainLayout: FC<TMainLayoutProps> = ({
  children,
  className,
  withoutMediaQuery = false,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  return (
    <>
      <Header />
      <main
        className={clsx(
          styles.main,
          isLarge && !withoutMediaQuery && styles["main_lagre_screen"],
          isDesktop && !withoutMediaQuery
            ? [styles.main_desktop, styles["main_margined-small"]]
            : styles["main_margined-large"],
          isLaptop && !withoutMediaQuery && styles.main_laptop,
          isTablet && !withoutMediaQuery && styles.main_tablet,
          isMobile && !withoutMediaQuery && styles.main_mobile,
          className
        )}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
