import { useParams } from "react-router-dom";

import { TProjectsUrl, TServicesUrl } from "../utils/types";
import { linkMapping } from "../utils/constants";

export const useGetId = () => {
  const { code } = useParams<{ code: TProjectsUrl | TServicesUrl | "not-found" }>();

  return linkMapping[code || "not-found"];
}