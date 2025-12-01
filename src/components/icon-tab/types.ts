import React, { ReactNode } from "react";
import { TCardType } from "../../utils/types"

export type TIconTabProps = {
  // type: TSectionType;
  titled?: boolean;
  // notTitled?: boolean;
  tab: TCardType;
  current: boolean;
  // index: number;
  iconRef: React.RefObject<HTMLLIElement>;
  onClick: () => void;
  children: ReactNode;
}