import { FC } from "react";

import { Text } from "../../text";
import { SuggestProjectButton } from "../../suggest-project-button";

import { TSuggestProjectUIProps } from "./types";

import { Colors } from "../../../utils/types";

import styles from "./suggest-project.module.css";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import clsx from "clsx";

export const SuggestProjectUI: FC<TSuggestProjectUIProps> = ({
  onlyButton,
}) => {
  const { isMobile } = useGetMediaQuery();

  return onlyButton ? (
    <SuggestProjectButton margined />
  ) : (
    <div
      className={clsx(
        styles["suggest-project"],
        isMobile && styles["suggest-project_mobile"]
      )}
    >
      <div className={styles["suggest-project__content"]}>
        <Text
          fontFamily={"Unbounded"}
          textAlign={"center"}
          fontSize={28}
          fontWeight={500}
          lineHeight={40}
          textTransform={"none"}
          color={Colors.Navy}
        >
          {"Ваша инициатива легко увеличит список!"}
        </Text>
        <SuggestProjectButton />
      </div>
    </div>
  );
};
