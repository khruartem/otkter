import { FC } from "react";

import { TEmployeeListUI } from "./types";

import styles from "./employee-list.module.css";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import { CategoryUI } from "../category";
import { Colors } from "../../../utils/types";

export const EmployeeListUI: FC<TEmployeeListUI> = ({ employees }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  const largeResolution = isLarge || isDesktop;
  const smallResolution = isLaptop || isDesktop || isTablet || isMobile;

  const { actors, administrators } = employees;

  return (
    <div className={styles.employees}>
      {actors && (
        <CategoryUI
          category={{ name: "В ролях", icon: "", id: "employees" }}
          colors={{
            categoryIconColor: Colors.None,
            categotyBackgroundColor: Colors.Light100,
            categotyTextColor: Colors.Dark100,
          }}
        />
      )}
    </div>
  );
};
