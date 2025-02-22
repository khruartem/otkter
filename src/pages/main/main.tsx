import { FC, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { MainUI } from "../../components/ui/pages/main";
import { scrollToTop } from "../../utils/scrollToTop";
import { Preloader } from "../../components/ui/preloader";
import { scrollIntoElementView } from "../../utils/scrollIntoElementView";

export const Main: FC = () => {
  const location = useLocation();
  const [docReadyState, setDocReadyState] = useState<DocumentReadyState | null>(null);

  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    switch (location.hash) {
      case "#projects":
        scrollIntoElementView(projectsRef)
        break;
      default:
        scrollToTop("smooth");
        break;
    }
    setDocReadyState(document.readyState);
  }, [docReadyState, location.hash]);

  return docReadyState ? (
    <MainUI
      servicesRef={servicesRef}
      projectsRef={projectsRef}
      aboutRef={aboutRef}
    />
  ) : (
    <Preloader />
  );
};
