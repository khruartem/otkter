import { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { PhotoSliderUI } from "../ui/photo-slider";

import { useGetPhotoId } from "../../hooks/useGetPhotoId";
import { useGetPhotos } from "../../hooks/useGetPhotos";
import { TPhotoSliderProps } from "./types";
import { useGetId } from "../../hooks/useGetId";
import { useGetCode } from "../../hooks/useGetCode";

export const PhotoSlider: FC<TPhotoSliderProps> = ({ type }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const id = useGetId();
  const code = useGetCode();
  const photoId = useGetPhotoId();
  const url = type === "team" ? `/${type}/admins/${code}` : `/${type}/${code}`;

  const photos = useGetPhotos(id, type);
  const photo = photos?.find((photo) => photo.id === photoId);
  const photoIndex = photos?.findIndex((photo) => photo.id === photoId);

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
      navigate(`${url}/${newPhoto.id}`, {
        state: { id, type, url: code, ...location.state },
      });
    } else {
      const newPhoto = photos![newIndex];

      setCurrentIndex(newIndex);
      setCurrentPhoto(newPhoto);
      // navigate(`/otkter/${type}/${id}/${newPhoto.id}`, {state: {id, type, ...location.state}});
      navigate(`${url}/${newPhoto.id}`, {
        state: { id, type, url: code, ...location.state },
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
      navigate(`${url}/${newPhoto.id}`, {
        state: { id, type, url: code, ...location.state },
      });
    } else {
      const newPhoto = photos![newIndex];

      setCurrentIndex(newIndex);
      setCurrentPhoto(newPhoto);
      // navigate(`/otkter/${type}/${id}/${newPhoto.id}`, {state: {id, type, ...location.state}});
      navigate(`${url}/${newPhoto.id}`, {
        state: { id, type, url: code, ...location.state },
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
