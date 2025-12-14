import React, { ReactNode } from "react";
import { TItemOTType } from "../../utils/types/common";
import { TProject } from "../../utils/types/projects";
import { TEmployee } from "../../utils/types";
import { TService } from "../../utils/types/services";

export type TIconTabProps = {
  titled?: boolean;
  tab: TProject | TEmployee | TService | TItemOTType;
  current: boolean;
  iconRef: React.RefObject<HTMLLIElement>;
  onClick: () => void;
  children: ReactNode;
};
