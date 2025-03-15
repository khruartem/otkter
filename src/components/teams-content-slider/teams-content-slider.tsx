//import { FC, SyntheticEvent, useEffect, useRef, useState } from "react";
import { FC, useEffect, useRef, useState } from "react";

import { TTeamsContentSliderProps } from "./types";
import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";
import { useGetTabs } from "../../hooks/useGetTabs";
import { TTeamIconRef, TTeamTabMode } from "../../utils/types";
import { scrollIntoElementView } from "../../utils/scrollIntoElementView";
import { lockScroll } from "../../utils/lockScroll";
import { ContentSliderUI } from "../ui/content-slider";
import { useGetIconOnMouseEnter } from "../../hooks/useGetIconOnMouseEnter";
import { useGetIconOnMouseLeave } from "../../hooks/useGetIconOnMouseLeave";

export const TeamsContentSlider: FC<TTeamsContentSliderProps> = ({
  teamsRefs,
  teamsViewRefs,
}) => {
  const { isMobile } = useGetMediaQuery();

  const tabs = useGetTabs("team") as TTeamTabMode[];

  const [currentTab, setCurrentTab] = useState<TTeamTabMode>(tabs[0]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const adminsRef = teamsRefs.find(({ type }) => type === "admins")?.ref;
  const artistsRef = teamsRefs.find(({ type }) => type === "artists")?.ref;

  const adminsIconRef = useRef<HTMLLIElement>(null);
  const artistsIconRef = useRef<HTMLLIElement>(null);

  const teamsIconRefs: TTeamIconRef[] = [
    {
      ref: adminsIconRef,
      type: "admins",
    },
    {
      ref: artistsIconRef,
      type: "artists",
    },
  ];

  const inViewAdmins = teamsViewRefs.find(
    ({ type }) => type === "admins"
  )?.inView;
  const inViewArtists = teamsViewRefs.find(
    ({ type }) => type === "artists"
  )?.inView;

  useEffect(() => {
    if (inViewAdmins) {
      setCurrentTab("admins");
      setCurrentIndex(tabs.findIndex((tab) => tab === "admins"));
    } else if (inViewArtists) {
      setCurrentTab("artists");
      setCurrentIndex(tabs.findIndex((tab) => tab === "artists"));
    }
  }, [inViewAdmins, inViewArtists, tabs]);

  const onTabClick = (tab: TTeamTabMode) => {
    //setCurrentTab(tab);
    setCurrentIndex(tabs.findIndex((el) => el === tab));
    switch (tab) {
      case "admins":
        scrollIntoElementView(adminsRef, "smooth", isMobile ? "center" : "end");
        lockScroll();
        //if (inViewAdmins) setCurrentTab(tab);
        break;
      case "artists":
        scrollIntoElementView(
          artistsRef,
          "smooth",
          isMobile ? "center" : "end"
        );
        lockScroll();
        //if (inViewArtists) setCurrentTab(tab);
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
      //setCurrentTab(newTab);
    } else {
      const newTab = tabs[newIndex];

      onTabClick(newTab);
      setCurrentIndex(newIndex);
      //setCurrentTab(newTab);
    }
  };

  const onMoveRight = () => {
    const newIndex = currentIndex + 1;

    if (newIndex === tabs.length) {
      const newTab = tabs[0];

      onTabClick(newTab);
      setCurrentIndex(0);
      //setCurrentTab(newTab);
    } else {
      const newTab = tabs[newIndex];

      onTabClick(newTab);
      setCurrentIndex(newIndex);
      //setCurrentTab(newTab);
    }
  };

  return (
    <ContentSliderUI
      type="team"
      onTabClick={onTabClick}
      currentTab={currentTab}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tabs={tabs}
      onMoveLeft={onMoveLeft}
      onMoveRight={onMoveRight}
      iconRefs={teamsIconRefs}
    />
  );
};
