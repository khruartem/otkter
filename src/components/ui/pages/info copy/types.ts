import { Colors } from "../../../../utils/types";
import { TProject } from "../../../../utils/types/projects";
import { TService } from "../../../../utils/types/services";
import { TEmployee } from "../../../../utils/types/team";
import { TPageLayout, TPageSEO } from "../../../page/type";

export type TInfoUIProps = {
  currentItem: TProject | TService | TEmployee;
  currentIndex: number;
  items: TProject[] | TService[] | TEmployee[];
  color: Colors;
  pageProps: { seo: TPageSEO; layout: TPageLayout };
};
