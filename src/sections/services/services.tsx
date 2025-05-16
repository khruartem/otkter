import { FC, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { SliderSectionUI } from "../../components/ui/sections/slider-section";

import { TServiceRef, TServiceViewRef } from "../../utils/types";

export const Services: FC = () => {
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
    threshold: 0,
  });
  const [eventsViewRef, inViewEvents] = useInView({
    threshold: 0,
  });
  const [designViewRef, inViewDesign] = useInView({
    threshold: 0,
  });
  const [contenViewRef, inViewContent] = useInView({
    threshold: 0,
  });
  const [masterClassViewRef, inViewMasterClass] = useInView({
    threshold: 0,
  });
  const [lampViewRef, inViewLamp] = useInView({
    threshold: 0,
  });
  const [smmViewRef, inViewSmm] = useInView({
    threshold: 0,
  });

  const servicesViewRefs: TServiceViewRef[] = [
    {
      ref: openSeaViewRef,
      inView: inViewOpenSea,
      type: "open-sea",
    },
    {
      ref: eventsViewRef,
      inView: inViewEvents,
      type: "events",
    },
    {
      ref: designViewRef,
      inView: inViewDesign,
      type: "design",
    },
    {
      ref: contenViewRef,
      inView: inViewContent,
      type: "content",
    },
    {
      ref: masterClassViewRef,
      inView: inViewMasterClass,
      type: "master-class",
    },
    {
      ref: lampViewRef,
      inView: inViewLamp,
      type: "lamp",
    },
    {
      ref: smmViewRef,
      inView: inViewSmm,
      type: "smm",
    },
  ];

  return (
    <SliderSectionUI
      id={"services"}
      type={"services"}
      sectionRefs={servicesRefs}
      sectionViewRefs={servicesViewRefs}
    />
  );
};
