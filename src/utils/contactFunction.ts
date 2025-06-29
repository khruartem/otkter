import { teamsSocials } from "./constants/team";

import { SocialTypes, TEmployeesType } from "./types";

export const contactFunction = (
  type: TEmployeesType,
  id: number,
  socialsType: SocialTypes
) => {
  const socials = teamsSocials.find(
    (teamsSocial) => teamsSocial.teamType === type
  )?.teamSocials;
  const contact = socials?.find((social) => social.id === id);
  const url = contact?.socials.find(
    (social) => social.type === socialsType
  )?.url;

  window.open(url || "", "_blank");
};
