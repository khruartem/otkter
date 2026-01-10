import { TItemOTCard, TItemOTUrl } from "../../../utils/types/item-ot";

type TItemOTCardUIUrl = {
  to: string;
  from?: string;
  code?: TItemOTUrl;
};

export type TItemOTCardUIProps = {
  id?: string;
  item: TItemOTCard;
  url: TItemOTCardUIUrl;
  target?: React.HTMLAttributeAnchorTarget;
  className?: string;
};
