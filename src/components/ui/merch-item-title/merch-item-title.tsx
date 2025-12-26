import { FC } from "react";

import { Text } from "../../text";

import { TMerchItemTitleUIProps } from "./types";

import { Colors } from "../../../utils/types";

export const MerchItemTitleUI: FC<TMerchItemTitleUIProps> = ({ title }) => {
  return (
    <Text
      fontFamily={"Unbounded"}
      textAlign={"left"}
      fontSize={20}
      fontWeight={500}
      lineHeight={32}
      textTransform={"none"}
      color={Colors.Navy}
    >
      {title}
    </Text>
  );
};
