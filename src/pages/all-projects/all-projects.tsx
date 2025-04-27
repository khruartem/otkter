import { FC, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

import { Preloader } from "../../components/ui/preloader";
import { AllProjectsUI } from "../../components/ui/pages/all-projects";
import { Colors } from "../../utils/types";

export const AllProjects: FC = () => {
  // const location = useLocation();
  const [docReadyState, setDocReadyState] = useState<DocumentReadyState | null>(
    null
  );

  useEffect(() => {
    setDocReadyState(document.readyState);
    // window.onscroll = () => window.location.hash = "";
    document.body.style.backgroundColor = Colors.Light60;
    // return () => {
    //   document.body.style.backgroundColor = Colors.Light80;
    // };
    
  }, [docReadyState]);

  return docReadyState ? <AllProjectsUI /> : <Preloader />;
};
