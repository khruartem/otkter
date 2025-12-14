import { TItemOT, TItemOTUrl } from "../../../utils/types/common";

type TItemOTCardUIUrl = {
  to: string;
  from?: string;
  code?: TItemOTUrl;
};

export type TItemOTCardUIProps = {
  item: TItemOT;
  url: TItemOTCardUIUrl;
};
