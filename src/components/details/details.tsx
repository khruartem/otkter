import { FC } from "react";

import { useGetDetails } from "../../hooks/useGetDetails";
import { useGetProjectId } from "../../hooks/useGetProjectId";
import { DetailsUI } from "../ui/details";
import { TDetailsProps } from "./types";

export const Details: FC<TDetailsProps> = ({ type }) => {
  const projectId = useGetProjectId();
  const details = useGetDetails(projectId, type);

  return <DetailsUI projectId={projectId} details={details!} type={type} />;
};
