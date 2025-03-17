import { FC } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

//import { CardList } from "../../components/card-list";
import { ProjectList } from "../../components/project-list";
import { Text } from "../../components/text";
import { Button } from "../../components/button";

import { Colors, lineHeights } from "../../utils/types";
import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";

import styles from "./projects.module.css";
import stylesLink from "../../components/link/link.module.css";
import { TSectionProps } from "../types";

export const Projects: FC<TSectionProps> = ({ sectionRef }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  const largeResolution = isLarge || isDesktop || isLaptop;
  const smallResolution = isTablet || isMobile;

  return (
    <section
      id="projects"
      className={clsx(
        styles.projects,
        largeResolution && styles["projects_bordered-large"],
        smallResolution && styles["projects_bordered-small"],
        isLarge && styles["projects_large-screen"],
        isDesktop && styles.projects_desktop,
        isLaptop && styles.projects_laptop,
        isTablet && styles.projects_tablet,
        isMobile && styles.projects_mobile
      )}
      ref={sectionRef}
    >
      <Text
        as="h2"
        fontFamily="Unbounded"
        textAlign="center"
        fontSize={isLarge || isDesktop ? 56 : 36}
        fontWeight={700}
        lineHeight={(isLarge || isDesktop ? 80 : 44) as lineHeights}
        textTransform="uppercase"
        color={Colors.Navy}
        decorated={true}
        padding={isLarge || isDesktop ? "8px 28px" : "12px 24px"}
      >
        {"проекты"}
      </Text>
      <ProjectList />
      <div className={styles["projects__button-section"]}>
        <Button
          type="button"
          onClick={() => {}}
          disabled={false}
        >
          {"Предложить проект"}
        </Button>
        <Link to={"/otkter/projects/all"} className={stylesLink.link}>
          {"Все проекты"}
        </Link>
      </div>
    </section>
  );
};
