import { ReactNode } from "react";
import { TModalType } from "../../../utils/types";

export type TModalUIProps = {
  type: TModalType;
  onClose: () => void;
  children: ReactNode;
  isDirectLink: boolean;
};