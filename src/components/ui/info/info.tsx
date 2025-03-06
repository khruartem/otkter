import { FC } from "react";
import clsx from "clsx";

import { Text } from "../../text";
import { PhotoList } from "../../photo-list";
import { Controls } from "../../controls";
import { Details } from "../../details";

import { TInfoUIProps } from "./types";
import { Colors, TDetails } from "../../../utils/types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./info.module.css";

export const InfoUI: FC<TInfoUIProps> = ({
  id,
  title,
  text,
  attention,
  colorAttention,
  isEmployees,
  type
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  const largeResolution = isLarge || isDesktop;
  const smallResolution = isDesktop || isTablet || isMobile;
  
  console.log()

  return (
    <div
      className={clsx(
        styles.info,
        isLarge && styles["info_lagre_screen"],
        isDesktop && styles.info_desktop,
        isLaptop && styles.info_laptop,
        isTablet && styles.info_tablet,
        isMobile && styles.info_mobile,
        !isDesktop && styles["info_overflowed-y"]
      )}
    >
      <div
        className={clsx(
          styles.info__main,
          isLarge && styles["info__main_lagre_screen"],
          isDesktop && styles.info__main_desktop,
          isLaptop && styles.info__main_laptop,
          isTablet && styles.info__main_tablet,
          isMobile && styles.info__main_mobile
        )}
      >
        <div
          className={clsx(
            styles.info__desc,
            isLarge
              ? styles["info__desc_large-resolution"]
              : styles["info__desc_small-resolution"]
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
            color={attention ? colorAttention! : Colors.Navy}
            padding={clsx(
              smallResolution && type === "projects" && "40px 0 0 0",
              isLaptop && type === "services" && "0 55% 0 0",
              isTablet && type === "services" && "40px 40% 0 0"
            )}
          >
            {title}
          </Text>
          <Text
            as={"p"}
            fontFamily="Roboto"
            textAlign="left"
            fontSize={smallResolution ? 14 : 20}
            fontWeight={400}
            lineHeight={smallResolution ? 24 : 32}
            textTransform={"none"}
            color={Colors.Dark100}
            margin={clsx(
              isLarge && type === "projects" && "0 0 6.67vw 0",
              isLarge && type === "services" && "0 0 3.33vw 0",
              isDesktop && type === "projects" && "0 0 5.27vw 0",
              isDesktop && type === "services" && "0 0 1.76vw 0",
              isLaptop && type === "projects" && "0 0 12.50vw 0",
              isLaptop && type === "services" && "0 0 6.25vw 0",
              isTablet && type === "projects" && "0 0 9.38vw 0",
              isTablet && type === "services" && "0 0 6.25vw 0",
              isMobile && type === "projects" && "0 0 17.39vw 0",
              isMobile && type === "services" && "0 0 5.80vw 0"
            )}
          >
            {text}
          </Text>
          <PhotoList id={id} type={type} />
        </div>
        <Controls id={id} type={type} />
      </div>
      <div
        className={clsx(
          isEmployees
            ? styles.info__extra_blocks
            : styles.info__extra_single,
          isDesktop && styles["info__extra_overflowed-y"],
          isLarge && styles["info__extra_large-screen"],
          isDesktop && styles.info__extra_desktop,
          (isDesktop || isTablet || isMobile) && styles.info__extra_single,
          isLaptop && styles.info__extra_laptop,
          isTablet && styles.info__extra_tablet,
          isMobile && styles.info__extra_mobile
        )}
      >
        <Details id={id} infosType={type} detailsType={clsx(
          type === "projects" && "events",
          type === "services" && "services") as TDetails} />
        {isEmployees && <Details id={id} infosType={type} detailsType="employees" />}
      </div>
    </div>
  );
};
