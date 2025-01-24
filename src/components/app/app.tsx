import { About } from '../../sections/about';
import { Footer } from '../../sections/footer';
import { Header } from '../../sections/header';
import { Hero } from '../../sections/hero';
import { Partners } from '../../sections/partners';
import { Projects } from '../../sections/projects';

export function App() {  
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
  )
}

export default App
