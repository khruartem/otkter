import { FC } from "react";

import { Text } from "../../text";

import { TShareUIProps } from "./types";

import { Colors } from "../../../utils/types";

import styles from "./share.module.css";

export const ShareUI: FC<TShareUIProps> = ({ children }) => {
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
      <div className={styles.share__buttons}>{children}</div>
    </div>
  );
};
