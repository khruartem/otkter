import { Colors } from "../../../../utils/types";
import { TMerch } from "../../../../utils/types/merch";
import { TProject } from "../../../../utils/types/projects";
import { TService } from "../../../../utils/types/services";
import { TEmployee } from "../../../../utils/types/team";
import { TPageLayout, TPageSEO } from "../../../page/type";

export type TInfoUIProps = {
  currentItem: TProject | TService | TEmployee | TMerch;
  currentIndex: number;
  items: TProject[] | TService[] | TEmployee[] | TMerch[];
  color: Colors;
  pageProps: { seo: TPageSEO; layout: TPageLayout };
};
