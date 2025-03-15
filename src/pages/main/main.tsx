import { FC, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { MainUI } from "../../components/ui/pages/main";
import { scrollToTop } from "../../utils/scrollToTop";
import { Preloader } from "../../components/ui/preloader";
import { scrollIntoElementView } from "../../utils/scrollIntoElementView";
//import { lockScroll } from "../../utils/lockScroll";
//import { clearHash } from "../../utils/clearHash";

export const Main: FC = () => {
  const location = useLocation();
  const [docReadyState, setDocReadyState] = useState<DocumentReadyState | null>(
    null
  );
  // const [isReloaded, SetReloadState] = useState<boolean>(false);

  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const teamsRef = useRef<HTMLElement>(null);
  const contactsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // window.onload = () => {
    //   location.state = null;
    // };

    switch (location.hash) {
      case "#projects":
        scrollIntoElementView(projectsRef, "smooth", "start");
        break;
      case "#services":
        scrollIntoElementView(
          servicesRef,
          location.state?.from === "services" ? "instant" : "smooth",
          "start"
        );
        break;
      case "#team":
        scrollIntoElementView(teamsRef, "smooth", "start");
        break;
      case "#contacts":
        scrollIntoElementView(contactsRef, "smooth", "center");
        break;
      case "":
        scrollToTop("instant");
        break;
    }

    setDocReadyState(document.readyState);
  }, [docReadyState, location, location.hash, location.state?.from]);

  return docReadyState ? (
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
