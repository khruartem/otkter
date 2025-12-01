import { FC } from "react";
import { TIconTabProps } from "./types";
import { useGetIconOnMouseEnter } from "../../hooks/useGetIconOnMouseEnter";
import { useGetIconOnMouseLeave } from "../../hooks/useGetIconOnMouseLeave";
// import { useGetIsMainPage } from "../../hooks/useGetIsMainPage";
import { IconTabUI } from "../ui/icon-tab";

export const IconTab: FC<TIconTabProps> = ({
  // type,
  titled,
  tab,
  current,
  // index,
  iconRef,
  onClick,
  children,
}) => {
  // const isMainPage = useGetIsMainPage();

  const onMouseEnter = useGetIconOnMouseEnter();
  const onMouseLeave = useGetIconOnMouseLeave();

  return (
    <IconTabUI
      // type={type}
      titled={titled}
      tab={tab}
      current={current}
      // index={index}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={iconRef}
      // isMainPage={isMainPage}
      >
      {children}
    </IconTabUI>
  );
};
