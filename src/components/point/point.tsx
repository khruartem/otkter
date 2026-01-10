import { FC, useEffect } from "react";

import { PointUI } from "../ui/point";

import { TPointProps } from "./types";
import { usePaginatorContext } from "../../hooks/contexts/usePaginatorContext";

export const Point: FC<TPointProps> = ({ current }) => {
  const { paginatorRef, index, length } = usePaginatorContext();

  useEffect(() => {
    if (current && index === 0 && paginatorRef?.current) {
      paginatorRef.current.scrollLeft -= 4;
    }

    if (current && index === length - 1 && paginatorRef?.current) {
      paginatorRef.current.scrollLeft += 4;
    }
  });

  return <PointUI current={current} />;
};
