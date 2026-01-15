import { FC } from "react";

import { GitHub, Telegram, VK } from "../../icons";

import { TSocialProps } from "./types";

import { Colors } from "../../../utils/types";

import styles from "./social.module.css";

export const SocialUI: FC<TSocialProps> = ({
  socials,
  color = Colors.Nephritis100,
  hoverColor = Colors.Nephritis120,
  activeColor = Colors.Navy,
  onFollowLink,
}) => {
  return (
    <div className={styles.socialbar}>
      {socials.map(({ id, url, type }) => {
        switch (type) {
          case "telegram":
            return (
              <Telegram
                key={id}
                mainColor={color}
                hoverColor={hoverColor}
                activeColor={activeColor}
                onClick={onFollowLink && (() => onFollowLink(url))}
              />
            );
          case "vk":
            return (
              <VK
                key={id}
                mainColor={color}
                hoverColor={hoverColor}
                activeColor={activeColor}
                onClick={onFollowLink && (() => onFollowLink(url))}
              />
            );
          case "github":
            return (
              <GitHub
                key={id}
                mainColor={color}
                hoverColor={hoverColor}
                activeColor={activeColor}
                onClick={onFollowLink && (() => onFollowLink(url))}
              />
            );
        }
      })}
    </div>
  );
};
