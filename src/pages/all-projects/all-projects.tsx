import { FC, useEffect, useState } from "react";

import { Preloader } from "../../components/ui/preloader";
import { AllProjectsUI } from "../../components/ui/pages/all-projects";
import { Colors } from "../../utils/types";
// import { useLocation } from "react-router-dom";

export const AllProjects: FC = () => {
  const [docReadyState, setDocReadyState] = useState<DocumentReadyState | null>(
    null
  );
  // const location = useLocation();

  useEffect(() => {
    setDocReadyState(document.readyState);
    // window.onscroll = () => window.location.hash = "";
    document.body.style.backgroundColor = Colors.Light60;

    return () => {
      document.body.style.backgroundColor = Colors.Light80;
    };
    
  }, [docReadyState]);

  return docReadyState ? <AllProjectsUI /> : <Preloader />;
};
