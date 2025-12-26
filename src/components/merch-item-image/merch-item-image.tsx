import { FC } from "react";

import { MerchItemImageUI } from "../ui/merch-item-image";

import { useMerchItemCotext } from "../../hooks/contexts/useMerchItemCotext";

export const MerchItemImage: FC = () => {
  const { image } = useMerchItemCotext();
  const alt = "Изображение товара мерча";

  return <MerchItemImageUI src={image} alt={alt} />;
};
