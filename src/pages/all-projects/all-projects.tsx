import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Preloader } from "../../components/ui/preloader";
import { AllProjectsUI } from "../../components/ui/pages/all-projects";
// import { Colors } from "../../utils/types";
import { SEO } from "../../components/seo";

export const AllProjects: FC = () => {
  const location = useLocation();
  const [docReadyState, setDocReadyState] = useState<DocumentReadyState | null>(
    null
  );

  useEffect(() => {
    location.state = { id: 0, type: "project" };
    setDocReadyState(document.readyState);
    // document.body.style.backgroundColor = Colors.Light60;
  }, [docReadyState, location]);

  return docReadyState ? (
    <>
      <SEO
        title={"Все проекты"}
        description={"Все проекты Открытой территориии."}
        siteName={"Все проекты"}
        url={`https://otkter.ru/projects/all`}
        previewImg={"/preview/preview.webp"}
      />
      <AllProjectsUI />
    </>
  ) : (
    <Preloader />
  );
};
