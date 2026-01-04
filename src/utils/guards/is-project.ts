import { TProject } from "../types/projects";

export function isProject(item: unknown): item is TProject {
  return (item as TProject).kind === "projects";
}
