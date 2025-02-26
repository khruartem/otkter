import { TService, TServiceRef, TTitleServiceRef } from "../../../utils/types"

export type TServiceListUIProps = {
  services: TService[];
  titleRefs: TTitleServiceRef[];
  refs: TServiceRef[];
}