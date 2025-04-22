import { FC } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { ArrowLeft, ArrowRight } from "../../icons/icons";
// import { TabItemUI } from "../tab-item";
import { TabItem } from "../../tab-item";

import { TTabBarUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import { Colors } from "../../../utils/types";

import styles from "./tab-bar.module.css";

export const TabBarUI: FC<TTabBarUIProps> = ({
  current,
  type,
  index,
  items,
  onSwitch,
  setCurrentItem,
  setIndex
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <div
      className={clsx(
        styles["tab-bar"],
        isLarge && styles["tab-bar_large-screen"],
        isDesktop && styles["tab-bar_desktop"],
        isLaptop && styles["tab-bar_laptop"],
        (isTablet || isMobile) && styles["tab-bar_small-resolution"]
      )}
    >
      <ArrowLeft
        mainColor={Colors.Nephritis100}
        hoverColor={Colors.Nephritis120}
        activeColor={Colors.Navy}
        onClick={() => onSwitch(index - 1)}
      />
      <ul
        className={clsx(
          styles["tab-bar__items"],
          isLarge && styles["tab-bar__items_large-screen"],
          isDesktop && styles["tab-bar__items_desktop"],
          isLaptop && styles["tab-bar__items_laptop"],
          isTablet && styles["tab-bar__items_tablet"],
          isMobile && styles["tab-bar__items_mobile"]
        )}
      >
        {items.map((item, index) => {
          return (
            <Link
              key={item.id}
              to={`/${type}/${item.id}`}
              className={styles["tab-bar__item-link"]}
            >
              <li className={styles["tab-bar__item-link-item"]}>
                <TabItem
                  key={item.id}
                  item={item}
                  index={index}
                  current={item.id === current.id}
                  setCurrentItem={setCurrentItem}
                  setIndex={setIndex}
                />
              </li>
            </Link>
          );
        })}
      </ul>
      <ArrowRight
        mainColor={Colors.Nephritis100}
        hoverColor={Colors.Nephritis120}
        activeColor={Colors.Navy}
        onClick={() => onSwitch(index + 1)}
      />
    </div>
  );
};
