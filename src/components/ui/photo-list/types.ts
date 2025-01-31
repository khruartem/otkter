type TPhotosWithIds = {
  photo: string;
  id: string;
}

type TPhotos = {
  photosWithIds: TPhotosWithIds[];
  projectId: number;
}

export type TPhotoListUIProps = {
  photos: TPhotos;
};
