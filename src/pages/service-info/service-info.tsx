import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { InfoUI } from "../../components/ui/pages/info";
import { Preloader } from "../../components/ui/preloader";
import { NotFound404 } from "../not-found-404";
import { SEO } from "../../components/seo";

import { Colors, TEventDetails } from "../../utils/types";
import { useGetControls } from "../../hooks/delete/useGetControls";
import { useGetId } from "../../hooks/useGetId";
import { useGetInfosIsEmployees } from "../../hooks/useGetInfosIsEmployees";
import { useGetInfosText } from "../../hooks/useGetInfosText";
import { useGetServiceTitle } from "../../hooks/useGetServiceTitle";
import { useGetPhotos } from "../../hooks/delete/useGetPhotos";
import { useGetInfosDetails } from "../../hooks/delete/useGetInfosDetails";
import { useGetPoster } from "../../hooks/delete/useGetPoster";
import { useGetPreviewImage } from "../../hooks/delete/useGetPreviewImage";
import { useGetUrlCode } from "../../hooks/useGetUrlCode";
import { useGetServiceShortText } from "../../hooks/useGetServiceShortText";
// import { useGetService } from "../../hooks/useGetService";

export const ServiceInfo: FC = () => {
  const [docReadyState, setDocReadyState] = useState<DocumentReadyState | null>(
    null
  );
  const location = useLocation();

  const serviceId = useGetId();
  const url = useGetUrlCode();
  const title = useGetServiceTitle(serviceId);
  const shortText = useGetServiceShortText(serviceId);
  const text = useGetInfosText(serviceId, "services");
  const poster = useGetPoster(serviceId, "services");
  const previewImg = useGetPreviewImage(serviceId, "services");
  // const seoImg = useGetService(serviceId)?.icon;
  const isEmployees = useGetInfosIsEmployees(serviceId, "services");
  const controls = useGetControls(serviceId, "services", "info");
  const isControls = controls?.length ? true : false;
  const isPhotos = useGetPhotos(serviceId, "services") ? true : false;
  const isDetails = (
    useGetInfosDetails(serviceId, "services", "services") as TEventDetails[]
  )?.length
    ? true
    : false;

  useEffect(() => {
    location.state = { id: serviceId, type: "services" };

    document.body.style.backgroundColor = Colors.Light60;

    setDocReadyState(document.readyState);
  }, [location, serviceId]);

  return docReadyState === "complete" || docReadyState === "interactive" ? (
    title ? (
      <>
        <SEO
          title={title}
          ogTitle={"Услуга"}
          description={shortText}
          siteName={title}
          url={`https://otkter.ru/projects/${url}`}
          previewImg={previewImg}
          // seoImg={{name: title, src: seoImg || "", description: shortText}}
        />
        <InfoUI
          type="services"
          id={serviceId}
          title={title}
          text={text}
          poster={poster}
          attention={false}
          colorAttention={undefined}
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
