import { FC } from "react";

import { ControlsUI } from "../ui/controls copy";
import { FreeUI } from "../ui/free";

import { TControlsProps } from "./types";

import { useGetId } from "../../hooks/useGetId";

export const Controls: FC<TControlsProps> = ({ controls, kind }) => {
  const extraInfo =
    useGetId() === 1 && kind === "services" ? <FreeUI /> : undefined;

  return <ControlsUI controls={controls} extraInfo={extraInfo} kind={kind} />;
};
