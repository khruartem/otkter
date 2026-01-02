import { FC } from "react";
import { InfoContext } from "./info-context";
import { TInfoProviderProps } from "./types";

export const InfoProvider: FC<TInfoProviderProps> = ({ value, children }) => {
  return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
};
