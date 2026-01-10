import { useGetProjectById } from "./useGetProjectById";
import { useGetProjectByUrl } from "./useGetProjectByUrl";

export const useGetProject = (id?: number) => {
  const foundProjectById = useGetProjectById(id);
  const foundProjectByUrl = useGetProjectByUrl();

  return id ? foundProjectById : foundProjectByUrl;
};
