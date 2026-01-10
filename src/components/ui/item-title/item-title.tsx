import { FC } from "react";
import clsx from "clsx";

import { Text } from "../../text";

import { TItemTitleUIProps } from "./types";

import { Colors } from "../../../utils/types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./item-title.module.css";

export const ItemTitleUI: FC<TItemTitleUIProps> = ({
  title,
  extraTitle,
  color,
}) => {
  const { isLarge, isDesktop, isLaptop, isMobile } = useGetMediaQuery();
  const largeResolution = isLarge || isDesktop;

  return (
    <>
      {extraTitle ? (
        <div
          className={clsx(
            styles["item-title-container"],
            (isDesktop || isLaptop || isMobile) &&
              styles["item-title-container_columned"]
          )}
        >
          <Text
            as={"h3"}
            fontFamily="Unbounded"
            textAlign="left"
            fontSize={largeResolution ? 32 : 28}
            fontWeight={500}
            lineHeight={largeResolution ? 48 : 40}
            textTransform={"none"}
            color={color}
            className={clsx(
              (isLarge || isDesktop || isLaptop) && styles["item-title"]
            )}
          >
            {title}
          </Text>
          <Text
            as={"h4"}
            fontFamily="Unbounded"
            textAlign="left"
            fontSize={largeResolution ? 20 : 14}
            fontWeight={400}
            lineHeight={largeResolution ? 32 : 20}
            textTransform={"none"}
            color={Colors.Nephritis100}
            className={clsx(
              styles["item-extra-title"],
              (isDesktop || isLaptop || isMobile) &&
                styles["item-extra-title_not-bordered"]
            )}
          >
            {extraTitle}
          </Text>
        </div>
      ) : (
        <Text
          as={"h3"}
          fontFamily="Unbounded"
          textAlign="left"
          fontSize={largeResolution ? 32 : 28}
          fontWeight={500}
          lineHeight={largeResolution ? 48 : 40}
          textTransform={"none"}
          color={color}
          className={clsx(
            (isLarge || isDesktop || isLaptop) && styles["item-title"]
          )}
        >
          {title}
        </Text>
      )}
    </>
  );
};
