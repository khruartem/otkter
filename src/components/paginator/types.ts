import { Colors } from "../../utils/types";

export type TPaginatorUIProps = {
  index: number;
  length: number;
  defaultLength: number;
  className?: string;
  color?: Colors;
  currentColor?: Colors;
};
