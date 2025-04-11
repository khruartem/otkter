import { FC } from "react";
import { Helmet } from "react-helmet-async";

import { SEOProps } from "./types";

export const SEO: FC<SEOProps> = ({
  title,
  ogTitle,
  description,
  ogDescription,
  name,
  type,
  url,
  previewImg,
  locale = "ru"
}) => {
  return (
    <Helmet>
      {/* Стандартные метатеги */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Общие мататеги Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={previewImg} />
      <meta property="og:site_name" content={name} />
      <meta property="og:locale" content={locale} />
      {/* Метатеги Open Graph для Twitter*/}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image:src" content={previewImg} />
    </Helmet>
  );
};
