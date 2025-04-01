import { TEmployee } from "../utils/types";
import { useGetMediaQuery } from "./useGetMediaQuery";

export const useGetTeamColumns = (team: TEmployee[]) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  if (team.length < 5) {
    if (isLarge) return team.length;
    else if (isMobile) return 1;
    else return 2;
  } else {
    if (isLarge) return 5;
    else if (isDesktop) return 3;
    else if (isLaptop) return 3;
    else if (isTablet) return 2;
    else if (isMobile) return 1;
  }
};
