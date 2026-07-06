import React from "react";
import "../css/Projects.css";

const ProjectsPage = ({ variant, eyebrow, title, subtitle, projects }) => {
  return (
    <div className={`projects container ${variant}`}>
      <header className="page-header">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        <p className="page-subtitle">{subtitle}</p>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            {project.image ? (
              <div className="project-media">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>
            ) : null}

            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {project.tags?.length ? (
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={`${project.title}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}

              {project.links?.length ? (
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      className="project-link"
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      key={`${project.title}-${link.label}`}
                    >
                      {link.label} ↗
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

export default ProjectsPage;
