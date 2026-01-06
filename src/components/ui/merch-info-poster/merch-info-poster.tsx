import { FC } from "react";

import { ItemPosterUI } from "../item-poster";
import { PhotoUI } from "../photo";

import styles from "./merch-info-poster.module.css";

import { TMerchInfoPosterUIProps } from "./types";

export const MerchInfoPosterUI: FC<TMerchInfoPosterUIProps> = ({
  photos,
  currentPhoto,
  onChangePhoto,
}) => {
  return (
    <>
      <ItemPosterUI poster={currentPhoto} />
      {photos && onChangePhoto && (
        <ul className={styles["merch-info-photo-list"]}>
          {photos.map(({ source }) => (
            <PhotoUI
              src={source}
              alt="Фото мерча"
              onClick={() => onChangePhoto(source)}
            />
          ))}
        </ul>
      )}
    </>
  );
};
