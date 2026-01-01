import { TItemOTType } from "../../utils/types/common";
import { TMerch } from "../../utils/types/merch";
import { TProject } from "../../utils/types/projects";
import { TService } from "../../utils/types/services";
import { TEmployee } from "../../utils/types/team";

export type TPhotoTabProps = {
  tab: TProject | TService | TEmployee | TItemOTType | TMerch;
  current: boolean;
  iconRef: React.RefObject<HTMLLIElement>;
  onClick: () => void;
};
