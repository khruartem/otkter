import clsx from "clsx";
import { useLargeScreenMediaQuery } from "../../hooks/useLargeScreenMediaQuery";
import { useDesktopMediaQuery } from "../../hooks/useDesktopMediaQuery";
import { useLaptopMediaQuery } from "../../hooks/useLaptopMediaQuery";
import { useTabletMediaQuery } from "../../hooks/useTabletMediaQuery";
import { useMobileMediaQuery } from "../../hooks/useMobileMediaQuery";

import videoWEBm from "../../assets/video_hero_low.webm";
import videoMP4 from "../../assets/video_hero.mp4";
import videoPoster from "../../assets/video_poster.png";

import styles from "./video.module.css";

export const Video = () => {
  const isLarge = useLargeScreenMediaQuery();
  const isDesktop = useDesktopMediaQuery();
  const isLaptop = useLaptopMediaQuery();
  const isTablet = useTabletMediaQuery();
  const isMobile = useMobileMediaQuery();

  return (
    <video
      src={videoWEBm}
      poster={videoPoster}
      autoPlay
      muted
      loop
      preload="auto"
      className={clsx(
        styles.video,
        isLarge || isDesktop
          ? styles["video_half-bordered"]
          : styles["video_bordered"],
        isLarge && styles["video_large-screen"],
        isDesktop && styles.video_desktop,
        isLaptop && styles.video_laptop,
        isTablet && styles.video_tablet,
        isMobile && styles.video_mobile
      )}
    >
      <source src={videoWEBm} type="video/webm" />
      <source src={videoMP4} type="video/mp4" />
    </video>
  );
};
