import { useSelector } from "react-redux";
import { RootState } from "../services/store";
import { getControlsSelector, TControlsType } from "../features/controls/controlsSlice";

export const useGetControls = (id: number, type: TControlsType) => {
  return useSelector((state: RootState) => getControlsSelector(state, id, type));
};
