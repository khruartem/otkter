import { TProjectInfo, TCategory } from "../../../utils/types";

export type TProjectInfoProps = {
  projectInfo: TProjectInfo;
  title: string;
  categories: {
    categoryList?: TCategory[];
    attention?: boolean;
  };
};
