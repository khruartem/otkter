import { FC } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { CardList } from "../../components/card-list";
import { Text } from "../../components/text";
import { Button } from "../../components/button";

import { CardContextValue, CardContext } from "../../contexts/card-context";
import { Cards } from "../../utils/constants";
import { Colors, lineHeights } from "../../utils/types";
import { useMediaQueryCustom } from "../../hooks/useMediaQueryCustom";

import styles from "./projects.module.css";
import stylesLink from "../../components/link/link.module.css";

export const Projects: FC = () => {
  const cardsValue: CardContextValue = {
    cards: Cards,
    categoryIconColor: Colors.None,
    categotyBackgroundColor: Colors.None,
    categotyTextColor: Colors.None,
  };

  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useMediaQueryCustom();
  const largeResolution = isLarge || isDesktop || isLaptop;
  const smallResolution = isTablet || isMobile;

  return (
    <CardContext.Provider value={cardsValue}>
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
        <CardList />
        <div className={styles["projects__button-section"]}>
          <Button
            type="button"
            onClick={() => {}}
            disabled={false}
            padding="16px 32px"
          >
            {"Предложить проект"}
          </Button>
          <Link to={"/projects/archive"} className={stylesLink.link}>
            {"Все проекты"}
          </Link>
        </div>
      </section>
    </CardContext.Provider>
  );
};
