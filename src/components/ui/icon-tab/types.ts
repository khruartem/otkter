import { ReactNode } from "react";
import { TEmployee } from "../../../utils/types";
import { TProject } from "../../../utils/types/projects";
import { TService } from "../../../utils/types/services";
import { TItemOTType } from "../../../utils/types/common";

export type TIconTabUIProps = {
  children: ReactNode;
  titled?: boolean;
  tab: TProject | TEmployee | TService | TItemOTType;
  current: boolean;
  onClick: () => void;
  onMouseEnter: (
    e: React.SyntheticEvent,
    styleActive: string,
    styleHover: string
  ) => void;
  onMouseLeave: (e: React.SyntheticEvent, styleHover: string) => void;
};
