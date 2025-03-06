import { TService, TServiceRef, TServiceViewRef } from "../../../utils/types"

export type TServiceListUIProps = {
  services: TService[];
  servicesRefs: TServiceRef[];
  servicesViewRefs: TServiceViewRef[];
}