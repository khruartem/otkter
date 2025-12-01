import { FC } from "react";
import clsx from "clsx";

import { TSectionUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import {
  TSectionContentDirection,
  TSectionDecoration,
  TSectionPadding,
} from "../../../utils/types";

import styles from "./section.module.css";

export const SectionUI: FC<TSectionUIProps> = ({
  id,
  children,
  decoration,
  contentDirection,
  padding,
  className,
  unsetDefaultStyle,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const setSectionPadding = (padding: TSectionPadding) => {
    switch (padding) {
      case "block":
        return clsx(
          isLarge && styles["section_paddinged-block-L"],
          (isDesktop || isLaptop || isTablet || isMobile) &&
            styles["section_paddinged-block-S"]
        );
      case "inline":
        return clsx(
          isLarge && styles["section_paddinged-inline-XL"],
          isDesktop && styles["section_paddinged-inline-L"],
          isLaptop && styles["section_paddinged-inline-M"],
          isTablet && styles["section_paddinged-inline-S"],
          isMobile && styles["section_paddinged-inline-XS"]
        );
      case "none":
        return styles["section_paddinged-none"];
      case "all":
        return clsx(
          isLarge && styles["section_paddinged-block-L"],
          (isDesktop || isLaptop || isTablet || isMobile) &&
            styles["section_paddinged-block-S"],
          isLarge && styles["section_paddinged-inline-XL"],
          isDesktop && styles["section_paddinged-inline-L"],
          isLaptop && styles["section_paddinged-inline-M"],
          isTablet && styles["section_paddinged-inline-S"],
          isMobile && styles["section_paddinged-inline-XS"]
        );
      case "top":
        return clsx(
          styles["section_paddinged-top"],
          isLarge && styles["section_paddinged-block-L"],
          (isDesktop || isLaptop || isTablet || isMobile) &&
            styles["section_paddinged-block-S"]
        );
    }
  };

  const setSectionDecoration = (decoration: TSectionDecoration) => {
    switch (decoration) {
      case "full":
        return clsx(
          styles["section_decorated"],
          (isLarge || isDesktop || isLaptop) &&
            styles["section_decorated_full-large-radius"],
          (isTablet || isMobile) &&
            styles["section_decorated_full-small-radius"]
        );
      case "half":
        return clsx(
          styles["section_decorated"],
          (isLarge || isDesktop || isLaptop) &&
            styles["section_decorated_half-large-radius"],
          (isTablet || isMobile) &&
            styles["section_decorated_half-small-radius"]
        );
      case "only-color":
        return styles["section_decorated"];
    }
  };

  const setSectionContentDirection = (direction: TSectionContentDirection) => {
    return clsx(
      direction === "row" && styles["section_rowed"],
      direction === "column" && styles["section_columned"]
    );
  };

  return (
    <section
      id={id}
      className={clsx(
        unsetDefaultStyle ? className : [styles["section"], className],
        padding && setSectionPadding(padding),
        decoration && setSectionDecoration(decoration),
        contentDirection && setSectionContentDirection(contentDirection)
      )}
    >
      {children}
    </section>
  );
};
