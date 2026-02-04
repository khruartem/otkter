import { FC } from "react";

import { SuggestProjectButtonUI } from "../ui/suggest-project-button";

import { TSuggestProjectButtonProps } from "./types";

import { contactFunction } from "../../utils/contactFunction";

import { useGetTeams } from "../../hooks/team/useGetTeams";

export const SuggestProjectButton: FC<TSuggestProjectButtonProps> = ({
  margined,
}) => {
  const admins = useGetTeams("admins");
  const yakovlev = admins.find((admin) => admin.url === "yakovlev")!;

  const handleSuggestProject = () => {
    contactFunction(yakovlev, "telegram");
  };

  return (
    <SuggestProjectButtonUI
      onSuggestProject={handleSuggestProject}
      margined={margined}
    />
  );
};
