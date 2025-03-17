import { FC, useState } from "react";
import { TMenuProps } from "./types";
import { MenuUI } from "../ui/menu";

export const Menu: FC<TMenuProps> = ({ rootRef }) => {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    document.body.style.position = "fixed";
    setOpen(!isOpen);
  };

  const onClose = () => {
    document.body.style.position = "";
    setOpen(!isOpen);
  };

  const onClickLink = () => {
    if (isOpen) {
      document.body.style.position = "";
    } else {
      document.body.style.position = "fixed";
    }
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
