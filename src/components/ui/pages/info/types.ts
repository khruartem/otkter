import { TItemOT } from "../../../../utils/types/common";
import { TPageLayout, TPageSEO } from "../../../page/type";

export type TInfoUIProps = {
  currentItem: TItemOT;
  pageProps: { seo: TPageSEO; layout: TPageLayout };
};
