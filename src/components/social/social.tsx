/* import { Icon } from "../icon";
import { Colors } from "../../utils/types";
import { SocialProps } from "./types"; */
import { Telegram, VK } from "../icons/icons";

import styles from "./social.module.css";

export const Social = () => {
  return (
    <div className={styles.socialbar}>
      <Telegram />
      <VK />
    </div>
  );
};

/* export const Social = ({ socials }: SocialProps) => {
  return (
    <div className={styles.socialbar}>
      {socials.map(({ id, url, type, icon }) => {
        return (
          <Icon
            key={id}
            icon={icon}
            url={url}
            id={type}
            width={32}
            height={32}
            mainColor={Colors.Nephritis100}
            hoverColor={Colors.Nephritis120}
            activeColor={Colors.Navy}
          />
        );
      })}
    </div>
  );
}; */
