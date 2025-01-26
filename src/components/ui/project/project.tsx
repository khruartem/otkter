import clsx from "clsx";
import { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";

import { Text } from "../../text";
import { ProjectUIProps } from "./types";

import { useLargeScreenMediaQuery } from "../../../hooks/useLargeScreenMediaQuery";

import styles from "./project.module.css";
import { Colors } from "../../../utils/types";
import { CategoryList } from "../../category-list";

export const ProjectUI: FC<ProjectUIProps> = ({ project }) => {
  const isLarge = useLargeScreenMediaQuery();

  const { id, title, categoryList, attention, image, shortText } = project;

  return (
    <Link
      className={styles["card-link"]}
      to={`/projects/${id}`}
      style={
        {
          "--project-color": attention ? Colors.Orange100 : Colors.Nephritis120,
        } as CSSProperties
      }
    >
      <li
        className={clsx(
          styles.project,
          isLarge && styles["project_large-screen"]
        )}
      >
        <div
          className={clsx(
            styles.project__top,
            styles["project__top_large-screen"]
          )}
        >
          <div
            className={clsx(
              styles.project__image,
              isLarge && styles["project__image_large-screen"]
            )}
            style={
              {
                "--background-url": `url(${image})`,
              } as CSSProperties
            }
          ></div>
          <CategoryList categoryList={categoryList!} attention={attention!} />
        </div>
        <div
          className={clsx(
            styles.project__bottom,
            styles["project__large-screen"]
          )}
        >
          <Text
            as={"h3"}
            fontFamily="Unbounded"
            textAlign="left"
            fontSize={20}
            fontWeight={500}
            lineHeight={32}
            textTransform={"none"}
            color={Colors.Navy}
          >
            {title}
          </Text>
          <Text
            as={"p"}
            fontFamily="Roboto"
            textAlign="left"
            fontSize={18}
            fontWeight={400}
            lineHeight={28}
            textTransform={"none"}
            color={Colors.Dark100}
          >
            {shortText}
          </Text>
        </div>
      </li>
    </Link>
  );
};
