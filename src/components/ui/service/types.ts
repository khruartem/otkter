import { TService } from "../../../utils/types";

export type TServiceUIProps = {
  service: TService;
  serviceRef: React.RefObject<HTMLDivElement> | undefined;
};
