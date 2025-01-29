import { TCategory, Colors } from "../../../utils/types";

export type CategoryUIProps = {
  category?: TCategory;
  isAttention?: boolean;
  wrapper?: boolean;
  categoryIconColor: Colors;
  categotyBackgroundColor: Colors;
  categotyTextColor: Colors;
}