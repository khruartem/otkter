import { CSSProperties, FC } from "react";
import clsx from "clsx";

import { ProjectList } from "../../project-list";

import { TProjectGroupsListUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./project-groups-list.module.css";

export const ProjectGroupsListUI: FC<TProjectGroupsListUIProps> = ({
  tabs,
  projectRefs,
  projectsViewRefs,
}) => {
  const { isMobile } = useGetMediaQuery();

  const { allRef, playRef, contestRef, masterClassRef, shortFilmRef } =
    projectRefs;

  return (
    <div
      className={clsx(
        styles["project-groups-list"],
        isMobile && styles["project-groups-list_mobile"]
      )}
      style={
        {
          "--tabs-count": tabs.length,
        } as CSSProperties
      }
    >
      {tabs.map((tab) => {
        switch (tab) {
          case "all":
            return (
              allRef && (
                <ProjectList
                  key={tabs.findIndex(tab => tab === "all")}
                  type="all"
                  projectRef={allRef}
                  projectsViewRefs={projectsViewRefs}
                />
              )
            );
          case "play":
            return (
              playRef && (
                <ProjectList
                  key={tabs.findIndex(tab => tab === "play")}
                  type="play"
                  projectRef={playRef}
                  projectsViewRefs={projectsViewRefs}
                />
              )
            );
          case "contest":
            return (
              contestRef && (
                <ProjectList
                  key={tabs.findIndex(tab => tab === "contest")}
                  type="contest"
                  projectRef={contestRef}
                  projectsViewRefs={projectsViewRefs}
                />
              )
            );
          case "master-class":
            return (
              masterClassRef && (
                <ProjectList
                  key={tabs.findIndex(tab => tab === "master-class")}
                  type="master-class"
                  projectRef={masterClassRef}
                  projectsViewRefs={projectsViewRefs}
                />
              )
            );
          case "short-film":
            return (
              shortFilmRef && (
                <ProjectList
                  key={tabs.findIndex(tab => tab === "short-film")}
                  type="short-film"
                  projectRef={shortFilmRef}
                  projectsViewRefs={projectsViewRefs}
                />
              )
            );
        }
      })}
    </div>
  );
};
