import { FC, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { MainUI } from "../../components/ui/pages/main";
//import { renderToTop } from "../../utils/renderToTop";
import { Preloader } from "../../components/ui/preloader";

export const Main: FC = () => {
  const location = useLocation();
  const [docReadyState, setDocReadyState] = useState("");

  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // console.log(location.state);
    // switch (location.hash) {
    //   case "#projects":
    //     projectsRef.current?.scrollIntoView({ behavior: "instant" });
    //     break;
    //   default:
    //     renderToTop();
    //     break;
    // }
    setDocReadyState(document.readyState);
  }, [docReadyState, location.hash, location.state]);

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
