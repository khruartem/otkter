import { FC } from "react";

import { ShowHistoryUI } from "../ui/show-history";

import { TShowHistoryProps } from "./types";
import { useGetItemOTByUrl } from "../../hooks/useGetItemOTByUrl";

export const ShowHistory: FC<TShowHistoryProps> = ({ history }) => {
  const pastShows = history.filter((item) => !item.current);
  const currentShow = history.find((item) => item.current)!;

  const itemOT = useGetItemOTByUrl();
  const controls = itemOT?.controls || [];

  return (
    <ShowHistoryUI
      pastShows={pastShows}
      currentShow={currentShow}
      controls={controls}
    />
  );
};
