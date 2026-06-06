import { TProject } from "../../../utils/types/projects";

export type THeroCardUIProps = {
  project: TProject;
  ticket?: string;
  finished?: boolean;
  onTicketClick?: () => void;
};
