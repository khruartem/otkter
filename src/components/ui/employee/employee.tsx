import { FC } from "react";

import { Text } from "../../text";

import { TEmployeeUIProps } from "./types";
import { Colors } from "../../../utils/types";

import styles from "./employee.module.css";

export const EmployeeUI: FC<TEmployeeUIProps> = ({
  name,
  occupation,
  photo,
}) => {
  return (
    <div className={styles.employee}>
      <img className={styles.employee_photo} src={photo} alt="Фотография резидента Открытой территории" />
      <div className={styles.employee__info}>
        <Text
          as={"p"}
          fontFamily="Unbounded"
          textAlign="left"
          fontSize={14}
          fontWeight={400}
          lineHeight={20}
          textTransform={"none"}
          color={Colors.Nephritis120}
        >
          {occupation}
        </Text>
        <Text
          as={"p"}
          fontFamily="Unbounded"
          textAlign="left"
          fontSize={18}
          fontWeight={500}
          lineHeight={28}
          textTransform={"none"}
          color={Colors.Navy}
        >
          {name}
        </Text>
      </div>
    </div>
  );
};
