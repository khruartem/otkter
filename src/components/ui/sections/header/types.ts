import { Location } from "react-router-dom";

export type THeaderUIProps = {
  onClickLogo: () => void;
  url: string;
  headerRef?: React.RefObject<HTMLHeadingElement>;
  location?: Location;
};
