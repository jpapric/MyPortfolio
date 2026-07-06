import React from "react";
import ProjectsPage from "./ProjectsPage";
import { codeProjects } from "../data/projects";

const Code = () => (
  <ProjectsPage
    variant="code-page"
    eyebrow="Development"
    title="Code"
    subtitle="A selection of my development projects. Follow the links to browse the repositories on GitHub and GitLab."
    projects={codeProjects}
  />
);

export default Code;
