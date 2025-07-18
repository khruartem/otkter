import clsx from "clsx";

import { Text } from "../../../../components/text";
import { Video } from "../../../../components/video";

import { Colors } from "../../../../utils/types";

import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";

import styles from "./hero.module.css";

export const HeroUI = () => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const largeResolution = isLarge || isDesktop;
  const smallResolution = isLaptop || isTablet || isMobile;

  return (
    <section
      className={clsx(
        styles.hero,
        largeResolution && styles.hero_rowed,
        smallResolution && styles.hero_columned,
        isLarge && styles["hero_large-screen"],
        isDesktop && styles.hero_desktop,
        isLaptop && styles.hero_laptop,
        isTablet && styles.hero_tablet,
        isMobile && styles.hero_mobile
      )}
    >
      <div
        className={clsx(
          styles.hero__content,
          isLarge && styles["hero__content_large-gap"],
          !isLarge && styles["hero__content_small-gap"],
          (isLaptop || isTablet || isMobile) &&
            styles["hero__content_large-width"]
        )}
      >
        <div
          className={clsx(
            styles["hero__main-info"],
            !isMobile && styles["hero__main-info_large-gap"],
            isMobile && styles["hero__main-info_small-gap"]
          )}
        >
          <Text
            as={"h2"}
            fontFamily="Unbounded"
            textAlign="center"
            fontSize={18}
            fontWeight={500}
            lineHeight={isTablet || isMobile ? 32 : 28}
            textTransform="uppercase"
            color={Colors.Navy}
            decorated
            classNameExtra={clsx(
              styles.hero__title,
              isTablet || isMobile
                ? styles["hero__title_large-height"]
                : styles["hero__title_small-height"]
            )}
          >
            {"наша миссия"}
          </Text>
          <Text
            as={"h1"}
            fontFamily="Unbounded"
            textAlign="left"
            fontSize={clsx(
              (isLarge || isLaptop) && "72px",
              (isDesktop || isTablet) && "56px",
              isMobile && "36px"
            )}
            fontWeight={700}
            lineHeight={clsx(
              (isLarge || isLaptop) && "100px",
              (isDesktop || isTablet) && "80px",
              isMobile && "44px"
            )}
            textTransform="uppercase"
            color={Colors.Navy}
            width="min-content"
          >
            {"объединять творческих людей"}
          </Text>
        </div>
        <div
          className={clsx(
            styles["hero__extra-info"],
            isLarge && styles["hero__extra-info_large-screen"],
            isDesktop && styles["hero__extra-info_desktop"],
            isLaptop && styles["hero__extra-info_laptop"],
            isTablet && styles["hero__extra-info_tablet"],
            isMobile && styles["hero__extra-info_mobile"],
            (isLarge || isDesktop) && styles["hero__extra-info_large-gap"],
            (isLaptop || isMobile) && styles["hero__extra-info_middle-gap"],
            isTablet && styles["hero__extra-info_middle-gap"]
          )}
        >
          <div className={styles.hero__stat}>
            <Text
              as={"p"}
              fontFamily="Unbounded"
              textAlign="left"
              fontSize={isLarge || isLaptop ? 36 : 28}
              fontWeight={700}
              lineHeight={isLarge || isLaptop ? 44 : 36}
              textTransform="none"
              color={Colors.Nephritis100}
            >
              {"~200"}
            </Text>
            <Text
              as={"p"}
              fontFamily="Roboto"
              textAlign="left"
              fontSize={isLarge || isLaptop ? 18 : 14}
              fontWeight={400}
              lineHeight={isLarge || isLaptop ? 28 : 24}
              textTransform="none"
              color={Colors.Dark100}
            >
              {"проектов и мероприятий"}
            </Text>
          </div>
          <div
            className={clsx(
              styles.hero__stat,
              (isLarge || isLaptop) && styles.hero__stat_gapped
            )}
          >
            <Text
              as={"p"}
              fontFamily="Unbounded"
              textAlign="left"
              fontSize={isLarge || isLaptop ? 36 : 28}
              fontWeight={700}
              lineHeight={isLarge || isLaptop ? 44 : 36}
              textTransform="none"
              color={Colors.Nephritis100}
            >
              {">9 лет"}
            </Text>
            <Text
              as={"p"}
              fontFamily="Roboto"
              textAlign="left"
              fontSize={isLarge || isLaptop ? 18 : 14}
              fontWeight={400}
              lineHeight={isLarge || isLaptop ? 28 : 24}
              textTransform="none"
              color={Colors.Dark100}
            >
              {"занимаемся искусством"}
            </Text>
          </div>
          <div className={styles.hero__stat}>
            <Text
              as={"p"}
              fontFamily="Unbounded"
              textAlign="left"
              fontSize={isLarge || isLaptop ? 36 : 28}
              fontWeight={700}
              lineHeight={isLarge || isLaptop ? 44 : 36}
              textTransform="none"
              color={Colors.Nephritis100}
            >
              {"87%"}
            </Text>
            <Text
              as={"p"}
              fontFamily="Roboto"
              textAlign="left"
              fontSize={isLarge || isLaptop ? 18 : 14}
              fontWeight={400}
              lineHeight={isLarge || isLaptop ? 28 : 24}
              textTransform="none"
              color={Colors.Dark100}
            >
              {"довольных клиентов"}
            </Text>
          </div>
        </div>
      </div>
      <Video />
    </section>
  );
};
