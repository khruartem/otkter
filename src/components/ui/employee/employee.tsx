import { FC } from "react";
import clsx from "clsx";

import { Text } from "../../text";
import { SocialUI } from "../social";
// import { ImageUI } from "../../image";

import { TEmployeeUIProps } from "./types";
import { Colors } from "../../../utils/types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./employee.module.css";
import { Link } from "react-router-dom";

export const EmployeeUI: FC<TEmployeeUIProps> = ({
  type,
  employee,
  socials,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const { id, name, occupation, occupationExtra, photo, icon, url } = employee;

  return (
    <>
      {type === "projects" && (
        <div className={clsx(styles.employee, styles.employee_projects)}>
          <img
            loading="lazy"
            width={52}
            height={52}
            className={clsx(
              styles.employee__photo,
              styles.employee__photo_projects
            )}
            src={icon}
            alt={`Фотография резидента Открытой территории ${name}`}
          />
          {/* <ImageUI
            src={photo}
            width={52}
            height={52}
            alt={`Фотография резидента Открытой территории ${name}`}
            className={clsx(
              styles.employee__photo,
              styles.employee__photo_projects
            )}
          /> */}
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
            {occupationExtra && (
              <Text
                as={"p"}
                fontFamily="Roboto"
                textAlign="left"
                fontSize={16}
                fontWeight={400}
                lineHeight={28}
                textTransform={"none"}
                color={Colors.Dark100}
              >
                {occupationExtra}
              </Text>
            )}
          </div>
        </div>
      )}
      {type === "team" &&
        (employee.type === "admins" ? (
          <Link
            to={`/team/admins/${url}`}
            target="_top"
            state={{ id, url, type: "team" }}
          >
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
                className={clsx(
                  styles.employee__info,
                  styles.employee__info_team
                )}
              >
                <img
                  loading="lazy"
                  width={270}
                  height={270}
                  src={photo}
                  alt={`Фото ${name}`}
                  className={clsx(
                    styles.employee__photo,
                    styles.employee__photo_team
                  )}
                />
                {/* <ImageUI
              src={photo}
              width={270}
              height={270}
              alt={`Фотография резидента Открытой территории ${name}`}
              className={clsx(
                styles.employee__photo,
                styles.employee__photo_team
              )}
            /> */}
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
          </Link>
        ) : (
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
              className={clsx(
                styles.employee__info,
                styles.employee__info_team
              )}
            >
              <img
                loading="lazy"
                width={270}
                height={270}
                src={photo}
                alt={`Фото ${name}`}
                className={clsx(
                  styles.employee__photo,
                  styles.employee__photo_team
                )}
              />
              {/* <ImageUI
              src={photo}
              width={270}
              height={270}
              alt={`Фотография резидента Открытой территории ${name}`}
              className={clsx(
                styles.employee__photo,
                styles.employee__photo_team
              )}
            /> */}
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
        ))}
    </>
  );
};
