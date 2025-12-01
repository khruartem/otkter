import { FC } from "react";

import { TPaginatorUIProps } from "./types";

import { PaginatorUI } from "../ui/paginator";

export const Paginator: FC<TPaginatorUIProps> = ({
  index,
  length,
  defaultLength,
  color,
  currentColor,
  className,
}) => {
  const points: boolean[] = new Array(
    length === Infinity ? defaultLength : length
  );
  points.fill(false);
  points[index] = true;

  return (
    <PaginatorUI
      points={points}
      className={className}
      color={color}
      currentColor={currentColor}
    />
  );
};
