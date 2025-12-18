import { useContext } from "react";
import { PhotoListContext } from "../components/photo-list/photo-list-context";

export const usePhotoListContext = () => {
  return useContext(PhotoListContext);
};
