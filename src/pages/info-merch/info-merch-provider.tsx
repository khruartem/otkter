import { FC } from "react";

import { InfoMerchContext } from "./info-merch-context";

import { TInfoMerchProviderProps } from "./types";

export const InfoMerchProvider: FC<TInfoMerchProviderProps> = ({
  value,
  children,
}) => {
  return (
    <InfoMerchContext.Provider value={value}>
      {children}
    </InfoMerchContext.Provider>
  );
};
