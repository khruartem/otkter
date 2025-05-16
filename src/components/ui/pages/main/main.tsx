import { FC } from "react";

import { About } from "../../../../sections/about";
import { Footer } from "../../../../sections/footer";
import { Header } from "../../../../sections/header";
import { Hero } from "../../../../sections/hero";
import { Partners } from "../../../../sections/partners";
import { Projects } from "../../../../sections/projects";
import { Services } from "../../../../sections/services";
import { Teams } from "../../../../sections/teams";
import { Contacts } from "../../../../sections/contacts";

// import { TMainUIProps } from "./types";

export const MainUI: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects type="main" />
        <Teams />
        <Contacts />
      </main>
      <Partners />
      <Footer />
    </>
  );
};
