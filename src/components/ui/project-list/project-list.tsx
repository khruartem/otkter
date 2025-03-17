import { FC } from "react";
import clsx from "clsx";
import { nanoid } from "@reduxjs/toolkit";

import { Project } from "../../project";
import { TProjectListUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./project-list.module.css";

export const ProjectListUI: FC<TProjectListUIProps> = ({ projects }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const largeResolution = isLarge || isDesktop;
  const mediumResolution = isLaptop;
  const smallResolution = isTablet || isMobile;

  return (
    <ul
      className={clsx(
        styles["project-list"],
        largeResolution && styles["project-list_large-resolution"],
        mediumResolution && styles["project-list_medium-resolution"],
        smallResolution && styles["project-list_small-resolution"]
      )}
    >
      {projects.map((project) => {
        return <Project key={nanoid()} project={project} />;
      })}
    </ul>
  );
};
