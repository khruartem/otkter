import { FC } from "react";

import { Page } from "../../../page";
import { About } from "../../../../sections/about";
import { Hero } from "../../../../sections/hero-2-season";
import { Partners } from "../../../../sections/partners";
import { Projects } from "../../../../sections/projects copy";
import { Services } from "../../../../sections/services copy";
import { Teams } from "../../../../sections/teams copy";
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
