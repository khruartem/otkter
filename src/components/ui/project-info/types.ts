import { TProjectInfo, TCategory } from "../../../utils/types";

type TCategories = {
  categoryList?: TCategory[];
  attention?: boolean;
}

export type TProjectInfoProps = {
  id: number;
  projectInfo: TProjectInfo;
  title: string;
  categories: TCategories;
};
