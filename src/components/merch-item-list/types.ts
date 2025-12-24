export type TMerchItemListProps = {
  merchItemListRef: React.RefObject<HTMLDivElement> | undefined;
  merchItemListViewRef:
    | ((node?: Element | null | undefined) => void)
    | undefined;
};
