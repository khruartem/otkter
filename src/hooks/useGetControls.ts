import { useSelector } from "react-redux";
import { RootState } from "../services/store";
import { getControlsSelector, TControlsType } from "../features/controls/controlsSlice";
import { TControlsLocation } from "../utils/types";

export const useGetControls = (id: number, type: TControlsType, located: TControlsLocation) => {
  const unsortedControls = useSelector((state: RootState) => getControlsSelector(state, id, type));
  return unsortedControls?.filter((el) => el.located === located);
};
