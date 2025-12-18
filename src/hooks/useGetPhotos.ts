import { TItemOTKind } from "../utils/types/common";
import { useGetProject } from "./projects/useGetProject";
import { useGetService } from "./services/useGetService";
import { useGetEmployee } from "./team/useGetEmployee";

export const useGetPhotos = (id: number, kind: TItemOTKind) => {
  const project = useGetProject(id);
  const service = useGetService(id);
  const employee = useGetEmployee(id);

  switch (kind) {
    case "projects":
      return project?.photos;
    case "services":
      return service?.photos;
    case "team":
      return employee?.photos;
  }
};
