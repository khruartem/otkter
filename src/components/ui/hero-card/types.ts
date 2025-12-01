import { TProject } from "../../../utils/types/projects";

export type THeroCardUIProps = {
  project: TProject;
  ticket?: boolean;
  onTicketClick?: () => void;
};
