import { FC, useEffect } from "react";
import { About } from "../../sections/about";
import { Footer } from "../../sections/footer";
import { Header } from "../../sections/header";
import { Hero } from "../../sections/hero";
import { Partners } from "../../sections/partners";
import { Projects } from "../../sections/projects";
import { renderToTop } from "../../utils/renderToTop";

export const Main: FC = () => {
  useEffect(() => {
    renderToTop();
  });
  
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
