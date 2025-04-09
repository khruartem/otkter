import clsx from "clsx";

import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";

import videoWEBm from "../../assets/video/video_hero.webm";
import videoMP4 from "../../assets/video/video_hero.mp4";
import videoPoster from "../../assets/video/video_poster.png";

import styles from "./video.module.css";

export const Video = () => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <video
      src={videoWEBm}
      poster={videoPoster}
      autoPlay
      // preload="none"
      muted
      loop
      playsInline
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
