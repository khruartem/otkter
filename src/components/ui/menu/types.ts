export type TMenuUIProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onClickLink: () => void;
  rootRef?: React.RefObject<HTMLDivElement>;
};
