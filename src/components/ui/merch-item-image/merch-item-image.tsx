import { FC } from "react";

import { TMerchItemImageUIProps } from "./types";

import styles from "./merch-item-image.module.css";

export const MerchItemImageUI: FC<TMerchItemImageUIProps> = ({ src, alt }) => {
  return (
    <img
      loading="lazy"
      width={"100%"}
      height={"100%"}
      className={styles["merch-item__image"]}
      src={src}
      alt={alt}
    />
  );
};
