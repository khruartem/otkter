import { FC } from "react";
import clsx from "clsx";
import { nanoid } from "@reduxjs/toolkit";

import { CategoryList } from "../../category-list";
import { EventUI } from "../event";
import { EmployeeUI } from "../../ui/employee";
import { Category } from "../../category";

import { TDetailsUI } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import { TEmployees, TEventDetails } from "../../../utils/types";

import styles from "./details.module.css";

export const DetailsUI: FC<TDetailsUI> = ({ id, details, detailsType }) => {
  const { isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  const smallResolution = isDesktop || isLaptop || isTablet || isMobile;

  return (
    <div
      key={nanoid()}
      className={clsx(
        styles["event-details"],
        smallResolution && styles["event-details_small-resolution"],
        isDesktop 
          ? styles["event-details_small-gap"]
          : styles["event-details_large-gap"],
      )}
    >
      {detailsType === "events" && (
        <>
          <CategoryList projectId={id} />
          {(details as TEventDetails[]).map(({ type, label, value }) => {
            return <EventUI key={nanoid()} type={type} value={value} label={label} />;
          })}
        </>
      )}
      {detailsType === "services" && (
        <>
           <Category
            category={{ name: "Информация", type: "extra", id: "info" }}
          />
          {(details as TEventDetails[]).map(({ type, label, value }) => {
            return <EventUI key={nanoid()} type={type} value={value} label={label} />;
          })}
        </>
      )}
      {(detailsType === "employees" && (details as TEmployees)?.artists) && (
        <>
          <Category
            category={{ name: "В ролях", type: "extra", id: "artists" }}
          />
          {(details as TEmployees).artists?.map(
            ({ name, occupation, photo }) => {
              return (
                <EmployeeUI key={nanoid()} name={name} occupation={occupation} photo={photo} />
              );
            }
          )}
        </>
      )}
      {(detailsType === "employees" && (details as TEmployees)?.administrators) && (
        <>
          <Category
            category={{ name: "Руководители", type: "extra", id: "admins" }}
          />
          {(details as TEmployees).administrators?.map(
            ({ name, occupation, photo }) => {
              return (
                <EmployeeUI key={nanoid()} name={name} occupation={occupation} photo={photo} />
              );
            }
          )}
        </>
      )}
    </div>
  );
};
