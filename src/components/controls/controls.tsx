import { FC } from "react";

import { ControlsUI } from "../ui/controls";
import { useGetControls } from "../../hooks/delete/useGetControls";
import { TControlsProps } from "./types";
import { useGetId } from "../../hooks/useGetId";

export const Controls: FC<TControlsProps> = ({ id, type, located }) => {
  const controls = useGetControls(id, type, located);
  const extraLink = useGetId() === 1 && type === "services" ? true : false;

  return (
    <ControlsUI controls={controls} isExtraLink={extraLink} type={type} />
  );
};
