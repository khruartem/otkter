import { FC, ReactNode, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { ContentSliderItemUI } from "../ui/content-slider-item";

import { TContentSliderItemProps } from "./types";

import { lockScroll } from "../../utils/lockScroll";

import { useContentSliderContext } from "../../hooks/contexts/useContentSliderContext";
import { TItemOTType } from "../../utils/types/item-ot";

export const ContentSliderItem: FC<TContentSliderItemProps> = ({ tab }) => {
  const {
    currentTab,
    currentIndex,
    previousIndex,
    renderItem,
    emptyStateContent,
  } = useContentSliderContext();

  const itemRef = useRef<HTMLDivElement>(null);
  const [itemViewRef, inView] = useInView({
    threshold: 0,
  });

  const renderEmptyStateContent = (tab: TItemOTType, content: ReactNode) => {
    if (tab !== "all") {
      return content;
    } else {
      return undefined;
    }
  };

  useEffect(() => {
    if (!inView && currentTab === tab) {
      itemRef.current?.scrollIntoView({
        behavior:
          Math.abs(currentIndex - previousIndex) <= 1 ? "smooth" : "auto",
        block: "center",
      });
      lockScroll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTab]);

  return (
    <ContentSliderItemUI
      tab={tab}
      itemViewRef={itemViewRef}
      renderItem={renderItem}
      ref={itemRef}
    >
      {renderEmptyStateContent(currentTab, emptyStateContent)}
    </ContentSliderItemUI>
  );
};
