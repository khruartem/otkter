//import React from "react";
import { TServiceRef, TServicesTabMode, TTitleServiceRef } from "../../../../utils/types";

export type TServicesUIProps = {
  currentTab: TServicesTabMode;
  onTabClick: (tab: TServicesTabMode) => void;
  // titleOpenSeaRef: React.RefObject<HTMLHeadingElement>;
  // titleEventsRef: React.RefObject<HTMLHeadingElement>;
  // titleDesignRef: React.RefObject<HTMLHeadingElement>;
  // titleContenRef: React.RefObject<HTMLHeadingElement>;
  // titleMasterClassRef: React.RefObject<HTMLHeadingElement>;
  // titleLampRef: React.RefObject<HTMLHeadingElement>;
  // titleSmmRef: React.RefObject<HTMLHeadingElement>;
  // openSeaRef: (node?: Element | null) => void;
  // eventsRef: (node?: Element | null) => void;
  // designRef: (node?: Element | null) => void;
  // contenRef: (node?: Element | null) => void;
  // masterClassRef: (node?: Element | null) => void;
  // lampRef: (node?: Element | null) => void;
  // smmRef: (node?: Element | null) => void;
  sectionRef: React.RefObject<HTMLElement>;
  titleRefs: TTitleServiceRef[];
  refs: TServiceRef[];
};
