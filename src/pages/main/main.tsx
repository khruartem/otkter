import { FC } from "react";
import { About } from "../../sections/about";
import { Footer } from "../../sections/footer";
import { Header } from "../../sections/header";
import { Hero } from "../../sections/hero";
import { Partners } from "../../sections/partners";
import { Projects } from "../../sections/projects";

export const Main: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Partners />
      <Footer />
    </>
  );
};
