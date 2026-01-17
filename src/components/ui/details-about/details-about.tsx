import { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { DetailsGridItemUI } from "../details-grid-item";
import { DetailsAboutItemUI } from "../detaills-about-item";
import { DetailsGridContentUI } from "../details-grid-content";

import { TDetailsAboutUIProps } from "./types";

import { TAboutDetails } from "../../../utils/types/details";

import styles from "./details-about.module.css";

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
        {(details as TAboutDetails[]).map(({ icon, value, label }) => (
          <DetailsAboutItemUI
            key={nanoid()}
            icon={icon}
            label={label}
            value={value}
          />
        ))}
      </DetailsGridContentUI>
    </DetailsGridItemUI>
  );
};
