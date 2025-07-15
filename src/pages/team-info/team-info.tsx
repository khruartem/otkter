import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { SEO } from "../../components/seo";
import { InfoUI } from "../../components/ui/pages/info";
import { NotFound404 } from "../not-found-404";
import { Preloader } from "../../components/ui/preloader";

import { Colors } from "../../utils/types";

import { useGetId } from "../../hooks/useGetId";
import { useGetUrlCode } from "../../hooks/useGetUrlCode";
import { useGetAdmin } from "../../hooks/useGetAdmin";
import { useGetControls } from "../../hooks/useGetControls";
import { useGetPhotos } from "../../hooks/useGetPhotos";

export const TeamInfo: FC = () => {
  const [docReadyState, setDocReadyState] = useState<DocumentReadyState | null>(
    null
  );

  const location = useLocation();

  // TODO: убрать лишние хуки, т.к. данные можно получить из объекта
  const admintId = useGetId();
  const url = useGetUrlCode();
  const admin = useGetAdmin(admintId);
  const title = admin.name;
  const extraTitle = admin.occupation;
  const text = admin?.biography || "";
  const poster = admin.image;
  const previewImg = `/preview/preview_${url}.webp`;
  // const seoImg = admin.icon;
  const isControls = useGetControls(admintId, "team", "info")?.length
    ? true
    : false;
  const isPhotos = useGetPhotos(admintId, "team") ? true : false;

  // Вывести в хук
  useEffect(() => {
    // Проброс стейта дальше или формирование
    if (location.state) {
      location.state = { ...location.state, id: admintId };
    } else {
      location.state = { id: admintId, type: "team" };
    }

    document.body.style.backgroundColor = Colors.Light60;

    setDocReadyState(document.readyState);
  }, [location, admintId]);

  return docReadyState === "complete" || docReadyState === "interactive" ? (
    title ? (
      <>
        <SEO
          title={title}
          description={text}
          siteName={title}
          url={`https://otkter.ru/team/admins/${url}`}
          previewImg={previewImg}
          // seoImg={{name: title, src: seoImg, description: title}}
        />
        <InfoUI
          type="team"
          id={admintId}
          title={title}
          extraTitle={extraTitle}
          text={text}
          poster={poster}
          isControls={isControls}
          isPhotos={isPhotos}
          isDetails={false}
          attention={false}
          isEmployees={false}
        />
      </>
    ) : (
      <NotFound404 />
    )
  ) : (
    <Preloader />
  );
};
