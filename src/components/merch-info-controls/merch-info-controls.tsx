import { FC } from "react";

import { Controls } from "../controls";

import { useInfoMerchContext } from "../../hooks/contexts/useInfoMerchContext";

export const MerchInfoControls: FC = () => {
  const { currentItem } = useInfoMerchContext();

  return (
    currentItem?.controls && (
      <Controls controls={currentItem.controls} kind={"merch"} />
    )
  );
};
