import { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { PhotoSliderUI } from "../ui/photo-slider";

import { useGetPhotoId } from "../../hooks/useGetPhotoId";
import { useGetPhotos } from "../../hooks/delete/useGetPhotos";
import { useGetPhoto } from "../../hooks/useGetPhoto";
import { useGetPhotoIndex } from "../../hooks/useGetPhotoIndex";
import { TPhotoSliderProps } from "./types";
import { useGetId } from "../../hooks/useGetId";
import { useGetUrlCode } from "../../hooks/useGetUrlCode";

export const PhotoSlider: FC<TPhotoSliderProps> = ({ type }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const id = useGetId();
  const photoId = useGetPhotoId();
  const url = useGetUrlCode();
  const urlTo = type === "team" ? `/${type}/admins/${url}` : `/${type}/${url}`;

  const photos = useGetPhotos(id, type);
  const photo = useGetPhoto(id, photoId, type);
  const photoIndex = useGetPhotoIndex(id, photoId, type);

  const [currentPhoto, setCurrentPhoto] = useState(photo!);
  const [currentIndex, setCurrentIndex] = useState(photoIndex!);

  const handlerMoveLeft = () => {
    const newIndex = currentIndex - 1;

    if (newIndex < 0) {
      const newIndex = photos!.length - 1;
      const newPhoto = photos![newIndex];

      setCurrentIndex(newIndex);
      setCurrentPhoto(newPhoto);
      // navigate(`/otkter/${type}/${id}/${newPhoto.id}`, {state: {id, type, ...location.state}});
      navigate(`${urlTo}/${newPhoto.id}`, {
        state: { id, type, url, ...location.state },
      });
    } else {
      const newPhoto = photos![newIndex];

      setCurrentIndex(newIndex);
      setCurrentPhoto(newPhoto);
      // navigate(`/otkter/${type}/${id}/${newPhoto.id}`, {state: {id, type, ...location.state}});
      navigate(`${urlTo}/${newPhoto.id}`, {
        state: { id, type, url, ...location.state },
      });
    }
  };

  const handlerMoveRight = () => {
    const newIndex = currentIndex + 1;

    if (newIndex === photos!.length) {
      const newPhoto = photos![0];

      setCurrentIndex(0);
      setCurrentPhoto(newPhoto);
      // navigate(`/otkter/${type}/${id}/${newPhoto.id}`, {state: {id, type, ...location.state}});
      navigate(`${urlTo}/${newPhoto.id}`, {
        state: { id, type, url, ...location.state },
      });
    } else {
      const newPhoto = photos![newIndex];

      setCurrentIndex(newIndex);
      setCurrentPhoto(newPhoto);
      // navigate(`/otkter/${type}/${id}/${newPhoto.id}`, {state: {id, type, ...location.state}});
      navigate(`${urlTo}/${newPhoto.id}`, {
        state: { id, type, url, ...location.state },
      });
    }
  };

  return (
    <PhotoSliderUI
      photos={photos!}
      currentPhoto={currentPhoto?.source || ""}
      currentIndex={currentIndex}
      onMoveLeft={handlerMoveLeft}
      onMoveRight={handlerMoveRight}
    />
  );
};
