// import { FC, useEffect, useRef, useState } from "react";
// import { useInView } from "react-intersection-observer";
// import { TServicesTabMode } from "../../utils/types";
// import { scrollIntoElementView } from "../../utils/scrollIntoElementView";

// export const ServiceList: FC = () => {
//   const [currentTab, setCurrentTab] = useState<TServicesTabMode>("open-sea");

//   const titleOpenSeaRef = useRef<HTMLHeadingElement>(null);
//   const titleEventsRef = useRef<HTMLHeadingElement>(null);
//   const titleDesignRef = useRef<HTMLHeadingElement>(null);
//   const titleContenRef = useRef<HTMLHeadingElement>(null);
//   const titleMasterClassRef = useRef<HTMLHeadingElement>(null);
//   const titleLampRef = useRef<HTMLHeadingElement>(null);
//   const titleSmmRef = useRef<HTMLHeadingElement>(null);

//   const titleServiceRefs: HTMLHeadingElement[];

//   const [openSeaRef, inViewOpenSea] = useInView({
//     threshold: 0
//   });
//   const [eventsRef, inViewEvents] = useInView({
//     threshold: 0
//   }); 
//   const [designRef, inViewDesign] = useInView({
//     threshold: 0
//   }); 
//   const [contenRef, inViewContent] = useInView({
//     threshold: 0
//   }); 
//   const [masterClassRef, inViewMasterClass] = useInView({
//     threshold: 0
//   }); 
//   const [lampRef, inViewLamp] = useInView({
//     threshold: 0
//   }); 
//   const [smmRef, inViewSmm] = useInView({
//     threshold: 0
//   });

//   useEffect(() => {
//     if (inViewOpenSea) {
//       setCurrentTab("open-sea");
//     } else if (inViewEvents) {
//       setCurrentTab("events");
//     } else if (inViewDesign) {
//       setCurrentTab("design");
//     } else if (inViewContent) {
//       setCurrentTab("content");
//     } else if (inViewMasterClass) {
//       setCurrentTab("master-class");
//     } else if (inViewLamp) {
//       setCurrentTab("lamp");
//     } else if (inViewSmm) {
//       setCurrentTab("smm");
//     }
//   }, [inViewOpenSea, inViewEvents, inViewDesign, inViewContent, inViewMasterClass, inViewLamp, inViewSmm]);

//   const onTabClick = (tab: TServicesTabMode) => {
//     setCurrentTab(tab);
//     switch (tab) {
//       case "open-sea":
//         scrollIntoElementView(titleOpenSeaRef);
//         break;
//       case "events":
//         scrollIntoElementView(titleEventsRef);
//         break;
//       case "design":
//         scrollIntoElementView(titleDesignRef);
//         break;
//       case "content":
//         scrollIntoElementView(titleContenRef);
//         break;
//       case "master-class":
//         scrollIntoElementView(titleMasterClassRef);
//         break;
//       case "lamp":
//         scrollIntoElementView(titleLampRef);
//         break;
//       case "smm":
//         scrollIntoElementView(titleSmmRef);
//         break;
//     }
//   };
  
//   return (
//     <ServiceListUI
//       currentTab={currentTab}
//       titleOpenSeaRef={}
//       titleEventsRef={}
//       titleDesignRef={}
//       titleContenRef={}
//       titleMasterClassRef={}
//       titleLampRef={}
//       titleSmmRef={}
//     />
//   );
// }