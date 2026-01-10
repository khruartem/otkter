import { FC } from "react";

import { PageContext } from "./page-context";

import { TPageProviderProps } from "./type";

export const PageProvider: FC<TPageProviderProps> = ({ value, children }) => {
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
