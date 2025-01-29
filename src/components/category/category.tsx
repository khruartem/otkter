import { FC, useContext } from "react";
import { CategoryProps } from "./types";

import { CardContext } from "../../contexts/card-context";
import { CategoryUI } from "../ui/category";
import { Colors } from "../../utils/types";

export const Category: FC<CategoryProps> = ({
  category = undefined,
  isAttention = false,
}) => {
  const { categoryIconColor, categotyBackgroundColor, categotyTextColor } =
    useContext(CardContext);

  return (
    <CategoryUI
      category={category}
      isAttention={isAttention}
      wrapper
      categoryIconColor={categoryIconColor || Colors.Nephritis100}
      categotyBackgroundColor={categotyBackgroundColor || Colors.Navy}
      categotyTextColor={categotyTextColor || Colors.Light100}
    />
  );
};
