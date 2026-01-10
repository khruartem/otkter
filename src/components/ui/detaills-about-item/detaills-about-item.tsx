import { FC } from "react";

import { DetailsAboutIcon } from "../../details-about-icon";
import { Text } from "../../text";

import { TDetailsAboutItemUIProps } from "./types";
import { Colors, TEmployee } from "../../../utils/types";
import { TItemOT } from "../../../utils/types/item-ot";

import styles from "./detaills-about-item.module.css";

export const DetailsAboutItemUI: FC<TDetailsAboutItemUIProps> = ({
  icon,
  label,
  value,
}) => {
  const renderDetailsValue = (
    value: string | string[] | TEmployee | TItemOT
  ) => {
    return Array.isArray(value) ? (
      <ul className={styles["detaills-about-item__values"]}>
        {value.map((item, index) => (
          <li className={styles["detaills-about-item__value"]} key={index}>
            {item}
          </li>
        ))}
      </ul>
    ) : (
      typeof value === "string" && (
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
      )
    );
  };

  return (
    <li className={styles["detaills-about-item"]}>
      {icon && <DetailsAboutIcon icon={icon} />}
      <div>
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
          {label}
        </Text>
        {renderDetailsValue(value)}
      </div>
    </li>
  );
};
