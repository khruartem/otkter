import { FC } from "react";

import { Footer } from "../../../../sections/footer";
import { Projects } from "../../../../sections/projects";
import { Header } from "../../../../sections/header";

export const AllProjectsUI: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Projects type="all" />
      </main>
      <Footer />
    </>
  );
};
