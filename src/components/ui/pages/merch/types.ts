import { TPageLayout } from "../../../page/type";
import { TSEOUIProps } from "../../seo/types";

export type TMerchUIProps = {
  pageProps: { seo: TSEOUIProps; layout: TPageLayout };
};
