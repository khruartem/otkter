import { useSelector } from "react-redux";
import { RootState } from "../services/store";
import { getControlsSelector } from "../features/controls/controlsSlice";

export const useGetControls = (id: number) => {
  return useSelector((state: RootState) => getControlsSelector(state, id));
};
