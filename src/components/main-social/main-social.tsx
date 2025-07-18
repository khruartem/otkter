import { FC } from "react";

import { SocialUI } from "../ui/social";

import { useGetMainSocials } from "../../hooks/useGetMainSocials";

export const MainSocial: FC = () => {
  const socials = useGetMainSocials();

  return <SocialUI socials={socials} />;
};