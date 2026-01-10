import { FC, ReactNode } from "react";

import { PaginatorContext } from "./paginator-context";

import { TPaginatorContextValue } from "./types";

type TPaginatorProviderProps = {
  children: ReactNode;
  value: TPaginatorContextValue;
};

export const PaginatorProvider: FC<TPaginatorProviderProps> = ({
  value,
  children,
}) => {
  return (
    <PaginatorContext.Provider value={value}>
      {children}
    </PaginatorContext.Provider>
  );
};
