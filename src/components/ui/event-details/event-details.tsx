import { FC } from "react";
import clsx from "clsx";
import { nanoid } from "@reduxjs/toolkit";

import { TEventDetailsUI } from "./types";
import { CategoryList } from "../../category-list";
import { Address, Date, Organizers, Partners, Price } from "../../icons/icons";
import { Colors } from "../../../utils/types";
import { Text } from "../../text";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./event-details.module.css";

export const EventDetailsUI: FC<TEventDetailsUI> = ({ projectId, details }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  const largeResolution = isLarge || isDesktop;
  const smallResolution = isLaptop || isDesktop || isTablet || isMobile;

  return (
    <div
      key={nanoid()}
      className={clsx(
        styles["event-details"],
        largeResolution && styles["event-details_large-resolution"],
        smallResolution && styles["event-details_small-resolution"]
      )}
    >
      <CategoryList projectId={projectId} />
      {details.map(({ type, value }) => {
        return (
          <div key={nanoid()} className={styles["event-details__info-block"]}>
            {type === "organizers" && (
              <Organizers mainColor={Colors.Nephritis120} />
            )}
            {type === "partners" && (
              <Partners mainColor={Colors.Nephritis120} />
            )}
            {type === "date" && <Date mainColor={Colors.Nephritis120} />}
            {type === "address" && <Address mainColor={Colors.Nephritis120} />}
            {type === "price" && <Price mainColor={Colors.Nephritis120} />}
            <div className={styles["info-block__text"]}>
              <Text
                as={"h4"}
                fontFamily="Unbounded"
                textAlign="left"
                fontSize={14}
                fontWeight={400}
                lineHeight={20}
                textTransform={"none"}
                color={Colors.Navy}
              >
                {clsx(
                  type === "organizers" && "Организатор",
                  type === "partners" && "Партнеры",
                  type === "date" && "Дата проведения очного этапа:",
                  type === "address" && "Адрес",
                  type === "price" && "Цена"
                )}
              </Text>
              {Array.isArray(value) ? (
                <ul className={styles["info-block__items"]}>
                  {value.map((item) => (
                    <li className={styles["info-block__item"]} key={nanoid()}>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <Text
                  as={"p"}
                  fontFamily="Roboto"
                  textAlign="left"
                  fontSize={16}
                  fontWeight={400}
                  lineHeight={28}
                  textTransform={"none"}
                  color={Colors.Dark100}
                >
                  {value}
                </Text>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
