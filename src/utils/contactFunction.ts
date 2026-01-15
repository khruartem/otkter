import { IEmployee } from "./model/teamData";
import { TSocialsType } from "./types/socials";

export const contactFunction = (employee: IEmployee, socials: TSocialsType) => {
  const emloyeeToContact = employee.getEmployee();

  if (emloyeeToContact?.socials) {
    const url = emloyeeToContact.socials.find(
      (social) => social.type === socials
    )?.url;
    window.open(url || "", "_blank");
  }
};
