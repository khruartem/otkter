import {
  TEmployees,
  TEventDetails,
} from "../../../features/projectsInfo/projectsInfoSlice";
import { TDetails } from "../../../utils/types";

export type TDetailsUI = {
  projectId: number;
  details: TEventDetails[] | TEmployees;
  type: TDetails;
};
