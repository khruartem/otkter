import {
  TServiceRef,
  TServiceViewRef,
  TSliderSectionType,
  TTeamRef,
  TTeamViewRef,
} from "../../../../utils/types";

export type TSliderSectionUIProps = {
  type: TSliderSectionType;
  sectionRefs: TTeamRef[] | TServiceRef[];
  sectionViewRefs: TTeamViewRef[] | TServiceViewRef[];
};
