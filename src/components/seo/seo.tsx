import { FC } from "react";
import { Helmet } from "react-helmet-async";

import { TSEOProps } from "./types";
import { SEOImage } from "../seo-image";

export const SEO: FC<TSEOProps> = ({
  title,
  ogTitle,
  description,
  ogDescription,
  siteName,
  url,
  previewImg,
  seoImg,
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={ogTitle || title} />
        <meta
          property="og:description"
          content={ogDescription || description}
        />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={previewImg} />
        <meta property="og:site_name" content={siteName} />
        <meta name="twitter:creator" content={siteName} />
        <meta name="twitter:title" content={ogTitle || title} />
        <meta
          name="twitter:description"
          content={ogDescription || description}
        />
        <meta property="twitter:image:src" content={previewImg} />
      </Helmet>
      {seoImg && <SEOImage {...seoImg} />}
    </>
  );
};
