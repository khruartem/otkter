import { useParams } from "react-router-dom";

import { linkMapping } from "../utils/constants";
import { TProjectsUrl } from "../utils/types/projects";
import { TServicesUrl } from "../utils/types/services";

export const useGetId = () => {
  const { code } = useParams<{
    code: TProjectsUrl | TServicesUrl | "not-found";
  }>();

  return linkMapping[code || "not-found"];
};
