import { TItemOTType } from "../../utils/types/common";

export type TMerchItemListProps = {
  type: TItemOTType;
  merchItemListRef?: React.RefObject<HTMLDivElement>;
  merchItemListViewRef?: (node?: Element | null | undefined) => void;
};
