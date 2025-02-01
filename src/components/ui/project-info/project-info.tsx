import { FC } from "react";

import { Text } from "../../text";
import { PhotoList } from "../../photo-list";
import { Controls } from "../../controls";

import { TProjectInfoProps } from "./types";
import { Colors } from "../../../utils/types";

import styles from "./project-info.module.css";

export const ProjectInfo: FC<TProjectInfoProps> = ({ id, projectInfo, title, categories }) => {
  const {
    text,
    photos,
    eventDetails,
    employees,
    controls,
  } = projectInfo;

  return (
    <div className={styles.project}>
      <div className={styles.project__main}>
        <div className={styles.project__desc}>
          <Text
            as={"h3"}
            fontFamily="Unbounded"
            textAlign="left"
            fontSize={32}
            fontWeight={500}
            lineHeight={48}
            textTransform={"none"}
            color={Colors.Navy}
          >
            {title}
          </Text>
          <Text
            as={"p"}
            fontFamily="Roboto"
            textAlign="left"
            fontSize={20}
            fontWeight={400}
            lineHeight={32}
            textTransform={"none"}
            color={Colors.Dark100}
          >
            {text}
          </Text>
          <PhotoList list={photos!} projectId={id} />
        </div>
        <Controls controls={controls!} />
      </div>
      <div className={styles.project__extra}>
        <EventDetails info={eventDetails} categories={categories} />
        <EmployeeList employees={employees} />
      </div>
    </div>
  );
};
