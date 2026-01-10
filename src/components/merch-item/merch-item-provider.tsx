import { FC } from "react";
import { TMerchItemProvider } from "./types";
import { MerchItemContext } from "./merch-item-context";

export const MerchItemProvider: FC<TMerchItemProvider> = ({
  value,
  children,
}) => {
  return (
    <MerchItemContext.Provider value={value}>
      {children}
    </MerchItemContext.Provider>
  );
};
