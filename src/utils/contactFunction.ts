import { teamsSocials } from "./constants";
import { SocialTypes, TRole } from "./types";

export const contactFunction = (
  type: TRole,
  id: number,
  socialsType: SocialTypes
) => {
  const socials = teamsSocials.find(
    (teamsSocial) => teamsSocial.teamType === type
  )?.teamSocials;
  const contact = socials?.find((social) => social.employeeId === id);
  const url = contact?.socials.find(
    (social) => social.type === socialsType
  )?.url;

  window.open(url || "", "_blank");
};
