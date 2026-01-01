import { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { TabBar } from "../tab-bar copy";

import { TPhotoTabBarProps } from "./types";
import { TTabBarCotextValue } from "../tab-bar copy/types";

import { TProject } from "../../utils/types/projects";
import { TService } from "../../utils/types/services";
import { TItemOTType } from "../../utils/types/common";
import { isItemOT } from "../../utils/guards/is-item-ot";
import { TEmployee } from "../../utils/types/team";
import { TMerch } from "../../utils/types/merch";

export const PhotoTabBar: FC<TPhotoTabBarProps> = ({
  baseUrl,
  currentItem,
  currentItemIndex,
  items,
  renderTab,
  className,
  tabsGap,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentTab, setCurrentTab] = useState<
    TProject | TService | TEmployee | TMerch
  >(currentItem);
  const [currentIndex, setCurrentIndex] = useState<number>(currentItemIndex);

  const handleTabClick = (
    item: TProject | TService | TEmployee | TItemOTType | TMerch,
    index: number
  ) => {
    if (isItemOT(item)) {
      setCurrentTab(item);
      setCurrentIndex(index);
      navigate(
        item.kind === "team"
          ? `/${item.kind}/admins/${item.url}/`
          : `/${item.kind}/${item.url}/`,
        { ...location?.state, id: item.id, url: item.url }
      );
    }
  };

  const handleSwitch: (index: number) => void = (index: number) => {
    if (index > items.length - 1) {
      setCurrentIndex(0);
      setCurrentTab(items[0]);
      navigate(`/${baseUrl}/${items[0].url}/`, {
        state: {
          ...location.state,
          id: items[0].id,
          url: items[0].url,
        },
      });
    } else if (index < 0) {
      setCurrentIndex(items.length - 1);
      setCurrentTab(items[items.length - 1]);
      navigate(`/${baseUrl}/${items[items.length - 1].url}/`, {
        state: {
          ...location.state,
          id: items[items.length - 1].id,
          url: items[items.length - 1].url,
        },
      });
    } else {
      setCurrentIndex(index);
      setCurrentTab(items[index]);
      navigate(`/${baseUrl}/${items[index].url}/`, {
        state: {
          ...location.state,
          id: items[index].id,
          url: items[index].url,
        },
      });
    }
  };

  const contextValue: TTabBarCotextValue = {
    tabs: items,
    currentTab,
    relativeToTitle: "rowed",
    currentIndex,
    onTabClick: handleTabClick,
    renderTab,
    onSwitch: handleSwitch,
    tabsGap,
    className,
  };

  return <TabBar contextValue={contextValue} />;
};
