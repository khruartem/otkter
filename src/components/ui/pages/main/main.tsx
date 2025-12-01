import { FC } from "react";

import { About } from "../../../../sections/about";
import { Footer } from "../../../../sections/footer";
// import { Header } from "../../../../sections/header";
// import { Hero } from "../../../../sections/hero";
import { Hero } from "../../../../sections/hero-2-season";
import { Partners } from "../../../../sections/partners";
// import { Projects } from "../../../../sections/projects";
import { Projects } from "../../../../sections/projects copy";
// import { Services } from "../../../../sections/services";
import { Services } from "../../../../sections/services copy";
// import { Teams } from "../../../../sections/teams";
import { Teams } from "../../../../sections/teams copy";
import { Contacts } from "../../../../sections/contacts";
import { HeaderAnimated } from "../../../../sections/header-animated/header-animated";

// import { TMainUIProps } from "./types";

export const MainUI: FC = () => {
  return (
    <>
      {/* <Header /> */}
      <HeaderAnimated />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Teams />
        <Contacts />
      </main>
      <Partners />
      <Footer />
    </>
  );
};
