import { FC, useEffect, useRef } from "react";

import { PointUI } from "../ui/point";

import { TPointProps } from "./types";

export const Point: FC<TPointProps> = ({ current = false }) => {
  const iconRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (current)
      iconRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  return <PointUI current={current} ref={iconRef} />;
};
