import { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { SliderUI } from "../ui/slider";

import { useGetPhotoId } from "../../hooks/useGetPhotoId";
import { useGetPhotos } from "../../hooks/useGetPhotos";
import { useGetPhoto } from "../../hooks/useGetPhoto";
import { useGetPhotoIndex } from "../../hooks/useGetPhotoIndex";
import { TSliderProps } from "./types";
import { useGetId } from "../../hooks/useGetId";

export const Slider: FC<TSliderProps> = ({ type }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const id = useGetId();
  const photoId = useGetPhotoId();

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
      navigate(`/${type}/${id}/${newPhoto.id}`, {state: {id, type, ...location.state}});
    } else {
      const newPhoto = photos![newIndex];

      setCurrentIndex(newIndex);
      setCurrentPhoto(newPhoto);
      // navigate(`/otkter/${type}/${id}/${newPhoto.id}`, {state: {id, type, ...location.state}});
      navigate(`/${type}/${id}/${newPhoto.id}`, {state: {id, type, ...location.state}});
    };
  };

  const handlerMoveRight = () => {
    const newIndex = currentIndex + 1;
    
    if (newIndex === photos!.length) {
      const newPhoto = photos![0];

      setCurrentIndex(0);
      setCurrentPhoto(newPhoto);
      // navigate(`/otkter/${type}/${id}/${newPhoto.id}`, {state: {id, type, ...location.state}});
      navigate(`/${type}/${id}/${newPhoto.id}`, {state: {id, type, ...location.state}});
    } else {
      const newPhoto = photos![newIndex];

      setCurrentIndex(newIndex);
      setCurrentPhoto(newPhoto);
      // navigate(`/otkter/${type}/${id}/${newPhoto.id}`, {state: {id, type, ...location.state}});
      navigate(`/${type}/${id}/${newPhoto.id}`, {state: {id, type, ...location.state}});
    };
  };

  return (
    <SliderUI
      photos={photos!}
      currentPhoto={currentPhoto?.source || ""}
      currentIndex={currentIndex}
      onMoveLeft={handlerMoveLeft}
      onMoveRight={handlerMoveRight}
    />
  );
};
