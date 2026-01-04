import { FC } from "react";
import clsx from "clsx";

import { CopyLink } from "../../icons";
import { CategoryUI } from "../category";

import { TCopyUIProps } from "./types";

import { Colors } from "../../../utils/types";

import styles from "./copy.module.css";

export const CopyUI: FC<TCopyUIProps> = ({ copy, onCopy, isCopied }) => {
  return (
    <>
      <CopyLink
        mainColor={Colors.Light20}
        hoverColor={Colors.Dark80}
        activeColor={Colors.Navy}
        onClick={onCopy}
      />
      <CategoryUI
        category={copy.category}
        className={clsx(styles.copy, isCopied && styles.copied)}
        colors={copy.colors}
      />
    </>
  );
};
