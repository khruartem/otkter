// import { FC, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// import { InfoUI } from "../../components/ui/pages/info";
// import { Preloader } from "../../components/ui/preloader";
// import { NotFound404 } from "../not-found-404";
// import { SEO } from "../../components/seo";

// import { Colors } from "../../utils/types";

// import { useGetId } from "../../hooks/useGetId";
// import { useGetProject } from "../../hooks/projects/useGetProject";
// import { useGetProjectColor } from "../../hooks/projects/useGetProjectColor";
// import { Info } from "../../components/pages/info";

import { FC } from "react";

import { Info } from "../../components/pages/info";
import { NotFound404 } from "../not-found-404";

import { useGetId } from "../../hooks/useGetId";
import { useGetProject } from "../../hooks/projects/useGetProject";
import { useGetProjects } from "../../hooks/projects/useGetProjects";
import { useSortAsc } from "../../hooks/useSortAsc";

export const ProjectInfo: FC = () => {
  // const [docReadyState, setDocReadyState] = useState<DocumentReadyState | null>(
  //   null
  // );

  // const location = useLocation();

  // const projectId = useGetId();
  // const project = useGetProject(projectId);

  // const { info, controls, photos, isMain, categories } = project || {};
  // const { employees, eventDetails } = info || {};

  // // const seoImg = project?.icon;
  // const projectColor = useGetProjectColor(categories?.attention || false);
  // const isEmployees = employees ? true : false;
  // const isControls = controls?.length ? true : false;
  // const isPhotos = photos ? true : false;
  // const isDetails = eventDetails?.length ? true : false;

  // useEffect(() => {
  //   // Проброс стейта дальше или формирование
  //   if (location.state) {
  //     location.state = { ...location.state, id: isMain ? projectId : 0 };
  //   } else {
  //     location.state = { id: isMain ? projectId : 0, type: "project" };
  //   }

  //   document.body.style.backgroundColor = Colors.Light60;

  //   setDocReadyState(document.readyState);
  // }, [isMain, location, projectId]);

  // return docReadyState === "complete" || docReadyState === "interactive" ? (
  //   project ? (
  //     <>
  //       <SEO
  //         title={project.title}
  //         ogTitle={project.type}
  //         description={project.shortText}
  //         siteName={project.title}
  //         url={`https://otkter.ru/projects/${project.url}`}
  //         previewImg={project.info.previewImg}
  //         // seoImg={{name: title, src: seoImg || "", description: shortText}}
  //       />
  //       <InfoUI
  //         type="projects"
  //         id={projectId}
  //         title={project.title}
  //         text={project.text}
  //         poster={project.info.poster}
  //         attention={project.categories.attention}
  //         colorAttention={projectColor}
  //         isEmployees={isEmployees}
  //         isControls={isControls}
  //         isPhotos={isPhotos}
  //         isDetails={isDetails}
  //       />
  //     </>
  //   ) : (
  //     <NotFound404 />
  //   )
  // ) : (
  //   <Preloader />
  // );

  const projectId = useGetId();
  const projects = useGetProjects();
  const sortedProjects = useSortAsc(projects, "order");
  const project = useGetProject(projectId);

  return project ? (
    <Info
      currentItem={project}
      items={sortedProjects}
      // type="projects"
      // id={project.id}
      // title={project.title}
      // text={project.text}
      // shortText={project.shortText}
      // poster={project.poster}
      // previewImg={project.previewImg}
      // color={projectColor}
      // employees={employees}
      // controls={project?.controls}
      // photos={project?.photos}
      // details={project?.details}
      // anchor={project.main}
      // url={project.url}
    />
  ) : (
    <NotFound404 />
  );
};
