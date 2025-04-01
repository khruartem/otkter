import { FC } from "react";

import { ControlsUI } from "../ui/controls";
import { useGetControls } from "../../hooks/useGetControls";
import { TControlsProps } from "./types";
import { useGetId } from "../../hooks/useGetId";

export const Controls: FC<TControlsProps> = ({ id, type }) => {
  const controls = useGetControls(id, type);
  const isExtraLink = (useGetId() === 1 && type === "services") ? true : false;

  return (
    <ControlsUI
      buttons={controls?.buttons}
      links={controls?.links}
      isExtraLink={isExtraLink}
    />
  );
};
