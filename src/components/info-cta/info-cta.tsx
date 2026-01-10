import { FC } from "react";

import { CtaUI } from "../ui/cta";
import { ShowHistoryPreview } from "../show-history-preview";
import { Controls } from "../controls";

import { isProject } from "../../utils/guards/is-project";

import { useInfoContext } from "../../hooks/contexts/useInfoContext";

export const InfoCTA: FC = () => {
  const { currentItem } = useInfoContext();

  if (isProject(currentItem) && currentItem?.controls) {
    return (
      <CtaUI controls={currentItem.controls} kind={"projects"}>
        {currentItem.kind === "projects" && currentItem?.showHistory && (
          <ShowHistoryPreview history={currentItem.showHistory} />
        )}
      </CtaUI>
    );
  } else {
    return (
      currentItem?.controls && (
        <Controls controls={currentItem.controls} kind={currentItem.kind} />
      )
    );
  }
};
