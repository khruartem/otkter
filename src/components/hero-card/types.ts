import { TProject } from "../../utils/types/projects";

export type THeroCardProps = {
  project: TProject;
  ticket?: boolean;
  index: number;
  // current?: boolean;
  // currentIndex: number;
  currentPaginatorIndex: number;
  onSwitch: (
    index: number,
    currentPaginatorIndex: number,
    inView: boolean
  ) => void;
};
