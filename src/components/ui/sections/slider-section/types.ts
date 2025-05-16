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
  id?: string;
  type: TSliderSectionType;
  sectionRefs: TTeamRef[] | TServiceRef[] | TProjectRef[];
  sectionViewRefs: TTeamViewRef[] | TServiceViewRef[] | TProjectViewRef[];
};
