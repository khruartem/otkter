import React from "react";

export const scrollIntoElementView = (
  elementRef: React.RefObject<HTMLAnchorElement | HTMLElement> | undefined,
  behavior: ScrollBehavior,
  block?: ScrollLogicalPosition
) => {
  elementRef?.current?.scrollIntoView({ block, behavior });
};
