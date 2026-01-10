import { FC, useRef } from "react";

import { TPaginatorContextValue, TPaginatorUIProps } from "./types";

import { PaginatorUI } from "../ui/paginator";
import { PaginatorProvider } from "./paginator-provider";

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

  const paginatorRef = useRef<HTMLUListElement>(null);

  const paginatorContextValue: TPaginatorContextValue = {
    paginatorRef,
    index,
    length,
  };

  return (
    <PaginatorProvider value={paginatorContextValue}>
      <PaginatorUI
        points={points}
        className={className}
        color={color}
        currentColor={currentColor}
        ref={paginatorRef}
      />
    </PaginatorProvider>
  );
};
