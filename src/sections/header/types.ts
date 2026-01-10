export type THeaderAnimation = {
  animated: boolean;
  setAnimated: (value: React.SetStateAction<boolean>) => void;
}

export type THeaderProps = {
  animation?: THeaderAnimation;
}