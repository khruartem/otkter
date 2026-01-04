import { TMerch } from "../../../../utils/types/merch";
import { TPageLayout, TPageSEO } from "../../../page/type";

export type TInfoMerchUIProps = {
  currentItem: TMerch;
  pageProps: { seo: TPageSEO; layout: TPageLayout };
};
