import { TPhoto } from "../../../utils/types/photo";

export type TPhotoSliderUIProps = {
  photos: TPhoto[];
  currentPhoto: string;
  currentIndex: number;
  onMoveLeft: () => void;
  onMoveRight: () => void;
};
