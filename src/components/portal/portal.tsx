import ReactDOM from "react-dom";
import { PortalProps } from "./types";
import { ReactElement } from "react";

export const Portal = ({ children, root }: PortalProps): ReactElement => {
  return ReactDOM.createPortal(children, root!.current!);
};
