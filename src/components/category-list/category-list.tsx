import { FC, useContext } from "react";
import { CategoryListProps } from "./types";

import { Colors } from "../../utils/types";
import { CardContext } from "../../contexts/card-context";
import { CategoryListUI } from "../ui/category-list";

export const CategoryList: FC<CategoryListProps> = ({
  categoryList,
  attention,
}) => {
  const cardContext = useContext(CardContext);

  cardContext.categoryIconColor = attention ? Colors.Navy : Colors.Nephritis100;
  cardContext.categotyBackgroundColor = attention
    ? Colors.Orange100
    : Colors.Navy;
  cardContext.categotyTextColor = attention ? Colors.Navy : Colors.Light100;

  return <CategoryListUI categoryList={categoryList} attention={attention} />;
};
