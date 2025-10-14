import React from 'react';
import { motion} from 'framer-motion';
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
          <p className="intro">I’m Jovana Paprić.</p>
          <p className = "intro">
            Motivated engineering student with a solid foundation in software
            development and design, with strong skills in time management and
            collaborative teamwork.
          </p>
        </div>
      </div>

      <motion.a
        href={cv}
        download
        className="cv-btn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Download CV
      </motion.a>
    </div>
    </>
  );
};

export default Home;
