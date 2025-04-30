import { FC, useEffect, useState, useRef } from "react";

import { MainUI } from "../../components/ui/pages/main";
import { Preloader } from "../../components/ui/preloader";

import { Colors } from "../../utils/types";

export const Main: FC = () => {
  const [docReadyState, setDocReadyState] = useState<DocumentReadyState | null>(
    null
  );

  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const teamsRef = useRef<HTMLElement>(null);
  const contactsRef = useRef<HTMLElement>(null);
  
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
