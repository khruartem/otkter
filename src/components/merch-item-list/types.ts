import { TMerchType } from "../../utils/types/merch";

export type TMerchItemListProps = {
  type: TMerchType;
  merchItemListRef?: React.RefObject<HTMLDivElement>;
  merchItemListViewRef?: (node?: Element | null | undefined) => void;
};
