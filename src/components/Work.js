
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Work.css';

const Work = () => {
  return (
    <>
      <div className="work-container">
        <div className="work-grid">
          <Link className="work-card code-card" to="/code">
            <p className="card-text">
              &lt;/code&gt;
            </p>
          </Link>

          <Link className="work-card design-card" to="/design">
            <p className="card-text">&lt;/design&gt;</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Work;
