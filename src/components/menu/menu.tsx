import { FC, useState } from "react";

import { MenuUI } from "../ui/menu";

import { TMenuProps } from "./types";

export const Menu: FC<TMenuProps> = ({ headerAnimation }) => {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    if (headerAnimation?.animated === false) {
      headerAnimation?.setAnimated(true);
    }
    setOpen(!isOpen);
  };

  const onClose = () => {
    const sectionHeight =
      (document.querySelector("#hero")?.clientHeight || 300) * 0.6;

    if (headerAnimation?.animated && window.scrollY < sectionHeight) {
      headerAnimation?.setAnimated(false);
    }

    setOpen(!isOpen);
  };

  const onClickLink = () => {
    setOpen(!isOpen);
  };

  return (
    <MenuUI
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      onClickLink={onClickLink}
    />
  );
};
