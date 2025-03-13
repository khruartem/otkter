import { teamsSocials } from "../utils/constants";

export const useGetContactUs = () => {
  return () => {
    window.open(teamsSocials[0].teamSocials[0].socials[0].url, "_blank");
  };
};
