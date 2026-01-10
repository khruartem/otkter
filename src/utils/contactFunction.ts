import { IEmployee } from "./model/teamData";

export const contactFunction = (
  employee: IEmployee,
  socials: "telegram" | "vk"
) => {
  const emloyeeToContact = employee.getEmployee();

  if (emloyeeToContact?.socials) {
    const url = emloyeeToContact.socials.find(
      (social) => social.type === socials
    )?.url;
    window.open(url || "", "_blank");
  }
};
