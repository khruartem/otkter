import { FC, useState } from "react";

import { MenuUI } from "../ui/menu";

import { TMenuProps } from "./types";
import { Colors } from "../../utils/types";

export const Menu: FC<TMenuProps> = ({ rootRef, headerRef }) => {
  const [isOpen, setOpen] = useState(false);

  // TODO: сделать затемнение body при открытии меню
  const onOpen = () => {
    if (headerRef && headerRef.current)
      headerRef.current.style.cssText = `--header-bc-color: ${Colors.Light80}`;
    if (rootRef && rootRef.current)
      rootRef.current.style.cssText =
        "--navigation-transition: height 0.5s linear; --navigation-height: calc(100dvh - 59px)";
    setOpen(!isOpen);
  };

  const onClose = () => {
    if (headerRef && headerRef.current)
      headerRef.current.style.cssText = `--header-bc-color: ${Colors.Light60}`;
    if (rootRef && rootRef.current)
      rootRef.current.style.cssText =
        "--navigation-transition: height 0.5s linear; --navigation-height: 0";
    setOpen(!isOpen);
  };

  const onClickLink = () => {
    if (headerRef && headerRef.current)
      headerRef.current.style.cssText = `--header-bc-color: ${Colors.Light60}`;
    if (rootRef && rootRef.current)
      rootRef.current.style.cssText =
        "--navigation-transition: unset; --navigation-height: 0";
    setOpen(!isOpen);
  };

  return (
    <MenuUI
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      onClickLink={onClickLink}
      rootRef={rootRef}
    />
  );
};
