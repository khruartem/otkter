import { FC } from "react";

import { ShareUI } from "../ui/share";
import { SocialUI } from "../ui/social";
import { Copy } from "../copy";

import { TShareProps } from "./types";

import { Colors } from "../../utils/types";

import { useGetMainSocials } from "../../hooks/useGetMainSocials";

export const Share: FC<TShareProps> = ({ item }) => {
  const href = window.location.href;

  const telegramUrl = `https://t.me/share/url?url=${href}&text=${item.title}`;
  const VKUrl = `https://vk.com/share.php?url=${href}`;

  const socials = useGetMainSocials(telegramUrl, VKUrl);

  return (
    <ShareUI>
      <SocialUI
        socials={socials}
        color={Colors.Light20}
        hoverColor={Colors.Dark80}
      />
      <Copy />
    </ShareUI>
  );
};
