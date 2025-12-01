import { FC } from "react";
import clsx from "clsx";

import { Section } from "../../../section";
import { Text } from "../../../text";
import { Button } from "../../../button";

import { TContactsUIProps } from "./types";
import { Colors } from "../../../../utils/types";

import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";

import styles from "./contacts.module.css";

export const ContactsUI: FC<TContactsUIProps> = ({ onContact }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <Section
      id="contacts"
      padding={isLarge || isDesktop || isLaptop ? "block" : "all"}
      decoration="full"
      contentDirection="column"
      className={clsx(
        styles.contacts,
        isLarge && styles.contacts_large,
        isDesktop && styles.constants_desktop,
        isLaptop && styles.constants_laptop,
        isTablet && styles.constants_tablet,
        isMobile && styles.constants_mobile,
        isLarge ? styles["contacts_large-gap"] : styles["contacts_small-gap"],
        isMobile
          ? styles["contacts_background-contained"]
          : styles["contacts_background-covered"]
      )}
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
    </Section>
  );
};
