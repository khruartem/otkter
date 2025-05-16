import clsx from "clsx";
import { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

import { Text } from "../../text";
import { CategoryList } from "../../category-list";
// import { ImageUI } from "../../image";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import { Colors } from "../../../utils/types";
import { ProjectUIProps } from "./types";
import { useGetAttention } from "../../../hooks/useGetAttention";
import { useGetProjectColors } from "../../../hooks/useGetProjectColors";

import styles from "./project.module.css";

export const ProjectUI: FC<ProjectUIProps> = ({
  project,
  projectRef,
  locationFrom,
}) => {
  const { id, title, image, shortText, isActive } = project;

  const attention = useGetAttention(id);
  const { projectTitleColor, projectTitleColorAttention } =
    useGetProjectColors();

  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const largeResolution = isLarge || isDesktop || isLaptop;
  const smallResolution = isTablet || isMobile;

  return (
    <Link
      className={clsx(
        styles["project-link"],
        !isMobile && styles["project-link_animated"],
        isTablet && styles["project-link_tablet"]
      )}
      to={`/projects/${id}`}
      target="_top"
      style={
        {
          "--project-color": attention
            ? projectTitleColorAttention
            : projectTitleColor,
        } as CSSProperties
      }
      state={{ id, type: locationFrom }}
      ref={projectRef}
    >
      <li
        className={clsx(
          styles.project,
          !isActive && styles.project_inactive,
          largeResolution && styles["project_large-resolution"],
          smallResolution && styles["project_small-resolution"]
        )}
        key={id}
      >
        <div
          className={clsx(
            styles.project__top,
            largeResolution && styles["project__top_large-resolution"],
            smallResolution && styles["project__top_small-resolution"]
          )}
        >
          <div
            className={clsx(
              styles["project__image-container"],
              isLarge && styles["project__image_large-screen"],
              isDesktop && styles.project__image_desktop,
              isLaptop && styles.project__image_laptop,
              isTablet && styles.project__image_tablet,
              isMobile && styles.project__image_mobile
            )}
          >
            <img
              loading="lazy"
              width={clsx(
                isLarge && "25.42vw",
                isDesktop && "38.87vw",
                isLaptop && "41.80vw",
                isTablet && "100%",
                isMobile && "92.27vw"
              )}
              height={clsx(
                isLarge && "14.38vw",
                isDesktop && "20.20vw",
                isLaptop && "26.95vw",
                isTablet && "31.25vw",
                isMobile && "57.97vw"
              )}
              className={clsx(
                styles.project__image,
                isLarge && styles["project__image_large-screen"],
                isDesktop && styles.project__image_desktop,
                isLaptop && styles.project__image_laptop,
                isTablet && styles.project__image_tablet,
                isMobile && styles.project__image_mobile
              )}
              src={image}
              alt="Изображение проекта"
            />
            {/* <ImageUI
              src={image}
              alt={`Изображение проекта ${title}`}
              width={clsx(
                isLarge && "25.42vw",
                isDesktop && "38.87vw",
                isLaptop && "41.80vw",
                isTablet && "100%",
                isMobile && "92.27vw"
              )}
              height={clsx(
                isLarge && "14.38vw",
                isDesktop && "20.20vw",
                isLaptop && "26.95vw",
                isTablet && "31.25vw",
                isMobile && "57.97vw"
              )}
              className={clsx(
                styles.project__image,
                isLarge && styles["project__image_large-screen"],
                isDesktop && styles.project__image_desktop,
                isLaptop && styles.project__image_laptop,
                isTablet && styles.project__image_tablet,
                isMobile && styles.project__image_mobile
              )}
            /> */}
          </div>
          <CategoryList id={id} />
        </div>
        <div
          className={clsx(
            styles.project__bottom,
            largeResolution && styles["project__bottom_large-resolution"],
            smallResolution && styles["project__bottom_small-resolution"]
          )}
        >
          <Text
            as={"h3"}
            fontFamily="Unbounded"
            textAlign="left"
            fontSize={20}
            fontWeight={500}
            lineHeight={32}
            textTransform={"none"}
            color={Colors.Navy}
          >
            {title}
          </Text>
          <Text
            as={"p"}
            fontFamily="Roboto"
            textAlign="left"
            fontSize={18}
            fontWeight={400}
            lineHeight={28}
            textTransform={"none"}
            color={Colors.Dark100}
          >
            {shortText}
          </Text>
        </div>
      </li>
    </Link>
  );
};
