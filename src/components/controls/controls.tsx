import { FC } from "react";

import { ControlsUI } from "../ui/controls";
import { useGetProjectId } from "../../hooks/useGetProjectId";
import { useGetControls } from "../../hooks/useGetControls";

export const Controls: FC = () => {
  const projectId = useGetProjectId();
  const controls = useGetControls(projectId);

  return <ControlsUI buttons={controls?.buttons} links={controls?.links} />;
};
