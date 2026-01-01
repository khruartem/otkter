import { ReactNode } from "react";
import { TProject } from "../../../utils/types/projects";
import { TService } from "../../../utils/types/services";
import { TItemOTType } from "../../../utils/types/common";
import { TEmployee } from "../../../utils/types/team";
import { TMerch } from "../../../utils/types/merch";

export type TIconTabUIProps = {
  children: ReactNode;
  titled?: boolean;
  tab: TProject | TEmployee | TService | TItemOTType | TMerch;
  current: boolean;
  onClick: () => void;
  onMouseEnter: (
    e: React.SyntheticEvent,
    styleActive: string,
    styleHover: string
  ) => void;
  onMouseLeave: (e: React.SyntheticEvent, styleHover: string) => void;
};
