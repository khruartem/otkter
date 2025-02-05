import { TEventDetails } from "../../../features/projectsInfo/projectsInfoSlice"

export type TEventDetailsUI = {
  projectId: number;
  details: TEventDetails[];
}