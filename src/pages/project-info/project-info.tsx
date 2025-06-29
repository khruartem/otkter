import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { InfoUI } from "../../components/ui/pages/info";
import { Preloader } from "../../components/ui/preloader";
import { NotFound404 } from "../not-found-404";
import { SEO } from "../../components/seo";

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
import { useGetUrlCode } from "../../hooks/useGetUrlCode";
import { useGetPreviewImage } from "../../hooks/useGetPreviewImage";
import { useGetProjectType } from "../../hooks/useGetProjectType";
import { useGetProjectShortText } from "../../hooks/useGetProjectShortText";

export const ProjectInfo: FC = () => {
  const [docReadyState, setDocReadyState] = useState<DocumentReadyState | null>(
    null
  );

  const location = useLocation();

  const projectId = useGetId();
  const url = useGetUrlCode();
  const title = useGetTitle(projectId);
  const text = useGetText(projectId);
  const shortText = useGetProjectShortText(projectId);
  const type = useGetProjectType(projectId);
  const poster = useGetPoster(projectId, "projects");
  const previewImg = useGetPreviewImage(projectId, "projects");
  const attention = useGetAttention(projectId);
  const { projectTitleColorAttention } = useGetProjectColors();
  const isEmployees = useGetIsEmployees(projectId);
  const controls = useGetControls(projectId, "projects", "info");
  const isControls = controls?.length ? true : false;
  const isPhotos = useGetPhotos(projectId, "projects") ? true : false;
  const isDetails = (
    useGetInfosDetails(projectId, "projects", "events") as TEventDetails[]
  )?.length
    ? true
    : false;
  const isMain = useGetProjectIsMain(projectId);

  // Вывести в хук
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
      <>
        <SEO
          title={title}
          ogTitle={type}
          description={shortText}
          siteName={title}
          url={`https://otkter.ru/projects/${url}`}
          previewImg={previewImg}
        />
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
      </>
    ) : (
      <NotFound404 />
    )
  ) : (
    <Preloader />
  );
};
