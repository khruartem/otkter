import { FC, useEffect, useRef } from "react";

import { TabItemUI } from "../ui/tab-item";

import { TTabItemProps } from "./types";
import { scrollIntoElementView } from "../../utils/scrollIntoElementView";

export const TabItem: FC<TTabItemProps> = ({
  item,
  current,
  index,
  setCurrentItem,
  setIndex
}) => {
  const iconRef = useRef<HTMLImageElement>(null);

  const onClick = () => {
    setCurrentItem(item);
    setIndex(index);
  };

  useEffect(() => {
    if (current) scrollIntoElementView(iconRef, "smooth", "center");
  });

  return (
    <TabItemUI
      image={item.image}
      current={current}
      ref={iconRef}
      onClick={onClick}
    />
  );
};
