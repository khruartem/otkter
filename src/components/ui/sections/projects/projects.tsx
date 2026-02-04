import { FC } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { Section } from "../../../section";
import { ProjectList } from "../../../project-list";
import { Title } from "../../../title";
import { SuggestProjectButton } from "../../../suggest-project-button";

import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";

import styles from "./projects.module.css";
import stylesLink from "../../../link/link.module.css";

export const ProjectsUI: FC = () => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <Section
      id="projects"
      decoration="full"
      padding="all"
      contentDirection="column"
      className={clsx(
        (isLarge || isLaptop) && styles["section_large-gap"],
        (isDesktop || isTablet || isMobile) && styles["section_small-gap"]
      )}
    >
      <Title text="проекты" />
      <ProjectList type="main" />
      <div className={styles["button-section"]}>
        <SuggestProjectButton />
        <Link to={"/projects/all/"} className={stylesLink.link}>
          {"Все проекты"}
        </Link>
      </div>
    </Section>
  );
};
