import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Projects from "../components/projects";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";


export default function ProjectsPage() {
  return (
    <main>
      <Navbar currentPage={'Projects'} />
      <Projects />
      <Footer />
    </main>
  );
}

const root = createRoot(document.querySelector('#root'));
root.render(
  <StrictMode>
    <ProjectsPage />
  </StrictMode>
)