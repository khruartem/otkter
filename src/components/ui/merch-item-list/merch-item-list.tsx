import { forwardRef } from "react";

import { ItemOTListUI } from "../items-ot-list";
import { MerchItem } from "../../merch-item";

import { TMerchItemListUIProps } from "./types";

import { TMerch } from "../../../utils/types/merch";

import styles from "./merch-item-list.module.css";

export const MerchItemListUI = forwardRef<
  HTMLUListElement,
  TMerchItemListUIProps
>(({ merchItems }, ref) => {
  return (
    <ItemOTListUI
      itemsOT={merchItems}
      renderItemOT={(itemOT, key) => (
        <MerchItem key={key} item={itemOT as TMerch} />
      )}
      className={styles["item-ot-list_merch"]}
      ref={ref}
    />
  );
});
