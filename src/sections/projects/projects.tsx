import { FC, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { ProjectsUI } from "../../components/ui/sections/projects";
import { SliderSectionUI } from "../../components/ui/sections/slider-section";

import { TProjectRef, TProjectViewRef } from "../../utils/types";
import { TProjectsProps } from "./types";
import { useLocation } from "react-router-dom";

export const Projects: FC<TProjectsProps> = ({ sectionRef, type }) => {
  const location = useLocation();

  const allRef = useRef<HTMLDivElement>(null);
  const playRef = useRef<HTMLDivElement>(null);
  const contestRef = useRef<HTMLDivElement>(null);
  const masterClassRef = useRef<HTMLDivElement>(null);
  const shortFilmRef = useRef<HTMLDivElement>(null);

  const projectsRefs: TProjectRef[] = [
    {
      type: "all",
      ref: allRef,
    },
    {
      type: "play",
      ref: playRef,
    },
    {
      type: "contest",
      ref: contestRef,
    },
    {
      type: "master-class",
      ref: masterClassRef,
    },
    {
      type: "short-film",
      ref: shortFilmRef,
    },
  ];

  const [allViewRef, inViewAll] = useInView({
    threshold: 0,
  });
  const [playViewRef, inViewPlay] = useInView({
    threshold: 0,
  });
  const [contestViewRef, inViewContest] = useInView({
    threshold: 0,
  });
  const [masterClassViewRef, inViewMasterClass] = useInView({
    threshold: 0,
  });
  const [shortFilmViewRef, inViewShortFilm] = useInView({
    threshold: 0,
  });

  const projectsViewRefs: TProjectViewRef[] = [
    {
      type: "all",
      inView: inViewAll,
      ref: allViewRef,
    },
    {
      type: "play",
      inView: inViewPlay,
      ref: playViewRef,
    },
    {
      type: "contest",
      inView: inViewContest,
      ref: contestViewRef,
    },
    {
      type: "master-class",
      inView: inViewMasterClass,
      ref: masterClassViewRef,
    },
    {
      type: "short-film",
      inView: inViewShortFilm,
      ref: shortFilmViewRef,
    },
  ];

  useEffect(() => {
    if (type === "main" && location.hash === "#projects") {
      sectionRef?.current?.scrollIntoView({
        block: "start",
        behavior: "instant",
      });
    }
  }, [location, sectionRef, type]);

  return (
    <>
      {type === "main" && <ProjectsUI ref={sectionRef} />}
      {type === "all" && (
        <SliderSectionUI
          type={"projects"}
          sectionRefs={projectsRefs}
          sectionViewRefs={projectsViewRefs}
        />
      )}
    </>
  );
};
