import { FC } from "react";

import { TPartnerUIProps } from "./types";

export const PartnerUI: FC<TPartnerUIProps> = ({ partner }) => {
  return <img loading="lazy" src={partner.src} alt={partner?.alt} />;
};
