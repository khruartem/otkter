import { TEmployee } from "../../../../utils/types/team";
import { TContentSliderTabBarProps } from "../../../content-slider/types";

export type TTeamsUIProps = {
  teams: TEmployee[];
  minTeamLength: number;
  tabBarProps: TContentSliderTabBarProps;
};
