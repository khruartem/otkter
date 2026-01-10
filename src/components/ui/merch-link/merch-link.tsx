import { CSSProperties, FC } from "react";

import { MenuLinkUI } from "../menu-link";

import { TMerchLinkUIProps } from "./types";

import styles from "./merch-link.module.css";

export const MerchLinkUI: FC<TMerchLinkUIProps> = ({ link, color }) => {
  return (
    <MenuLinkUI
      id={"merch"}
      link={link}
      className={styles["merch-link"]}
      style={{ "--color": color } as CSSProperties}
    />
  );
};
