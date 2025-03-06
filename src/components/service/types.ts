import { TService, TServiceRef, TServiceViewRef } from "../../utils/types";

export type TServiceProps = {
  service: TService;
  servicesRefs: TServiceRef[];
  servicesViewRefs: TServiceViewRef[];
};
