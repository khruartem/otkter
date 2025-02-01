import { TLink } from "../../../utils/types";

type TButtonWithId = {
  id: string;
  label: string;
}

type TLinkWithId = { id: string } & TLink 

export type TControlsUIProps = {
  buttons: TButtonWithId[];
  links: TLinkWithId[];
}