import { FC } from "react";

import { TSEOImageProps } from "./types";

import styles from "./seo-image.module.css";

export const SEOImage: FC<TSEOImageProps> = ({ src, name, description }) => {
  return (
    <div
      itemScope
      itemType="http://schema.org/ImageObject"
      className={styles["seo-image"]}
    >
      <h2 itemProp="name">{name}</h2>
      <img src={src} itemProp="contentUrl" />
      <span itemProp="description">{description}</span>
    </div>
  );
};
