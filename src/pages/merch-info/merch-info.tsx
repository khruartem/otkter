// import { FC } from "react";
// import { useGetMerchItems } from "../../hooks/merch/useGetMerchItems";
// import { useGetMerchItem } from "../../hooks/merch/useGetMerchItem";
// import { InfoRenderer } from "../info-renderer";
// import { Info } from "../info";
// import { TPageLayout, TPageSEO } from "../../components/page/type";

import { FC } from "react";
import { TMerchInfoProps } from "./types";

// export const MerchInfo: FC = () => {
//   const merchItems = useGetMerchItems();
//   const merchItem = useGetMerchItem();

//   const {title, } = merchItem;

//   const seo: TPageSEO = {
//       title,
//       description: shortText,
//       siteName: title,
//       url: `https://otkter.ru/projects/${url}`,
//       previewImg: previewImg || "",
//     };

//     const layout: TPageLayout = {
//       noPadding: false,
//     };

//   return <MerchInfoUI item={merchItem} pageProps={{seo, layout}} />;
// };

export const MerchInfo: FC<TMerchInfoProps> = () => {
  return undefined;
};
