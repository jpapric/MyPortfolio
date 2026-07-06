import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Work.css';

const Work = () => {
  return (
    <div className="work container">
      <header className="page-header">
        <h1 className="page-title">Selected Work</h1>
        <p className="page-subtitle">
          Two sides of what I do - engineering and design. Pick a track to
          explore the projects.
        </p>
      </header>

      <div className="work-grid">
        <Link className="work-card" to="/code">
          <span className="work-card-tag">Development</span>
          <h2 className="work-card-title">&lt;/code&gt;</h2>
          <p className="work-card-text">
            Web, desktop and mobile apps built with React, .NET, Kotlin and more.
          </p>
          <span className="work-card-cta">Explore code →</span>
        </Link>

        <Link className="work-card design" to="/design">
          <span className="work-card-tag">Design</span>
          <h2 className="work-card-title">&lt;/design&gt;</h2>
          <p className="work-card-text">
            UI/UX concepts and interactive prototypes crafted in Figma.
          </p>
          <span className="work-card-cta">Explore design →</span>
        </Link>
      </div>
    </div>
  );
};

export default Work;
