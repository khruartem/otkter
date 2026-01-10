type TControlsType = "button" | "link";
export type TControlsItem = {
  label: string;
  type: TControlsType;
  onClick: () => void;
  url: string;
  state?: object;
  icon?: string;
};