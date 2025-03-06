import { TEmployees, TEventDetails } from "../../../utils/types";
import { TDetails } from "../../../utils/types";

export type TDetailsUI = {
  id: number;
  details: TEventDetails[] | TEmployees;
  detailsType: TDetails;
};
