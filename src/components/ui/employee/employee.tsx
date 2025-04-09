import clsx from "clsx";

import { Text } from "../../text";
import { SocialUI } from "../social";

import { TEmployeeUIProps } from "./types";
import { Colors } from "../../../utils/types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./employee.module.css";
import { FC } from "react";

export const EmployeeUI: FC<TEmployeeUIProps> = ({
  type,
  employee,
  socials,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const { name, occupation, photo } = employee;

  return (
    <>
      {type === "projects" && (
        <div className={clsx(styles.employee, styles.employee_projects)}>
          <img
            loading="lazy"
            className={clsx(
              styles.employee__photo,
              styles.employee__photo_projects
            )}
            src={photo}
            alt="Фотография резидента Открытой территории"
          />
          <div className={styles.employee__info}>
            <Text
              as={"p"}
              fontFamily="Unbounded"
              textAlign="left"
              fontSize={14}
              fontWeight={400}
              lineHeight={20}
              textTransform={"none"}
              color={Colors.Nephritis120}
            >
              {occupation}
            </Text>
            <Text
              as={"p"}
              fontFamily="Unbounded"
              textAlign="left"
              fontSize={18}
              fontWeight={500}
              lineHeight={28}
              textTransform={"none"}
              color={Colors.Navy}
            >
              {name}
            </Text>
          </div>
        </div>
      )}
      {type === "team" && (
        <li
          className={clsx(
            styles.employee,
            styles.employee_team,
            isLarge && styles["employee_team_large-screen"],
            isDesktop && styles.employee_team_desktop,
            isLaptop && styles.employee_team_laptop,
            isTablet && styles.employee_team_tablet,
            isMobile && styles.employee_team_mobile
          )}
        >
          <div
            className={clsx(styles.employee__info, styles.employee__info_team)}
          >
            <img
              loading="lazy"
              src={photo}
              alt={`Фото ${name}`}
              className={clsx(
                styles.employee__photo,
                styles.employee__photo_team
              )}
            />
            <div className={styles.employee__desc}>
              <Text
                as={"h3"}
                fontFamily="Unbounded"
                textAlign="center"
                fontSize={20}
                fontWeight={500}
                lineHeight={32}
                textTransform={"none"}
                color={Colors.Navy}
              >
                {name}
              </Text>
              <Text
                as={"p"}
                fontFamily="Roboto"
                textAlign="center"
                fontSize={18}
                fontWeight={400}
                lineHeight={28}
                textTransform={"none"}
                color={Colors.Dark100}
              >
                {occupation}
              </Text>
            </div>
          </div>

          {socials && <SocialUI socials={socials} />}
        </li>
      )}
    </>
  );
};
