import { FC } from "react";

import { DetailsGrid } from "../details-grid";

import { useInfoContext } from "../../hooks/contexts/useInfoContext";

export const InfoDetails: FC = () => {
  const { currentItem } = useInfoContext();

  return (
    currentItem?.details && (
      <DetailsGrid
        details={currentItem.details}
        categories={currentItem.categories}
        kind={currentItem.kind}
      />
    )
  );
};
