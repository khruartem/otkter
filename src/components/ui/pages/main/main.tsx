import { FC } from "react";

import { About } from "../../../../sections/about";
import { Footer } from "../../../../sections/footer";
import { Header } from "../../../../sections/header";
import { Hero } from "../../../../sections/hero";
import { Partners } from "../../../../sections/partners";
import { Projects } from "../../../../sections/projects";

import { TMainUIProps } from "./types";
import { Services } from "../../../../sections/services";
import { Teams } from "../../../../sections/teams";

export const MainUI: FC<TMainUIProps> = ({
  projectsRef,
  servicesRef,
  aboutRef,
  teamsRef,
}) => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About sectionRef={aboutRef} />
        <Services sectionRef={servicesRef} />
        <Projects sectionRef={projectsRef} />
        <Teams sectionRef={teamsRef} />
      </main>
      <Partners />
      <Footer />
    </>
  );
};
