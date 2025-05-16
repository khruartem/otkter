import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { InfoUI } from "../../components/ui/pages/info";
import { Preloader } from "../../components/ui/preloader";
import { NotFound404 } from "../not-found-404";

import { Colors, TEventDetails } from "../../utils/types";
import { useGetTitle } from "../../hooks/useGetTitle";
import { useGetText } from "../../hooks/useGetText";
import { useGetId } from "../../hooks/useGetId";
import { useGetProjectColors } from "../../hooks/useGetProjectColors";
import { useGetAttention } from "../../hooks/useGetAttention";
import { useGetIsEmployees } from "../../hooks/useGetIsEmployees";
import { useGetControls } from "../../hooks/useGetControls";
import { useGetPoster } from "../../hooks/useGetPoster";
import { useGetPhotos } from "../../hooks/useGetPhotos";
import { useGetInfosDetails } from "../../hooks/useGetInfosDetails";
import { useGetProjectIsMain } from "../../hooks/useGetProjectIsMain";

export const ProjectInfo: FC = () => {
  const [docReadyState, setDocReadyState] = useState<DocumentReadyState | null>(
    null
  );

  const location = useLocation();

  const projectId = useGetId();
  const title = useGetTitle(projectId);
  const text = useGetText(projectId);
  const poster = useGetPoster(projectId, "projects");
  const attention = useGetAttention(projectId);
  const { projectTitleColorAttention } = useGetProjectColors();
  const isEmployees = useGetIsEmployees(projectId);
  const controls = useGetControls(projectId, "projects");
  const isControls =
    controls?.buttons.length || controls?.links.length ? true : false;
  const isPhotos = useGetPhotos(projectId, "projects") ? true : false;
  const isDetails = (
    useGetInfosDetails(projectId, "projects", "events") as TEventDetails[]
  )?.length
    ? true
    : false;
  const isMain = useGetProjectIsMain(projectId);

  useEffect(() => {
    // Проброс стейта дальше или формирование
    if (location.state) {
      location.state = { ...location.state, id: isMain ? projectId : 0 };
    } else {
      location.state = { id: isMain ? projectId : 0, type: "project" };
    }

    document.body.style.backgroundColor = Colors.Light60;

    setDocReadyState(document.readyState);
  }, [isMain, location, projectId]);

  return docReadyState === "complete" || docReadyState === "interactive" ? (
    title ? (
      <InfoUI
        type="projects"
        id={projectId}
        title={title}
        text={text}
        poster={poster}
        attention={attention}
        colorAttention={projectTitleColorAttention}
        isEmployees={isEmployees}
        isControls={isControls}
        isPhotos={isPhotos}
        isDetails={isDetails}
      />
    ) : (
      <NotFound404 />
    )
  ) : (
    <Preloader />
  );
};
