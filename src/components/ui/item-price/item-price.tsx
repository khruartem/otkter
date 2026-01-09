import { FC } from "react";
import clsx from "clsx";

import { Text } from "../../text";

import { TItemPriceUIProps } from "./types";

import { Colors } from "../../../utils/types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

export const ItemPriceUI: FC<TItemPriceUIProps> = ({
  value,
  currency,
  className,
}) => {
  const { isLarge, isDesktop } = useGetMediaQuery();
  const largeResolution = isLarge || isDesktop;

  return (
    <Text
      fontFamily={"Unbounded"}
      textAlign={"left"}
      fontSize={largeResolution ? 36 : 32}
      fontWeight={700}
      lineHeight={largeResolution ? 44 : 40}
      textTransform={"none"}
      color={Colors.Nephritis100}
      className={clsx(className && className)}
    >
      {`${value} ${currency}`}
    </Text>
  );
};
