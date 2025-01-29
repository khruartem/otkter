import { CSSProperties, FC } from "react";
import { CategoryUIProps } from "./types";
import clsx from "clsx";

import styles from "./category.module.css";
import { Attention } from "../../icons";
import { Text } from "../../text";
import { Colors } from "../../../utils/types";
import { Icon } from "../../icon";

export const CategoryUI: FC<CategoryUIProps> = ({
  category = undefined,
  isAttention = false,
  wrapper = false,
  categoryIconColor,
  categotyBackgroundColor,
  categotyTextColor,
}) => {
  return (
    <div
      className={clsx(
        styles["category-wrapper"],
        isAttention && styles["category-wrapper_attention"],
        wrapper
          ? styles["category-wrapper_colored"]
          : styles["category-wrapper_transparent"]
      )}
    >
      <div
        className={clsx(
          styles.category,
          isAttention && styles.category_attention
        )}
        style={
          {
            "--categoty-background-color": categotyBackgroundColor,
          } as CSSProperties
        }
      >
        {isAttention ? (
          <Attention mainColor={Colors.Navy} />
        ) : (
          <>
            <Icon
              width={24}
              height={24}
              icon={category!.icon}
              id={category!.id}
              mainColor={categoryIconColor}
              hoverColor={Colors.None}
              activeColor={Colors.None}
            />
            <Text
              as={"label"}
              fontFamily="Roboto"
              textAlign="center"
              fontSize={16}
              fontWeight={400}
              lineHeight={28}
              textTransform="none"
              color={categotyTextColor}
            >
              {category!.name}
            </Text>
          </>
        )}
      </div>
    </div>
  );
};
