import { TPhoto } from "../../../utils/types/photo";

export type TMerchInfoPosterUIProps = {
  photos?: TPhoto[];
  currentPhoto: string;
  onChangePhoto?: (photo: string) => void;
};
