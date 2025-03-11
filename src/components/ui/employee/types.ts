import { Social, TCardType, TEmployee } from "../../../utils/types";

export type TEmployeeUIProps = {
  type: Extract<TCardType, "projects" | "team">;
  employee: TEmployee;
  socials?: Social[];
}