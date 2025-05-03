import { FC } from "react";

import { ContactsUI } from "../../components/ui/sections/contacts";

import { useGetContactUs } from "../../hooks/useGetContactUs";

export const Contacts: FC = () => {
  const onContact = useGetContactUs();

  return <ContactsUI onContact={onContact} />;
};
