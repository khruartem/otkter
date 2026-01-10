import { FC } from "react";

import { PhotoListContext } from "./photo-list-context";

import { TPhotoListProvider } from "./types";

export const PhotoListProvider: FC<TPhotoListProvider> = ({
  value,
  children,
}) => {
  return (
    <PhotoListContext.Provider value={value}>
      {children}
    </PhotoListContext.Provider>
  );
};
