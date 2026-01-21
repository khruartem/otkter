import { FC } from "react";

import { ContactsUI } from "../../components/ui/sections/contacts";

import { contactFunction } from "../../utils/contactFunction";

import { useGetTeams } from "../../hooks/team/useGetTeams";

export const Contacts: FC = () => {
  const admins = useGetTeams("admins");
  const yakovlev = admins.find((admin) => admin.url === "yakovlev")!;

  const handleContact = () => {
    contactFunction(yakovlev, "telegram");
  };

  return <ContactsUI onContact={handleContact} />;
};
