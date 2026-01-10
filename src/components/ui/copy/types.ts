import { TCopy } from "../../copy/types";

export type TCopyUIProps = {
  copy: TCopy;
  onCopy: () => void;
  isCopied: boolean;
};
