import { CSSProperties, forwardRef } from "react";
import clsx from "clsx";

import { Text } from "../../text";
import { Ticket, TrickCircle } from "../../icons";

import { THeroCardUIProps } from "./types";
import { Colors } from "../../../utils/types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./hero-card.module.css";

export const HeroCardUI = forwardRef<HTMLLIElement, THeroCardUIProps>(
  ({ project, ticket, finished, onTicketClick }, ref) => {
    const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
      useGetMediaQuery();

    const { title, shortText, image } = project;

    return (
      <li
        className={clsx(
          styles["hero-card"],
          project.title.length > 17
            ? finished
              ? styles["hero-card_ticket-placer_finished"]
              : styles["hero-card_ticket-placer"]
            : finished
              ? styles["hero-card_regular-placer_finished"]
              : styles["hero-card_regular-placer"],
          (isLarge || isLaptop) && styles["hero-card_large-height"],
          (isDesktop || isTablet || isMobile) &&
            styles["hero-card_small-height"],
          finished && styles["hero-card_finished"],
        )}
        style={
          {
            "--background-image": `url(${image})`,
          } as CSSProperties
        }
        ref={ref}
      >
        <div>
          {ticket && !finished && (
            <Ticket mainColor={Colors.Orange100} onClick={onTicketClick} />
          )}
          {finished && (
            <TrickCircle
              mainColor={Colors.Nephritis100}
              extraColor={Colors.Light100}
            />
          )}
          <Text
            as={"p"}
            fontFamily="Roboto"
            textAlign="left"
            fontSize={14}
            fontWeight={400}
            lineHeight={24}
            textTransform={"none"}
            color={Colors.Dark100}
          >
            {finished ? "Завершено" : shortText}
          </Text>
          <Text
            as={"h3"}
            fontFamily="Unbounded"
            textAlign="left"
            fontSize={16}
            fontWeight={600}
            lineHeight={24}
            textTransform={"none"}
            color={Colors.Navy}
          >
            {title}
          </Text>
        </div>
      </li>
    );
  },
);
