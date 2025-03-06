import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { InfoUI } from "../ui/info";

import { useGetTitle } from "../../hooks/useGetTitle";
import { useGetText } from "../../hooks/useGetText";
import { useGetId } from "../../hooks/useGetId";
import { useGetProjectColors } from "../../hooks/useGetProjectColors";
import { useGetAttention } from "../../hooks/useGetAttention";
import { useGetIsEmployees } from "../../hooks/useGetIsEmployees";

export const ProjectInfo: FC = () => {
  const location = useLocation();

  const projectId = useGetId();
  const title = useGetTitle(projectId!);
  const text = useGetText(projectId);
  const attention = useGetAttention(projectId);
  const { projectTitleColorAttention } = useGetProjectColors();
  const isEmployees = useGetIsEmployees(projectId);

  useEffect(() => {
    location.state = { id: projectId };
  });

  return (
    <InfoUI
      type="projects"
      id={projectId}
      title={title}
      text={text}
      attention={attention}
      colorAttention={projectTitleColorAttention}
      isEmployees={isEmployees}
    />
  );
};
