import { FC } from "react";

import { SuggestProjectButtonUI } from "../ui/suggest-project-button";

import { TSuggestProjectButtonProps } from "./types";

import { contactFunction } from "../../utils/contactFunction";
import { yakovlev } from "../../utils/constants/team";

export const SuggestProjectButton: FC<TSuggestProjectButtonProps> = ({
  margined,
}) => {
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
