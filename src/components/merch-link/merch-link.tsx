import { FC } from "react";

import { MerchLinkUI } from "../ui/merch-link";
import { TMerchLinkProps } from "./types";

export const MerchLink: FC<TMerchLinkProps> = ({ color }) => {
  const link = {
    id: 6,
    name: "Мерч",
    url: "merch",
  };

  return <MerchLinkUI link={link} color={color} />;
};
