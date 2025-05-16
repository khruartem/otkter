import { FC } from "react";

import { TSocialProps } from "./types";

import { CopyLink, Telegram, VK } from "../../icons/icons";

import styles from "./social.module.css";
import { Colors } from "../../../utils/types";

export const SocialUI: FC<TSocialProps> = ({
  socials,
  color = Colors.Nephritis100,
  hoverColor = Colors.Nephritis120,
  activeColor = Colors.Navy,
}) => {
  return (
    <div className={styles.socialbar}>
      {socials.map(({ id, url, type, onClick }) => {
        switch (type) {
          case "telegram":
            return (
              <Telegram
                key={id}
                mainColor={color}
                hoverColor={hoverColor}
                activeColor={activeColor}
                url={url}
              />
            );
          case "vk":
            return (
              <VK
                key={id}
                mainColor={color}
                hoverColor={hoverColor}
                activeColor={activeColor}
                url={url}
              />
            );
          case "copy":
            return (
              <CopyLink
                key={id}
                mainColor={color}
                hoverColor={hoverColor}
                activeColor={activeColor}
                onClick={onClick ? () => onClick(url) : () => {}}
              />
            );
        }
      })}
    </div>
  );
};
