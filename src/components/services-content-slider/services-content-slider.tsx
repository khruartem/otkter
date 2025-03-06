import { FC, useEffect, useRef, useState } from "react";

import { TServicesContentSliderProps } from "./types";

import { ContentSliderUI } from "../ui/content-slider";
import { TServiceIconRef, TServicesTabMode } from "../../utils/types";
import { useGetTabs } from "../../hooks/useGetTabs";
import { lockScroll } from "../../utils/lockScroll";
import { scrollIntoElementView } from "../../utils/scrollIntoElementView";
import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";

export const ServicesContentSlider: FC<TServicesContentSliderProps> = ({
  servicesRefs,
  servicesViewRefs,
}) => {
  const { isMobile } = useGetMediaQuery();

  const tabs = useGetTabs("services") as TServicesTabMode[];

  const [currentTab, setCurrentTab] = useState<TServicesTabMode>(tabs[0]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openSeaRef = servicesRefs.find(({ type }) => type === "open-sea")?.ref;
  const eventsRef = servicesRefs.find(({ type }) => type === "events")?.ref;
  const designRef = servicesRefs.find(({ type }) => type === "design")?.ref;
  const contentRef = servicesRefs.find(({ type }) => type === "content")?.ref;
  const masterClassRef = servicesRefs.find(
    ({ type }) => type === "master-class"
  )?.ref;
  const lampRef = servicesRefs.find(({ type }) => type === "lamp")?.ref;
  const smmRef = servicesRefs.find(({ type }) => type === "smm")?.ref;

  const openSeaIconRef = useRef<HTMLLIElement>(null);
  const eventsIconRef = useRef<HTMLLIElement>(null);
  const designIconRef = useRef<HTMLLIElement>(null);
  const contenIconRef = useRef<HTMLLIElement>(null);
  const masterClassIconRef = useRef<HTMLLIElement>(null);
  const lampIconRef = useRef<HTMLLIElement>(null);
  const smmIconRef = useRef<HTMLLIElement>(null);

  const serviceIconRefs: TServiceIconRef[] = [
    {
      ref: openSeaIconRef,
      type: "open-sea",
    },
    {
      ref: eventsIconRef,
      type: "events",
    },
    {
      ref: designIconRef,
      type: "design",
    },
    {
      ref: contenIconRef,
      type: "content",
    },
    {
      ref: masterClassIconRef,
      type: "master-class",
    },
    {
      ref: lampIconRef,
      type: "lamp",
    },
    {
      ref: smmIconRef,
      type: "smm",
    },
  ];

  const inViewOpenSea = servicesViewRefs.find(
    ({ type }) => type === "open-sea"
  )?.inView;
  const inViewEvents = servicesViewRefs.find(
    ({ type }) => type === "events"
  )?.inView;
  const inViewDesign = servicesViewRefs.find(
    ({ type }) => type === "design"
  )?.inView;
  const inViewContent = servicesViewRefs.find(
    ({ type }) => type === "content"
  )?.inView;
  const inViewMasterClass = servicesViewRefs.find(
    ({ type }) => type === "master-class"
  )?.inView;
  const inViewLamp = servicesViewRefs.find(
    ({ type }) => type === "lamp"
  )?.inView;
  const inViewSmm = servicesViewRefs.find(({ type }) => type === "smm")?.inView;

  useEffect(() => {
    if (inViewOpenSea) {
      setCurrentTab("open-sea");
      setCurrentIndex(tabs.findIndex((tab) => tab === "open-sea"));
      if (isMobile) scrollIntoElementView(openSeaIconRef, "smooth", "nearest");
    } else if (inViewEvents) {
      setCurrentTab("events");
      setCurrentIndex(tabs.findIndex((tab) => tab === "events"));
      if (isMobile) scrollIntoElementView(eventsIconRef, "smooth", "nearest");
    } else if (inViewDesign) {
      setCurrentTab("design");
      setCurrentIndex(tabs.findIndex((tab) => tab === "design"));
      if (isMobile) scrollIntoElementView(designIconRef, "smooth", "nearest");
    } else if (inViewContent) {
      setCurrentTab("content");
      setCurrentIndex(tabs.findIndex((tab) => tab === "content"));
      if (isMobile) scrollIntoElementView(contenIconRef, "smooth", "nearest");
    } else if (inViewMasterClass) {
      setCurrentTab("master-class");
      setCurrentIndex(tabs.findIndex((tab) => tab === "master-class"));
      if (isMobile)
        scrollIntoElementView(masterClassIconRef, "smooth", "nearest");
    } else if (inViewLamp) {
      setCurrentTab("lamp");
      setCurrentIndex(tabs.findIndex((tab) => tab === "lamp"));
      if (isMobile) scrollIntoElementView(lampIconRef, "smooth", "nearest");
    } else if (inViewSmm) {
      setCurrentTab("smm");
      setCurrentIndex(tabs.findIndex((tab) => tab === "smm"));
      if (isMobile) scrollIntoElementView(smmIconRef, "smooth", "nearest");
    }
  }, [
    inViewOpenSea,
    inViewEvents,
    inViewDesign,
    inViewContent,
    inViewMasterClass,
    inViewLamp,
    inViewSmm,
    isMobile,
    tabs,
  ]);

  const onTabClick = (tab: TServicesTabMode) => {
    setCurrentTab(tab);
    switch (tab) {
      case "open-sea":
        scrollIntoElementView(
          openSeaRef,
          currentTab === "events" ? "smooth" : "auto",
          isMobile ? "center" : "end"
        );
        lockScroll();
        break;
      case "events":
        scrollIntoElementView(
          eventsRef,
          currentTab === "open-sea" || currentTab === "design"
            ? "smooth"
            : "auto",
          isMobile ? "center" : "end"
        );
        lockScroll();
        break;
      case "design":
        scrollIntoElementView(
          designRef,
          currentTab === "events" || currentTab === "content"
            ? "smooth"
            : "auto",
          isMobile ? "center" : "end"
        );
        lockScroll();
        break;
      case "content":
        scrollIntoElementView(
          contentRef,
          currentTab === "design" || currentTab === "master-class"
            ? "smooth"
            : "auto",
          isMobile ? "center" : "end"
        );
        lockScroll();
        break;
      case "master-class":
        scrollIntoElementView(
          masterClassRef,
          currentTab === "content" || currentTab === "lamp" ? "smooth" : "auto",
          isMobile ? "center" : "end"
        );
        lockScroll();
        break;
      case "lamp":
        scrollIntoElementView(
          lampRef,
          currentTab === "master-class" || currentTab === "smm"
            ? "smooth"
            : "auto",
          isMobile ? "center" : "end"
        );
        lockScroll();
        break;
      case "smm":
        scrollIntoElementView(
          smmRef,
          currentTab === "lamp" ? "smooth" : "auto",
          isMobile ? "center" : "end"
        );
        lockScroll();
        break;
    }
  };

  const onMoveLeft = () => {
    const newIndex = currentIndex - 1;

    if (newIndex < 0) {
      const newIndex = tabs.length - 1;
      const newTab = tabs[newIndex];

      onTabClick(newTab);
      setCurrentIndex(newIndex);
      setCurrentTab(newTab);
    } else {
      const newTab = tabs[newIndex];

      onTabClick(newTab);
      setCurrentIndex(newIndex);
      setCurrentTab(newTab);
    }
  };

  const onMoveRight = () => {
    const newIndex = currentIndex + 1;

    if (newIndex === tabs.length) {
      const newTab = tabs[0];

      onTabClick(newTab);
      setCurrentIndex(0);
      setCurrentTab(newTab);
    } else {
      const newTab = tabs[newIndex];

      onTabClick(newTab);
      setCurrentIndex(newIndex);
      setCurrentTab(newTab);
    }
  };

  return (
    <ContentSliderUI
      onTabClick={onTabClick}
      currentTab={currentTab}
      tabs={tabs}
      onMoveLeft={onMoveLeft}
      onMoveRight={onMoveRight}
      iconRefs={serviceIconRefs}
    />
  );
};
