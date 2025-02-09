import { FC } from "react";
import clsx from "clsx";

import { Text } from "../../text";
import { PhotoList } from "../../photo-list";
import { Controls } from "../../controls";
import { Details } from "../../details";
//import { EmployeeList } from "../../employee-list";

import { Colors } from "../../../utils/types";
import { useGetTitle } from "../../../hooks/useGetTitle";
import { useGetText } from "../../../hooks/useGetText";
import { useGetProjectId } from "../../../hooks/useGetProjectId";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import { useGetProjectColors } from "../../../hooks/useGetProjectColors";
import { useGetAttention } from "../../../hooks/useGetAttention";

import styles from "./project-info.module.css";
import { useGetIsEmployees } from "../../../hooks/useGetIsEmployees";

export const ProjectInfoUI: FC = () => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  const largeResolution = isLarge || isDesktop;
  const smallResolution = isDesktop || isTablet || isMobile;

  const projectId = useGetProjectId();
  const title = useGetTitle(projectId!);
  const text = useGetText(projectId);
  const attention = useGetAttention(projectId);
  const { projectTitleColorAttention } = useGetProjectColors();
  const isEmployees = useGetIsEmployees(projectId);

  return (
    <div
      className={clsx(
        styles.project,
        isLarge && styles["project_lagre_screen"],
        isDesktop && styles.project_desktop,
        isLaptop && styles.project_laptop,
        isTablet && styles.project_tablet,
        isMobile && styles.project_mobile,
        !largeResolution && styles["project_overflowed-y"]
      )}
    >
      <div
        className={clsx(
          styles.project__main,
          isLarge && styles["project__main_lagre_screen"],
          isDesktop && styles.project__main_desktop,
          isLaptop && styles.project__main_laptop,
          isTablet && styles.project__main_tablet,
          isMobile && styles.project__main_mobile
        )}
      >
        <div
          className={clsx(
            styles.project__desc,
            isLarge
              ? styles["project__desc_large-resolution"]
              : styles["project__desc_small-resolution"]
          )}
        >
          <Text
            as={"h3"}
            fontFamily="Unbounded"
            textAlign="left"
            fontSize={largeResolution ? 32 : 28}
            fontWeight={500}
            lineHeight={largeResolution ? 48 : 40}
            textTransform={"none"}
            color={attention ? projectTitleColorAttention : Colors.Navy}
            padding={largeResolution ? undefined : "40px 0 0 0"}
          >
            {title}
          </Text>
          <Text
            as={"p"}
            fontFamily="Roboto"
            textAlign="left"
            fontSize={smallResolution ? 14 : 20}
            fontWeight={400}
            lineHeight={smallResolution ? 24 : 32}
            textTransform={"none"}
            color={Colors.Dark100}
            margin={clsx(
              isLarge && "0 0 6.67vw 0",
              isDesktop && "0 0 5.27vw 0",
              isLaptop && "0 0 12.50vw 0",
              isTablet && "0 0 9.38vw 0",
              isMobile && "0 0 17.39vw 0"
            )}
          >
            {text}
          </Text>
          <PhotoList />
        </div>
        <Controls />
      </div>
      <div
        className={clsx(
          isEmployees
            ? styles.project__extra_blocks
            : styles.project__extra_single
        )}
      >
        <Details type="events" />
        {isEmployees && <Details type="employees" />}
      </div>
    </div>
  );
};
