import { FC } from "react";

import { InfoRenderer } from "../info-renderer";
import { Info } from "../info";

import { useGetProject } from "../../hooks/projects/useGetProject";

export const ProjectInfo: FC = () => {
  const project = useGetProject();

  return (
    <InfoRenderer
      currentItem={project}
      render={(currentItem) => <Info currentItem={currentItem} />}
    />
  );
};
