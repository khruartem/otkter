import clsx from "clsx";
import { FC } from "react";

import { Header } from "../../../../sections/header";
import { Footer } from "../../../../sections/footer";

import { TLayoutUIProps } from "./types";

import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";

import styles from "./layout.module.css";

export const LayoutUI: FC<TLayoutUIProps> = ({
  children,
  className,
  noPadding,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  return (
    <>
      <Header />
      <main
        className={clsx(
          styles.main,
          isLarge &&
            !noPadding && [styles.main_lagre, styles["main_paddinged-large"]],
          isDesktop &&
            !noPadding && [styles.main_desktop, styles["main_paddinged-small"]],
          isLaptop &&
            !noPadding && [styles.main_laptop, styles["main_paddinged-large"]],
          isTablet &&
            !noPadding && [styles.main_tablet, styles["main_paddinged-large"]],
          isMobile &&
            !noPadding && [styles.main_mobile, styles["main_paddinged-large"]],
          className
        )}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
