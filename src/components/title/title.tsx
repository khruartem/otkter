import { FC } from "react";
import clsx from "clsx";

import { Text } from "../text";

import { TTitleProps } from "./types";
import { Colors, lineHeights } from "../../utils/types";

import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";

export const Title: FC<TTitleProps> = ({ text }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <Text
      as="h2"
      fontFamily="Unbounded"
      textAlign="center"
      fontSize={isLarge || isDesktop ? 56 : 36}
      fontWeight={700}
      lineHeight={(isLarge || isDesktop ? 80 : 44) as lineHeights}
      textTransform="uppercase"
      color={Colors.Navy}
      decorated
      padding={clsx(
        (isLarge || isDesktop) && "6.4px 26.05px",
        (isLaptop || isTablet || isMobile) && "10.4px 22.13px"
      )}
      width={"fit-content"}
    >
      {text}
    </Text>
  );
};
