import React from "react";
import ProjectsPage from "./ProjectsPage";
import { designProjects } from "../data/projects";

const Design = () => (
  <ProjectsPage
    variant="design-page"
    eyebrow="Design"
    title="Design"
    subtitle="UI/UX concepts and prototypes. Each link opens the full design or prototype in Figma."
    projects={designProjects}
  />
);

export default Design;
