import { TProject } from "../../../utils/types/projects";

export type THeroCardUIProps = {
  project: TProject;
  ticket?: string;
  onTicketClick?: () => void;
};
