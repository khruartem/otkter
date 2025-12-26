import { FC } from "react";

import { Text } from "../../text";

import { TMerchItemPriceUIProps } from "./types";

import { Colors } from "../../../utils/types";

export const MerchItemPriceUI: FC<TMerchItemPriceUIProps> = ({
  value,
  currency,
}) => {
  return (
    <Text
      fontFamily={"Unbounded"}
      textAlign={"left"}
      fontSize={36}
      fontWeight={700}
      lineHeight={44}
      textTransform={"none"}
      color={Colors.Nephritis100}
    >
      {`${value} ${currency}`}
    </Text>
  );
};
