import { Category, Colors } from "../../../utils/types";

export type CategoryUIProps = {
  category?: Category;
  isAttention?: boolean;
  categoryIconColor: Colors;
  categotyBackgroundColor: Colors;
  categotyTextColor: Colors;
}