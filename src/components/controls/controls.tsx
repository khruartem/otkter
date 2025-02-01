import { FC } from "react";
import { TControlsProps } from "./types";
import { nanoid } from "@reduxjs/toolkit";
import { ControlsUI } from "../ui/controls";

export const Controls: FC<TControlsProps> = ({ controls }) => {
  const buttons = controls.buttons.map(button => ({ id: nanoid(), label: button })); 
  const links = controls.links.map(({ label, href }) => ({ id: nanoid(), label, href }));

  return <ControlsUI buttons={buttons} links={links} />
}