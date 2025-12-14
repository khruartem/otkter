import { FC } from "react";
import clsx from "clsx";

import { Button } from "../../button";

import { TSuggestProjectButtonUIProps } from "./types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./suggest-project-button.module.css";

export const SuggestProjectButtonUI: FC<TSuggestProjectButtonUIProps> = ({
  onSuggestProject,
  margined,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <Button
      type="button"
      onClick={onSuggestProject}
      disabled={false}
      className={clsx(
        styles["button_suggest-project"],
        margined &&
          (isLaptop || isLarge) &&
          styles["button_suggest-project_margined-large"],
        margined &&
          (isDesktop || isTablet || isMobile) &&
          styles["button_suggest-project_margined-small"]
      )}
    >
      {"Предложить проект"}
    </Button>
  );
};
