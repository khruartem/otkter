import { FC } from "react";

import { LayoutUI } from "../../components/ui/layouts/layout";

import { TLayoutProps } from "./types";

import { usePageContext } from "../../hooks/usePageContext";

export const Layout: FC<TLayoutProps> = ({ children }) => {
  const { layout } = usePageContext();

  return (
    <LayoutUI noPadding={layout.noPadding} className={layout.className}>
      {children}
    </LayoutUI>
  );
};
