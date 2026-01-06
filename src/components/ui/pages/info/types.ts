import { TItemOT } from "../../../../utils/types/item-ot";
import { TPageLayout, TPageSEO } from "../../../page/type";

export type TInfoUIProps = {
  currentItem: TItemOT;
  pageProps: { seo: TPageSEO; layout: TPageLayout };
};
