import { TPhoto } from "../../../features/photos/photosSlice"

export type TSliderUIProps = {
  photos: TPhoto[];
  currentPhoto: string;
  currentIndex: number;
  onMoveLeft: () => void;
  onMoveRight: () => void;
}