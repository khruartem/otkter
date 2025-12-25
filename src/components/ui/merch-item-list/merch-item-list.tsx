import { FC } from "react";

import { ItemOTListUI } from "../items-ot-list";
import { MerchItemUI } from "../merch-item";

import { TMerchItemListUIProps } from "./types";

import { TMerch } from "../../../utils/types/merch";

import styles from "./merch-item-list.module.css";

export const MerchItemListUI: FC<TMerchItemListUIProps> = ({ merchItems }) => {
  return (
    <ItemOTListUI
      itemsOT={merchItems}
      renderItemOT={(itemOT, key) => (
        <MerchItemUI key={key} item={itemOT as TMerch} />
      )}
      className={styles["item-ot-list_merch"]}
    />
  );
};
