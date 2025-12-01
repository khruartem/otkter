import { TCardType } from "../../utils/types";

export type TProjectListProps = {
  type: TCardType;
  // index: number;
  // setCurrentTab: React.Dispatch<React.SetStateAction<TCardType>>;
  // setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  projectListRef?: React.RefObject<HTMLDivElement>;
  projectListViewRef?: (node?: Element | null | undefined) => void;
};
