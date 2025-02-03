import { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { ControlsUI } from "../ui/controls";
import { useGetProjectId } from "../../hooks/useGetProjectId";
import { useGetControls } from "../../hooks/useGetControls";

export const Controls: FC = () => {
  const projectId = useGetProjectId();

  const controls = useGetControls(projectId);

  const buttons = controls!.buttons.map((button) => ({
    id: nanoid(),
    label: button,
  }));
  const links = controls!.links.map(({ label, href }) => ({
    id: nanoid(),
    label,
    href,
  }));

  return <ControlsUI buttons={buttons} links={links} />;
};
