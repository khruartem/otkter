import { TSEOImageProps } from "../../seo-image/types";

export type TSEOProps = {
  title: string;
  ogTitle?: string;
  description: string;
  ogDescription?: string;
  siteName: string;
  url: string;
  previewImg: string;
  seoImg?: TSEOImageProps;
};
