import { TItemOTType } from "../../utils/types/item-ot";

export type TMerchItemListProps = {
  type: TItemOTType;
  merchItemListRef?: React.RefObject<HTMLDivElement>;
  merchItemListViewRef?: (node?: Element | null | undefined) => void;
};
