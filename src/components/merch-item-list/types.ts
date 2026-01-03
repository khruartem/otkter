import { TItemOTType } from "../../utils/types/common";
import { TMerchType } from "../../utils/types/merch";

export type TMerchItemListProps = {
  type: TItemOTType;
  merchItemListRef?: React.RefObject<HTMLDivElement>;
  merchItemListViewRef?: (node?: Element | null | undefined) => void;
};
