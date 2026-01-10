import React from "react";
import clsx from "clsx";

import { ItemOTListUI } from "../items-ot-list";
import { Project } from "../../project";

import { TProjectListUIProps } from "./types";

import { TProject } from "../../../utils/types/projects";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./project-list.module.css";

export const ProjectListUI = React.forwardRef<
  HTMLUListElement,
  TProjectListUIProps
>(({ projects }, ref) => {
  const { isTablet, isMobile } = useGetMediaQuery();

  return (
    <ItemOTListUI
      itemsOT={projects}
      renderItemOT={(itemOT, key) => (
        <Project key={key} project={itemOT as TProject} />
      )}
      className={clsx(
        (isTablet || isMobile) && styles["item-ot-list_projects"]
      )}
      ref={ref}
    />
  );
});
