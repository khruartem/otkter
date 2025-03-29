import { FC, useEffect, useState } from "react";

import { Preloader } from "../../components/ui/preloader";
import { AllProjectsUI } from "../../components/ui/pages/all-projects";
// import { useLocation } from "react-router-dom";

export const AllProjects: FC = () => {
  const [docReadyState, setDocReadyState] = useState<DocumentReadyState | null>(
    null
  );
  // const location = useLocation();

  useEffect(() => {
    setDocReadyState(document.readyState);
    // window.onscroll = () => window.location.hash = "";
  }, [docReadyState]);

  return docReadyState ? <AllProjectsUI /> : <Preloader />;
};
