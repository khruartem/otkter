import React, { ReactNode } from "react";
import { TItemOTType } from "../../utils/types/common";

export type TIconTabProps = {
  titled?: boolean;
  tab: TItemOTType;
  current: boolean;
  iconRef: React.RefObject<HTMLLIElement>;
  onClick: () => void;
  children: ReactNode;
};
