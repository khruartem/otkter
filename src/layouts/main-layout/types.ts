import { ReactNode } from "react"

export type TMainLayoutProps = {
  children: ReactNode;
  className?: string;
  withoutMediaQuery?: boolean;
}