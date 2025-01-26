import { FC } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { CardList } from "../../components/card-list";
import { Text } from "../../components/text";
import { Button } from "../../components/button";

import { CardContextValue, CardContext } from "../../contexts/card-context";
import { Cards } from "../../utils/constants";
import { Colors } from "../../utils/types";
import { useLargeScreenMediaQuery } from "../../hooks/useLargeScreenMediaQuery";

import styles from "./projects.module.css";
import stylesLink from "../../components/link/link.module.css";

export const Projects: FC = () => {
  const cardsValue: CardContextValue = {
    cards: Cards,
    categoryIconColor: Colors.None,
    categotyBackgroundColor: Colors.None,
    categotyTextColor: Colors.None,
  };

  const isLarge = useLargeScreenMediaQuery();

  return (
    <CardContext.Provider value={cardsValue}>
      <section
        id="projects"
        className={clsx(
          styles.projects,
          isLarge && styles["projects_large-screen"]
        )}
      >
        <Text
          as="h2"
          fontFamily="Unbounded"
          textAlign="center"
          fontSize={56}
          fontWeight={700}
          lineHeight={80}
          textTransform="uppercase"
          color={Colors.Navy}
          decorated={true}
          padding={"6.5px 26.2px"}
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
          <Link
          to={"/projects/archive"}
          className={stylesLink.link}
          >
            {"Все проекты"}
          </Link>
        </div>
      </section>
    </CardContext.Provider>
  );
};
