import { FC, useEffect } from "react";
import clsx from "clsx";

import { Text } from "../../text";
import { PhotoList } from "../../photo-list";
import { Controls } from "../../controls";
//import { Details } from "../../details";

import { Colors } from "../../../utils/types";
import { useGetTitle } from "../../../hooks/useGetTitle";
import { useGetText } from "../../../hooks/useGetText";
import { useGetId } from "../../../hooks/useGetId";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import { useGetProjectColors } from "../../../hooks/useGetProjectColors";
import { useGetAttention } from "../../../hooks/useGetAttention";

import styles from "./project-info.module.css";
import { useGetIsEmployees } from "../../../hooks/useGetIsEmployees";
import { useLocation } from "react-router-dom";

export const ProjectInfoUI: FC = () => {
  const location = useLocation();

  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  const largeResolution = isLarge || isDesktop;
  const smallResolution = isDesktop || isTablet || isMobile;

  const projectId = useGetId();
  const title = useGetTitle(projectId!);
  const text = useGetText(projectId);
  const attention = useGetAttention(projectId);
  const { projectTitleColorAttention } = useGetProjectColors();
  const isEmployees = useGetIsEmployees(projectId);

  useEffect(() => {
    location.state = {id: projectId};
    console.log(location);
  });

  return (
    <div
      className={clsx(
        styles.project,
        isLarge && styles["project_lagre_screen"],
        isDesktop && styles.project_desktop,
        isLaptop && styles.project_laptop,
        isTablet && styles.project_tablet,
        isMobile && styles.project_mobile,
        !isDesktop && styles["project_overflowed-y"]
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
          <PhotoList id={projectId} type="projects" />
        </div>
        <Controls id={projectId} type="projects" />
      </div>
      <div
        className={clsx(
          isEmployees
            ? styles.project__extra_blocks
            : styles.project__extra_single,
          isDesktop && styles["project__extra_overflowed-y"],
          isLarge && styles["project__extra_large-screen"],
          isDesktop && styles.project__extra_desktop,
          (isDesktop || isTablet || isMobile) && styles.project__extra_single,
          isLaptop && styles.project__extra_laptop,
          isTablet && styles.project__extra_tablet,
          isMobile && styles.project__extra_mobile
        )}
      >
        {/* <Details type="events" />
        {isEmployees && <Details type="employees" />} */}
      </div>
    </div>
  );
};
