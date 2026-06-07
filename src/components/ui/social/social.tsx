import { FC } from "react";

import { FilmToolz, GitHub, Kinopoisk, Telegram, VK } from "../../icons";

import { TSocialProps } from "./types";

import { Colors } from "../../../utils/types";

import styles from "./social.module.css";
import clsx from "clsx";

export const SocialUI: FC<TSocialProps> = ({
  socials,
  color = Colors.Nephritis100,
  hoverColor = Colors.Nephritis120,
  activeColor = Colors.Navy,
  onFollowLink,
  className,
}) => {
  return (
    <div className={clsx(styles.socialbar, className && className)}>
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
          case "film-toolz":
            return (
              <FilmToolz
                key={id}
                mainColor={color}
                hoverColor={hoverColor}
                activeColor={activeColor}
                onClick={onFollowLink && (() => onFollowLink(url))}
              />
            );
          case "kinopoisk":
            return (
              <Kinopoisk
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
