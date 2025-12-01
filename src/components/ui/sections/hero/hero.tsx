import clsx from "clsx";

import { Section } from "../../../section";
import { Text } from "../../../text";
import { Video } from "../../../video";

import { Colors } from "../../../../utils/types";

import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";

import styles from "./hero.module.css";

export const HeroUI = () => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const largeResolution = isLarge || isDesktop;
  const smallResolution = isLaptop || isTablet || isMobile;

  return (
    <Section
      id="hero"
      decoration="only-color"
      contentDirection={largeResolution ? "row" : "column"}
      padding={smallResolution ? "all" : undefined}
      className={clsx(
        largeResolution && [styles["section_xs-gap"], styles.section_justified],
        smallResolution && styles.section_columned_reversed,
        isLaptop && styles["section_l-gap"],
        isTablet && [styles["section_m-gap"], styles.section_tablet],
        isMobile && [styles["section_s-gap"], styles.section_mobile]
      )}
    >
      <div
        className={clsx(
          styles.content,
          isLarge && styles["content_large-gap"],
          !isLarge && styles["content_small-gap"],
          (isLaptop || isTablet || isMobile) &&
            styles["content_large-width"]
        )}
      >
        <div
          className={clsx(
            styles["main-info"],
            !isMobile && styles["main-info_large-gap"],
            isMobile && styles["main-info_small-gap"]
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
              styles.title,
              isTablet || isMobile
                ? styles["title_large-height"]
                : styles["title_small-height"]
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
            styles["extra-info"],
            isLarge && styles["extra-info_large-screen"],
            isDesktop && styles["extra-info_desktop"],
            isLaptop && styles["extra-info_laptop"],
            isTablet && styles["extra-info_tablet"],
            isMobile && styles["extra-info_mobile"],
            (isLarge || isDesktop) && styles["extra-info_large-gap"],
            (isLaptop || isMobile) && styles["extra-info_middle-gap"],
            isTablet && styles["extra-info_middle-gap"]
          )}
        >
          <div className={styles.stat}>
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
              styles.stat,
              (isLarge || isLaptop) && styles.stat_gapped
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
          <div className={styles.stat}>
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
    </Section>
  );
};
