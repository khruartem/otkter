import { FC, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import {
  TServiceRef,
  TServicesTabMode,
  TTitleServiceRef,
} from "../../utils/types";
import { scrollIntoElementView } from "../../utils/scrollIntoElementView";

import { ServicesUI } from "../../components/ui/sections/services";
import { TSectionProps } from "../types";

export const Services: FC<TSectionProps> = ({ sectionRef }) => {
  const [currentTab, setCurrentTab] = useState<TServicesTabMode>("open-sea");

  const titleOpenSeaRef = useRef<HTMLHeadingElement>(null);
  const titleEventsRef = useRef<HTMLHeadingElement>(null);
  const titleDesignRef = useRef<HTMLHeadingElement>(null);
  const titleContenRef = useRef<HTMLHeadingElement>(null);
  const titleMasterClassRef = useRef<HTMLHeadingElement>(null);
  const titleLampRef = useRef<HTMLHeadingElement>(null);
  const titleSmmRef = useRef<HTMLHeadingElement>(null);

  const titleServiceRefs: TTitleServiceRef[] = [
    {
      ref: titleOpenSeaRef,
      type: "open-sea",
    },
    {
      ref: titleEventsRef,
      type: "events",
    },
    {
      ref: titleDesignRef,
      type: "design",
    },
    {
      ref: titleContenRef,
      type: "content",
    },
    {
      ref: titleMasterClassRef,
      type: "master-class",
    },
    {
      ref: titleLampRef,
      type: "lamp",
    },
    {
      ref: titleSmmRef,
      type: "smm",
    },
  ];

  const [openSeaRef, inViewOpenSea] = useInView({
    threshold: 0,
  });
  const [eventsRef, inViewEvents] = useInView({
    threshold: 0,
  });
  const [designRef, inViewDesign] = useInView({
    threshold: 0,
  });
  const [contenRef, inViewContent] = useInView({
    threshold: 0,
  });
  const [masterClassRef, inViewMasterClass] = useInView({
    threshold: 0,
  });
  const [lampRef, inViewLamp] = useInView({
    threshold: 0,
  });
  const [smmRef, inViewSmm] = useInView({
    threshold: 0,
  });
  const serviceRefs: TServiceRef[] = [
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

  useEffect(() => {
    if (inViewOpenSea) {
      setCurrentTab("open-sea");
    } else if (inViewEvents) {
      setCurrentTab("events");
    } else if (inViewDesign) {
      setCurrentTab("design");
    } else if (inViewContent) {
      setCurrentTab("content");
    } else if (inViewMasterClass) {
      setCurrentTab("master-class");
    } else if (inViewLamp) {
      setCurrentTab("lamp");
    } else if (inViewSmm) {
      setCurrentTab("smm");
    }
  }, [
    inViewOpenSea,
    inViewEvents,
    inViewDesign,
    inViewContent,
    inViewMasterClass,
    inViewLamp,
    inViewSmm,
  ]);

  const onTabClick = (tab: TServicesTabMode) => {
    setCurrentTab(tab);
    switch (tab) {
      case "open-sea":
        scrollIntoElementView(titleOpenSeaRef, "smooth", "center");
        break;
      case "events":
        scrollIntoElementView(titleEventsRef, "smooth", "center");
        break;
      case "design":
        scrollIntoElementView(titleDesignRef, "smooth", "center");
        break;
      case "content":
        scrollIntoElementView(titleContenRef, "smooth", "center");
        break;
      case "master-class":
        scrollIntoElementView(titleMasterClassRef, "smooth", "center");
        break;
      case "lamp":
        scrollIntoElementView(titleLampRef, "smooth", "center");
        break;
      case "smm":
        scrollIntoElementView(titleSmmRef, "smooth", "center");
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
      titleRefs={titleServiceRefs}
      refs={serviceRefs}
    />
  );
};
