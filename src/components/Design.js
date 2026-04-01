import React from "react";
import "../css/Projects.css";
import { designProjects } from "../data/projects";

const Design = () => {
  return (
    <div className="projects-page design-page">
      <div className="projects-header">
        <h1 className="projects-title">&lt;/design&gt;</h1>
        <p className="projects-subtitle">
          My design projects. Links lead to details and prototypes.
        </p>
      </div>

      <div className="projects-grid">
        {designProjects.map((project) => (
          <article className="project-card" key={project.title}>
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            ) : null}

            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {project.tags && project.tags.length ? (
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={`${project.title}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}

              {project.links && project.links.length ? (
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      className="project-link"
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      key={`${project.title}-${link.label}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Design;
