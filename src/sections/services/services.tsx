import { FC, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import {
  TServiceIconRef,
  TServiceRef,
  TServicesTabMode,
  TServiceViewRef,
} from "../../utils/types";
import { scrollIntoElementView } from "../../utils/scrollIntoElementView";

import { ServicesUI } from "../../components/ui/sections/services";
import { TSectionProps } from "../types";
import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";
//import clsx from "clsx";
import { lockScroll } from "../../utils/lockScroll";

export const Services: FC<TSectionProps> = ({ sectionRef }) => {
  // const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
  //   useGetMediaQuery();
  const { isLaptop, isTablet, isMobile } =
  useGetMediaQuery();
  const smallResolution = isLaptop || isTablet || isMobile;

  const [currentTab, setCurrentTab] = useState<TServicesTabMode>("open-sea");

  const openSeaRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const contenRef = useRef<HTMLDivElement>(null);
  const masterClassRef = useRef<HTMLDivElement>(null);
  const lampRef = useRef<HTMLDivElement>(null);
  const smmRef = useRef<HTMLDivElement>(null);

  const servicesRefs: TServiceRef[] = [
    {
      ref: openSeaRef,
      type: "open-sea",
    },
    {
      ref: eventsRef,
      type: "events",
    },
    {
      ref: designRef,
      type: "design",
    },
    {
      ref: contenRef,
      type: "content",
    },
    {
      ref: masterClassRef,
      type: "master-class",
    },
    {
      ref: lampRef,
      type: "lamp",
    },
    {
      ref: smmRef,
      type: "smm",
    },
  ];

  const [openSeaViewRef, inViewOpenSea] = useInView({
    threshold: smallResolution ? 0.5 : 1,
  });
  const [eventsViewRef, inViewEvents] = useInView({
    threshold: smallResolution ? 0.5 : [0, 1],
  });
  const [designViewRef, inViewDesign] = useInView({
    threshold: smallResolution ? 0.5 : [0, 1],
  });
  const [contenViewRef, inViewContent] = useInView({
    threshold: smallResolution ? 0.5 : [0, 1],
  });
  const [masterClassViewRef, inViewMasterClass] = useInView({
    threshold: smallResolution ? 0.5 : 1,
  });
  const [lampViewRef, inViewLamp] = useInView({
    threshold: smallResolution ? 0.5 : [0, 1],
  });
  const [smmViewRef, inViewSmm] = useInView({
    threshold: smallResolution ? 0.5 : 1,
  });

  const servicesViewRefs: TServiceViewRef[] = [
    {
      ref: openSeaViewRef,
      type: "open-sea",
    },
    {
      ref: eventsViewRef,
      type: "events",
    },
    {
      ref: designViewRef,
      type: "design",
    },
    {
      ref: contenViewRef,
      type: "content",
    },
    {
      ref: masterClassViewRef,
      type: "master-class",
    },
    {
      ref: lampViewRef,
      type: "lamp",
    },
    {
      ref: smmViewRef,
      type: "smm",
    },
  ];

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

  useEffect(() => {
    if (inViewOpenSea) {
      setCurrentTab("open-sea");
      if (isMobile) scrollIntoElementView(openSeaIconRef, "smooth", "nearest");
      //console.log("open-sea")
    } else if (inViewEvents) {
      setCurrentTab("events");
      if (isMobile) scrollIntoElementView(eventsIconRef, "smooth", "nearest");
      // console.log("events")
    } else if (inViewDesign) {
      setCurrentTab("design");
      if (isMobile) scrollIntoElementView(designIconRef, "smooth", "nearest");
      // console.log("design")
    } else if (inViewContent) {
      setCurrentTab("content");
      if (isMobile) scrollIntoElementView(contenIconRef, "smooth", "nearest");
      // console.log("content")
    } else if (inViewMasterClass) {
      setCurrentTab("master-class");
      if (isMobile)
        scrollIntoElementView(masterClassIconRef, "smooth", "nearest");
      // console.log("master-class")
    } else if (inViewLamp) {
      setCurrentTab("lamp");
      if (isMobile) scrollIntoElementView(lampIconRef, "smooth", "nearest");
      // console.log("lamp")
    } else if (inViewSmm) {
      setCurrentTab("smm");
      if (isMobile) scrollIntoElementView(smmIconRef, "smooth", "nearest");
      // console.log("smm")
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
    isLaptop,
  ]);

  const onTabClick = (tab: TServicesTabMode) => {
    setCurrentTab(tab);
    switch (tab) {
      case "open-sea":
        scrollIntoElementView(
          openSeaRef,
          "smooth",
          isMobile ? "center" : "end"
        );
        lockScroll();
        break;
      case "events":
        scrollIntoElementView(eventsRef, "smooth", isMobile ? "center" : "end");
        lockScroll();
        break;
      case "design":
        scrollIntoElementView(designRef, "smooth", isMobile ? "center" : "end");
        lockScroll();
        break;
      case "content":
        scrollIntoElementView(contenRef, "smooth", isMobile ? "center" : "end");
        lockScroll();
        break;
      case "master-class":
        scrollIntoElementView(
          masterClassRef,
          "smooth",
          isMobile ? "center" : "end"
        );
        lockScroll();
        break;
      case "lamp":
        scrollIntoElementView(lampRef, "smooth", isMobile ? "center" : "end");
        lockScroll();
        break;
      case "smm":
        scrollIntoElementView(smmRef, "smooth", isMobile ? "center" : "end");
        lockScroll();
        break;
    }
  };

  return (
    // <ServicesUI
    //   currentTab={currentTab}
    //   onTabClick={onTabClick}
    //   titleOpenSeaRef={titleOpenSeaRef}
    //   titleEventsRef={titleEventsRef}
    //   titleDesignRef={titleDesignRef}
    //   titleContenRef={titleContenRef}
    //   titleMasterClassRef={titleMasterClassRef}
    //   titleLampRef={titleLampRef}
    //   titleSmmRef={titleSmmRef}
    //   openSeaRef={openSeaRef}
    //   eventsRef={eventsRef}
    //   designRef={designRef}
    //   contenRef={contenRef}
    //   masterClassRef={masterClassRef}
    //   lampRef={lampRef}
    //   smmRef={smmRef}
    // />
    <ServicesUI
      currentTab={currentTab}
      onTabClick={onTabClick}
      sectionRef={sectionRef}
      servicesRefs={servicesRefs}
      servicesViewRefs={servicesViewRefs}
      serviceIconRefs={serviceIconRefs}
    />
  );
};
