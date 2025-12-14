import { TPhoto } from "../../../utils/types/common";

export type TPhotoSliderUIProps = {
  photos: TPhoto[];
  currentPhoto: string;
  currentIndex: number;
  onMoveLeft: () => void;
  onMoveRight: () => void;
};
