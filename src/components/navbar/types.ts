export type NavBarProps = {
  isOpen?: boolean | undefined;
  onOpen?: ((isOpen: boolean) => void) | undefined;
  rootRef?: React.MutableRefObject<null>;
}