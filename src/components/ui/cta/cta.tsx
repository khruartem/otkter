import { FC } from "react";
import clsx from "clsx";

import { Controls } from "../../controls copy";

import { TCtaUIProps } from "./types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./cta.module.css";

export const CtaUI: FC<TCtaUIProps> = ({
  controls,
  kind,
  children,
  className,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <div
      className={clsx(
        styles.cta,
        (isLarge || isLaptop || isTablet) && styles.cta_rowed,
        (isDesktop || isMobile) && styles.cta_columned,
        isLaptop && styles.cta_laptop,
        isMobile && styles.cta_mobile,
        className && className
      )}
    >
      <Controls controls={controls} kind={kind} />
      {children}
    </div>
  );
};
