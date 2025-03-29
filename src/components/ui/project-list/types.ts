import { TProject } from "../../../utils/types"

export type TProjectListUIProps = {
  projects: TProject[];
  projectRef?: React.RefObject<HTMLDivElement>;
}