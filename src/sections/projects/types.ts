import { TSectionProps } from "../types";

export type TProjectsProps = Partial<TSectionProps> & {
  type: "main" | "all";
};
