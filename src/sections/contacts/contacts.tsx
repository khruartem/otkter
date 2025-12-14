import { FC } from "react";

import { ContactsUI } from "../../components/ui/sections/contacts";

import { contactFunction } from "../../utils/contactFunction";
import { yakovlev } from "../../utils/constants/team";

import { useScrollOnMount } from "../../hooks/useScrollOnMount";

export const Contacts: FC = () => {
  const handleContact = () => {
    contactFunction(yakovlev, "telegram");
  };
  useScrollOnMount();

  return <ContactsUI onContact={handleContact} />;
};
