import { FC } from "react";

import { ControlsUI } from "../ui/controls";
import { useGetControls } from "../../hooks/useGetControls";
import { TControlsProps } from "./types";
import { useGetId } from "../../hooks/useGetId";

export const Controls: FC<TControlsProps> = ({ id, type, located }) => {
  const controls = useGetControls(id, type, located);
  const isExtraLink = useGetId() === 1 && type === "services" ? true : false;

  return <ControlsUI controls={controls} isExtraLink={isExtraLink} />;
};
