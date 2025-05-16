import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import { TImageUIProps } from "./types";

import "react-lazy-load-image-component/src/effects/blur.css";

export const ImageUI: FC<TImageUIProps> = ({
  width,
  height,
  className,
  wrapperClassName,
  src,
  alt,
}) => {
  // const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
  //   useGetMediaQuery();
  // const largeResolution = isLarge || isDesktop || isLaptop || isTablet;
  return (
    // <>
    //   {largeResolution && (
    //     <img width={width} height={height} loading="lazy" src={src} alt={alt} className={className} />
    //   )}
    //   {isMobile && (
    //     <LazyLoadImage
    //       src={src}
    //       effect="blur"
    //       wrapperProps={{
    //         style: { transitionDelay: "0.5s" },
    //       }}
    //       width={width}
    //       height={height}
    //       alt={alt}
    //       className={className}
    //     />
    //   )}
    // </>
    <LazyLoadImage
      src={src}
      effect="blur"
      wrapperProps={{
        style: { transitionDelay: "0.5s" },
      }}
      width={width}
      height={height}
      alt={alt}
      className={className}
      wrapperClassName={wrapperClassName}
    />
  );
};