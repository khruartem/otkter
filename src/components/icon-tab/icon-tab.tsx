import { FC, SyntheticEvent } from "react";

import { TIconTabProps } from "./types";

import { IconTabUI } from "../ui/icon-tab";

export const IconTab: FC<TIconTabProps> = ({
  titled,
  tab,
  current,
  iconRef,
  onClick,
  children,
}) => {
  const handlerIconMouseEnter = (
    e: SyntheticEvent,
    styleActive: string,
    styleHover: string
  ) => {
    if (!e.currentTarget.classList.contains(styleActive))
      e.currentTarget.classList.add(styleHover);
  };

  const handlerIconMouseLeave = (e: SyntheticEvent, styleHover: string) => {
    if (e.currentTarget.classList.contains(styleHover))
      e.currentTarget.classList.remove(styleHover);
  };

  return (
    <IconTabUI
      titled={titled}
      tab={tab}
      current={current}
      onClick={onClick}
      onMouseEnter={handlerIconMouseEnter}
      onMouseLeave={handlerIconMouseLeave}
      ref={iconRef}
    >
      {children}
    </IconTabUI>
  );
};
