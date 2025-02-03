import { FC } from "react";

import { Text } from "../../text";
import { PhotoList } from "../../photo-list";
import { Controls } from "../../controls";

import { Colors } from "../../../utils/types";
import { useGetTitle } from "../../../hooks/useGetTitle";
import { useGetProjectInfo } from "../../../hooks/useGetProjectInfo";
import { useGetProjectId } from "../../../hooks/useGetProjectId";

import styles from "./project-info.module.css";

export const ProjectInfo: FC = () => {
  const projectId = useGetProjectId();

  const title = useGetTitle(projectId);

  const { text } = useGetProjectInfo(projectId);

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
          <PhotoList />
        </div>
        <Controls />
      </div>
      <div className={styles.project__extra}>
        <EventDetails />
        <EmployeeList />
      </div>
    </div>
  );
};
