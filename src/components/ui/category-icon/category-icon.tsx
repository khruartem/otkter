import { FC } from "react";

import {
  Play,
  Contest,
  MasterClass,
  ShortFilm,
  TrickCircle,
  Attention,
  Alert,
} from "../../icons";

import { TCategoryIconUIProps } from "./types";
import { Colors } from "../../../utils/types";

import styles from "./category-icon.module.css";

export const CategoryIconUI: FC<TCategoryIconUIProps> = ({ icon, color }) => {
  return (
    <>
      {icon === "artists" && null}
      {icon === "admins" && null}
      {icon === "info" && null}
      {icon === "attention" && <Attention mainColor={color} />}
      {icon === "play" && <Play mainColor={color} iconType="category" />}
      {icon === "contest" && <Contest mainColor={color} iconType="category" />}
      {icon === "master-class" && (
        <MasterClass mainColor={color} iconType="category" />
      )}
      {icon === "short-film" && (
        <ShortFilm mainColor={color} iconType="category" />
      )}
      {icon === "circle" && (
        <TrickCircle
          mainColor={Colors.Nephritis120}
          className={styles["category-icon_trick-circle"]}
        />
      )}
      {icon === "alert" && <Alert mainColor={color} />}
    </>
  );
};
