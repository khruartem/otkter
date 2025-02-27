import { TService } from "../../../utils/types";

export type TServiceUIProps = {
  service: TService;
  titleRef: React.RefObject<HTMLHeadingElement> | undefined;
};
