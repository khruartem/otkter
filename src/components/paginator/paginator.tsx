import { FC } from "react";

import { TPaginatorUIProps } from "./types";

import { PaginatorUI } from "../ui/paginator";

export const Paginator: FC<TPaginatorUIProps> = ({ index, length }) => {
  const points: boolean[] = new Array(length);
  points.fill(false);
  points[index] = true;

  return <PaginatorUI points={points} />;
};
