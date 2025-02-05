import { FC } from "react";

import { TEventDetailsUI } from "./types";
import { CategoryList } from "../../category-list";

import styles from "./event-details.module.css";
import { Organizers } from "../../icons/icons";
import { Colors } from "../../../utils/types";
import { Text } from "../../text";
import clsx from "clsx";

export const EventDetailsUI: FC<TEventDetailsUI> = ({
  projectId,
  details,
}) => {

  return (
    <div className={styles["event-details"]}>
      <CategoryList projectId={projectId} />
      {Object.entries(details).map(([key, value]) => {
        return (
          <div className={styles["event-details__info-block"]}>
            {clsx(
              key === "organizers" && (
                <Organizers mainColor={Colors.Nephritis120} />
              ),
              key === "partners" && (
                <Organizers mainColor={Colors.Nephritis120} />
              ),
              key === "eventDate" && (
                <Organizers mainColor={Colors.Nephritis120} />
              ),
              key === "address" && (
                <Organizers mainColor={Colors.Nephritis120} />
              ),
              key === "price" && (
                <Organizers mainColor={Colors.Nephritis120} />
              ),
            )}
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
                Организатор
              </Text>
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
            </div>
          </div>
        );
      })}
    </div>
  );
};
