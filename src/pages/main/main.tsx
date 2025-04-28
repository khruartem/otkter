import { FC, useEffect, useState, useRef } from "react";
// import { useLocation } from "react-router-dom";

import { MainUI } from "../../components/ui/pages/main";
// import { scrollToTop } from "../../utils/scrollToTop";
import { Preloader } from "../../components/ui/preloader";
// import { scrollIntoElementView } from "../../utils/scrollIntoElementView";
import { Colors } from "../../utils/types";
//import { lockScroll } from "../../utils/lockScroll";
//import { clearHash } from "../../utils/clearHash";

export const Main: FC = () => {
  // const location = useLocation();
  // const hash = window.location.href.split("/");
  const [docReadyState, setDocReadyState] = useState<DocumentReadyState | null>(
    null
  );
  // const [isReloaded, SetReloadState] = useState<boolean>(false);

  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const teamsRef = useRef<HTMLElement>(null);
  const contactsRef = useRef<HTMLElement>(null);
  // TODO: Можно перенести логику прокрутки в комопнент секций
  // useEffect(() => {
  //   // window.onload = () => {
  //   //   location.state = null;
  //   // };

  //   // switch (hash[hash.length - 1]) {
  //   //   case "#about":
  //   //     scrollIntoElementView(aboutRef, "smooth", "start");
  //   //     break;
  //   //   case "#projects":
  //   //     scrollIntoElementView(projectsRef, "smooth", "start");
  //   //     break;
  //   //   case "#services":
  //   //     scrollIntoElementView(servicesRef, "smooth", "start");
  //   //     break;
  //   //   case "#team":
  //   //     scrollIntoElementView(teamsRef, "smooth", "start");
  //   //     break;
  //   //   case "#contacts":
  //   //     scrollIntoElementView(contactsRef, "smooth", "center");
  //   //     break;
  //   //   case "":
  //   //     scrollToTop("instant");
  //   //     break;
  //   // }

  //   setDocReadyState(document.readyState);
  // });

  // return docReadyState ? (
  //   <MainUI
  //     servicesRef={servicesRef}
  //     projectsRef={projectsRef}
  //     aboutRef={aboutRef}
  //     teamsRef={teamsRef}
  //     contactsRef={contactsRef}
  //   />
  // ) : (
  //   <Preloader />
  // );
  useEffect(() => {
    document.body.style.backgroundColor = Colors.Light80;
    setDocReadyState(document.readyState);
  }, []);

  return docReadyState === "complete" || docReadyState === "interactive" ? (
    <MainUI
      servicesRef={servicesRef}
      projectsRef={projectsRef}
      aboutRef={aboutRef}
      teamsRef={teamsRef}
      contactsRef={contactsRef}
    />
  ) : (
    <Preloader />
  );
};
