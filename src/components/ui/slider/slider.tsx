import { FC } from "react";
import clsx from "clsx";

import { Colors } from "../../../utils/types";
import { TSliderUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import { ArrowLeft, ArrowRight } from "../../icons/icons";
import { PhotoPreviewUI } from "../photo-preview";

import styles from "./slider.module.css";

export const SliderUI: FC<TSliderUIProps> = ({
  currentPhoto,
  onMoveLeft,
  onMoveRight,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  const smallResolution = isLaptop || isTablet || isMobile;

  return (
    <div
      className={clsx(
        styles.slider,
        isLarge && styles["slider_large-screen"],
        !isLarge && styles["slider_small-resolution"]
      )}
    >
      <div
        className={clsx(
          styles.slider__content,
          isLarge && styles["slider__content_large-screen"],
          isDesktop && styles.slider__content_desktop,
          smallResolution && styles.slider__content_positioned
        )}
      >
        <ArrowLeft
          mainColor={Colors.Nephritis100}
          hoverColor={Colors.Nephritis120}
          activeColor={Colors.Navy}
          onClick={onMoveLeft}
          className={clsx(
            styles.slider__button,
            smallResolution && [
              styles.slider__button_positioned,
              styles.slider__button_positioned_left,
            ]
          )}
        />
        <PhotoPreviewUI photo={currentPhoto} />
        <ArrowRight
          mainColor={Colors.Nephritis100}
          hoverColor={Colors.Nephritis120}
          activeColor={Colors.Navy}
          onClick={onMoveRight}
          className={clsx(
            styles.slider__button,
            smallResolution && [
              styles.slider__button_positioned,
              styles.slider__button_positioned_right,
            ]
          )}
        />
      </div>
    </div>
  );
};
