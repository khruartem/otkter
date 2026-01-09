import { FC } from "react";

import { FooterUI } from "../../components/ui/sections/footer";

export const Footer: FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  return <FooterUI year={year} />;
};
