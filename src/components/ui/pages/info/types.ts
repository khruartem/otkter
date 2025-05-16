import { Colors, TSectionType } from "../../../../utils/types";

export type TInfoUIProps = {
  type: TSectionType;
  id: number;
  title: string;
  text: string | string[];
  poster?: string;
  attention: boolean;
  colorAttention?: Colors;
  isEmployees: boolean;
  isControls: boolean;
  isPhotos: boolean;
  isDetails: boolean;
};
