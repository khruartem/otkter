import { TItemOTType } from "../../utils/types/common";

export type TProjectListProps = {
  type: TItemOTType;
  // index: number;
  // setCurrentTab: React.Dispatch<React.SetStateAction<TCardType>>;
  // setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  projectListRef?: React.RefObject<HTMLDivElement>;
  projectListViewRef?: (node?: Element | null | undefined) => void;
};
