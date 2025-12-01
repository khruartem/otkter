import { FC } from "react";

import { DetailsUI } from "../ui/details";
import { TDetailsProps } from "./types";
import { useGetInfosDetails } from "../../hooks/delete/useGetInfosDetails";

export const Details: FC<TDetailsProps> = ({ id, infosType, detailsType }) => {
  // TODO: Сейчас Details содержит 1 блок, переделать так, чтобы компонент содержал сразу множество блоков
  const details = useGetInfosDetails(id, infosType, detailsType);

  return (
    <DetailsUI
      id={id}
      details={details!}
      detailsType={detailsType}
    />
  );
};
