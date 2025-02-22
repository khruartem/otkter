import { FC } from "react";

import { About } from "../../../../sections/about";
import { Footer } from "../../../../sections/footer";
import { Header } from "../../../../sections/header";
import { Hero } from "../../../../sections/hero";
import { Partners } from "../../../../sections/partners";
import { Projects } from "../../../../sections/projects";

import { TMainUIProps } from "./types";

export const MainUI: FC<TMainUIProps> = ({ projectsRef }) => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects sectionRef={projectsRef} />
      </main>
      <Partners />
      <Footer />
    </>
  );
};
