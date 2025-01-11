import { ReactNode } from "react";

type ScreenTypes = 'large' | 'desktop' | 'laptop' | 'tablet' | 'mobile';

export type LayoutProps = {
  type: ScreenTypes;
  children: ReactNode;
}