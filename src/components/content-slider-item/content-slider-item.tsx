import { FC, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { TContentSliderItemProps } from "./types";
import { lockScroll } from "../../utils/lockScroll";
import { ContentSliderItemUI } from "../ui/content-slider-item";

export const ContentSliderItem: FC<TContentSliderItemProps> = ({
  tab,
  currentTab,
  currentIndex,
  previousIndex,
  // current,
  renderItem,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [itemViewRef, inView] = useInView({
    threshold: 0,
  });

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

  // return renderItem({ type: tab, itemRef, itemViewRef });
  return (
    <ContentSliderItemUI
      tab={tab}
      itemViewRef={itemViewRef}
      renderItem={renderItem}
      ref={itemRef}
    />
  );
};
