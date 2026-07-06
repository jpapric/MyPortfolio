import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import mePicture from '../images/undraw_focused_m9bj.svg';
import '../css/Home.css';
import cv from '../images/CVPapric.pdf';

const skills = [
  'C', 'C#', 'JavaScript', 'React', 'HTML', 'CSS',
  'SQL', 'Kotlin', 'UI/UX', 'Figma',
];

const Home = () => {
  return (
    <div className="home container">
      <div className="hero">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="eyebrow">Software Engineer - Student</p>
          <h1 className="hero-title">
            Hi, I'm Jovana.
          </h1>
          <p className="hero-lead">
            I blend software engineering and design to turn complex ideas into
            simple, useful products - curious, detail-oriented, and always
            improving the craft.
          </p>

          <div className="home-actions">
            <a href={cv} download className="btn btn-primary">
              Download CV
            </a>
            <Link to="/work" className="btn btn-ghost">
              View Work
            </Link>
          </div>

          <div className="skills">
            {skills.map((skill) => (
              <span className="skill" key={skill}>{skill}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-media"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          <img src={mePicture} alt="Illustration of a focused developer" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
