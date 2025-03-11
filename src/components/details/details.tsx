import { FC } from "react";

import { DetailsUI } from "../ui/details";
import { TDetailsProps } from "./types";
import { useGetInfosDetails } from "../../hooks/useGetInfosDetails";

export const Details: FC<TDetailsProps> = ({ id, infosType, detailsType }) => {
  const details = useGetInfosDetails(id, infosType, detailsType);

  return (
    <DetailsUI
      id={id}
      details={details!}
      detailsType={detailsType}
    />
  );
};
