import { FC } from "react";

import { NotFound404 } from "../not-found-404";

import { TInfoRendererProps } from "./types";

export const InfoRenderer: FC<TInfoRendererProps> = ({
  items,
  currentItem,
  render,
}) => {
  return currentItem ? render(items, currentItem) : <NotFound404 />;
};
