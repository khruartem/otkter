import React from "react";
import { TProject } from "../../../utils/types";

export type ProjectUIProps = {
  project: TProject;
  projectRef?: React.RefObject<HTMLAnchorElement>;
  locationFrom?: string;
};