import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { SocialUI } from "../ui/social";
import { TEmployeeSocialsProps } from "./types";

export const EmployeeSocials: FC<TEmployeeSocialsProps> = ({ socials }) => {
  const navigate = useNavigate();

  const handleFollowLink = (url: string) => {
    navigate(url);
  };

  return <SocialUI socials={socials} onFollowLink={handleFollowLink} />;
};
