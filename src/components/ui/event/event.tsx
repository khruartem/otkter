import { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { Text } from "../../text";
import {
  Address,
  Date,
  Organizers,
  Partners,
  Phone,
  Price,
} from "../../icons/icons";

import { Colors } from "../../../utils/types";
import { TEventUIProps } from "./types";

import styles from "./event.module.css";

export const EventUI: FC<TEventUIProps> = ({ type, label, value }) => {
  return (
    <div className={styles.event}>
      {type === "organizers" && <Organizers mainColor={Colors.Nephritis120} />}
      {type === "partners" && <Partners mainColor={Colors.Nephritis120} />}
      {type === "date" && <Date mainColor={Colors.Nephritis120} />}
      {type === "address" && <Address mainColor={Colors.Nephritis120} />}
      {type === "price" && <Price mainColor={Colors.Nephritis120} />}
      {type === "contacts" && <Phone mainColor={Colors.Nephritis120} />}
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
        {Array.isArray(value) ? (
          <ul className={styles.event__items}>
            {value.map((item) => (
              <li className={styles.event__item} key={nanoid()}>
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
};
