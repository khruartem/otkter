import clsx from "clsx";
import { CSSProperties, forwardRef } from "react";
import { Link } from "react-router-dom";

import { Text } from "../../text";
import { CategoryListUI } from "../category-list copy";
// import { ImageUI } from "../../image";

import { TItemOTCardUIProps } from "./types";
import { Colors } from "../../../utils/types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./item-ot-card.module.css";

export const ItemOTCardUI = forwardRef<HTMLAnchorElement, TItemOTCardUIProps>(
  ({ item, url }, ref) => {
    const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
      useGetMediaQuery();
    const largeResolution = isLarge || isDesktop || isLaptop;
    const smallResolution = isTablet || isMobile;

    const { id, title, image, shortText, active, categories } = item;
    const attention = categories?.attention;
    const itemColor = attention ? Colors.Orange100 : Colors.Nephritis100;

    return (
      <li
        key={id}
        className={clsx(
          styles["item-card"],
          !active && styles["item-card_inactive"],
          !isMobile && styles["item-card_animated"],
          isLarge && styles["item-card_large"],
          isDesktop && styles["item-card_desktop"],
          isTablet && styles["item-card_tablet"]
        )}
        style={
          {
            "--item-color": itemColor,
          } as CSSProperties
        }
      >
        <Link
          className={clsx(
            styles["item-card__link"],
            largeResolution && styles["item-card__link_large-resolution"],
            smallResolution && styles["item-card__link_small-resolution"]
          )}
          to={url.to}
          target="_top"
          state={
            url?.code && url?.from
              ? { id, url: url.code, type: url.from }
              : undefined
          }
          ref={ref}
        >
          <div
            className={clsx(
              styles["item-card__top"],
              largeResolution && styles["item-card__top_large-resolution"],
              smallResolution && styles["item-card__top_small-resolution"],
              isTablet && styles["item-card__top_widthed"]
            )}
          >
            <div
              className={clsx(
                styles["item-card__image-container"],
                isLarge && styles["item-card__image_large"],
                isDesktop && styles["item-card__image_desktop"],
                isLaptop && styles["item-card__image_laptop"],
                isTablet && styles["item-card__image_tablet"],
                isMobile && styles["item-card__image_mobile"]
              )}
            >
              <img
                loading="lazy"
                width={clsx(
                  isLarge && "25.42vw",
                  isDesktop && "38.87vw",
                  isLaptop && "41.80vw",
                  isTablet && "100%",
                  isMobile && "92.27vw"
                )}
                height={clsx(
                  isLarge && "14.38vw",
                  isDesktop && "20.20vw",
                  isLaptop && "26.95vw",
                  isTablet && "31.25vw",
                  isMobile && "57.97vw"
                )}
                className={clsx(
                  styles["item-card__image"],
                  isLarge && styles["item-card__image_large"],
                  isDesktop && styles["item-card__image_desktop"],
                  isLaptop && styles["item-card__image_laptop"],
                  isTablet && styles["item-card__image_tablet"],
                  isMobile && styles["item-card__image_mobile"]
                )}
                src={image}
                alt="Изображение проекта"
              />
              {/* <ImageUI
              src={image}
              alt={`Изображение проекта ${title}`}
              width={clsx(
                isLarge && "25.42vw",
                isDesktop && "38.87vw",
                isLaptop && "41.80vw",
                isTablet && "100%",
                isMobile && "92.27vw"
              )}
              height={clsx(
                isLarge && "14.38vw",
                isDesktop && "20.20vw",
                isLaptop && "26.95vw",
                isTablet && "31.25vw",
                isMobile && "57.97vw"
              )}
              className={clsx(
                styles["item-card__image"],
                isLarge && styles["item-card__image_large"],
                isDesktop && styles["item-card__image_desktop"],
                isLaptop && styles["item-card__image_laptop"],
                isTablet && styles["item-card__image_tablet"],
                isMobile && styles["item-card__image_mobile"]
              )}
            /> */}
            </div>
            {categories && (
              <CategoryListUI
                categories={categories}
                colors={
                  attention
                    ? {
                        icon: Colors.Navy,
                        background: Colors.Orange100,
                        text: Colors.Navy,
                      }
                    : {
                        icon: Colors.Nephritis100,
                        background: Colors.Navy,
                        text: Colors.Light100,
                      }
                }
                className={styles["category-list_projects"]}
              />
            )}
          </div>
          <div
            className={clsx(
              styles["item-card__bottom"],
              largeResolution && styles["item-card__bottom_large-resolution"],
              smallResolution && styles["item-card__bottom_small-resolution"]
            )}
          >
            <Text
              as={"h3"}
              fontFamily="Unbounded"
              textAlign="left"
              fontSize={20}
              fontWeight={500}
              lineHeight={32}
              textTransform={"none"}
              color={Colors.Navy}
            >
              {title}
            </Text>
            <Text
              as={"p"}
              fontFamily="Roboto"
              textAlign="left"
              fontSize={18}
              fontWeight={400}
              lineHeight={28}
              textTransform={"none"}
              color={Colors.Dark100}
              classNameExtra={styles["item-card__short-text"]}
            >
              {shortText}
            </Text>
          </div>
        </Link>
      </li>
    );
  }
);
