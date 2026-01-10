import { FC } from "react";

import { Page } from "../../../page";
import { About } from "../../../../sections/about";
import { Hero } from "../../../../sections/hero-2-season";
import { Partners } from "../../../../sections/partners";
import { Projects } from "../../../../sections/projects";
import { Services } from "../../../../sections/services";
import { Teams } from "../../../../sections/teams";
import { Contacts } from "../../../../sections/contacts";

import { TMainUIProps } from "./types";

export const MainUI: FC<TMainUIProps> = ({ pageProps }) => {
  const { seo, layout } = pageProps;

  return (
    <Page seo={seo} layout={layout}>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Teams />
      <Contacts />
      <Partners />
    </Page>
  );
};
