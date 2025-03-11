import { FC } from "react";

import { TSocialProps } from "./types";

import { Telegram, VK } from "../../icons/icons";

import styles from "./social.module.css";

export const SocialUI: FC<TSocialProps> = ({ socials }) => {
  return (
    <div className={styles.socialbar}>
      {socials.map(({id, url, type}) => {
        switch (type) {
          case "telegram":
            return <Telegram key={id} url={url} />;
          case "vk":
            return <VK key={id} url={url} />
        }
      })}
    </div>
  );
};
