import { FC } from "react";

import { Text } from "../../text";

import { TItemBlockUIProps } from "./types";

import { Colors } from "../../../utils/types";

import styles from "./item-block.module.css";

export const ItemBlockUI: FC<TItemBlockUIProps> = ({ title, children }) => {
  return (
    <div className={styles["item-block"]}>
      <Text
        fontFamily={"Unbounded"}
        textAlign={"left"}
        fontSize={18}
        fontWeight={500}
        lineHeight={28}
        textTransform={"none"}
        color={Colors.Navy}
      >
        {title}
      </Text>
      {children}
    </div>
  );
};
