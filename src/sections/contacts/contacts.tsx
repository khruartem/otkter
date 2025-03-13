import { FC } from "react";
import { TSectionProps } from "../types";
import { useGetContactUs } from "../../hooks/useGetContactUs";
import { ContactsUI } from "../../components/ui/sections/contacts";

export const Contacts: FC<TSectionProps> = ({sectionRef}) => {
  const onContact = useGetContactUs();

  return (
    <ContactsUI onContact={onContact} ref={sectionRef} />
  )
}