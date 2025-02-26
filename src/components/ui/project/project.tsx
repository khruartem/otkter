import clsx from "clsx";
import { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

import { Text } from "../../text";
import { CategoryList } from "../../category-list";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import { Colors } from "../../../utils/types";
import { ProjectUIProps } from "./types";

import styles from "./project.module.css";
import { useGetAttention } from "../../../hooks/useGetAttention";
import { useGetProjectColors } from "../../../hooks/useGetProjectColors";

export const ProjectUI: FC<ProjectUIProps> = ({ project, projectRef }) => {
  const { projectId, title, image, shortText } = project;

  const attention = useGetAttention(projectId!);
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
        smallResolution && styles["project-link_small-resolution"]
      )}
      to={`/otkter/projects/${projectId}`}
      style={
        {
          "--project-color": attention
            ? projectTitleColorAttention
            : projectTitleColor,
        } as CSSProperties
      }
      state={{projectId}}
      ref={projectRef}
    >
      <li
        className={clsx(
          styles.project,
          largeResolution && styles["project_large-resolution"],
          smallResolution && styles["project_small-resolution"]
        )}
        key={projectId}
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
              styles.project__image,
              isLarge && styles["project__image_large-screen"],
              isDesktop && styles.project__image_desktop,
              isLaptop && styles.project__image_laptop,
              isTablet && styles.project__image_tablet,
              isMobile && styles.project__image_mobile
            )}
            style={
              {
                "--background-url": `url(${image})`,
              } as CSSProperties
            }
          ></div>
          <CategoryList projectId={projectId!} />
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
