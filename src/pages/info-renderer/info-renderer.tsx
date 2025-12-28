import { FC } from "react";

import { Info } from "../info";
import { NotFound404 } from "../not-found-404";

import { TInfoRendererProps } from "./types";

export const InfoRenderer: FC<TInfoRendererProps> = ({
  items,
  currentItem,
}) => {
  return currentItem ? (
    <Info items={items} currentItem={currentItem} />
  ) : (
    <NotFound404 />
  );
};
