import { FC } from "react";

import { ShowHistoryUI } from "../ui/show-history";

import { TShowHistoryProps } from "./types";

export const ShowHistory: FC<TShowHistoryProps> = ({ history, controls }) => {
  const pastShows = history.filter((item) => !item.current);
  const currentShow = history.find((item) => item.current)!;

  return (
    <ShowHistoryUI
      pastShows={pastShows}
      currentShow={currentShow}
      controls={controls}
    />
  );
};
