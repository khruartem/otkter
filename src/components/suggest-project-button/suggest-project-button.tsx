import { FC } from "react";

import { SuggestProjectButtonUI } from "../ui/suggest-project-button";

import { contactFunction } from "../../utils/contactFunction";
import { TSuggestProjectButtonProps } from "./types";

export const SuggestProjectButton: FC<TSuggestProjectButtonProps> = ({
  margined,
}) => {
  const handleSuggestProject = () => {
    contactFunction("admins", 1, "telegram");
  };

  return (
    <SuggestProjectButtonUI
      onSuggestProject={handleSuggestProject}
      margined={margined}
    />
  );
};
