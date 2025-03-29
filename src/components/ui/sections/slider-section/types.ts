import {
  TProjectRef,
  TProjectViewRef,
  TServiceRef,
  TServiceViewRef,
  TSliderSectionType,
  TTeamRef,
  TTeamViewRef,
} from "../../../../utils/types";

export type TSliderSectionUIProps = {
  type: TSliderSectionType;
  sectionRefs: TTeamRef[] | TServiceRef[] | TProjectRef[];
  sectionViewRefs: TTeamViewRef[] | TServiceViewRef[] | TProjectViewRef[];
};
