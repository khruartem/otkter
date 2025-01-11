import React from "react";

export type PortalProps = {
  children: React.ReactNode;
  root: React.MutableRefObject<null> | undefined;
}