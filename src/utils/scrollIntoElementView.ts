import React from "react";

export const scrollIntoElementView = (
  cardRef: React.RefObject<HTMLAnchorElement | HTMLElement>
) => {
  cardRef.current?.scrollIntoView({ behavior: "instant" });
  window.scrollTo({
    top: window.scrollY - 70,
    behavior: "instant",
  });
};