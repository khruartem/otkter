import { CSSProperties, forwardRef, SyntheticEvent } from "react";
import clsx from "clsx";

import { Section } from "../../../section";
import { Text } from "../../../text";
import { ArrowLeft, ArrowRight } from "../../../icons/icons";
import { Paginator } from "../../../paginator";
import { HeroCard } from "../../../hero-card";

import { THeroUIProps } from "./types";
import { Colors } from "../../../../utils/types";

import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";

import styles from "./hero.module.css";

export const HeroUI = forwardRef<HTMLUListElement, THeroUIProps>(
  (
    {
      items,
      currentPaginatorIndex,
      paginatorLength,
      onClickLeft,
      onClickRight,
      cardWidth,
      onSwitch,
      hideTabBar,
    },
    ref,
  ) => {
    const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
      useGetMediaQuery();

    const largeResolution = isLarge || isDesktop;

    const eventClassList = clsx(
      styles.event,
      isLarge && styles["event_large"],
      isDesktop && styles["event_desktop"],
      isLaptop && styles["event_laptop"],
      isTablet && styles["event_tablet"],
      isMobile && styles["event_mobile"],
    );

    return (
      <Section
        id="hero"
        decoration="only-color"
        contentDirection={largeResolution ? "row" : "column"}
        className={clsx(
          styles.section_paddinged,
          styles.section_decorated_background,
          largeResolution && [
            styles["section_s-gap"],
            styles.section_justified,
            styles.section_decorated_background_large,
          ],
          isLarge && styles.section_large,
          isDesktop && [
            styles.section_desktop,
            styles.section_decorated_background_positioned,
          ],
          isLaptop && [
            styles.section_laptop,
            styles["section_l-gap"],
            styles.section_decorated_background_middle,
          ],
          isTablet && [
            styles["section_m-gap"],
            styles.section_tablet,
            styles.section_decorated_background_middle,
          ],
          isMobile && [
            styles["section_xs-gap"],
            styles.section_mobile,
            styles.section_decorated_background_small,
          ],
        )}
      >
        <div
          className={clsx(
            styles["tagline-info"],
            isMobile
              ? styles["tagline-info_small-gap"]
              : styles["tagline-info_large-gap"],
            (isLaptop || isTablet || isMobile) && [
              styles["tagline-info_heighted"],
              styles["tagline-info_widthed"],
            ],
            isLarge && styles["tagline-info_large"],
            isDesktop && styles["tagline-info_desktop"],
            isLaptop && styles["tagline-info_laptop"],
            isTablet && styles["tagline-info_tablet"],
            isMobile && styles["tagline-info_mobile"],
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
            className={clsx(
              styles.title,
              isTablet || isMobile
                ? styles["title_large-height"]
                : styles["title_small-height"],
            )}
          >
            {"2 сезон"}
          </Text>
          <Text
            as={"h1"}
            fontFamily="Unbounded"
            textAlign="left"
            fontSize={clsx(
              (isLarge || isLaptop) && "72px",
              (isDesktop || isTablet) && "56px",
              isMobile && "36px",
            )}
            fontWeight={700}
            lineHeight={clsx(
              (isLarge || isLaptop) && "100px",
              (isDesktop || isTablet) && "80px",
              isMobile && "44px",
            )}
            textTransform="uppercase"
            color={Colors.Navy}
            width="min-content"
          >
            {"объединяем творческих людей"}
          </Text>
        </div>
        <div
          className={clsx(
            styles["month-info"],
            isLarge && styles["month-info_large"],
            isDesktop && styles["month-info_desktop"],
            isLaptop && styles["month-info_laptop"],
            isTablet && styles["month-info_tablet"],
            isMobile && styles["month-info_mobile"],
          )}
        >
          <div
            className={clsx(
              styles.specials,
              isLarge && styles["specials_large-gap"],
              (isDesktop || isTablet) && styles["specials_small-gap"],
              isLaptop && styles["specials_middle-gap"],
            )}
          >
            <div
              className={clsx(
                styles["tab-bar"],
                !isMobile && styles["tab-bar_justified"],
                isLarge && styles["tab-bar_large"],
                isDesktop && styles["tab-bar_desktop"],
                isLaptop && styles["tab-bar_laptop"],
                isTablet && styles["tab-bar_tablet"],
                isMobile && styles["tab-bar_mobile"],
              )}
            >
              <Text
                as={"h3"}
                fontFamily="Unbounded"
                textAlign="left"
                fontSize={isLarge || isLaptop ? 20 : 16}
                fontWeight={isLarge || isLaptop ? 700 : 600}
                lineHeight={isLarge || isLaptop ? 32 : 24}
                textTransform="uppercase"
                color={Colors.Navy}
              >
                {"особые события"}
              </Text>
              {!hideTabBar && (
                <div className={styles.buttons}>
                  <ArrowLeft mainColor={Colors.Navy} onClick={onClickLeft} />
                  <Paginator
                    index={currentPaginatorIndex}
                    length={paginatorLength}
                    defaultLength={items.length}
                    color={Colors.Navy}
                    currentColor={Colors.Light100}
                  />
                  <ArrowRight mainColor={Colors.Navy} onClick={onClickRight} />
                </div>
              )}
            </div>
            <ul
              className={clsx(
                styles["hero-card-list"],
                isLarge && [
                  styles["hero-card-list_large-gap"],
                  styles["hero-card-list_large-margin"],
                ],
                isDesktop && [
                  styles["hero-card-list_large-gap"],
                  styles["hero-card-list_large-margin"],
                ],
                isLaptop && [
                  styles["hero-card-list_large-padding"],
                  styles["hero-card-list_middle-gap"],
                  styles["hero-card-list_middle-margin"],
                ],
                isTablet && [
                  styles["hero-card-list_middle-padding"],
                  styles["hero-card-list_small-gap"],
                  styles["hero-card-list_small-margin"],
                ],
                isMobile && [
                  styles["hero-card-list_small-padding"],
                  styles["hero-card-list_small-gap"],
                  styles["hero-card-list_small-margin"],
                ],
              )}
              style={
                {
                  "--card-width": `${cardWidth}px`,
                } as CSSProperties
              }
              onScroll={(e: SyntheticEvent) => {
                if (
                  e.currentTarget.scrollLeft !== 0 &&
                  (isLarge || isDesktop)
                ) {
                  e.currentTarget?.classList.add(
                    styles["hero-card-list_faded"],
                    styles["hero-card-list_faded_large-card"],
                  );
                  if (isDesktop)
                    e.currentTarget?.classList.add(
                      styles["hero-card-list_faded"],
                      styles["hero-card-list_faded_small-card"],
                    );
                } else {
                  if (isLarge)
                    e.currentTarget?.classList.remove(
                      styles["hero-card-list_faded"],
                      styles["hero-card-list_faded_large-card"],
                    );
                  if (isDesktop)
                    e.currentTarget?.classList.remove(
                      styles["hero-card-list_faded"],
                      styles["hero-card-list_faded_small-card"],
                    );
                }
              }}
              ref={ref}
            >
              {items.map((item, index) => {
                return (
                  <HeroCard
                    key={index}
                    project={item}
                    index={index}
                    ticket={item?.ticket}
                    currentPaginatorIndex={currentPaginatorIndex}
                    onSwitch={onSwitch}
                  />
                );
              })}
            </ul>
          </div>
          <div
            className={clsx(
              styles.regulars,
              isLarge && styles.regulars_large,
              isDesktop && styles.regulars_desktop,
              isLaptop && styles.regulars_laptop,
              isTablet && styles.regulars_tablet,
              isMobile && styles.regulars_mobile,
            )}
          >
            <Text
              as={"h3"}
              fontFamily="Unbounded"
              textAlign="left"
              fontSize={isLarge || isLaptop ? 20 : 16}
              fontWeight={isLarge || isLaptop ? 700 : 600}
              lineHeight={isLarge || isLaptop ? 32 : 24}
              textTransform="uppercase"
              color={Colors.Navy}
            >
              {"каждую неделю"}
            </Text>
            <ul
              className={clsx(
                styles["event-list"],
                isMobile
                  ? styles["event-list_columned"]
                  : styles["event-list_rowed"],
                isLarge && styles["event-list_large"],
                isDesktop && [styles["event-list_desktop"]],
                isLaptop && styles["event-list_laptop"],
                isTablet && styles["event-list_tablet"],
                isMobile && styles["event-list_mobile"],
              )}
            >
              <li className={eventClassList}>
                <Text
                  as={"p"}
                  fontFamily="Roboto"
                  textAlign="left"
                  fontSize={14}
                  fontWeight={400}
                  lineHeight={24}
                  textTransform="none"
                  color={Colors.Navy}
                >
                  {"Понедельник и среда"}
                </Text>
                <Text
                  as={"h4"}
                  fontFamily="Unbounded"
                  textAlign="left"
                  fontSize={16}
                  fontWeight={600}
                  lineHeight={24}
                  textTransform="none"
                  color={Colors.Light100}
                >
                  {"Детско-юношеская театральная студия «Открытое Море»"}
                </Text>
              </li>
              <li className={eventClassList}>
                <Text
                  as={"p"}
                  fontFamily="Roboto"
                  textAlign="left"
                  fontSize={14}
                  fontWeight={400}
                  lineHeight={24}
                  textTransform="none"
                  color={Colors.Navy}
                >
                  {"Вторник и суббота"}
                </Text>
                <Text
                  as={"h4"}
                  fontFamily="Unbounded"
                  textAlign="left"
                  fontSize={16}
                  fontWeight={600}
                  lineHeight={24}
                  textTransform="none"
                  color={Colors.Light100}
                >
                  {"Любительский театр «ЛАМП»"}
                </Text>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    );
  },
);
