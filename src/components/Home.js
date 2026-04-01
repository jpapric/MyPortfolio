import React from 'react';
import { motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import mePicture from '../images/undraw_focused_m9bj.svg';
import '../css/Home.css';
import cv from '../images/PapricJovanaCV.pdf';

const Home = () => {
  return (
    <>
      <div className="home-container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="hero-title"
      >
        Hello World!
      </motion.h1>

      <div className="hero-content">
        <img
          src={mePicture}
          alt="Me"
          className="hero-image"
        />
        <div className="hero-text">
          <p className="intro">I'm Jovana.</p>
          <p className = "intro">
            I blend software engineering and design to turn complex ideas into
            simple, useful products.
          </p>
          <p className="intro">
            Curious, detail-oriented, and always improving the craft.
          </p>
          <div className="hero-badges">
            <span className="badge">C</span>
            <span className="badge">C#</span>
            <span className="badge">JavaScript</span>
            <span className="badge">HTML</span>
            <span className="badge">CSS</span>
            <span className="badge">React</span>
            <span className="badge">SQL</span>
            <span className="badge">Kotlin</span>
            <span className="badge">UI/UX</span>
            <span className="badge">Figma</span>
          </div>
        </div>
      </div>

      <motion.div
        className="home-actions"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a href={cv} download className="cv-btn">
          Download CV
        </a>
        <Link to="/work" className="ghost-btn">
          View Work
        </Link>
      </motion.div>
    </div>
    </>
  );
};

export default Home;
