import { FC, useContext } from "react";

import { CardContext } from "../../contexts/card-context";
import { CardListUI } from "../ui/card-list";

export const CardList: FC = () => {
  const cards = useContext(CardContext).cards || [];

  return (
    <CardListUI cards={cards} />
  );
};
