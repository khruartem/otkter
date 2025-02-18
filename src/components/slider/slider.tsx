import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SliderUI } from "../ui/slider";

import { useGetProjectId } from "../../hooks/useGetProjectId";
import { useGetPhotoId } from "../../hooks/useGetPhotoId";
import { useGetPhotos } from "../../hooks/useGetPhotos";
import { useGetPhoto } from "../../hooks/useGetPhoto";
import { useGetPhotoIndex } from "../../hooks/useGetPhotoIndex";

export const Slider: FC = () => {
  const navigate = useNavigate();
  
  const projectId = useGetProjectId();
  const photoId = useGetPhotoId();

  const photos = useGetPhotos(projectId);
  const photo = useGetPhoto(projectId, photoId);
  const photoIndex = useGetPhotoIndex(projectId, photoId);

  const [currentPhoto, setCurrentPhoto] = useState(photo);
  const [currentIndex, setCurrentIndex] = useState(photoIndex);

  const handlerMoveLeft = () => {
    const newIndex = currentIndex - 1;
    
    if (newIndex < 0) {
      const newIndex = photos.length - 1;
      const newPhoto = photos[newIndex];

      setCurrentIndex(newIndex);
      setCurrentPhoto(newPhoto);
      navigate(`/otkter/projects/${projectId}/${newPhoto.id}`);
    } else {
      const newPhoto = photos[newIndex];

      setCurrentIndex(newIndex);
      setCurrentPhoto(newPhoto);
      navigate(`/otkter/projects/${projectId}/${newPhoto.id}`);
    };
  };

  const handlerMoveRight = () => {
    const newIndex = currentIndex + 1;
    
    if (newIndex === photos.length) {
      const newPhoto = photos[0];

      setCurrentIndex(0);
      setCurrentPhoto(newPhoto);
      navigate(`/otkter/projects/${projectId}/${newPhoto.id}`);
    } else {
      const newPhoto = photos[newIndex];

      setCurrentIndex(newIndex);
      setCurrentPhoto(newPhoto);
      navigate(`/otkter/projects/${projectId}/${newPhoto.id}`);
    };
  };

  return (
    <SliderUI
      photos={photos}
      currentPhoto={currentPhoto?.source || ""}
      currentIndex={currentIndex}
      onMoveLeft={handlerMoveLeft}
      onMoveRight={handlerMoveRight}
    />
  );
};
