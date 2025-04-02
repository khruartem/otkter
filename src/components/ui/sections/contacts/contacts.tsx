import React from "react";
import clsx from "clsx";

import { Text } from "../../../text";

import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";
import { Colors } from "../../../../utils/types";

import styles from "./contacts.module.css";
import { Button } from "../../../button";
import { TContactsUIProps } from "./types";

export const ContactsUI = React.forwardRef<HTMLElement, TContactsUIProps>(
  ({ onContact }, ref) => {
    const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
      useGetMediaQuery();

    return (
      <section
        id="contacts"
        className={clsx(
          styles.contacts,
          isLarge && styles["contacts_large-screen"],
          isDesktop && styles.constants_desktop,
          isLaptop && styles.constants_laptop,
          isTablet && styles.constants_tablet,
          isMobile && styles.constants_mobile,
          isMobile
            ? styles["contacts_background-contained"]
            : styles["contacts_background-covered"]
        )}
        ref={ref}
      >
        <Text
          fontFamily={"Unbounded"}
          textAlign={"center"}
          fontSize={clsx(
            isLarge && "32px",
            (isDesktop || isLaptop || isTablet) && "28px",
            isMobile && "20px"
          )}
          fontWeight={500}
          lineHeight={clsx(
            isLarge && "48px",
            (isDesktop || isLaptop || isTablet) && "40px",
            isMobile && "32px"
          )}
          textTransform={"none"}
          color={Colors.Navy}
        >
          {
            "Свяжитесь с нами, если хотите посетить наши мероприятия, предложить свое, или стать нашим творцом"
          }
        </Text>
        <Button type={"button"} disabled={false} onClick={onContact}>
          {"Связаться с нами"}
        </Button>
      </section>
    );
  }
);
