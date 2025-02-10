import { FC } from "react";
import clsx from "clsx";
import { nanoid } from "@reduxjs/toolkit";

import { CategoryList } from "../../category-list";
import { EventUI } from "../event";
import { EmployeeUI } from "../../ui/employee";

import { TDetailsUI } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import {
  TEmployees,
  TEventDetails,
} from "../../../features/projectsInfo/projectsInfoSlice";

import styles from "./details.module.css";
import { Category } from "../../category";

export const DetailsUI: FC<TDetailsUI> = ({ projectId, details, type }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  const largeResolution = isLarge;
  const smallResolution = isDesktop || isLaptop || isTablet || isMobile;

  return (
    <div
      key={nanoid()}
      className={clsx(
        styles["event-details"],
        largeResolution && styles["event-details_large-resolution"],
        smallResolution && styles["event-details_small-resolution"],
        isDesktop 
          ? styles["event-details_small-gap"]
          : styles["event-details_large-gap"],
      )}
    >
      {type === "events" && (
        <>
          <CategoryList projectId={projectId} />
          {(details as TEventDetails[]).map(({ type, label, value }) => {
            return <EventUI key={nanoid()} type={type} value={value} label={label} />;
          })}
        </>
      )}
      {(type === "employees" && (details as TEmployees)?.actors) && (
        <>
          <Category
            category={{ name: "В ролях", type: "extra", id: "artists" }}
          />
          {(details as TEmployees).actors?.map(
            ({ name, occupation, photo }) => {
              return (
                <EmployeeUI name={name} occupation={occupation} photo={photo} />
              );
            }
          )}
        </>
      )}
      {(type === "employees" && (details as TEmployees)?.administrators) && (
        <>
          <Category
            category={{ name: "Руководители", type: "extra", id: "admins" }}
          />
          {(details as TEmployees).administrators?.map(
            ({ name, occupation, photo }) => {
              return (
                <EmployeeUI name={name} occupation={occupation} photo={photo} />
              );
            }
          )}
        </>
      )}
    </div>
  );
};
