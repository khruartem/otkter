import { FC } from "react";

import { About } from "../../../../sections/about";
import { Hero } from "../../../../sections/hero-2-season";
import { Partners } from "../../../../sections/partners";
import { Projects } from "../../../../sections/projects copy";
import { Services } from "../../../../sections/services copy";
import { Teams } from "../../../../sections/teams copy";
import { Contacts } from "../../../../sections/contacts";
import { MerchItemList } from "../../../merch-item-list";

export const MainUI: FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Teams />
      <Contacts />
      <Partners />
      <MerchItemList type="all" />
    </>
  );
};
