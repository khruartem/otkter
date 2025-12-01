import { TPhoto } from "../../../features/photos/photosSlice";

export type TPhotoSliderUIProps = {
  photos: TPhoto[];
  currentPhoto: string;
  currentIndex: number;
  onMoveLeft: () => void;
  onMoveRight: () => void;
};
