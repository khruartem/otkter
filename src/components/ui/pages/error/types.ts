import { TPageLayout, TPageSEO } from "../../../page/type";

export type TErrorUIProps = {
  title: string;
  text: string;
  buttonLabel: string;
  onButtonClick: () => void;
  pageProps: { seo: TPageSEO; layout: TPageLayout };
};
