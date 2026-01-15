import { FC } from "react";

import { SocialUI } from "../ui/social";

import { TEmployeeSocialsProps } from "./types";

export const EmployeeSocials: FC<TEmployeeSocialsProps> = ({ socials }) => {
  const handleFollowLink = (url: string) => {
    window.open(url, "_blank");
  };

  return <SocialUI socials={socials} onFollowLink={handleFollowLink} />;
};
