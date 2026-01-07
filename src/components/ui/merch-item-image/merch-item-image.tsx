import { FC } from "react";
import clsx from "clsx";

import { TMerchItemImageUIProps } from "./types";

import styles from "./merch-item-image.module.css";

export const MerchItemImageUI: FC<TMerchItemImageUIProps> = ({
  src,
  alt,
  className,
}) => {
  return (
    <img
      loading="lazy"
      width={"100%"}
      height={"100%"}
      src={src}
      alt={alt}
      className={clsx(styles["merch-item__image"], className && className)}
    />
  );
};
