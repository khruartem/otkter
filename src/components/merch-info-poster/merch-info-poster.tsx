import { FC, useState } from "react";

import { MerchInfoPosterUI } from "../ui/merch-info-poster";

import { useInfoMerchContext } from "../../hooks/contexts/useInfoMerchContext";

export const MerchInfoPoster: FC = () => {
  const { currentItem } = useInfoMerchContext();
  const photos = currentItem?.photos;
  const poster = currentItem.image;

  const [currentPhoto, setCurrentPhoto] = useState<string>(
    photos ? photos[0].source : poster
  );

  const handleChangePhoto = (source: string) => {
    setCurrentPhoto(source);
  };

  return (
    <MerchInfoPosterUI
      photos={photos}
      currentPhoto={currentPhoto}
      onChangePhoto={handleChangePhoto}
    />
  );
};
