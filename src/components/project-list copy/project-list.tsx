import { FC } from "react";
// import { useInView } from "react-intersection-observer";

import { ProjectListUI } from "../ui/project-list";
import { GroupListUI } from "../ui/group-list";

import { TProjectListProps } from "./types";
// import { TProjectTabMode } from "../../utils/types";
// import { scrollIntoElementView } from "../../utils/scrollIntoElementView";

// import { useGetViewRefByType } from "../../hooks/useGetViewRefByType";
// import { useGetProjects } from "../../hooks/useGetProjects";
import { useGetProjects } from "../../hooks/projects/useGetProjects";
import { useSortAsc } from "../../hooks/useSortAsc";
import { useSortDesc } from "../../hooks/useSortDesc";
import { TProject, TProjectType } from "../../utils/types/projects";

export const ProjectList: FC<TProjectListProps> = ({
  type,
  // index,
  // setCurrentTab,
  // setCurrentIndex,
  projectListRef,
  projectListViewRef,
}) => {
  const projects = useGetProjects(type as TProjectType);

  const sortedActiveProjects = useSortDesc<TProject>(projects, "active");
  const sortedOrderedProjects = useSortAsc<TProject>(projects, "order");

  // useScrollOnMount();
  // lockScroll();

  // return (
  //   <ProjectListUI
  //     projects={type === "main" ? sortedOrderedProjects : sortedActiveProjects}
  //     projectRef={projectListRef}
  //     ref={projectListViewRef}
  //   />
  // );

  return type === "main" ? (
    <ProjectListUI
      projects={sortedOrderedProjects}
      // projectRef={projectListRef}
      // ref={projectListViewRef}
    />
  ) : (
    // <div
    //   ref={projectListRef}
    //   // style={{
    //   //   height: "min-content",
    //   // }}
    // >
    <GroupListUI ref={projectListRef}>
      <ProjectListUI
        projects={sortedActiveProjects}
        // projectRef={projectListRef}
        ref={projectListViewRef}
      />
    </GroupListUI>
    // </div>
  );
};
