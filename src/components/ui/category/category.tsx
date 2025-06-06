import clsx from "clsx";
import { CSSProperties, FC } from "react";

import { Play, TrickCircle } from "../../icons/icons";
import { Attention, Contest, MasterClass, ShortFilm } from "../../icons";
import { Text } from "../../text";

import { TCategoryUIProps } from "./types";
import { Colors } from "../../../utils/types";

import styles from "./category.module.css";

export const CategoryUI: FC<TCategoryUIProps> = ({
  category = undefined,
  isAttention = false,
  wrapper = false,
  colors,
  className,
}) => {
  return (
    <div
      className={clsx(
        styles["category-wrapper"],
        isAttention && styles["category-wrapper_attention"],
        wrapper
          ? styles["category-wrapper_colored"]
          : styles["category-wrapper_transparent"],
        category?.id === "circle" && styles["category-wrapper_copy"],
        className
      )}
    >
      <div
        className={clsx(
          styles.category,
          isAttention && styles.category_attention
        )}
        style={
          {
            "--categoty-background-color": colors?.categotyBackgroundColor,
          } as CSSProperties
        }
      >
        {isAttention ? (
          <Attention mainColor={Colors.Navy} />
        ) : (
          <>
            {category?.id === "play" && (
              <Play
                mainColor={colors!.categoryIconColor!}
                iconType="category"
              />
            )}
            {category?.id === "contest" && (
              <Contest
                mainColor={colors!.categoryIconColor!}
                iconType="category"
              />
            )}
            {category?.id === "master-class" && (
              <MasterClass
                mainColor={colors!.categoryIconColor!}
                iconType="category"
              />
            )}
            {category?.id === "short-film" && (
              <ShortFilm
                mainColor={colors!.categoryIconColor!}
                iconType="category"
              />
            )}
            {category?.id === "artists" && null}
            {category?.id === "admins" && null}
            {category?.id === "info" && null}
            {category?.id === "circle" && (
              <TrickCircle
                mainColor={Colors.Nephritis120}
                className={styles["trick-circle"]}
              />
            )}
            <Text
              as={"label"}
              fontFamily={
                category?.id === "artists" ||
                category?.id === "admins" ||
                category?.id === "info"
                  ? "Unbounded"
                  : "Roboto"
              }
              textAlign="center"
              fontSize={category?.id === "circle" ? 18 : 16}
              fontWeight={400}
              lineHeight={28}
              textTransform="none"
              color={colors!.categotyTextColor}
            >
              {category!.name}
            </Text>
          </>
        )}
      </div>
    </div>
  );
};
