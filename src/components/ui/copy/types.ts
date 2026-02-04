import { TAlert } from "../../../utils/types/alert";

export type TCopyUIProps = {
  copy: TAlert;
  onCopy: () => void;
  isCopied: boolean;
};
