import { TButton, TLink } from "../../../utils/types";

export type TControlsUIProps = {
  buttons: TButton[] | undefined;
  links: TLink[] | undefined;
  isExtraLink: boolean;
}