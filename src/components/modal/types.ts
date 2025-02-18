import { ReactNode } from "react";
import { TModalType } from "../../utils/types";

export type TModalProps = {
  children: ReactNode;
  type: TModalType; 
  onClose: () => void;
}