import { TItemOT, TItemOTUrl } from "../../../utils/types/common";
// import React from "react";
// import { TProject } from "../../../utils/types/projects";
// import { TProject } from "../../../utils/types";

type TItemOTCardUIUrl = {
  to: string;
  from?: string;
  code?: TItemOTUrl;
};

export type TItemOTCardUIProps = {
  item: TItemOT;
  url: TItemOTCardUIUrl;
  // locationFrom?: string;
  // urlCode?: TItemOTUrl;
  // urlTo: string;
  // projectRef?: React.RefObject<HTMLAnchorElement>;
};
