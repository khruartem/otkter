import { FC } from "react";

import { Telegram, VK } from "../../icons/icons";

import { TSocialProps } from "./types";

import { Colors } from "../../../utils/types";

import styles from "./social.module.css";

export const SocialUI: FC<TSocialProps> = ({
  socials,
  color = Colors.Nephritis100,
  hoverColor = Colors.Nephritis120,
  activeColor = Colors.Navy,
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
        }
      })}
    </div>
  );
};
