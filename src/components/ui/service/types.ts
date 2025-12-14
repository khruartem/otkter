import { TService } from "../../../utils/types/services";

export type TServiceUIProps = {
  service: TService;
  serviceRef: React.RefObject<HTMLDivElement> | undefined;
};
