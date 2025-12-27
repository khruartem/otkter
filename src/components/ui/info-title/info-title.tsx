import { FC } from "react";
import clsx from "clsx";

import { Text } from "../../text";

import { TInfoTitleUIProps } from "./types";

import { Colors } from "../../../utils/types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./info-title.module.css";

export const InfoTitleUI: FC<TInfoTitleUIProps> = ({
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
            styles["title-container"],
            (isDesktop || isLaptop || isMobile) &&
              styles["title-container_columned"]
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
              (isLarge || isDesktop || isLaptop) && styles.title
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
              styles["extra-title"],
              (isDesktop || isLaptop || isMobile) &&
                styles["extra-title_not-bordered"]
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
            (isLarge || isDesktop || isLaptop) && styles.title
          )}
        >
          {title}
        </Text>
      )}
    </>
  );
};
