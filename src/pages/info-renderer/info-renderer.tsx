import { FC } from "react";

import { NotFound404 } from "../not-found-404";

import { TInfoRendererProps } from "./types";

export const InfoRenderer: FC<TInfoRendererProps> = ({
  currentItem,
  render,
}) => {
  return currentItem ? render(currentItem) : <NotFound404 />;
};
