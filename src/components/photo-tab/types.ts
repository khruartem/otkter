import { TItemOT, TItemOTType } from "../../utils/types/common";

export type TPhotoTabProps = {
  tab: TItemOT | TItemOTType;
  current: boolean;
  iconRef: React.RefObject<HTMLLIElement>;
  onClick: () => void;
};
