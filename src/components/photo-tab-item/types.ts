import { TEmployee } from "../../utils/types";
import { TProject } from "../../utils/types/projects";
import { TService } from "../../utils/types/services";

export type TPhotoTabItemProps = {
  tab: TProject | TService | TEmployee;
  current: boolean;
  iconRef: React.RefObject<HTMLLIElement>;
  onClick: () => void;
};
