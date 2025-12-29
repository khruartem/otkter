import { FC } from "react";

import { ControlsUI } from "../ui/controls copy";
import { FreeUI } from "../ui/free";

import { TControlsProps } from "./types";

import { useGetCode } from "../../hooks/useGetCode";

export const Controls: FC<TControlsProps> = ({ controls, kind }) => {
  const serviceUrl = useGetCode();
  const extraInfo = serviceUrl === "open-sea" ? <FreeUI /> : undefined;

  return (
    <ControlsUI
      controls={
        serviceUrl === "open-sea" || serviceUrl === "lamp"
          ? controls.filter((control) => control.type === "button")
          : controls
      }
      extraInfo={extraInfo}
      kind={kind}
    />
  );
};
