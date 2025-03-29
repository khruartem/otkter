import { FC, useEffect, useRef, useState } from "react";

import { TProjectsContentSliderProps } from "./types";
import { useGetTabs } from "../../hooks/useGetTabs";
import { TProjectsIconRef, TProjectTabMode } from "../../utils/types";
import { lockScroll } from "../../utils/lockScroll";
import { scrollIntoElementView } from "../../utils/scrollIntoElementView";
import { useGetIconOnMouseEnter } from "../../hooks/useGetIconOnMouseEnter";
import { useGetIconOnMouseLeave } from "../../hooks/useGetIconOnMouseLeave";
import { ContentSliderUI } from "../ui/content-slider";
import { useGetProjectRefs } from "../../hooks/useGetProjectRefs";
import { useGetProjectViews } from "../../hooks/useGetProjectViews";
import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";

export const ProjectsContentSlider: FC<TProjectsContentSliderProps> = ({
  projectsRefs,
  projectsViewRefs,
}) => {
  const { isMobile } = useGetMediaQuery();

  const tabs = useGetTabs("projects") as TProjectTabMode[];

  const [currentTab, setCurrentTab] = useState<TProjectTabMode>(tabs[0]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { allRef, playRef, contestRef, masterClassRef, shortFilmRef } =
    useGetProjectRefs(projectsRefs);

  const allIconRef = useRef<HTMLLIElement>(null);
  const playIconRef = useRef<HTMLLIElement>(null);
  const contestIconRef = useRef<HTMLLIElement>(null);
  const masterClassIconRef = useRef<HTMLLIElement>(null);
  const shortFilmIconRef = useRef<HTMLLIElement>(null);

  const projectsIconRefs: TProjectsIconRef[] = [
    {
      ref: allIconRef,
      type: "all",
    },
    {
      ref: playIconRef,
      type: "play",
    },
    {
      ref: contestIconRef,
      type: "contest",
    },
    {
      ref: masterClassIconRef,
      type: "master-class",
    },
    {
      ref: shortFilmIconRef,
      type: "short-film",
    },
  ];

  const {
    inViewAll,
    inViewPlay,
    inViewContest,
    inViewMasterClass,
    inViewShortFilm,
  } = useGetProjectViews(projectsViewRefs);

  useEffect(() => {
    if (inViewAll) {
      setCurrentTab("all");
      setCurrentIndex(tabs.findIndex((tab) => tab === "all"));
      if (isMobile) scrollIntoElementView(allIconRef, "smooth", "nearest");
    } else if (inViewPlay) {
      setCurrentTab("play");
      setCurrentIndex(tabs.findIndex((tab) => tab === "play"));
      if (isMobile) scrollIntoElementView(playIconRef, "smooth", "nearest");
    } else if (inViewContest) {
      setCurrentTab("contest");
      setCurrentIndex(tabs.findIndex((tab) => tab === "contest"));
    } else if (inViewMasterClass) {
      setCurrentTab("master-class");
      setCurrentIndex(tabs.findIndex((tab) => tab === "master-class"));
      if (isMobile)
        scrollIntoElementView(masterClassIconRef, "smooth", "nearest");
    } else if (inViewShortFilm) {
      setCurrentTab("short-film");
      setCurrentIndex(tabs.findIndex((tab) => tab === "short-film"));
      if (isMobile)
        scrollIntoElementView(shortFilmIconRef, "smooth", "nearest");
    }
  }, [
    inViewAll,
    inViewContest,
    inViewMasterClass,
    inViewPlay,
    inViewShortFilm,
    isMobile,
    tabs,
  ]);

  const onTabClick = (tab: TProjectTabMode) => {
    //setCurrentIndex(tabs.findIndex((el) => el === tab));
    switch (tab) {
      case "all":
        scrollIntoElementView(
          allRef,
          currentTab === "play" ? "smooth" : "auto",
          "center"
        );
        lockScroll();
        break;
      case "contest":
        scrollIntoElementView(
          contestRef,
          currentTab === "play" || currentTab === "master-class"
            ? "smooth"
            : "auto",
          "center"
        );
        lockScroll();
        break;
      case "play":
        scrollIntoElementView(
          playRef,
          currentTab === "all" || currentTab === "contest" ? "smooth" : "auto",
          "center"
        );
        lockScroll();
        break;
      case "master-class":
        scrollIntoElementView(
          masterClassRef,
          currentTab === "contest" || currentTab === "short-film"
            ? "smooth"
            : "auto",
          "center"
        );
        lockScroll();
        break;
      case "short-film":
        scrollIntoElementView(
          shortFilmRef,
          currentTab === "master-class" ? "smooth" : "auto",
          "center"
        );
        lockScroll();
        break;
    }
  };

  const onMouseEnter = useGetIconOnMouseEnter();
  const onMouseLeave = useGetIconOnMouseLeave();

  const onMoveLeft = () => {
    const newIndex = currentIndex - 1;

    if (newIndex < 0) {
      const newIndex = tabs.length - 1;
      const newTab = tabs[newIndex];

      onTabClick(newTab);
      setCurrentIndex(newIndex);
    } else {
      const newTab = tabs[newIndex];

      onTabClick(newTab);
      setCurrentIndex(newIndex);
    }
  };

  const onMoveRight = () => {
    const newIndex = currentIndex + 1;

    if (newIndex === tabs.length) {
      const newTab = tabs[0];

      onTabClick(newTab);
      setCurrentIndex(0);
    } else {
      const newTab = tabs[newIndex];

      onTabClick(newTab);
      setCurrentIndex(newIndex);
    }
  };

  return (
    <ContentSliderUI
      type="projects"
      onTabClick={onTabClick}
      currentTab={currentTab}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabs={tabs}
      onMoveLeft={onMoveLeft}
      onMoveRight={onMoveRight}
      iconRefs={projectsIconRefs}
    />
  );
};
