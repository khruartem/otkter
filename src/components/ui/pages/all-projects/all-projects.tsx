import { FC } from "react";

import { MainLayout } from "../../../../layouts/main-layout";

import { Projects } from "../../../../sections/projects";

export const AllProjectsUI: FC = () => {
  return (
    <MainLayout withoutMediaQuery>
      <Projects type="all" />
    </MainLayout>
  );
};
