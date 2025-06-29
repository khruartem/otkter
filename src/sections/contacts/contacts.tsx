import { FC } from "react";

import { ContactsUI } from "../../components/ui/sections/contacts";

import { useScrollOnMount } from "../../hooks/useScrollOnMount";
import { useGetContactUs } from "../../hooks/useGetContactUs";

export const Contacts: FC = () => {
  const onContact = useGetContactUs();
  useScrollOnMount();

  return <ContactsUI onContact={onContact} />;
};
