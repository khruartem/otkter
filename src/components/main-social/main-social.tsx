import { FC } from "react";

import { SocialUI } from "../ui/social";

import { TMainSocialProps } from "./types";
import { Colors } from "../../utils/types";

import { useGetMainSocials } from "../../hooks/useGetMainSocials";

export const MainSocial: FC<TMainSocialProps> = ({
  color = Colors.Nephritis100,
  hoverColor = Colors.Nephritis120,
  activeColor = Colors.Navy,
}) => {
  const socials = useGetMainSocials();

  return (
    <SocialUI
      socials={socials}
      color={color}
      hoverColor={hoverColor}
      activeColor={activeColor}
    />
  );
};
