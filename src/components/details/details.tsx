import { FC } from "react";

//import { useGetDetails } from "../../hooks/useGetDetails";
import { DetailsUI } from "../ui/details";
import { TDetailsProps } from "./types";
import { useGetInfosDetails } from "../../hooks/useGetInfosDetails";

export const Details: FC<TDetailsProps> = ({ id, infosType, detailsType }) => {
  const details = useGetInfosDetails(id, infosType, detailsType);

  // const projectId = useGetProjectId();
  // const details = useGetDetails(projectId, type);

  return (
    <DetailsUI
      id={id}
      details={details!}
      detailsType={detailsType}
    />
  );
};
