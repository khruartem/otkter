import { TItemOTKind } from "../../../utils/types/item-ot";
import { TEmployee } from "../../../utils/types/team";

export type TEmployeeUIProps = {
  type: Extract<TItemOTKind, "projects" | "team">;
  employee: TEmployee;
};
