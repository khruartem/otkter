import { FC } from "react";

import { Header } from "../../../../sections/header";
import { Text } from "../../../text";

import { TErrorUIProps } from "./types";
import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";
import { Colors } from "../../../../utils/types";

import styles from "./error.module.css";
import { Error } from "../../../icons/icons";
import { Button } from "../../../button";
import clsx from "clsx";

export const ErrorUI: FC<TErrorUIProps> = ({
  title,
  text,
  buttonLabel,
  onButtonClick,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  return (
    <>
      <Header />
      <main className={styles.error__main}>
        <div
          className={clsx(
            styles.error__content,
            (isLarge || isLaptop) && styles["error__content_large-gap"],
            (isDesktop || isTablet || isMobile) &&
              styles["error__content_small-gap"]
          )}
        >
          <Error
            className={clsx(
              styles.error__icon,
              isLarge && styles["error__icon_large-screen"],
              isDesktop && styles.error__icon_desktop,
              isLaptop && styles.error__icon_laptop,
              isTablet && styles.error__icon_tablet,
              isMobile && styles.error__icon_mobile
            )}
          />
          <div
            className={clsx(
              styles.error__desc,
              isLarge && styles["error__desc_large-gap"],
              (isDesktop || isLaptop || isTablet || isMobile) &&
                styles["error__desc_small-gap"],
              isMobile && styles.error__desc_mobile
            )}
          >
            <Text
              as={"h1"}
              fontFamily="Unbounded"
              textAlign={isMobile ? "center" : "left"}
              fontSize={isLarge ? 32 : 28}
              fontWeight={500}
              lineHeight={isLarge ? 48 : 40}
              textTransform={"none"}
              color={Colors.Navy}
            >
              {title}
            </Text>
            <Text
              as={"p"}
              fontFamily="Roboto"
              textAlign={isMobile ? "center" : "left"}
              fontSize={isLarge || isLaptop ? 20 : 14}
              fontWeight={400}
              lineHeight={isLarge || isLaptop ? 32 : 24}
              textTransform={"none"}
              color={Colors.Navy}
            >
              {text}
            </Text>
          </div>
          <Button type={"button"} disabled={false} onClick={onButtonClick}>
            {buttonLabel}
          </Button>
        </div>
      </main>
    </>
  );
};
