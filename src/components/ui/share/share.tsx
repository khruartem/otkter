import { FC } from "react";
import clsx from "clsx";

import { Text } from "../../text";
import { SocialUI } from "../social";
import { Category } from "../../category";

import { TShareUIProps } from "./types";
import { Colors } from "../../../utils/types";

import styles from "./share.module.css";

export const ShareUI: FC<TShareUIProps> = ({ socials, copy, isCopied }) => {
  return (
    <div className={styles.share}>
      <Text
        as={"span"}
        fontFamily="Unbounded"
        fontSize={18}
        fontWeight={500}
        lineHeight={28}
        textAlign="right"
        textTransform="none"
        color={Colors.Light20}
      >
        {"Поделиться"}
      </Text>
      <SocialUI
        socials={socials}
        color={Colors.Light20}
        hoverColor={Colors.Dark80}
      />
      <Category
        category={copy}
        className={clsx(styles.copy, isCopied && styles.copied)}
      />
    </div>
  );
};
