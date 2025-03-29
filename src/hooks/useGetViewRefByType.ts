import {
  TProjectTabMode,
  TProjectViewRef,
  TTeamTabMode,
  TTeamViewRef,
} from "../utils/types";

export const useGetViewRefByType = (
  viewRefs: TTeamViewRef[] | TProjectViewRef[],
  type: TTeamTabMode | TProjectTabMode | "main"
) => {
  return viewRefs.find((viewRef) => viewRef.type === type)?.ref;
};
