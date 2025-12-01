import { TProject } from "../../../../utils/types/projects";

export type THeroUIProps = {
  items: TProject[];
  // currentItemIndex: number;
  currentPaginatorIndex: number;
  paginatorLength: number;
  onClickLeft: () => void;
  onClickRight: () => void;
  onSwitch: (
    index: number,
    currentPaginatorIndex: number,
    inView: boolean
  ) => void;
  cardWidth: number;
};
