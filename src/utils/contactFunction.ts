import { teamsSocials } from "./constants";

export const contactFunction = () => {
  window.open(
      teamsSocials[0].teamSocials[0].socials[0].url,
      "_blank"
    );
};