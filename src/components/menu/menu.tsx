import { FC, useState } from "react";

import { TMenuProps } from "./types";

import { MenuUI } from "../ui/menu";

export const Menu: FC<TMenuProps> = ({ rootRef }) => {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    // document.body.style.position = "fixed";
    rootRef!.current!.style.height = "calc(100dvh - 60px)";
    setOpen(!isOpen);
  };

  const onClose = () => {
    // document.body.style.position = "";
    rootRef!.current!.style.height = "0";
    setOpen(!isOpen);
  };

  // const onClickLink = () => {
    // setTimeout(() => onClose(), 1);
    // onClose();
    // if (isOpen) {
    //   document.body.style.position = "";
    // } else {
    //   document.body.style.position = "fixed";
    // }
    // setOpen(!isOpen);
    // setTimeout(() => {
    //   rootRef!.current!.style.height = "0";
    // }, 400);
  // };

  return (
    <MenuUI
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      onClickLink={onClose}
      rootRef={rootRef}
    />
  );
};
