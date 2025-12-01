import { FC } from "react";

import { DetailsGridItemUI } from "../details-grid-item";
import { DetailsAboutItemUI } from "../detaills-about-item";

import { TDetailsAboutUIProps } from "./types";

import styles from "./details-about.module.css";
import { DetailsGridContentUI } from "../details-grid-content";

export const DetailsAboutUI: FC<TDetailsAboutUIProps> = ({
  details,
  categories,
  categoriesColors,
}) => {
  return (
    <DetailsGridItemUI>
      <DetailsGridContentUI
        categoriesProps={{
          categories,
          colors: categoriesColors,
          className: styles["category-list_details-about"],
        }}
      >
        {details.map(({ icon, value, label }) => (
          <DetailsAboutItemUI icon={icon} label={label} value={value} />
        ))}
      </DetailsGridContentUI>
    </DetailsGridItemUI>
  );
};
