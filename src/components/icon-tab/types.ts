import React, { ReactNode } from "react";
import { TItemOTType } from "../../utils/types/common";
import { TProject } from "../../utils/types/projects";
import { TService } from "../../utils/types/services";
import { TEmployee } from "../../utils/types/team";

export type TIconTabProps = {
  titled?: boolean;
  tab: TProject | TEmployee | TService | TItemOTType;
  current: boolean;
  iconRef: React.RefObject<HTMLLIElement>;
  onClick: () => void;
  children: ReactNode;
};
