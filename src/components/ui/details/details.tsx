import { FC, Fragment } from "react";
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
  const { isDesktop, isLaptop, isTablet, isMobile } = useGetMediaQuery();
  const smallResolution = isDesktop || isLaptop || isTablet || isMobile;

  return (
    <div
      key={nanoid()}
      className={clsx(
        styles["event-details"],
        smallResolution && styles["event-details_small-resolution"],
        isDesktop
          ? styles["event-details_small-gap"]
          : styles["event-details_large-gap"]
      )}
    >
      {detailsType === "events" && (
        <>
          <CategoryList id={id} />
          {(details as TEventDetails[]).map(({ type, label, value }) => {
            return (
              <EventUI key={nanoid()} type={type} value={value} label={label} />
            );
          })}
        </>
      )}
      {detailsType === "services" && (
        <>
          <Category
            category={{ name: "Информация", type: "extra", id: "info" }}
          />
          {(details as TEventDetails[]).map(({ type, label, value }) => {
            return (
              <EventUI key={nanoid()} type={type} value={value} label={label} />
            );
          })}
        </>
      )}
      {detailsType === "employees" && (details as TEmployees)?.artists && (
        <>
          {(details as TEmployees).artists?.map((group) => {
            return (
              <Fragment key={nanoid()}>
                <Category
                  category={{
                    name: group.name || "",
                    type: "extra",
                    id: "artists",
                  }}
                />
                {group.employees.map((employee) => {
                  return (
                    <EmployeeUI
                      key={nanoid()}
                      type="projects"
                      employee={employee}
                    />
                  );
                })}
              </Fragment>
            );
          })}
        </>
      )}
      {detailsType === "employees" &&
        (details as TEmployees)?.administrators && (
          <Fragment key={nanoid()}>
            <Category
              category={{
                name: (details as TEmployees)?.administrators?.name || "",
                type: "extra",
                id: "admins",
              }}
            />
            {(details as TEmployees).administrators?.employees.map(
              (employee) => {
                return (
                  <EmployeeUI
                    key={nanoid()}
                    type="projects"
                    employee={employee}
                  />
                );
              }
            )}
          </Fragment>
        )}
    </div>
  );
};
