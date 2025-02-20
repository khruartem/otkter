import clsx from "clsx";
import { FC } from "react";
import { TeamUIProps } from "./types";

import { useLargeScreenMediaQuery } from "../../../hooks/useLargeScreenMediaQuery";

import { Colors } from "../../../utils/types";
import { DecorImage } from "../../decor-image";
import { Text } from "../../text";

import styles from "./team.module.css";

export const TeamUI: FC<TeamUIProps> = ({ teammate }) => {
  const isLarge = useLargeScreenMediaQuery();
  
  const { title, image, shortText } = teammate;
  
  return (
      <li className={styles.card}>
          <DecorImage
            width={clsx(isLarge && "25.42vw")}
            height={clsx(isLarge && "14.38vw")}
            backgroundUrl={image}
          />
        <div className={styles.card__bottom}>
          <Text
            as={"h3"}
            fontFamily="Unbounded"
            textAlign="center"
            fontSize={20}
            fontWeight={500}
            lineHeight={32}
            textTransform={"none"}
            color={Colors.Navy}
          >
            {title}
          </Text>
          <Text
            as={"p"}
            fontFamily="Roboto"
            textAlign="left"
            fontSize={18}
            fontWeight={400}
            lineHeight={28}
            textTransform={"none"}
            color={Colors.Dark100}
          >
            {shortText}
          </Text>
        </div>
      </li>
  );
}