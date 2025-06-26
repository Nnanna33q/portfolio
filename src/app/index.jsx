import Contact from "../components/contact";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Services from "../components/services";
import Skills from "../components/skils";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";


export default function Home() {
  return (
    <main>
      <Navbar currentPage={'Home'} />
      <Hero />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

const root = createRoot(document.querySelector('#root'));
root.render(
  <StrictMode>
    <Home />
  </StrictMode>
)