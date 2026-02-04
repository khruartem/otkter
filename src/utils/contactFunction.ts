import { TSocialsType } from "./types/socials";
import { TEmployee } from "./types/team";

export const contactFunction = (employee: TEmployee, socials: TSocialsType) => {
  if (employee?.socials) {
    const url = employee.socials.find((social) => social.type === socials)?.url;
    window.open(url || "", "_blank");
  }
};
